import React from "react";
import "./card.css";

function Card(props) {
    // const { name, universe, alterEgo, occupation, friends, superpowers, src, description } = this.props;
    const { data } = props;
    // const data = props.data;
    console.log(data);
    return (
        <div className="card">
            <div className="card__top">
                <div className="inf">
                    <h2>{data.name}</h2>
                    <div>
                        <span className="card__title">Вселенная:</span> <span className="card__info">{data.universe}</span>
                    </div>
                    <div>
                        <span className="card__title">Альтер Эго:</span> <p className="card__info">{data.alterEgo}</p>
                    </div>
                    <div>
                        <span className="card__title">Род деятельности:</span> <span className="card__info">{data.occupation}</span>
                    </div>
                    <div>
                        <span className="card__title">Друзья:</span> <span className="card__info">{data.friends}</span>
                    </div>
                    <div>
                        <span className="card__title">Суперсилы:</span> <span className="card__info">{data.superpowers}</span>
                    </div>
                </div>
                <div className="pic">
                    <img src={data.src} alt={data.name} className="card__image" />
                </div>
            </div>
            <div>
                <span className="card__title">Подробнее:</span> <span className="card__info">{data.description}</span>
            </div>
        </div>
    );
}

export default Card;
