export declare class HelloWorldComponent extends HTMLElement {
    private shadow;
    constructor();
    connectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    get name(): string;
    set name(value: string);
    get color(): string;
    set color(value: string);
    private render;
}
