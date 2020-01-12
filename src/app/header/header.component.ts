import { Component, OnInit ,HostListener} from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  show : boolean = true;
  isDisabled : boolean = false;
  heading = "ENCRYPTO";
  url="";
  logo = require('../images/logo.png');
  arrow = require('../images/arrow.png');
  arrow_down = require('../images/arrow_alt.png');
  constructor() { }

  ngOnInit() {
    if (window.screen.width <= 600) { // 768px portrait
      this.show = false;
      this.isDisabled = false;
      this.url=this.arrow;

    }
    else{
      this.show = true;
      this.isDisabled = true;
      this.url=this.logo;
    }
  }

  @HostListener('window:resize', ['$event'])
  test(){
  if (window.screen.width <= 600) { // 768px portrait
    this.show = false;
    this.isDisabled = false;
    this.url=this.arrow;

  }
  else{
    this.show = true;
    this.isDisabled = true;
    this.url=this.logo;
  }
  }
 
 

  toggle()
  {
    if(!this.isDisabled){
    this.show=!this.show;
    if(this.show)
      this.url = this.arrow_down;
    else
    this.url = this.arrow; 
  }
  

  }

}
