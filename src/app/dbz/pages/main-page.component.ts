

import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
})

export class MainPageComponent{

  public characters : Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegetta',
      power: 700
    },
    {
      name: 'Miguel',
      power: 95000
    },
];

  onNewCharacter( character: Character):void{
      this.characters.push(character)
  }
  onDeleteCharacter( index: number):void{
    this.characters.splice(index, 1)
  }

}
