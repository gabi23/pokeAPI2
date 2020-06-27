import { Injectable } from '@angular/core';
import axios from 'axios';

export type Generation = {
  name: string,
  url: string
}

export type Pokemon = {
  id?: string,
  name: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  generationURL = "https://pokeapi.co/api/v2/generation";
  pokemonURL = "https://pokeapi.co/api/v2/pokemon";
  constructor() { }

  getGenerations(): Promise<Generation[]>{
    const generations = axios.get(this.generationURL)
                          .then(response => response.data.results)
                          .catch(error => console.log(error));
    return generations;
  }

  getGenerationByID(id: string): Promise<Generation[]>{
    const generation = axios.get(`${ this.generationURL}/${id}`)
                        .then(response => response.data.pokemon_species)
                        .catch(error => console.log(error));
    return generation;
  }

  getPokemonData(pokemonName: string): Promise<any[]>{
    const pokemonData = axios.get(`${ this.pokemonURL}/${pokemonName}`)
                          .then(response => response.data)
                          .catch(error => console.log(error));
    return pokemonData;
  }

}
