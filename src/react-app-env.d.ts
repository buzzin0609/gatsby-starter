declare const graphql: (query: TemplateStringsArray) => void;

/// <reference path="node_modules/@types/react/index.d.ts"/>

// Add support for css prop
declare namespace React {
  interface DOMAttributes<T> {
    css?: any;
  }
  interface InputHTMLAttributes<T> {
    css?: any;
  }
  interface HTMLInputElement<T> {
    css?: any;
  }
  interface DetailedHTMLProps<T> {
    css?: any;
  }
}
