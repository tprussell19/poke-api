export default class PokeService {
  static getPokemon(pokemon) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        console.log(error);
      })

  }
}