

import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
})

export class MainPageComponent{

  //Debemos tener privado para que solo sea accesible mediante lo getters, setters y funciones de clase.
  constructor(private DbzService: DbzService){}

  get characters():Character[]{
    return [...this.DbzService.characters]
  }

  onNewCharacter( character: Character){
    return this.DbzService.onNewCharacter(character)
  }

  onDeleteCharacter( id:string ):void{
    return this.DbzService.deleteCharacterById(id)
  }

}
