import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import PokeService from './js/poke-service.js'

function showPokemon(response) {
  if (response) {
    console.log(response)
    $('#poke-results').text(`${response.name}`)
  }
}

$(document).ready(function() {
  $('#poke').submit(function(event) {
    event.preventDefault();
    let pokemon = $('#pokemon').val();
    PokeService.getPokemon(pokemon)
    console.log(pokemon)
      .then(function(response) {
        showPokemon(response);
      });
  });
});