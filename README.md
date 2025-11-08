# be-consoling (🪵)

```html
<div be-consoling></div>
```

Logs all events that the div element fires to the console.

## Viewing Locally

Any web server that serves static files (html, css, js) will do but...

1.  Install git.
2.  Fork/clone this repo.
3.  Install node.
4.  Open command window to folder where you cloned this repo.
5.  > npm install
6.  > npm run serve
7.  Open http://localhost:8000/ in a modern browser.

## Importing in ES Modules:

```JavaScript
import 'be-consoling/be-consoling.js';
```

## Using from CDN:

```html
<script type=module crossorigin=anonymous>
    import 'https://esm.run/be-consoling';
</script>
```