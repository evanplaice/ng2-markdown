import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { MarkdownComponent } from './ng2-markdown';

@NgModule({
	imports: [ HttpClientModule ],
	exports: [ MarkdownComponent ],
	declarations: [ MarkdownComponent ]
})
export class MarkdownModule { }