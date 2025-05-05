/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="@tanstack/react-query" />
/// <reference types="react-router-dom" />

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}

declare module '@tanstack/react-query' {
  export * from '@tanstack/react-query';
}

declare module 'react-router-dom' {
  export * from 'react-router-dom';
} 