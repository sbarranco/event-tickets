import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  clickHome = output<void>();

  onClickHome(): void {
    this.clickHome.emit();
  }
}
