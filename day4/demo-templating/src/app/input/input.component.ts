import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() foo = '';
  @Output() fooChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange(data: string) {
    this.fooChange.emit(data);
  }
}
