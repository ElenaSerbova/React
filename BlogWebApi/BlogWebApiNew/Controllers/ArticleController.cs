using BlogWebApiNew.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogWebApiNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : Controller
    {
        private readonly BlogDbContext _context;

        public ArticleController(BlogDbContext context)
        {
            _context = context;

            if (_context.Articles.Count() == 0)
            {
                _context.Articles.Add(new Article
                {
                    Id = 1,
                    Title = "ASP.NET",
                    Text = "ASP.NET — платформа разработки веб - приложений, в состав которой входит: веб - сервисы, программная инфраструктура, модель программирования, от компании Майкрософт",
                });

                _context.Articles.Add(new Article
                {
                    Id = 2,
                    Title = "Angular",
                    Text = "Angular — это открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript, разрабатываемая командой из компании Google.",                   
                });

                _context.Articles.Add(new Article
                {
                    Id = 3,
                    Title = "React",
                    Text = "JavaScript-библиотека для создания пользовательских интерфейсов",                    
                });

                _context.Articles.Add(new Article
                {
                    Id = 4,
                    Title = "NodeJs",
                    Text = "Node или Node.js — программная платформа, основанная на движке V8, превращающая JavaScript из узкоспециализированного языка в язык общего назначения.",                    
                });

                _context.SaveChanges();
            }
        }

        [HttpGet]
        public async Task< ActionResult<IEnumerable<Article>>> GetArticles()
        {  
            return await _context.Articles.ToListAsync();
        }
    }
}
