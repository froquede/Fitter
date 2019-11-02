# Fitter
> Simple text fitting, supports shadow DOM

- <a href="https://roquef.github.io/Fitter.html" target="_blank">Example</a>

### Install:
```console
npm i fitter-js
```


### Basic usage:
```javascript
new Fitter({
    min: 12, // px
    max: 32, // px
    element: '.js-fitter' // selector string or node
});
```


### With shadow DOM:
```javascript
let fitter = new Fitter({
    shadowRoot: yourShadowRoot
});
```


### Update:
```javascript
fitter.fit();
```


### Set:
```javascript
fitter.set({ min: 10 });
```
