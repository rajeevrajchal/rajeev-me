<script lang="ts">
  import { onMount } from "svelte";
  import { Checkbox, Pane } from "svelte-tweakpane-ui";
  import { getDebugContext } from "./debug-context.svelte";

  function fromEntries<T = Record<PropertyKey, unknown>>(
    iterable: Iterable<readonly [PropertyKey, T]>,
  ): Record<PropertyKey, T> {
    return [...iterable].reduce<Record<PropertyKey, T>>((obj, [key, val]) => {
      obj[key] = val;
      return obj;
    }, {});
  }

  let debug = getDebugContext();

  const toggleGridLayout = () => {
    debug.toggleDebugGrid();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key?.toLowerCase() === "g" && e.ctrlKey) {
      e.preventDefault(); // Prevent default browser behavior
      toggleGridLayout();
    }
  };

  onMount(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });
</script>

<Pane position="draggable" title="Debug panel" expanded={true} minWidth={200}>
  <Checkbox bind:value={debug.showGrid} label="Show grid" />
</Pane>
