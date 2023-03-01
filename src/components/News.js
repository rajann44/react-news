import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "news-com-au",
                "name": "News.com.au"
            },
            "author": null,
            "title": "Cricket erupts over ‘absolutely shocking’ act",
            "description": "<p>Brendon McCullum has promised England will keep faith with their attacking game during the Ashes despite Tuesday&rsquo;s extraordinary one-run loss to New Zealand in Wellington.</p>",
            "url": "https://www.news.com.au/sport/cricket/absolutely-shocking-englands-joe-root-torched-for-alltime-bbq-in-test-thriller/news-story/ca24cf78c7f7aa000b04533eccdd92d2",
            "urlToImage": "https://content.api.news/v3/images/bin/6de7445deba9e5c5c25a376ce3e171f0",
            "publishedAt": "2023-02-28T20:31:00Z",
            "content": "Brendon McCullum has promised England will keep faith with their attacking game during the Ashes despite Tuesday’s extraordinary one-run loss to New Zealand in Wellington.\r\nThe hosts levelled a two-m… [+3403 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "After the Bash at the Basin, bring on the Ashes",
            "description": "Even in defeat, England threw another party in honour of Test cricket in Wellington - now the Ashes countdown is on, writes Stephan Shemilt.",
            "url": "http://www.bbc.co.uk/sport/cricket/64776695",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/CE13/production/_128755725_brendonmccullumandbenstokes.jpg",
            "publishedAt": "2023-02-28T12:37:22.6536703Z",
            "content": "New Zealand's win over England was only the fourth Test won by a team asked to follow-on\r\nThere are facts and there are feelings.\r\nThe bare facts are that England lost the second Test to New Zealand … [+6192 chars]"
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
        super()
        this.state = {
            articles: this.articles,
            loading: false
        }
    }


  render() {
    return (
      <div className='container my-4' >
        <h2>News by React top headlines</h2>
        <div className='row'>
        <div className='col-md-4'>
        <NewsItem title="Title-1" description="Desc-1" imageURL="https://content.api.news/v3/images/bin/6de7445deba9e5c5c25a376ce3e171f0"/>
        </div>
        <div className='col-md-4'>
        <NewsItem title="Title-1" description="Desc-1"/>
        </div>
        <div className='col-md-4'>
        <NewsItem title="Title-1" description="Desc-1"/>
        </div>
        </div>
      </div>
    )
  }
}

export default News