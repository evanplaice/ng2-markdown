<strong><p align="center">NOTICE: This package is officially deprecated. Use <a href="https://github.com/evanplaice/ng2-markdown">@vanillawc/wc-markdown</a> instead</p></strong>

-----

# &lt;ng2-markdown&gt;

A Markdown component for **Angular2+** with fully themable syntax highlighting.

Markdown parsing is provided by **[Showdown][showdown]**. Syntax highlighing is provided by **[PrismJS][prismjs]**

To see a working example checkout the [ng2-markdown-demo][demo] project.

*Now compatible with **Angular 4+**. Bundled to work Typescript, ES5, and ES6+ flavors of Angular.*

## Installation

#### Via JSPM

  ```bash
  jspm install ng2-markdown=github:evanplaice/ng2-markdown
  jspm install prismjs=npm:prismjs
  jspm install showdown=npm:showdown
  ```

#### Via NPM

  ```bash
  npm install ng2-markdown
  ```

## Loading

#### 1. Import the component

```javascript
  import { MarkdownComponent } from 'ng2-markdown';
```

*Note: For a pre-minified bundle use `ng2-markdown/dist/ng2-markdown.min`.*

#### 2. (Optional) load a PrismJs theme if syntax highlighting is enabled

```javascript
import 'prismjs/themes/[theme].css'
```

Replace `[theme]` with one of the following:

- prism.css (Default)
- prism-coy.css
- prism-dark.css
- prism-funky.css
- prism-okaidia.css
- prism-solarizedlight.css
- prism-tomorrow.css
- prism-twilight.css

*Note: Loading css via ES6 imports requires a style loader and loaders are transpiler/bundler-specific. For webpack use the `style!css!` prefix. For JSPM/System.js use the `!css` postfix.*

#### 3. (Optional) Load support for additional languages

```javascript
  import 'prismjs/components/prism-[language].min';
```

Replace `[language]` with the language you'd like to include. See [Languages List](http://prismjs.com/#languages-list) for a full list of supported languages.

*Note: HTML, CSS, Javascript, and C-like languages are included by default.*

## Usage

#### Load Markdown from a file with syntax highlighting

This method fires off an AJAX request to load markdown from a file on the server.

  ```javascript
  <ng2-markdown [src]='/path/to/file' [highlight]='true'></ng2-markdown>
  ```

#### Load Markdown from a Data variable

Load Markdown data from directly from a template binding

  ```javascript
  <ng2-markdown [data]='data' [highlight]='true'></ng2-markdown>
  ```
That's it... Yes, really. 

#### Load a series of Markdown elements

Syntax highlighting is triggered globally for every **ng2-markdown** element where `[highlight]='true'`. If it's desirable to load multiple **ng2-markdown** elements on a page, it's necessary to minimize the number of times a highlight event is triggered.

A easy workaround is to detect when the last **ng2-markdown** element is loaded and only set `[highlight]='true'` on that element.

```javascript
<div *ngFor="let article of articles; let isLast=last" [last]="isLast">
  <ng2-markdown [src]="article.url" [highlight]="last"></ng2-markdown>
</div>
```

## Dependencies

- [showdown][showdown] - parse Markdown to HTML
- [prismjs][prismjs] - syntax-specific highlighting

## Roadmap

- Modify `[data]` and `[src]` to update when the binding is modified.

[demo]: https://github.com/evanplaice/ng2-markdown-demo
[showdown]: http://showdownjs.com/
[prismjs]: https://github.com/PrismJS/prism