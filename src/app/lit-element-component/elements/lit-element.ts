import { LitElement, html, customElement, property } from 'lit-element';

// console.log('hello-world module');
// The @customElement and @property decorators

@customElement('hello-world')

export class HelloElement extends LitElement {

    @property() name;

    constructor() {
        // Always call super() first
        // Remember to call super() first in your constructor, or your element won’t render at all.
        super();
    }

    render() {
        return html`<div>
                   <p> Hello Angular ${this.name} </p>
                   </div>`;
    }
}
