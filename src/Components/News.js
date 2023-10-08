import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
       country : 'in',
       pageSize : 6,
       category : 'general',
    }
    static propTypes ={
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string, 
    } 
   
    constructor(){
        super();
        this.state ={
        articles : [],
        loading : false,
        page:1
    }}

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a31e56bda25411088adec10d27b3129&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parseddata = await data.json()
        this.setState({articles : parseddata.articles,
             totalResults : parseddata.totalResults,
             loading:false
            })
    }

    handlePrevkey=async()=>{
        console.log("Prev")
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a31e56bda25411088adec10d27b3129&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parseddata = await data.json()
        this.setState({
            page : this.state.page-1,
            articles : parseddata.articles,
            loading : false
        })
    }
    handleNextkey=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a31e56bda25411088adec10d27b3129&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parseddata = await data.json()
        this.setState({
            page : this.state.page+1,
            articles : parseddata.articles,
            loading : false
        })

}


    
  render() {
    return (
        
    <div className="container my-3">
      <div className="row my-3">
        <h1 className="text-center" style={{margin : '40px'}}>Newspedia - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        {!this.state.loading && this.state.articles.map((Element)=>{ 
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
