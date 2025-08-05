import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-card',
  imports: [],
  templateUrl: './widget-card.html',
  styleUrl: './widget-card.scss'
})
export class WidgetCard {
  @Input() title: string = 'Widget Title';
  @Input() showFooter: boolean = false;
}
