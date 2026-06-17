# be-consoling (🪵)

```html
<div be-consoling></div>
```

Logs all events that the div element fires to the console.

In more casual environments, can use on canonical name.

This package contains one such alternate name:

```html
<div 🪵></div>
```

## Viewing Locally

Any web server that serves static files with server-side includes will do but...

1. Install git
2. Fork/clone this repo
3. Install node.js
4. Open command window to folder where you cloned this repo
5. > git submodule add https://github.com/bahrus/types.git types
6. > git submodule update --init --recursive
7. > npm install
8. > npm run serve
9. Open http://localhost:8000/demo/ in a modern browser

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