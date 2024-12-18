import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames : string[] = ['SpiderMan', 'Hulk', 'Capitan América', 'Iron Man', 'Thor', 'Black Widow', 'Doctor Strange', 'Black Panther', 'Scarlet Witch', 'Ant-Man'];
  public ultimoHeroe : string = ''

  eliminarHeroe (){
    this.ultimoHeroe = this.heroNames.pop()!
    return this.ultimoHeroe
  }

  get lastHero() : string {
    return this.ultimoHeroe
  }

}
