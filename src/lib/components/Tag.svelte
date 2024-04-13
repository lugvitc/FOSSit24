<script lang="ts">
	let className = '';
	export { className as class };
</script>

<p class="line-clamp-1 rounded-full bg-foreground px-4 text-background {className}">
	<slot />
</p>
