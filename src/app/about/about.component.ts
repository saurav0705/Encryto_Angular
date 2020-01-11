import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  output = null;
  constructor(private  dataService : DataService ) { }

  ngOnInit() {
    this.output = this.dataService.output;
  }

}
