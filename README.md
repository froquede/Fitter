# Fitter
> Simple text fitting, supports shadow DOM

```
    npm i fitter-js
```

```
    import Fitter from 'fitter-js';

    let fitter = new Fitter({
		min: 12, // px
		max: 32, // px
		element: '.js-fitter' // selector string or node
	});
```

- With shadow DOM
```
    let fitter = new Fitter({
        shadowRoot: yourShadowRoot
	});
```

- Update
```
    fitter.fit();
```
