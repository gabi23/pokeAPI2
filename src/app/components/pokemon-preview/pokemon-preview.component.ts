import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-preview',
  templateUrl: './pokemon-preview.component.html',
  styleUrls: ['./pokemon-preview.component.css']
})
export class PokemonPreviewComponent implements OnInit {

  @Input() image;
  @Input() id;
  @Input() name;

  constructor() { }

  ngOnInit(): void {
  }

}
