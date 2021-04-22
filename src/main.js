import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import PokeService from './js/poke-service.js'

function showPokemon(response) {
  if (response) {
    const sprite = response.sprites.front_default;
    console.log(sprite)
    $('#poke-results').html(`<li>${response.name}</li> <li>${response.height}</li> 
    <li>${response.weight}</li> <li>${response.stats[0].base_stat}</li>`);
  
      for(let i = 0; i < response.types.length; i++){
      $('#poke-results').append(`<li>${response.types[i].type.name}</li>`);
      }
    


    
    

    $('#pokemon-img').html(`<img src="${sprite}">`);
    // weight
    // height
    // random move -- maybe
    // health
    // type
    // evolution tree
    // weaknesses
    // strengths
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