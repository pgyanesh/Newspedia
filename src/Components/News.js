import React, { useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
//import {Routes} from "react-router-dom"
import replacement from './replacement.jpg'
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from 'react';



const News =(props)=> {
  const[articles, setArticles] = useState([])
  const[loading, setLoading] = useState(false)
  const[page, setPage] = useState(1)
  const[totalResults, setTotalResults] = useState(0)
 
  
  



     const capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
   
   

    const  updateNews =async()=>{
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}`
        setLoading(true)
        let data = await fetch(url);
        let parseddata = await data.json()
        setArticles(parseddata.articles)
        setLoading(false)
        setTotalResults(parseddata.totalResults)
            props.setProgress(100)
        
    }
    useEffect(()=>{
        document.title=`Newspedia - ${capitalizeFirstLetter(props.category)}`
        updateNews();
    },[])
    

    const fetchMoreData = async(props) => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}`
       setPage(page+1)
        setLoading(true)
        let data = await fetch(url);
        let parseddata = await data.json()
        setArticles(articles.concat(parseddata.articles))
        setTotalResults(parseddata.totalResults)
        setLoading(false)
        
        
      };


    
  
    return (
        
    <div className="container my-3">
      
        <h1 className="text-center" style={{margin : '40px', marginTop:'90px'}}>Newspedia - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
            <div className="row my-3">
        {articles.map((Element)=>{ 
            return <div className='col-md-4' key={Element.publishedAt} >
            <NewsItem title = {Element.title?Element.title.slice(0, 40):""} description= {Element.description?Element.description.slice(0, 88):""} imageUrl= {Element.urlToImage?Element.urlToImage:replacement}  newsUrl={Element.url} date={Element.publishedAt}/>
        </div>
        
        
        })}        
        </div>
        </InfiniteScroll>
        
       
        </div>


      
    )
  
}
News.defaultProps = {
    country : 'in',
    pageSize : 6,
    category : 'general',
 }
 News.propTypes ={
     country : PropTypes.string,
     pageSize : PropTypes.number,
     category : PropTypes.string, 
 } 
 export default News