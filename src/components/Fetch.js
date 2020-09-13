const Fetch = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  function fetchPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setPokemonList(data.results);
      });
  }
  return (
    // fetch data from API
    <div>
      <button className="fetch-button" onClick={fetchPokemon}>
        Catch 'Em All❗❗
      </button>
      <div>
        {pokemonList.map((pokemon, index) => {
            return <div key={index}>{pokemon.name}</div>;
        })}
      </div>
        </div>
};
};
export default Fetch;
