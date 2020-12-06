import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'thx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  menuToggle() {
   this.toggle.emit();
  }
}
