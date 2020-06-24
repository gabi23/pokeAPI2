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

  APIgenerationURL = "https://pokeapi.co/api/v2/generation";
  constructor() { }

  getGenerations(): Promise<Generation[]>{
    return axios.get(this.APIgenerationURL)
      .then(response => response.data.results);
  }

  getGenerationByID(id: string): Promise<Generation[]>{
    return axios.get(`${ this.APIgenerationURL}/${id}`)
      .then(response => response.data.pokemon_species);
  }

}
