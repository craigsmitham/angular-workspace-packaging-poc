import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooService {
  constructor() {}

  getMessage() {
    return 'Hello world';
  }
}
