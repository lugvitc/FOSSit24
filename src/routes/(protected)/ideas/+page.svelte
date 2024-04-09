<script lang="ts">
	import Glass from '$lib/components/Glass.svelte';
	import Card from '$lib/components/Card.svelte';
	import Section from '$lib/components/Section.svelte';
	import Input from '$lib/components/Input.svelte';
	import { user, auth_user } from '$lib/stores';
	import { onMount } from 'svelte';
	import supabase from '$lib/supabase';

	let ideas: any = [];
	onMount(async () => {
		let { data, error } = await supabase.from('ideas').select('*');
		ideas = data;
	});
</script>

<Section>
	<div class="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each ideas as idea}
			<Card {idea} />
		{/each}
	</div>
</Section>
