import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageURL, newsURL, author, publishedAt, source} = this.props
    return (
      <div className='my-3'>
      <div className="card">
        <img src={imageURL} className='card-img-top' alt='...'/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5><span class="badge badge-info">{source}</span>
            <p class="card-text"><small className="text-muted">By: {author} On: {new Date(publishedAt).toDateString()}</small></p>
            <p className="card-text">{description}</p>
            <a href={newsURL} className="btn-sm btn-primary card-link">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem