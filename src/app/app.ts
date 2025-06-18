import { Component } from '@angular/core';
import { MfeStepComponent } from './mfe-step/mfe-step';

@Component({
  selector: 'app-root',
  imports: [MfeStepComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'mfe-step';
}
