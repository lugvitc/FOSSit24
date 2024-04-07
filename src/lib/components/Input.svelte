<script lang="ts">
	export let title: string;
	let className = '';
	export { className as class };
</script>

<div>
	<p class="font-bold text-foreground">{title}</p>
	<input
		{...$$restProps}
		class="mt-2 rounded-2xl border border-solid border-white bg-zinc-800 bg-opacity-30 p-4 text-foreground {className}"
		type="text"
	/>
</div>
