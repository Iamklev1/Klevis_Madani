import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  counter : number = 0;

  increase(){
    this.counter++;
  }

  decrease(){
    if(this.counter>0){
      this.counter--;
    }
  }


}
