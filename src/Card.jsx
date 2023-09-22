import './App.css';
import React from 'react';

export default function Card(props){
  return (
    <div className="cardContainer">
      <img className='cardImg'src={props.image}></img>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <a href={props.link}><button className='cardButton'>Online Shop</button></a>
      <p>{props.numLikes} Likes</p>
    </div>
  )
}