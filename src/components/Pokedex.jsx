import React, { Component } from "react";

import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    const { pokedex } = this.props;
    return (
      <div className="Pokedex-cards">
        {pokedex.map((item, index) => {
          return (
            <Pokecard
              key={index}
              name={item.name}
              type={item.type}
              exp={item.base_experience}
              id={item.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Pokedex;
