import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonPreviewComponent } from './components/pokemon-preview/pokemon-preview.component';
import { GenerationComponent } from './components/generation/generation.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonPreviewComponent,
    GenerationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
