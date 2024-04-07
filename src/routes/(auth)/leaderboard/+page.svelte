<script lang="ts">
	import Glass from '$lib/components/Glass.svelte';
	import Section from '$lib/components/Section.svelte';
	import { auth_user } from '$lib/stores';

	// Github bot server caches a local list of the leaderboard.
	// Frontend pings that server for the leaderboard.
	// The frontend sorts the list, not the server.
	// REMEMBER TO CACHE JSON
	let leaderboard = [
		{
			name: 'TeamBerlin',
			points: 1000
		},
		{
			name: 'TeamASd',
			points: 800
		},
		{
			name: 'Team JASD',
			points: 900
		}
	];
</script>

<Section>
	<div class="m-auto max-w-3xl space-y-8">
		<div class="flex flex-row space-x-4">
			{#each [1, 0, 2] as i}
				<Glass class="!px-6 !pb-5 !pt-10">
					<div
						class="flex h-full w-full flex-col items-center justify-between space-y-4 text-center text-foreground"
					>
						<h4>{leaderboard[i].name}</h4>
						<div
							class="flex aspect-square w-fit w-full max-w-32 flex-col justify-center rounded-3xl border-4"
						>
							<h4 class="text-5xl">{i + 1}</h4>
						</div>
					</div>
				</Glass>
			{/each}
		</div>
		<div class="flex w-full justify-center space-x-4">
			<button>Teams</button>
			<button>Projects</button>
		</div>
		<div
			class="flex w-full flex-col overflow-hidden rounded-2xl border-2 border-solid border-zinc-400"
		>
			<div
				class="mb-2 flex flex-row justify-center space-x-4 border-b-2 border-solid border-zinc-400 py-4 text-center"
			>
				<p class="flex-1">Rank</p>
				<p class="flex-[4]">Team Name</p>
				<p class="flex-1">Points</p>
			</div>
			{#each leaderboard as team, i}
				<div
					class="flex flex-row justify-center space-x-4 text-center {i % 2
						? 'bg-white bg-opacity-5'
						: 'bg-background'}"
				>
					<p class="flex-1 py-2 text-foreground">{i + 1}</p>
					<p class="flex-[4] py-2 text-foreground">{team.name}</p>
					<p class="flex-1 py-2 text-foreground">{team.points}</p>
				</div>
			{/each}
		</div>
	</div>
</Section>
