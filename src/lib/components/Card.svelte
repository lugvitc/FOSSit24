<script lang="ts">
	import type { Idea } from '../../app';
	import { auth_user, user } from '$lib/stores';
	import supabase from '$lib/supabase';
	import { onMount } from 'svelte';

	let className = '';
	let voteButtonText: string | number = 'Vote';
	let voted: boolean = false;

	let idea: Idea;
	export { className as class };
	export { idea };

	onMount(async () => {
		const { data, error } = await supabase
			.from('votes')
			.select('*')
			.eq('idea_id', idea.id)
			.eq('user_id', $user.id)
			.single();

		if (data) {
			voteButtonText = 'Voted!';
			voted = true;
		}
	});

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
				voteButtonText = voted ? 'Vote' : 'Voted!';
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
				voteButtonText = voted ? 'Vote' : 'Voted!';
				voted = !voted;
			}
		}
	}
</script>

<div
	class="glass relative w-full space-y-4 overflow-hidden rounded-3xl border-[1px] border-zinc-500 px-4 py-4 text-zinc-400 backdrop-blur-2xl xl:px-6 xl:py-8 {className}"
>
	<h4 class="text-center text-foreground">{idea.title}</h4>
	<p
		class="line-clamp-4 text-center text-sm leading-6 tracking-wide text-white md:line-clamp-5 lg:line-clamp-6"
	>
		{idea.description}
	</p>
	<button on:click={window.open(idea.url)} class="w-full">View on Github</button>
	<button on:click={toggleVote} data-primary class="w-full">{voteButtonText}</button>
</div>

<style>
	.glass {
		background: linear-gradient(190deg, #2b2b2b -20%, rgba(43, 43, 43, 0) 100%);
	}
</style>
