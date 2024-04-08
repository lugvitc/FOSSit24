<script lang="ts">
	import Glass from '$lib/components/Glass.svelte';
	import Section from '$lib/components/Section.svelte';
	import { auth_user } from '$lib/stores';
	import { onMount } from 'svelte';

	// Github bot server caches a local list of the leaderboard.
	// Frontend pings that server for the leaderboard.
	// The frontend sorts the list, not the server.
	// REMEMBER TO CACHE JSON
	let teams = true;
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

	onMount(() => {
		resize();
	});

	let arr = [1, 0, 2];

	function resize() {
		arr = innerWidth > 768 ? [1, 0, 2] : [0, 1, 2];
	}
	function toggle(e: Event) {
		teams = e.target.getAttribute('data-create') == 'false';
	}
</script>

<svelte:window on:resize={resize} />

<Section>
	<div class="m-auto max-w-3xl space-y-8">
		<div class="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
			{#each arr as i}
				<!--cant dynamic this stuff-->
				<Glass class="!px-6 !pb-5 !pt-10 {i == 0 ? 'md:-translate-y-6' : ''}">
					<div
						class="flex h-full w-full flex-row-reverse items-center justify-between space-x-4 text-center text-foreground md:flex-col md:space-x-0 md:space-y-4"
					>
						<h4>{leaderboard[i].name}</h4>
						<div
							class="podium flex aspect-square h-full max-h-32 flex-col justify-center rounded-[35px] max-md:before:!m-0 md:w-full md:max-w-32"
						>
							<h4 class="text-5xl">{i + 1}</h4>
						</div>
					</div>
				</Glass>
			{/each}
			<style lang="postcss">
				.podium {
					background: #000;
					background-clip: padding-box; /* !importanté */
					border: solid 8px transparent; /* !importanté */

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
						margin: -8px; /* !importanté */
						border-radius: inherit; /* !importanté */
						background: linear-gradient(to bottom, gold, black);
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
		<div
			class="flex w-full flex-col overflow-hidden rounded-2xl border-2 border-solid border-zinc-400"
		>
			<div
				class="mb-2 flex flex-row justify-center space-x-4 border-b-2 border-solid border-zinc-400 px-2 py-4 text-center"
			>
				<p class="flex-1">Rank</p>
				{#if teams}
					<p class="flex-[4]">Team Name</p>
					<p class="flex-1">Points</p>
				{:else}
					<p class="flex-[4]">Idea</p>
					<p class="flex-1">Votes</p>
				{/if}
			</div>
			{#each leaderboard as team, i}
				<div
					class="flex flex-row justify-center space-x-4 px-2 text-center {i % 2
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

<style lang="postcss">
	button {
		@apply rounded-2xl border-[1px] border-foreground bg-background px-12 py-3 text-center text-foreground;
	}
	button[data-primary] {
		@apply rounded-2xl border-[1px] border-foreground bg-foreground px-12 py-3 text-center text-background;
	}
</style>
