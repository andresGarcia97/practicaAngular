import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input () nombre: AppComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
