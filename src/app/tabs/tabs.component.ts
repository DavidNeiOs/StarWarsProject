import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

  /*
  Since we use router to pass data this function is now useless
  getCharacters() {
    this.characters = this.swService.getCharacters(this.chosenList);
    return this.characters;
  }

  Same for this one, in template we send what is the side
  onChoose(side) {
    this.chosenList = side;
  }
  */
}
