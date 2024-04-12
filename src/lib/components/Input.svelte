<script lang="ts">
	export let title: string;
	let className = '';
	let typeInput = 'text';
	export { className as class };
	export { typeInput as type };
</script>

<div>
	<p class="font-bold text-foreground">{title}</p>
	<input
		{...$$restProps}
		class="mt-2 rounded-2xl border border-solid border-white bg-zinc-800 bg-opacity-30 p-4 text-foreground {className}"
		type={typeInput}
	/>
</div>
