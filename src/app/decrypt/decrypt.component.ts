import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.scss']
})
export class DecryptComponent implements OnInit {
  encrypted ;
  pin;
  constructor(private dataService : DataService,private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(){
    this.dataService.decryptData(this.encrypted,this.pin);
    this.router.navigate(['/about']);
  }

}
