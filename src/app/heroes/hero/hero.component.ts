import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

public name: string = 'IronMan'
public age: number = 45
public contador : number = 10


get capitalize():string{
  return this.name.toUpperCase()
}

getHeroDescription():string{
  return `${this.name} - ${this.age}`;
}

changenHero():void{
  const heroes = ['SpiderMan', 'Hulk', 'Capitan América', 'Iron Man', 'Thor', 'Black Widow', 'Doctor Strange', 'Black Panther', 'Scarlet Witch', 'Ant-Man'];
  const randomNumber = Math.round(Math.random()*9)
  this.name = heroes[randomNumber]
  this.contador --;
}

changenAge():void{
  this.age = Math.round(Math.random()*70)
  this.contador --;
}

}
