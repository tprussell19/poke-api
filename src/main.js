import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import PokeService from './js/poke-service.js'

function showPokemon(response) {
  if (response) {
    const sprite = response.sprites.front_default;
    $('.row').show();
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
    $('.error').hide();
  } else {
    $('.error').show();
    $('.error').html(`There was an error processing your request`);
    $('.row').hide();
  }
}


let verticalCounter = 0;
let horizontalCounter = 0;

$(document).ready(function() {

  
  $('#up').click(function(){
    verticalCounter -= 5;
    $('#pokemon-img').css("margin-top", (verticalCounter.toString() + "px"));
  });

  $('#down').click(function(){
    verticalCounter += 5;
    $('#pokemon-img').css("margin-top", (verticalCounter.toString() + "px"));
  });
  
  $('#right').click(function(){
    horizontalCounter += 5;
    $('#pokemon-img').css("margin-left", (horizontalCounter.toString() + "px"));
  });

  $('#left').click(function(){
    horizontalCounter -= 5;
    $('#pokemon-img').css("margin-left", (horizontalCounter.toString() + "px"));
  });

  $('#poke').submit(function(event) {
    event.preventDefault();
    verticalCounter = 0;
    horizontalCounter = 0;
    $('#pokemon-img').css("margin-top", "0px");
    $('#pokemon-img').css("margin-left", "0px");
    let pokemon = $('#pokemon').val();
    $('#pokemon').val("");
    $('#executed-move').html("");
    $('#buttons').show();

    PokeService.getPokemon(pokemon)
      .then(function(response) {
        showPokemon(response);
    });
  });
});