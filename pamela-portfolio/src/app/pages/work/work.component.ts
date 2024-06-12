import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent {
  constructor() {}

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
