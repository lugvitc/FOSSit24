<script lang="ts">
	let className = '';
	export { className as class };
</script>

<p class="w-fit rounded-full bg-foreground px-3 text-background {className}"><slot /></p>
