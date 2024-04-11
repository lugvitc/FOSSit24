<script lang="ts">
	import { auth_user, user } from '$lib/stores';
	import supabase from '$lib/supabase';
	import { onMount } from 'svelte';

	let className = '';
	let voted: boolean = false;

	interface Idea {
		id: number | null;
		title: string | null;
		description: string | null;
		team: string | null;
		url: string | null;
	}
	let idea: Idea;
	export { className as class };
	export { idea };

	onMount(async () => {
		const { data, error } = await supabase
			.from('votes')
			.select('*')
			.eq('idea_id', idea.id)
			.eq('user_id', $user.id)
			.maybeSingle();

		if (data) {
			voted = true;
		}
	});

	async function editIdea() {
		location.replace('/ideas/newIdea');
	}

	async function toggleVote() {
		if (!voted) {
			const { data, error } = await supabase
				.from('votes')
				.insert({
					user_id: $auth_user.id,
					idea_id: idea.id
				})
				.select();

			if (error) {
				console.log('Error casting vote:', error);
			} else {
				voted = !voted;
			}
		} else if (voted) {
			const { data, error } = await supabase
				.from('votes')
				.delete()
				.eq('idea_id', idea.id)
				.eq('user_id', $user.id)
				.select();
			if (error) {
				console.log('Error casting vote:', error);
			} else {
				voted = !voted;
			}
		}
	}
</script>

<div
	class="glass relative flex w-full flex-col justify-between space-y-4 overflow-hidden rounded-3xl border-[1px] border-zinc-500 px-4 py-4 text-zinc-400 backdrop-blur-2xl xl:px-6 xl:py-8 {className}"
>
	<div>
		<h4 class="text-center text-foreground">{idea.title}</h4>
		<p
			class="line-clamp-4 text-center text-sm leading-6 tracking-wide text-white md:line-clamp-5 lg:line-clamp-6"
		>
			{idea.description}
		</p>
	</div>
	<div class="flex flex-col justify-center space-y-4">
		{#if idea.url}
			<button on:click={window.open(idea.url)} class="w-full">View on Github</button>
		{/if}
		{#if idea.team == $user.team}
			<button on:click={editIdea} data-primary class="w-full">Edit</button>
		{:else}
			<button
				on:click={toggleVote}
				on:mouseenter={(this.innerText = voted ? 'Unvote' : this.innerText)}
				on:mouseleave={(this.innerText = voted ? 'Voted!' : 'Vote')}
				data-primary
				class="w-full {voted ? '!border-transparent !bg-green-300 hover:!bg-negative' : ''}"
				>{voted ? 'Voted!' : 'Vote'}</button
			>
		{/if}
	</div>
</div>

<style>
	.glass {
		background: linear-gradient(190deg, #2b2b2b -20%, rgba(43, 43, 43, 0) 100%);
	}
</style>
