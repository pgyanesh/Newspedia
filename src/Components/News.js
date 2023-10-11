import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
//import {Routes} from "react-router-dom"
import replacement from './replacement.jpg'
import InfiniteScroll from "react-infinite-scroll-component";



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
     capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
   
    constructor(props){
        super(props);
        this.state ={
        articles : [],
        loading : false,
        page:1,
        totalResults :0
    }
        document.title=`Newspedia - ${this.capitalizeFirstLetter(this.props.category)}`
        }

    async updateNews(){
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parseddata = await data.json()
        this.setState({articles : parseddata.articles,
             totalResults : parseddata.totalResults,
             loading:false
            })
            this.props.setProgress(100)
        
    }

    async componentDidMount(){
       this.updateNews();
    }

    fetchMoreData = async() => {
        this.setState({
            page: this.state.page + 1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parseddata = await data.json()
        this.setState({
            articles : this.state.articles.concat(parseddata.articles),
             totalResults : parseddata.totalResults,
             loading:false
            })
        
      };


    
  render() {
    return (
        
    <div className="container my-3">
      
        <h1 className="text-center" style={{margin : '40px'}}>Newspedia - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
            <div className="row my-3">
        {this.state.articles.map((Element)=>{ 
            return <div className='col-md-4' key={Element.publishedAt} >
            <NewsItem title = {Element.title?Element.title.slice(0, 40):""} description= {Element.description?Element.description.slice(0, 88):""} imageUrl= {Element.urlToImage?Element.urlToImage:replacement}  newsUrl={Element.url} date={Element.publishedAt}/>
        </div>
        
        
        })}        
        </div>
        </InfiniteScroll>
        
       
        </div>


      
    )
  }
}
