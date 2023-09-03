import React from 'react'

 function HeroName(props) {
 if (props.superhero === 'Joker') {
    throw new Error("Joker not a hero")
 }
 return <h1>{props.superhero}</h1>
}
export default HeroName