import { getContext, setContext } from "svelte";
import { browser } from "$app/environment";

export class DebugContext {
  public showGrid = $state<boolean>(false);

  constructor() {
    if (browser) {
      this.showGrid = window.localStorage.getItem("debug-layout") === "true";
    }
    $effect(() => {
      if (browser) {
        window.localStorage.setItem("debug-layout", String(this.showGrid));
      }
    });
  }

  public toggleDebugGrid = () => {
    this.showGrid = !this.showGrid;
    if (browser) {
      window.localStorage.setItem("debug-layout", String(this.showGrid));
    }
  };
}

export const setDebugContext = () =>
  setContext<DebugContext>("debug-context", new DebugContext());

export const getDebugContext = () => getContext<DebugContext>("debug-context");
