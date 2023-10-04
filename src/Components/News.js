import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "sport",
            "title": "Death or glory? Cricket World Cup anchors changing game of one-day cricket",
            "description": "The World Cup which gets underway on Thursday will provide a sharp focus for one-day international cricket and a chance to show how the 50-over game has evolved since India last staged the tournament in 2011.",
            "url": "https://www.news24.com/sport/cricket/death-or-glory-cricket-world-cup-anchors-changing-game-of-one-day-cricket-20231003",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3995/1f284a8e03ab41c4b8f7ce49ae6b60c1.jpg",
            "publishedAt": "2023-10-03T07:36:16",
            "content": "<ul><li>The 2023 Cricket World Cup starts in India on Thursday.</li><li>The 50-over game is struggling for popularity in a sport dominated by T20 cricket. </li><li>India great Sachin Tendulkar says t… [+3790 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "'Cricket's carbon footprint brings opportunity'",
            "description": "Australia captain Pat Cummins discusses his foundation, and the sport's opportunity to lead the way on tackling climate change.",
            "url": "http://www.bbc.co.uk/sport/cricket/66961332",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/A454/production/_131286024_p0ghgmh1.jpg",
            "publishedAt": "2023-10-03T06:37:21.0918741Z",
            "content": "Cummins wins BBC Green Sport Athlete of the Year\r\nCricket can use its platform to make a difference in combatting climate change despite its \"huge\" carbon footprint, says Australia captain Pat Cummin… [+3865 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera Staff",
            "title": "Five big names missing out on the 2023 ICC Cricket World Cup",
            "description": "Some of the world’s leading cricketers are set to miss the tournament due to injury, drama and in some cases, both.",
            "url": "http://www.aljazeera.com/sports/2023/10/3/five-big-names-missing-out-2023-icc-cricket-world-cup",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/AP18023402304587-1695799826.jpg?resize=1920%2C1440",
            "publishedAt": "2023-10-03T05:12:23Z",
            "content": "For professional athletes, representing their country in a global sporting event is usually their driving ambition and winning it is the crowning glory of their careers.\r\nFor most cricketers, the one… [+5360 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Cricket World Cup 2023 predictions: Can you guess who will win in India?",
            "description": "India is set to host the ICC Men’s Cricket World Cup from October 5 to November 19, 2023.",
            "url": "https://interactive.aljazeera.com/aje/2023/2023-cricket-world-cup-predictor/?utm_source=aljazeera.com&amp;utm_medium=website&amp;utm_campaign=ucms",
            "urlToImage": "https://interactive.aljazeera.com/aje/2023/2023-cricket-world-cup-predictor/thumbnail-image.jpg",
            "publishedAt": "2023-09-28T07:00:56Z",
            "content": "The first Cricket World Cup took place in England in 1975 and was won by the West Indies.\r\nAustralia have been the most successful team at the World Cup, clinching five of the 12 championships.\r\nIndi… [+115 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor(){
        super();
        this.state ={
        articles : this.articles,
        loading : false
    }}
  render() {
    return (
        
    <div className="container my-3">
      <div className="row my-3">
        <h3>Newspedia - Top Headlines</h3>
        {this.state.articles.map((Element)=>{ 
            return <div className='col-md-4' key={Element.url} >
            <NewsItem title = {Element.title.slice(0, 40)} description= {Element.description.slice(0, 88)} imageUrl= {Element.urlToImage}  newsUrl={Element.url}/>
        </div>
        })}        
        
        </div>
        </div>


      
    )
  }
}
