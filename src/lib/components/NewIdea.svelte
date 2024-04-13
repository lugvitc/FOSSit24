<script lang="ts">
	import { user } from '$lib/stores';
	import Section from '$lib/components/Section.svelte';
	import Glass from '$lib/components/Glass.svelte';
	import Input from '$lib/components/Input.svelte';
	import supabase from '$lib/supabase';
	import { onMount } from 'svelte';

	let className: string = '';
	let submitText: string = 'Save';
	interface Idea {
		title: string | null;
		url: string | null;
		description: string | null;
	}
	let idea: Idea = {
		title: null,
		url: null,
		description: null
	};
	export { className as class };

	onMount(async () => {
		const { data, error } = await supabase
			.from('ideas')
			.select('title, description, url')
			.eq('team', $user.team)
			.maybeSingle();
		if (error) {
			console.log('Error Retrieving Idea:', error.message);
			return;
		}
		if (data) {
			idea = data;
			submitText = 'Update';
		}
	});

	async function deleteIdea() {
		const { data, error } = await supabase.from('ideas').delete().eq('team', $user.team);
		if (error) {
			console.log('Error retrieving idea', error.message);
		}
	}

	async function save(e: SubmitEvent) {
		const formData = new FormData(e.target as HTMLFormElement);

		if (idea.title) {
			const { data, error } = await supabase
				.from('ideas')
				.update({
					title: formData.get('title') as string,
					description: formData.get('description') as string,
					url: (formData.get('url') as string) || null,
					team: $user.team as string
				})
				.eq('team', $user.team)
				.select('*');
			if (error) console.log('Error Updating Ideas', error.message);
			if (!error) location.replace('/ideas');
		} else {
			const { data, error } = await supabase
				.from('ideas')
				.insert([
					{
						title: formData.get('title') as string,
						description: formData.get('description') as string,
						url: (formData.get('url') as string) || null,
						team: $user.team as string
					}
				])
				.select();
			if (error) console.log('Error Creating Ideas:', error.message);
			if (!error) location.replace('/ideas');
		}
	}
</script>

<Section class="">
	<div class="m-auto max-w-xl">
		<Glass>
			<form class="flex flex-col justify-center" on:submit|preventDefault={save}>
				<h3 class="mb-10 text-center font-bold text-foreground">
					{idea.title ? 'Update Details' : 'New Idea'}
				</h3>
				<div class="flex flex-col space-y-8">
					<Input
						name="title"
						title="Idea Title"
						class="w-full"
						value={idea.title || ''}
						placeholder="Rocket to Mars"
						required
					/>

					<div class="w-full">
						<p class="font-bold text-foreground">Description</p>
						<textarea
							name="description"
							placeholder="So we go boom..."
							class="mt-2 h-36 w-full rounded-2xl border border-solid border-white bg-zinc-800 bg-opacity-30 p-4 text-foreground {className}"
							value={idea.description || ''}
							required
						></textarea>
					</div>
					<Input
						title="Github Link (optional)"
						class="w-full"
						type="url"
						name="url"
						value={idea.url || ''}
						pattern="^https://github\.com(?:/\S*)?$"
						placeholder="https://github.com/<userame>/<repository>"
					/>
					<input
						type="submit"
						class="cursor-pointer rounded-2xl border-[1px] border-foreground bg-foreground px-12 py-3 text-center text-background"
						value={submitText}
					/>
					<button
						class="{idea.title ? 'block' : 'hidden'} border-0 bg-negative text-background"
						on:click={deleteIdea}>Delete Idea</button
					>
				</div>
			</form>
		</Glass>
	</div>
</Section>

<style lang="postcss">
	button[data-primary] {
		@apply rounded-2xl border-[1px] border-foreground bg-foreground px-4 py-3 text-center text-background lg:px-0;
	}
	textarea {
		@apply text-sm;
	}
</style>
