import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blog from '../../data/blog.json'
import blogcategory from '../../data/blogcategory.json'
import blogtags from '../../data/blogtags.json'
import instagram from '../../data/instagram.json'
import twitterpost from '../../data/twitterpost.json'

function setCategoriesCount(){
  for(let i = 0; i < blogcategory.length; i++){
    var count = blog.filter( post => { return post.categories.includes( parseInt( blogcategory[i].id ) ) } );
    count = count.length;
    blogcategory[i].count = count;
  }
}
setCategoriesCount();

class Blogsidebar extends Component {
  render() {
    return (
      <div className="sidebar">

        {/* Popular Post Widget */}
        <div className="widget popular-feeds mb-40">
          <h5 className="widget-title">Articulos Destacados</h5>
          <div className="popular-feed-loop">
            {blog.slice(0, 4).map((item, i) => (
              <div key={i} className="single-popular-feed">
                <div className="feed-img">
                  <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                </div>
                <div className="feed-desc">
                  <h6><Link to={"/blog-details/" + item.id}>{item.title.slice(0, 37)}</Link></h6>
                  <span className="time"><i className="far fa-calendar-alt" /> {item.postdate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Search Widget */}
        <div className="widget search-widget mb-40">
          <h5 className="widget-title">Busqueda</h5>
          <form>
            <input type="text" placeholder="Search your keyword..." />
            <button type="submit"><i className="far fa-search" /></button>
          </form>
        </div>
        {/* Categories Widget */}
        <div className="widget categories-widget mb-40">
          <h5 className="widget-title">Categorias</h5>
          <ul>
            {blogcategory.map((item, i) => (
              <li key={i}>
                <Link to={"/blog/cat/" + item.id}>{item.title}<span>{item.count}</span></Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Popular Tags Widget */}
        <div className="widget popular-tag-widget mb-40">
          <h5 className="widget-title">Temas Populares</h5>
          <ul>
            {blogtags.map((item, i) => (
              <li key={i}>
                <Link to={"/blog/tag/" + item.id}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Banner Ad Widget */}
        <div className="widget banner-ad-widget">
          <img src={process.env.PUBLIC_URL + "/assets/img/banner-widget.jpg"} alt="img" />
        </div>
      </div>
    );
  }
}

export default Blogsidebar;