import React from 'react'

const NewsItem =(props)=>{
  
    let {title, description, imageUrl, newsUrl, date} = props
    return (
      <div className='my-3'>
       <div className="card" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
            <div className="card-footer text-body-secondary my-3">
             Published on {new Date(date).toGMTString()}
            </div>
        </div>
      </div>
      </div>
    )
  
}
export default NewsItem