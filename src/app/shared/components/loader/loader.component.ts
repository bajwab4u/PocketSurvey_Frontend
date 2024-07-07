import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bys-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() type: 'spinner' | 'btn-spinner';
  @Input() showLoader: boolean;

  constructor() {
    this.type = 'spinner';
    this.showLoader = false;
  }

  ngOnInit(): void {}
}
