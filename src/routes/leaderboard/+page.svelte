<script lang="ts">
	import supabase from '$lib/supabase';
	import Glass from '$lib/components/Glass.svelte';
	import Section from '$lib/components/Section.svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Loading from '$lib/components/Loading.svelte';

	// Github bot server caches a local list of the leaderboard.
	// Frontend pings that server for the leaderboard.
	// The frontend sorts the list, not the server.
	// REMEMBER TO CACHE JSON
	let teams = true;
	let loading = true;

	async function loadTeams() {
		// loading = true;
		const { data, error } = await supabase
			.from('leaderboard')
			.select('name, points')
			.order('points', { ascending: false });
		if (error) console.log('Error Fetching Teams:', error.message);
		if (data.length) leaderboard = data;
		loading = false;
	}

	async function loadIdeas() {
		loading = true;
		const { data, error } = await supabase.from('ideas').select('title, votes, url');
		if (error) console.log('Error Fetching Ideas:', error.message);
		if (data.length) leaderboard = data;
		loading = false;
	}

	onMount(async () => {
		loadTeams();
		resize();
	});

	let arr = [1, 0, 2];
	let leaderboard: any = [
		{
			name: '',
			points: 0
		},
		{
			name: '',
			points: 0
		},
		{
			name: '',
			points: 0
		}
	];
	function resize() {
		arr = innerWidth > 768 ? [1, 0, 2] : [0, 1, 2];
	}
	async function toggle(e: Event) {
		teams = e.target.getAttribute('data-create') == 'false';
		if (!teams) {
			loadIdeas();
		} else {
			loadTeams();
		}
	}
</script>

<svelte:window on:resize={resize} />

<Loading {loading}>
	<img
		src="{base}/assets/Asset 2.png"
		class="gradient absolute left-1/2 top-1/2 z-[-100] hidden h-screen translate-x-[-50%] translate-y-[-50%] md:block"
		alt="Gradient"
	/>
	<Section>
		<div class="m-auto max-w-3xl space-y-8">
			<div class="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
				{#each arr as i}
					<Glass class="!px-6 !pb-5 !pt-10 {i == 0 ? 'md:-translate-y-6' : ''}">
						<div
							class="flex h-full w-full flex-row-reverse items-center justify-between space-x-4 text-center text-foreground md:flex-col md:space-x-0 md:space-y-4"
						>
							<h4>{leaderboard[i].name}</h4>
							<div
								class="podium flex aspect-square h-full max-h-32 flex-col justify-center rounded-[35px] max-md:before:!m-0 md:w-full md:max-w-32"
								id="podium{i + 1 + ''}"
							>
								<h4 class="text-5xl">{i + 1}</h4>
							</div>
						</div>
					</Glass>
				{/each}
				<style lang="postcss">
					.podium {
						background: #000;
						background-clip: padding-box;
						border: solid 8px transparent;

						position: relative;
						box-sizing: border-box;

						&:before {
							content: '';
							position: absolute;
							top: 0;
							right: 0;
							bottom: 0;
							left: 0;
							z-index: -1;
							margin: -8px;
							border-radius: inherit;
							background: linear-gradient(to bottom, gold, black);
						}
					}

					#podium2 {
						&:before {
							background: linear-gradient(to bottom, #e8e8e8, black);
						}
					}

					#podium3 {
						&:before {
							background: linear-gradient(to bottom, #ff8126, black);
						}
					}
				</style>
			</div>
			<div class="flex w-full justify-center space-x-4">
				<div class="grid grid-cols-2 gap-4">
					<button
						on:click={toggle}
						data-primary={teams || null}
						data-create="false"
						class="w-full px-0"
						type="button"
					>
						Teams
					</button>
					<button
						on:click={toggle}
						data-primary={!teams || null}
						data-create="true"
						class="w-full px-0"
						type="button"
					>
						Ideas
					</button>
				</div>
			</div>
			<Glass
				class="flex w-full flex-col overflow-hidden rounded-2xl border-2 border-solid border-zinc-400 !p-0"
			>
				<div
					class="mb-2 flex flex-row justify-center space-x-4 border-b-2 border-solid border-zinc-400 px-2 py-4 text-center"
				>
					<p class="flex-1 text-foreground">Rank</p>
					{#if teams}
						<p class="flex-[4] text-foreground">Team Name</p>
						<p class="flex-1 text-foreground">Points</p>
					{:else}
						<p class="flex-[4] text-foreground">Idea</p>
						<p class="flex-1 text-foreground">Votes</p>
					{/if}
				</div>
				{#each leaderboard as data, i}
					<div class="flex flex-row justify-center space-x-4 bg-opacity-5 px-2 text-center">
						<p class="flex-1 py-2 text-foreground">{i + 1}</p>
						{#if teams}
							<p class="flex-[4] py-2 text-foreground">{data.name}</p>
							<p class="flex-1 py-2 text-foreground">{data.points}</p>
						{:else}
							<a href={data.url} class="flex-[4] py-2 text-foreground">{data.title}</a>
							<p class="flex-1 py-2 text-foreground">{data.votes}</p>
						{/if}
					</div>
				{/each}
			</Glass>
		</div>
	</Section>
</Loading>

<style lang="postcss">
	button {
		@apply rounded-2xl border-[1px] border-foreground bg-background bg-opacity-5 px-12 py-3 text-center text-foreground;
	}
	button[data-primary] {
		@apply rounded-2xl border-[1px] border-foreground bg-foreground px-12 py-3 text-center text-background;
	}
</style>
