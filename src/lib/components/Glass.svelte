<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div
	class="glass relative w-full overflow-hidden rounded-3xl border-[1px] border-zinc-500 px-6 py-12 text-zinc-400 backdrop-blur-2xl xl:px-12 xl:py-16 {className}"
>
	<slot />
</div>

<style>
	.glass {
		background: linear-gradient(190deg, #2b2b2b -20%, rgba(43, 43, 43, 0) 100%);
	}
</style>
