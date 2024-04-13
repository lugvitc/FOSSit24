<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { onMount } from 'svelte';
	import supabase from '$lib/supabase';
	import Glass from '$lib/components/Glass.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import Markdown from '$lib/components/Markdown.svelte';

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
			for (let project of projects) {
				project.issues.reverse();
				project.difficulty =
					project.difficulty.slice(0, 1).toUpperCase() + project.difficulty.slice(1);
			}
		}
	});
	let view = false;
	let focused = 0;
	let viewReadme: boolean = true;

	function toggle(e: Event) {
		viewReadme = e.target.getAttribute('data-create') == 'false';
	}
</script>

{#if view}
	<Glass
		class="!fixed left-0 top-0 z-10 flex h-screen w-screen flex-col justify-between overflow-y-scroll rounded-[0] border-[0] {view}"
	>
		<div class="m-auto w-full max-w-3xl">
			<button
				class="absolute right-4 top-4 border-0 p-4 text-3xl text-zinc-400 hover:bg-negative hover:text-foreground"
				on:click={() => {
					$: view = false;
				}}>X</button
			>
			<div class="mb-8 flex flex-col py-4">
				<h3 class="text-center font-bold text-foreground">{projects[focused].title}</h3>
				<div class="grid grid-cols-2 gap-4">
					<button
						on:click={toggle}
						data-primary={viewReadme || null}
						data-create="false"
						class="w-full px-0"
						type="button"
						>View README
					</button>
					<button
						on:click={toggle}
						data-primary={!viewReadme || null}
						data-create="true"
						class="w-full px-0"
						type="button"
					>
						View Issues
					</button>
				</div>
			</div>
			{#if viewReadme}
				<Markdown content={projects[focused].readme} />
			{:else}
				<div class="space-y-8">
					{#each projects[focused].issues as issue}
						<div class="flex w-full justify-between">
							<a href={issue.url}><h3 class="m-0 text-foreground">{issue.title}</h3></a>
							<div class="flex space-x-4">
								{#each issue.labels as label}
									<Tag class="h-fit"
										>{label.name.slice(0, 1).toUpperCase() + label.name.slice(1)}</Tag
									>
								{/each}
							</div>
						</div>

						<hr />
					{/each}
				</div>
			{/if}

			<button data-primary on:click={window.open(projects[focused].url)} class="mt-12 w-full">
				View on Github
			</button>
		</div>
	</Glass>
{/if}

<Section class="mt-10">
	<div class="m-auto max-w-6xl columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3 xl:columns-3">
		{#each projects as project, i}
			<Glass class="flex flex-col space-y-4 !p-4">
				<div class="m-3 flex items-center justify-between">
					<h3 class="m-0 h-fit w-fit flex-[3] text-4xl font-bold text-foreground">
						{project.title}
					</h3>
					<div class="flex flex-[1] flex-col items-end space-y-2">
						<Tag>{project.language}</Tag>
						<!-- <Tag>{project.difficulty}</Tag> -->
					</div>
				</div>
				<p>{project.about}</p>
				<button
					on:click={() => {
						view = true;
						focused = i;
					}}
					class="w-full">View Details</button
				>
			</Glass>
		{/each}
	</div>
</Section>
