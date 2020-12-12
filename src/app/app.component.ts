import { Component } from '@angular/core';
import { lorem } from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  randomText = ''; 
  enteredText = '';
  solved = false;

  constructor(){
    this.generate()
  }
  
  generate() {
    this.randomText = lorem.sentence();
    this.enteredText = '';
  }
  
  onInput(value: string){
    this.enteredText = value;
  }


  compare(letter: string, entered: string){
    if(!entered){
      return 'pending';
    }

    return letter === entered ? 'correct' : 'incorrect';

  }

}
