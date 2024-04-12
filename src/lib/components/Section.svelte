<script lang="ts">
	import { fade } from 'svelte/transition';

	let className = '';
	export { className as class };
</script>

<section class="relative overflow-x-clip" transition:fade={{ duration: 300 }}>
	<div class="mx-8 my-24 {className}">
		<div class="m-auto w-full max-w-6xl">
			<slot />
		</div>
	</div>
</section>
