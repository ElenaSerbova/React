import React from 'react';
import { Link } from 'react-router-dom';

export default class ArticleItem extends React.Component {

    render() {
        


        let deleteBlock;
        if (this.props.isLogged) {
            deleteBlock =
                <a className="link" href="#">Удалить запись</a>;
        }

        return (
            <div className="post">
                <div className="header">                
                    <Link className="link" to={"/Article/{this.props.data.postId}"}>{this.props.data.header}</Link>
                </div>
                <div className="content">
                    <div>
                        {this.props.data.body}
                    </div>
                    <div className="footer">                        
                        <div className="actionBlock">
                            <div className="deleteBlock">
                                {deleteBlock}
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};