import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './ui/toolbar/toolbar';
import { LeftNav } from './ui/left-nav/left-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, LeftNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ProjetFrontApi');
}
