import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit, OnChanges {

  @Input()
  title = 'mf-element2';

  ngOnInit(): void {
    console.log('mf-element2 oninit!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('mf-element2 changes!');
  }

  ngOnDestroy(): void {
    console.log('mf-element2 destroied!');
  }
}
