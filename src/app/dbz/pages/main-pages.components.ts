import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.components.html'
})

export class MainPageComponent  {
  public character: Character[] = [{
    name: 'Krilin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 7500
  },{
    name: 'Yamcha',
    power: 500
  }];

  onNewCharacter(character: Character):void {
    console.log('MainPage');
    console.log(character);
  }

}
