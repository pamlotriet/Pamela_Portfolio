import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { Observable } from 'rxjs';
import { Paragraph } from '../../shared/models/extra-content.models';
import { ExtraContent } from '../../shared/services/extra-content.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TranslateModule,
    RouterModule,
    NavbarComponent,
  ],
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  show = false;
  seconds = 2;

  paragraphs$: Observable<Paragraph[]> | undefined;
  constructor(private extraContentService: ExtraContent) {}

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
    this.paragraphs$ = this.extraContentService.getAboutParagraphs();
    this.playAudio();
    setInterval(() => {
      this.showContent();
    }, this.seconds * 1000);
  }
}
