import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor() { }

  getValue($stream: Observable<any>) {
    let data: any;
    $stream.subscribe(streamData => data = streamData);
    return data;
  }
}
