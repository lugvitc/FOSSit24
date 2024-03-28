<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<link rel="stylesheet" href="{base}/assets/robit/font.css" />
</svelte:head>

<Navbar />
<slot />
