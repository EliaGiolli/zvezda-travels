//TS by default doesn't know how to handle .vue files
//this module declaration it's for ts to understand them

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}