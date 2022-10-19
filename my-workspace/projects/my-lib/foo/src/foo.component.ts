import { Component, OnInit } from '@angular/core';
import { FooService } from './foo.service';

@Component({
  selector: 'lib-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
})
export class FooComponent {
  message: string;
  constructor(foo: FooService) {
    this.message = foo.getMessage();
  }
}
