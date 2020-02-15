import React, { Component } from "react";

import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    cards: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };
  render() {
    const Pokedex1 = [...this.props.cards];
    const Pokedex2 = [];
    while (Pokedex1.length > Pokedex2.length) {
      let idx = Math.floor(Math.random() * Pokedex1.length);
      let pokemon = Pokedex1.splice(idx, 1)[0];
      Pokedex2.push(pokemon);
    }
    const Pokedex1Total = Pokedex1.map(exp => {
      return exp.base_experience;
    });
    const Pokedex2Total = Pokedex2.map(exp => {
      return exp.base_experience;
    });

    let pokedexSum1 = Pokedex1Total.reduce((a, b) => a + b, 0);
    let pokedexSum2 = Pokedex2Total.reduce((a, b) => a + b, 0);

    return (
      <div>
        <h1>POKEDEX</h1>
        <div>
          <h6>POKEDEX 1</h6>
          <h6>Total exp = {pokedexSum1}</h6>
          <h6>{pokedexSum1 > pokedexSum2 ? "WINNER!!!" : "LOSER!"}</h6>
          <Pokedex pokedex={Pokedex1} />
        </div>
        <div>
          <h6>POKEDEX 2</h6>
          <h6>Total exp = {pokedexSum2}</h6>
          <h6>{pokedexSum2 > pokedexSum1 ? "WINNER!!!" : "LOSER!"}</h6>
          <Pokedex pokedex={Pokedex2} />
        </div>
      </div>
    );
  }
}

export default Pokegame;
