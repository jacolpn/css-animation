import { Component } from '@angular/core';

import { faFacebookF, faInstagram, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'list-social-media',
  templateUrl: './list-social-media.component.html',
  styleUrls: ['./list-social-media.component.css']
})
export class ListSocialMediaComponent {
  faFacebook = faFacebookF;
  faWhatsApp = faWhatsapp;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYouTube = faYoutube;
  faLinkedIn = faLinkedin;

  constructor() { }
}
