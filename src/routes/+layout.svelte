<script>
	import '../app.css';
	import { base } from '$app/paths';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="{base}/assets/robit/font.css" />
</svelte:head>

<Navbar></Navbar>
<slot />
