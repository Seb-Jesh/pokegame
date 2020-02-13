import React, { Component } from "react";

//const imageSrc =
//  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const imageSrcSec =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {
  render() {
    const { name, type, exp, id } = this.props;
    const idExt = num => {
      num < 100 ? (num = `00${id}`.slice(-3)) : (num = id);
      return num;
    };
    return (
      <div className="pokecard">
        <h3 className="Pokecard-name">{name}</h3>
        <img src={`${imageSrcSec}${idExt(id)}.png`} alt={name}></img>
        <h4>Type: {type}</h4>
        <h5>Exp: {exp}</h5>
      </div>
    );
  }
}

export default Pokecard;
