import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-clients-profile',
  templateUrl: './clients-profile.component.html',
  styleUrls: ['./clients-profile.component.scss']
})
export class ClientsProfileComponent implements OnInit {
  iconURL = "assets/icons/gender.svg"

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "gender",
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.iconURL));
  }

  ngOnInit(): void {
  }

}
