import { Component, Inject, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Converter } from 'showdown';
import 'prismjs';

@Component({
  selector: 'ng2-markdown',
  inputs: [ 'src', 'data', 'highlight' ],
  template: ''
})
export class MarkdownComponent {
  constructor (@Inject(ElementRef) elementRef, @Inject(HttpClient) http) {
    // used for http requests
    this.http = http;
    // reference to the DOM element
    this.element = elementRef.nativeElement;
  }

  ngOnInit () {
    // element with 'src' attribute set
    if (this.src) {
      this.fromFile(this.src);
    }
    // element with 'data' attribute set
    if (this.data) {
      this.fromData(this.data);
    }
  }

  ngAfterViewChecked() {
    if (this.highlight) {
      // ensure the lifecycle event triggering doesn't eat this call
      setTimeout(() => { Prism.highlightAll(); }, 100);

      // this lifecycle event gets triggered ridiculously often
      //   ensure highlightAll() only fires once.
      this.highlight = false;
    }
  }

  fromFile(src) {
    this.http.get(src, { responseType: 'text' }).toPromise()
    .then((res) => {
       return this.prepare(res);
    })
    .then((markdown) => {
      return this.process(markdown);
    })
    .then((html) => {
      this.element.innerHTML = html;
    })
  }

  fromData(data) {
    let html = this.prepare(data);
    html = this.process(html);
    this.element.innerHTML = html;
  }

  prepare(raw) {
    return raw.split('\n').map((line) => line.trim()).join('\n')
  }

  process(markdown) {
    let converter = new Converter();
    return converter.makeHtml(markdown)
  }
}
