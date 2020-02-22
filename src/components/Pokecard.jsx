import React, { Component } from "react";

//const imageSrc =
//  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
  render() {
    const imageSrcSec =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
    const { name, type, exp, id } = this.props;
    const idExt = num => {
      num = `00${id}`.slice(-3);
      return num;
    };
    //const exten = ext => {
    //  ext = `${id}`.padStart(3, "0");
    //  return ext;
    //};

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
