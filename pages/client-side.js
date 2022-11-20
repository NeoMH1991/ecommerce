import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon";

function ClientSide() {
  //State here
  const [pokemon, setPokemon] = useState([]);
  //Data fetching here
  useEffect(() => {
    const fetchData = async () => {
      const dataFetched = await axios.get(url);

      const promises = dataFetched.data.results.map((result) => {
        return axios.get(result.url);
      });
      const responses = await Promise.all(promises);

      const nameImgData = responses.map((response) => {
        return {
          name: response.data.name,
          img: response.data.sprites.back_default,
        };
      });
      console.log(nameImgData);
      setPokemon(nameImgData);
    };
    fetchData();
  }, []);

  //html here
  return (
    <div className="clientSideCss">
      {pokemon.map((poke) => [
        <div key={poke.name}>
          <img src={poke.img} alt="" />
          <p>{poke.name}</p>
          <hr />
        </div>,
      ])}
    </div>
  );
}

export default ClientSide;
