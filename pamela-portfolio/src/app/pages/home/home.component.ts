import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslateModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  show = false;
  seconds = 2;

  showContent() {
    this.show = true;
    return this.show;
  }

  playAudio() {
    const audio = new Audio();
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
