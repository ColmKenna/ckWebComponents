export class HelloWorld extends HTMLElement {
  private shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['name', 'color'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  get name() {
    return this.getAttribute('name') || 'World';
  }

  set name(value: string) {
    this.setAttribute('name', value);
  }

  get color() {
    return this.getAttribute('color') || '#333';
  }

  set color(value: string) {
    this.setAttribute('color', value);
  }

  private render() {
    this.shadow.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 1rem;
          font-family: Arial, sans-serif;
        }
        
        .hello-world {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }
        
        .hello-world:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        .message {
          font-size: 1.5rem;
          margin: 0;
          color: ${this.color};
        }
        
        .subtitle {
          font-size: 1rem;
          margin: 0.5rem 0 0 0;
          opacity: 0.8;
        }
      </style>
      <div class="hello-world">
        <h1 class="message">Hello, ${this.name}!</h1>
        <p class="subtitle">Welcome to our Web Component Library</p>
      </div>
    `;
  }
}

// Register the custom element
if (!customElements.get('hello-world')) {
  customElements.define('hello-world', HelloWorld);
}
