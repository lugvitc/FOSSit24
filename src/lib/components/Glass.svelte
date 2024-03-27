<div
	class="glass relative w-full overflow-hidden rounded-3xl border-[1px] border-zinc-500 px-6 py-6 text-zinc-400 xl:px-12 xl:py-16"
>
	<slot />
</div>

<style>
	.glass {
		background: linear-gradient(190deg, #2b2b2b -20%, rgba(43, 43, 43, 0) 100%);
	}
</style>
