import React from 'react'
import {Link} from "react-router-dom"
import blog1 from '../images/blog-1.jpg'

const BlogCarda = () => {
  return (
    <div className="col-3">
        <div className="blog-card">
            <div className="card-image">
                <img src={blog1} className='img-fluid' alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">1 Dec, 2022</p>
                <h5 className="title">A Beautiful sunday morning</h5>
                <p className="desc">
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Rem iusto ex aut quo nobis iure officiis 
                sequi!
                </p>
                <Link to='/' className="button">Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCarda