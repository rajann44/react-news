import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = []

    constructor(){
        super()
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/everything?q=apple&from=2023-03-01&to=2023-03-01&sortBy=popularity&apiKey=5240ee568e1d4b5cbc1c12177ac5f84c&pageSize=6&page=1";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({articles:parsedData.articles})
    }

    handlePrevious = async ()=>{
        console.log("Handle Previous")
        let url = `https://newsapi.org/v2/everything?q=apple&from=2023-03-01&to=2023-03-01&sortBy=popularity&apiKey=5240ee568e1d4b5cbc1c12177ac5f84c&pageSize=6&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })  
    }

    handleNext = async ()=>{
        console.log("Handle Next")
        let url = `https://newsapi.org/v2/everything?q=apple&from=2023-03-01&to=2023-03-01&sortBy=popularity&apiKey=5240ee568e1d4b5cbc1c12177ac5f84c&pageSize=6&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })  
    }


  render() {
    return (
      <div className='container my-4' >
        <h2>News by React top headlines</h2>
        
        <div className='row'>
        {this.state.articles.map((element)=>{
                    return <div className='col-md-4' key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 80):""} imageURL={element.urlToImage} newsURL={element.url}/>
                    </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>Dark</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNext}>Dark</button>
        </div>
      </div>
    )
  }
}

export default News