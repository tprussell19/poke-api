import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import PokeService from './js/poke-service.js'

function showPokemon(response) {
  if (response) {
    const sprite = response.sprites.front_default;
    console.log(sprite)
    $('#poke-results').text(response.name);
    $('#pokemon-img').html(`<img src="${sprite}">`);
    // weight
    // heigth
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