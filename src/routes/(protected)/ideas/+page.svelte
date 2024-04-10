<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Section from '$lib/components/Section.svelte';
	import { user } from '$lib/stores';
	import { onMount } from 'svelte';
	import supabase from '$lib/supabase';

	interface Idea {
		id: number | null;
		title: string | null;
		description: string | null;
		team: string | null;
		url: string | null;
	}
	let ideas: Idea[] = [];
	let submitedIdea: { team: string } | null;

	onMount(async () => {
		let { data, error } = await supabase.from('ideas').select('id, title, description, team, url');
		if (data) {
			ideas = data;
		}
		submitedIdea = (
			await supabase.from('ideas').select('team').eq('team', $user.team).maybeSingle()
		).data;
		console.log(submitedIdea);
		if (error) {
			console.log('Error retrieving data', error);
		}
	});

	async function newIdea() {
		location.replace('/ideas/newIdea');
	}
</script>

<Section>
	<div class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each ideas as idea}
			<Card {idea} />
		{/each}
	</div>

	<div class="fixed bottom-0 right-0 z-10 p-5">
		<button
			data-primary
			on:click={newIdea}
			class="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-foreground text-3xl text-background"
			>{submitedIdea ? '>' : '+'}</button
		>
	</div>
</Section>
