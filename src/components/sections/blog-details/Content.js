import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getBlog } from '../../../helper/Bloghelper';
import { postnavigation } from '../../../helper/helper';
import Sidebar from '../../layouts/Blogsidebar';
import author from '../../../data/author.json';
import blogpost from '../../../data/blog.json';
import blogcategory from '../../../data/blogcategory.json';
import blogtags from '../../../data/blogtags.json';
import Relatedpost from '../../layouts/Relatedpost';

class Content extends Component {
    render() {
        const blogId = this.props.blogId;
        const item = getBlog(blogId);
        return (
            <section className="blog-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Blog Loop Start */}
                        <div className="col-lg-8">
                            <div className="blog-details-box">
                                <div className="entry-content">
                                    {item.categories.map((category) => (
                                        blogcategory.filter(item => {
                                            return item.id === category
                                        }).map((category, i) => (
                                            <Link to={"/blog/cat/" + category.id} key={i} className="cat">{category.title}</Link>
                                        ))
                                    ))}
                                    <h2 className="title">{item.title}</h2>
                                    <ul className="post-meta">
                                        {item.author.map((user) => (
                                            author.filter(item => {
                                                return item.id === user
                                            }).map((name, i) => (
                                                <li key={i}><Link to={"/blog/user/" + name.id}><i className="far fa-user" />by {name.name}</Link></li>
                                            ))
                                        ))}
                                        <li><Link to="#"><i className="far fa-calendar-alt" />{item.postdate}</Link></li>
                                        {
                                            item.reviews > 0 || item.reviews !== '' ? <li><Link to="#"><i className="far fa-comments" />{item.reviews.length} Comments</Link></li> : ''
                                        }
                                    </ul>
                                    <div dangerouslySetInnerHTML={{ __html: item.longdescription }}></div>
                                </div>
                                <div className="entry-footer">
                                    <div className="tag-and-share mt-50 mb-50 d-md-flex align-items-center justify-content-between">
                                        <div className="tag">
                                            <h5>Temas Relacionados</h5>
                                            <ul>
                                                {item.tags.map((tag) => (
                                                    blogtags.filter(item => {
                                                        return item.id === tag
                                                    }).map((tags, i) => (
                                                        <li key={i}><Link to={"/blog/tag/" + tags.id}>{tags.title}</Link></li>
                                                    ))
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="share text-md-right">
                                            <h5>Comparte en las Redes</h5>
                                            <ul>
                                                {item.social.map((icon, i) => (
                                                    <li key={i}><a rel={'external'} href={icon.url}><i className={icon.icon} /></a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="post-nav d-md-flex align-items-center justify-content-between">
                                    {postnavigation(blogpost, blogpost.findIndex( item => parseInt(item.id) === parseInt(blogId) ) )}
                                    </div>


                                </div>
                                
                            </div>
                        </div>
                        {/* Blog Sidebar */}
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <div className="sidebar">
                                {/* About Author Widget */}
                                {item.author.map((user) => (
                                    author.filter(item => {
                                        return item.id === user
                                    }).map((author, i) => (
                                        <div key={i} className="widget about-author-widget mb-40">
                                            <h5 className="widget-title">About Me</h5>
                                            <div className="author-box">
                                                <img src={process.env.PUBLIC_URL + "/" + author.img} alt={author.name} />
                                                <h6>{author.name}</h6>
                                                <p>{author.shortdescription}</p>
                                                <ul className="social-icon">
                                                    {author.social.map((icon, i) => (
                                                        <li key={i}><a rel={'external'} href={icon.url}><i className={icon.icon} /></a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))
                                ))}
                            </div>
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(Content);