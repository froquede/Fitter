class Fitter {
    constructor(options) {
        this.options = Object.assign(this.defaultOptions, options);
        this.fit();
    }

    get defaultOptions() {
        return {
            element: '[data-fitter]',
            min: 12,
            max: 64,
            multiline: false,
        }
    }

    fit() {
        let elements;
        if (this.options.shadowRoot) {
            elements = typeof this.options.element === 'string' ? this.options.shadowRoot.querySelectorAll(this.options.element) : this.options.element;
        }
        else {
            elements = typeof this.options.element === 'string' ? window.document.querySelectorAll(this.options.element) : this.options.element;
        }

        for (const el of elements) {
            delete el.fitter_set;
            let style = window.getComputedStyle(el, null);
            let fontSize = style.getPropertyValue('font-size');
            let fontWeight = style.getPropertyValue('font-weight');
            let fontFamily = style.getPropertyValue('font-family');
            let textSize = this.getTextWidth(el.innerText, `${fontWeight} ${fontSize} ${fontFamily}`);

            el.style.overflow = 'hidden';
            el.style['text-overflow'] = 'ellipsis';
            el.style['white-space'] = this.options.multiline ? 'normal' : 'nowrap';

            let elSize = el.clientWidth;
            let canGrow = window.getComputedStyle(el.parentNode, null).getPropertyValue('max-width');
            elSize = canGrow && canGrow !== 'none' ? parseFloat(canGrow) : elSize;

            if (textSize < elSize) {
                for (let c = parseFloat(fontSize); c < this.options.max; c++) {
                    let r = this.getTextWidth(el.innerText, `${fontWeight} ${c}px ${fontFamily}`);
                    if (r > elSize) {
                        el.style.fontSize = `${c - 1 > this.options.max ? this.options.max : c - 1}px`;
                        el.fitter_set = true;
                        this.listener(el);
                        break;
                    }
                }

                if (!el.fitter_set) {
                    el.style.fontSize = `${this.options.max}px`;
                    this.listener(el);
                }
            }
            else {
                for (let c = this.options.min; c < parseFloat(fontSize); c++) {
                    let r = this.getTextWidth(el.innerText, `${fontWeight} ${c}px ${fontFamily}`);
                    if (r > elSize) {
                        el.style.fontSize = `${c - 1 < this.options.min ? this.options.min : c - 1}px`;
                        el.fitter_set = true;
                        this.listener(el);
                        break;
                    }
                }

                if (!el.fitter_set) {
                    el.style.fontSize = `${this.options.min}px`;
                    this.listener(el);
                }
            }
        }
    }

    getTextWidth(text, font) {
        let canvas = this.canvas || (this.canvas = document.createElement('canvas'));
        let context = canvas.getContext('2d');
        context.font = font;
        return context.measureText(text).width;
    }

    listener(el) {
        if (this.options.listener) {
            try {
                this.options.listener(el, +(`${el.style.fontSize}`.split('px').join('')));
            } catch (err) { }
        }
    }

    set(options) {
        this.options = Object.assign(this.options, options);
    }
}

export default Fitter;