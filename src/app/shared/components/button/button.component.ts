import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  label = input.required<string>();
  color = input<'primary' | 'secondary'>('primary');
  disabled = input<boolean>(false);
  fullWidth = input<boolean>(false);
}
