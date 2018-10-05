import React, { Component } from 'react';
import axios from 'axios';

class Cards extends Component {

    state = {
        articles: []
    }

    componentDidMount () {
        axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2018-09-04&sortBy=publishedAt&apiKey=96256a1397cd4326a81baa8e7fcbf724`)
        .then(res => {
            const oldArticles = this.props.articles
            const newArticles = res.data.articles
            const articles = oldArticles.concat(newArticles)
            this.setState({ articles })
        })
    }

    render() {
        if (this.state.articles === null) {
            return <div>loading ... </div>
        } else {
            const cards = this.state.articles;
            const cardlist = cards.map((card) => {
                return (
                    <div className ='post card'>
                    <div className ="card-content">
                    <div className="card-title" backgroundColor="grey">{card.title}</div>
                        <img src={card.urlToImage} height="150" width="250" display="inline-block" />
                        <p>{card.author} / {card.source.name}</p>
                        <p>{card.description}</p>
                    </div>
                    </div>

                )
            })
            return (
                <div>{cardlist}</div>
            )
        }

    }
}


export default Cards