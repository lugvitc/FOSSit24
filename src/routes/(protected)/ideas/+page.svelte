<script lang="ts">
	import Glass from '$lib/components/Glass.svelte';
	import Card from '$lib/components/Card.svelte';
	import Section from '$lib/components/Section.svelte';
	import Input from '$lib/components/Input.svelte';
	import { user, auth_user } from '$lib/stores';
	import { onMount } from 'svelte';
	import supabase from '$lib/supabase';

	let ideas: any = [];
	let create: boolean = false;
	onMount(async () => {
		let { data, error } = await supabase.from('ideas').select('*');
		ideas = data;

		if (error) {
			console.log('Error retrieving data', error);
		}
	});
</script>

<div class="fixed bottom-0 right-0 z-10 p-5">
	<button
		data-primary
		class="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-foreground text-3xl text-background transition-all duration-300 hover:w-36"
		>+</button
	>
</div>

<Section>
	<div class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each ideas as idea}
			<Card {idea} />
		{/each}
	</div>
</Section>

{#if create}
	<Section class="absolute">
		<Input title="Title" />
	</Section>
{/if}
<!---->
<!-- <style lang="postcss"> -->
<!-- 	button { -->
<!-- 		@apply rounded-2xl border-[1px] border-foreground bg-background bg-opacity-5 px-12 py-3 text-center text-foreground; -->
<!-- 	} -->
<!-- 	button[data-primary] { -->
<!-- 		@apply h-12 w-12 rounded-2xl border-[1px] border-foreground bg-foreground text-center text-background; -->
<!-- 	} -->
<!-- </style> -->
