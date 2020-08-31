import { LitElement, html, customElement, property, css } from 'lit-element';

const mainColor = css`red`;
// The @customElement and @property are decorators
@customElement('element-two')

export class ElementTwo extends LitElement {

    @property() inputDetails;
    @property() event;
    @property({type: Array})
    items = [1, 2];

    constructor() {
        // Always call super() first
        super();
        this.event = 'Hi';
    }

    static get styles() {
        return css`
          div { color: ${mainColor}; }
          .myclass { color: blue; }
          button { color: blue;  }
        `;
    }

    render() {
        return html`<div>
                    <p class="myclass">${this.inputDetails}</p>
                    <p>I am Lit-Element ${this.items.length}. <button @click="${this.getName}">Click Me</button></p>
                   </div>`;
    }

    getName() {
        alert(this.items);
    }

}
