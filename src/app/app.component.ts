import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Typing Challenge';
  testText: string = '';
  answerText: string = '';
  isSame: boolean = false;


  ngOnInit(): void {
    this.testText = lorem.sentence();

  }

  markAnswer(val: string) {
    this.answerText = val;
    if(this.testText === val) {
      this.isSame = true;
    } else {
      this.isSame = false;
    }
  }
}
