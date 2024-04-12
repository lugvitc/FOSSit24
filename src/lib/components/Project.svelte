<script lang="ts">
	import Markdown from './Markdown.svelte';

	interface Label {
		name: string;
		color: string;
	}

	interface Issue {
		title: string;
		labels: Label[];
		body: string;
		number: number;
		url: string;
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
	let project: Project;
	let className: string = '';
	let view: boolean = false;
	let viewReadme: boolean = true;

	export { className as class };
	export { project };

	console.log(project.issues);
	function toggle(e: Event) {
		viewReadme = e.target.getAttribute('data-create') == 'false';
	}
</script>

<div
	class="glass relative flex w-full flex-col justify-between space-y-4 overflow-hidden rounded-3xl border-[1px] border-zinc-500 px-4 py-4 text-zinc-400 backdrop-blur-2xl xl:px-6 xl:py-8 {className}"
>
	<div>
		<h3 class="text-center font-bold text-foreground">{project.title}</h3>
	</div>
	<p class="">{project.about}</p>
	<p class="">Difficulty: {project.difficulty}</p>
	<p class="">Language: {project.languages[0]}</p>
	<div class="flex flex-col justify-center space-y-4">
		<button
			on:click={() => {
				view = true;
				console.log(view);
			}}
			class="w-full">View Details</button
		>
	</div>
</div>

{#if view}
	<div
		class="glass absolute -top-12 left-1/2 mb-12 flex h-[80vh] w-[70vw] -translate-x-1/2 transform flex-col justify-between space-y-4 overflow-x-hidden rounded-3xl border-[1px] border-zinc-500 p-4 text-zinc-400 backdrop-blur-2xl xl:px-6 xl:py-8 {view}"
	>
		<button
			class="hover:bg-negative absolute right-4 top-4 border-0 p-4 text-3xl text-zinc-400 hover:text-foreground"
			on:click={() => {
				$: view = false;
			}}>X</button
		>
		<div class="flex flex-col py-4">
			<h3 class="text-center font-bold text-foreground">{project.title}</h3>
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
			<Markdown content={project.readme} />
		{:else}
			<div class="space-y-4 overflow-y-scroll">
				{#each project.issues as issue}
					<a href={issue.url}><h3 class="text-foreground">{issue.title} #{issue.number}</h3></a>
					<ul class="list-disc">
						{#each issue.labels as label}
							<li class="list-item">{label.name}</li>
						{/each}
					</ul>
					<Markdown content={issue.body} />
					<hr />
				{/each}
			</div>
		{/if}

		<div class="flex flex-col justify-center space-y-4">
			<button on:click={window.open(project.url)} class="w-full">View on Github</button>
		</div>
	</div>
{/if}

<style lang="postcss">
	.glass {
		background: linear-gradient(190deg, #2b2b2b -20%, rgba(43, 43, 43, 0) 100%);
	}
</style>
