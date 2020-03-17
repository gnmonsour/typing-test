import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Typing Test';
  testText: string = '';
  answerText: string = '';
  isSame: boolean = false;
  inputValue = '';

  ngOnInit(): void {
    this.getNewTestText();
  }

  getNewTestText(): void {
    this.testText = lorem.sentence();
  }

  resetTest(): void {
    this.getNewTestText();
    this.inputValue = '';
    this.markAnswer('');
  }

  markAnswer(val: string) {
    this.answerText = val;
    if (this.testText === val) {
      this.isSame = true;
    } else {
      this.isSame = false;
    }
  }
}
