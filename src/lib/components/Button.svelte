<script lang="ts">
	export let primary = false;
	export let href: string;
</script>

{#if primary}
	<a
		class="rounded-2xl border-[1px] border-foreground bg-foreground px-12 py-4 text-background"
		{href}
	>
		<slot />
	</a>
{:else}
	<a class="rounded-2xl border-[1px] border-foreground px-12 py-4 text-foreground" {href}>
		<slot />
	</a>
{/if}
