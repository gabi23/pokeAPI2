import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerationComponent } from './components/generation/generation.component';


const routes: Routes = [
  {path: 'generation', redirectTo: 'generation/1', pathMatch: 'full' },
  /* {path: 'generation/:id', component: GenerationComponent } */
  {path: 'generation/:id', component: GenerationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
