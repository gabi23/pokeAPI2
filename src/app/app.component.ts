import { Component } from '@angular/core';
import { Generation, PokeapiService } from './services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeAPI2';
  generations: Generation[] = [];

  constructor(private pokeservices: PokeapiService) {
    this.loadGenerations()
  }

  async loadGenerations(): Promise<void> {
    const allGenerations = await this.pokeservices.getGenerations();
    this.generations = allGenerations;
  }



}
