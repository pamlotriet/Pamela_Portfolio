import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { Observable } from 'rxjs';
import { Project } from '../../shared/models/extra-content.models';
import { ExtraContent } from '../../shared/services/extra-content.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TranslateModule],
  templateUrl: './work.component.html',
})
export class WorkComponent implements OnInit {
  projects$: Observable<Project[]> | undefined;
  constructor(private extraContentService: ExtraContent) {}
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

    this.projects$ = this.extraContentService.getProjects();
  }
}
