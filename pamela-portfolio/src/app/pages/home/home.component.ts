import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslateModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
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
