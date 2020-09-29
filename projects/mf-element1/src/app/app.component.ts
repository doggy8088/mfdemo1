import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './app.component.html'
})
export class AppComponent {
  @Input()
  title = 'mf-element1';
}
