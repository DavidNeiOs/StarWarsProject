import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: ''},
    { name: 'Darth Vader', side: ''},
  ];
  // no need for this one
  charactersFetched = new Subject<void>();

  characterChanged = new Subject<void>();
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  fetchCharacters() {
    this.http.get('https://swapi.co/api/people/')
    .map((response: Response) => {
      const data = JSON.parse(response.text());
      const extractedChars = data.results;
      const chars = extractedChars.map((char) => {
        return {name: char.name, side: ''};
      });
      return chars;
    })
    .subscribe(
      (data: any) => {
        this.characters = data;
        console.log(data);
        this.characterChanged.next();
      }
    );

  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter(chr => {
      return (chr.side === chosenList);
    });
  }

  onChosenSide(charInfo) {
    const pos = this.characters.findIndex((chr) => {
      return chr.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.characterChanged.next();
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if (pos !== -1) {
      return;
    }
    const newChar = {name: name, side: side};
    this.characters.push(newChar);
  }
}
