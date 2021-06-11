using BlogWebApiNew.Helpers;
using BlogWebApiNew.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace BlogWebApiNew.Controllers
{
    public class IdentityController : Controller
    {

		private readonly BlogDbContext _context;

        public IdentityController(BlogDbContext context)
		{
			_context = context;

			if(_context.Users.Count() == 0)
            {

				var sha256 = new SHA256Managed();
				var passwordHash = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes("qqq")));

				_context.Users.Add(new Model.User { 
					Login = "qqq", 
					Password = passwordHash, 
					Role = "admin" 
				});
				_context.SaveChanges();
            }

		}


		[Route("token")]
		[HttpPost]
		public async Task<IActionResult> Token([FromBody] User user)
		{
			var claims = await GetIdentity(user.Login, user.Password);
			if (claims == null)
			{
				return Unauthorized();
			}

			var now = DateTime.UtcNow;
			var jwt = new JwtSecurityToken(
					issuer: AuthOptions.ISSUER,
					audience: AuthOptions.AUDIENCE,
					notBefore: now,
					claims: claims,
					expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
					signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
			
			var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

			return Json(encodedJwt);
		}

		private async Task<IReadOnlyCollection<Claim>> GetIdentity(string login, string password)
		{
			List<Claim> claims = null;

			var user = await _context.Users.FirstOrDefaultAsync(u => u.Login == login);

			if (user != null)
			{
				var sha256 = new SHA256Managed();
				var passwordHash = Convert.ToBase64String(sha256.ComputeHash(Encoding.UTF8.GetBytes(password)));
				
				if (passwordHash == user.Password)
				{
					claims = new List<Claim>
					{
						new Claim(ClaimsIdentity.DefaultNameClaimType, user.Login),
						new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role)
					};
				}
			}
			
			return claims;
		}
	}
}
