import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }
  ngOnInit() {
  }
  onAssign(char) {
    // this.sideAssigned.emit({name: this.character.name, side: char});
    this.swService.onChosenSide({name: this.character.name, side: char});
  }
}
