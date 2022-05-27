import { Component, OnInit } from '@angular/core';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin

  constructor() { }

  ngOnInit(): void {
  }

}
