<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { onMount } from 'svelte';
	import supabase from '$lib/supabase';
	import Project from '$lib/components/Project.svelte';

	interface Label {
		name: string;
		color: string;
	}

	interface Issue {
		title: string;
		labels: Label[];
		body: string;
		number: number;
	}

	interface Project {
		id: number;
		title: string;
		url: string;
		team: string;
		about: string;
		difficulty: string;
		languages: string[];
		readme: string;
		issues: Issue[];
	}

	let projects: Project[] = [];
	onMount(async () => {
		const { data, error } = await supabase.from('projects').select('*');
		if (error) {
			console.log('Error retrieving projects', error.message);
			return;
		}
		if (data) {
			projects = data;
		}
	});
</script>

<Section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
	{#each projects as project}
		<Project {project} />
	{/each}
</Section>
