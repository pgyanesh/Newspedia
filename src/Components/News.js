import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
   
    constructor(){
        super();
        this.state ={
        articles : [],
        loading : false,
        page:1
    }}

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3a31e56bda25411088adec10d27b3129&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parseddata = await data.json()
        this.setState({articles : parseddata.articles, totalResults : parseddata.totalResults})
    }

    handlePrevkey=async()=>{
        console.log("Prev")
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3a31e56bda25411088adec10d27b3129&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parseddata = await data.json()
        this.setState({
            page : this.state.page-1,
            articles : parseddata.articles
        })
    }
    handleNextkey=async()=>{
        console.log("Next")
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3a31e56bda25411088adec10d27b3129&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parseddata = await data.json()
        this.setState({
            page : this.state.page+1,
            articles : parseddata.articles
        })

}


    
  render() {
    return (
        
    <div className="container my-3">
      <div className="row my-3">
        <h1 className="text-center">Newspedia - Top Headlines</h1>
        {this.state.articles.map((Element)=>{ 
            return <div className='col-md-4' key={Element.url} >
            <NewsItem title = {Element.title?Element.title.slice(0, 40):""} description= {Element.description?Element.description.slice(0, 88):""} imageUrl= {Element.urlToImage}  newsUrl={Element.url}/>
        </div>
     
        
        })}        
        
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} onClick={this.handlePrevkey} type="button"  className="btn btn-dark">&larr;Previous</button>
        <button disabled={(this.state.page+1) > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button"  onClick={this.handleNextkey} className="btn btn-dark">Next&rarr;</button>
        </div>
        </div>


      
    )
  }
}
