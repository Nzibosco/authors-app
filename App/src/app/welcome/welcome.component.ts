import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  randomQuote:string= 'The quickest way to double your money is to fold it over and put it back in your pocket.'

  constructor() { }

  ngOnInit(): void {
  }

}
