<script>
	import '@style/global.scss';
	const { children } = $props();
  const sayHello = () => {
    console.log('Hello world');
  }
</script>

{@render children()}
