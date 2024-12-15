import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl:'./list.component.html',
  standalone: false,
})

export class ListComponent {

  @Output()
  public onDeleteId : EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList: Character [] = []


    onDeleteCharacter(id:string){
      if(!id)return;
    this.onDeleteId.emit(id)
  }

 }
