# Fitter
> Simple text fitting, supports shadow DOM

- install
```s
npm i fitter-js
```

- import and use
```javascript
import Fitter from 'fitter-js';

let fitter = new Fitter({
	min: 12, // px
    max: 32, // px
    element: '.js-fitter' // selector string or node
});
```

- With shadow DOM
```javascript
let fitter = new Fitter({
    shadowRoot: yourShadowRoot
});
```

- Update
```javascript
fitter.fit();
```
