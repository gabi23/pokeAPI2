import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerationComponent } from './components/generation/generation.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';


const routes: Routes = [
  {path: '', redirectTo: 'generation/1', pathMatch: 'full' },
  {path: 'generation/:id', component: GenerationComponent },
  {path: 'generation/:id/:name', component: PokemonDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
