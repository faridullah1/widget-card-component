import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-widget-card',
  imports: [],
  templateUrl: './widget-card.html',
  styleUrl: './widget-card.scss'
})
export class WidgetCard {
  @Input() title: string = 'Widget Title';
  @Input() showFooter: boolean = false;
  @Input() isCompactView: boolean = false;

  menuOpen = signal<boolean>(false);

  toggleMenu(ev: any): void {
    this.menuOpen.set(!this.menuOpen());
    ev.stopPropagation();
  }

  hideMenu(): void {
    this.menuOpen.set(false);
  }
}
