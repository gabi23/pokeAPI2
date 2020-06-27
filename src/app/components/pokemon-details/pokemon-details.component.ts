import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemonData: any;
  name: string = "";
  id: string = "";  
  height: string = "";
  weight: string = "";
  imageURL: string = "";
  types: string[] = [];
  stats: string[] = [];


  constructor(private route: ActivatedRoute, private pokeapiServices: PokeapiService) { 
    this.getPokemonDetails();
  }

  ngOnInit(): void {
  }

  async getPokemonDetails(): Promise<void>{
    const pokemonName = this.route.snapshot.paramMap.get('name');
    this.pokemonData = await this.pokeapiServices.getPokemonData(pokemonName);
 
    this.getBasicData();
    this.getImageURL();
    this.getTypes();
    this.getStats();
  }

  getBasicData() {
    this.name = this.pokemonData.name;
    this.id = this.pokemonData.id;
    this.height = this.pokemonData.height;
    this.weight = this.pokemonData.weight;

    console.log(this.name);
    console.log(this.id)
  }

  getImageURL() {
    this.imageURL = `https://pokeres.bastionbot.org/images/pokemon/${this.id}.png`
  }

  getTypes() {
    this.types = this.pokemonData.types.map(type => type.type.name);
  }

  getStats() {
    this.stats = this.pokemonData.stats.map(stat => stat.base_stat);
  }

}
