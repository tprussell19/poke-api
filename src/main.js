import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import PokeService from './js/poke-service.js'

function showPokemon(response) {
  if (response) {
    const sprite = response.sprites.front_default;
    $('#poke-results').html(`<li>Name: ${response.name}</li> <li>Height: ${response.height} decimeters</li>
    <li>Weight: ${response.weight} hectograms</li> <li>HP: ${response.stats[0].base_stat}</li> <li>Attack: ${response.stats[1].base_stat}</li> <li>Defense: ${response.stats[2].base_stat}</li>`);
  
      for(let i = 0; i < response.types.length; i++){
      $('#poke-results').append(`<li>Types: ${response.types[i].type.name}</li>`);
      }

    $('#pokemon-img').html(`<img src="${sprite}">`);

    $('#random-move').show();
    $('#get-move').click(function() {
        let moveNumber = Math.floor(Math.random() * response.moves.length);
        $("#executed-move").html(`${response.name} used ${response.moves[moveNumber].move.name}!`)
    })
    // random move -- maybe
    // evolution tree
  }
}

$(document).ready(function() {
  $('#poke').submit(function(event) {
    event.preventDefault();
    let pokemon = $('#pokemon').val();
    PokeService.getPokemon(pokemon)
      .then(function(response) {
        showPokemon(response);
    });
  });
});