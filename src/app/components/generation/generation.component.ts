import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css']
})
export class GenerationComponent implements OnInit {

  pokemons: Pokemon[] = [];
  
  constructor(private route: ActivatedRoute, private pokeapiServices: PokeapiService) { 
    route.paramMap.subscribe(param =>{
      const id = param.get('id');
      this.loadGeneration(id);
    });
  }

  ngOnInit(): void { }

  async loadGeneration(id: string): Promise<void> {
    /* const id = this.route.snapshot.paramMap.get('id'); */
    const generation = await this.pokeapiServices.getGenerationByID(id);
    this.pokemons = generation;
    this.sortByID();
  }

  sortByID(){
    this.pokemons.forEach(pokemon =>{
      pokemon.id = pokemon.url.slice(42,-1);
    });
    this.pokemons.sort((pokemon1, pokemon2) => +pokemon1.id - +pokemon2.id);
  }

}
