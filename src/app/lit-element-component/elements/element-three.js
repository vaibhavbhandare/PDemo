import { LitElement, html, property } from 'lit-element';

class ElementThree extends LitElement {

    constructor() {
        // Always call super() first
        super();
    }

    render() {

        // Nest and compose templates

        let myTemplate1 = html`<p>Header</p>`

        // Conditionals with ternary operators

        let myTemplate2 = true;

        return html`
        <div> 
        ${myTemplate1} 
        <p>  I am Lit-Element Three </p> 
        ${myTemplate2 ? html`<p>Footer Present</p>` : html`<p>Footer Not Present</p>`}
        </div>
        `
    }
}

customElements.define('element-three', ElementThree);