<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Section from '$lib/components/Section.svelte';
	import { user } from '$lib/stores';
	import { onMount } from 'svelte';
	import supabase from '$lib/supabase';
	import { base } from '$app/paths';

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
		if (error) {
			console.log('Error retrieving data:', error);
		}
	});
</script>

<Section>
	<div class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each ideas as idea}
			<Card {idea} />
		{/each}
	</div>

	<div class="fixed bottom-0 right-0 z-10 p-5">
		<a
			data-primary
			href="{base}/ideas/newIdea"
			class="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-foreground text-3xl text-background"
		>
			{submitedIdea ? '>' : '+'}
		</a>
	</div>
</Section>
