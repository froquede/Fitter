# Fitter
> Simple text fitting, supports shadow DOM

- [Example](https://roquef.github.io/Fitter.html)

- Install:
```console
npm i fitter-js
```


- Import and use:
```javascript
import Fitter from 'fitter-js';

let fitter = new Fitter({
    min: 12, // px
    max: 32, // px
    element: '.js-fitter' // selector string or node
});
```


- With shadow DOM:
```javascript
let fitter = new Fitter({
    shadowRoot: yourShadowRoot
});
```


- Update:
```javascript
fitter.fit();
```


- Set:
```javascript
fitter.set({ min: 10 });
```
