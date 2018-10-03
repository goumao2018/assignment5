import React, {Component} from 'react';

class Cards extends Component {
    render(){
        const cards = this.props.articles;
        const cardlist = cards.map((card) => {
            return(
                <div>
                <img src={card.urlToImage} height= "150" width= "250" display="inline-block"/>
                <p>{card.author} / {card.source.name}</p>
                <p>{card.description}</p>
                </div>
            )
        })
        return (
    <div>{cardlist}</div>
        )
    
    }
}

        
export default Cards