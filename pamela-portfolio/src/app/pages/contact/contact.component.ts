import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TranslateModule,
    NavbarComponent,
    ButtonComponent,
    TextareaComponent,
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  show = false;
  seconds = 2;

  showContent() {
    this.show = true;
    return this.show;
  }

  playAudio() {
    let audio = new Audio();
    audio.src = 'assets/Spaceship.wav';
    audio.load();
    audio.play();
  }

  ngOnInit(): void {
    this.playAudio();
    setInterval(() => {
      this.showContent();
    }, this.seconds * 1000);
  }
}
