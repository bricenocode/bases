


import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interfaces';

@Injectable({providedIn: 'root'})
export class DbzService {

  //El servicio va a tener toda nuestra lógica de negocio

  public characters : Character[] = [
    {
      id:uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id:uuid(),
      name: 'Goku',
      power: 9500
    },
];

  onNewCharacter( character: Character):void{
      const newCharacter = {id:uuid(), ...character}
      this.characters.push(newCharacter)
  }


  deleteCharacterById(id:string){
   this.characters = this.characters.filter( character => character.id !== id)
  }


  constructor() { }

}
