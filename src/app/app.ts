import { Component, signal } from '@angular/core';
import { WidgetCard } from './components/widget-card/widget-card';

@Component({
  selector: 'app-root',
  imports: [WidgetCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
