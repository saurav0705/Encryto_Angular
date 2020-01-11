import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.scss']
})
export class EncryptComponent implements OnInit {
  text: String;
  
  constructor(private dataService : DataService,private router :Router) { }

  ngOnInit() {
    
  }
  OnSubmit(){
   console.log(this.text);
   this.dataService.encryptData(this.text);  
   this.router.navigate(['/about'])
  }

}
