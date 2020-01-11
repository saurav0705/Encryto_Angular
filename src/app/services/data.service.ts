import { Injectable } from '@angular/core';
import {Encrypt , Decrypt} from './algoModule';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  output = null;
  encryptData(str){
    this.output =  Encrypt(str);
  }

  decryptData(str,pin){
    this.output=Decrypt(str,pin);
  }
  constructor() { }
}
