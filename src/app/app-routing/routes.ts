import { Routes } from '@angular/router';

import { EncryptComponent } from '../encrypt/encrypt.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { DecryptComponent } from '../decrypt/decrypt.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'encrypt',     component: EncryptComponent },
  { path: 'decrypt',     component: DecryptComponent },
  { path: 'about',     component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } 
];