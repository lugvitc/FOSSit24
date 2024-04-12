<script>
	import '../app.css';
	import { base } from '$app/paths';
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';

	// onerror = (e) => {
	// 	console.log('error', 'Error: ' + e);
	// };
	onMount(() => {
		onunhandledrejection = (e) => {
			console.log(e.reason.message);
		};
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="{base}/assets/robit/font.css" />
</svelte:head>

<Navbar></Navbar>
<slot />
