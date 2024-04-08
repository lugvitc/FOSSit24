<script lang="ts">
	import { auth_user } from '$lib/stores';
	import { base } from '$app/paths';
	import Section from '$lib/components/Section.svelte';
	import Glass from '$lib/components/Glass.svelte';
	import Input from '$lib/components/Input.svelte';
	import supabase from '$lib/supabase';

	let create = false;

	async function onboard(e: SubmitEvent) {
		const formData = new FormData(e.target as HTMLFormElement);

		let team_id = formData.get('team_id') || null;

		const { data, error } = await supabase
			.from('users')
			.insert([
				{
					id: $auth_user.id,
					name: formData.get('name') as string,
					reg_no: (formData.get('reg_no') as string).toLowerCase(),
					team: team_id
				}
			])
			.select();

		if (create) {
			const { data, error } = await supabase
				.from('teams')
				.insert([
					{
						name: formData.get('team_name') as string
					}
				])
				.select();

			if (error) return console.error(error);

			await supabase.from('users').update({
				id: $auth_user.id,
				team: data[0].team_id
			});
		}

		if (!error) location.replace('/dashboard');
		else console.log(error);
	}

	function toggle(e: Event) {
		create = e.target.getAttribute('data-create') == 'true';
	}
</script>

<div class="absolute left-0 top-0 -z-10 h-screen w-full overflow-clip">
	<img
		src="{base}/assets/Asset 1.png"
		class="gradient absolute left-1/2 top-48 -z-10 w-[512px] max-w-lg translate-x-[-50%] rotate-[50deg] xl:w-[768px]"
		alt="Gradient"
	/>
</div>
<Section class="my-12">
	<div class="m-auto max-w-xl">
		<Glass>
			<form class="flex flex-col justify-center" on:submit|preventDefault={onboard}>
				<h3 class="mb-10 text-center font-bold text-foreground">Create an account</h3>
				<div class="flex flex-col space-y-8">
					<Input
						title="Registration number"
						name="reg_no"
						class="w-full"
						placeholder="00AAA0000"
						required
					/>
					<Input title="Full name" name="name" class="w-full" placeholder="John Doe" required />
					<div class="flex space-x-4">
						<button
							on:click={toggle}
							data-primary={!create || null}
							data-create="false"
							class="w-full px-0"
							type="button"
						>
							Join a team
						</button>
						<button
							on:click={toggle}
							data-primary={create || null}
							data-create="true"
							class="w-full px-0"
							type="button"
						>
							Create a team
						</button>
					</div>
					{#if create}
						<Input
							title="Team Name"
							name="team_name"
							class="w-full"
							placeholder="Triple A Battery"
							required
						/>
					{:else}
						<Input
							title="Team ID"
							name="team_id"
							class="w-full"
							placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
							required
						/>
					{/if}

					<input
						type="submit"
						class="cursor-pointer rounded-2xl border-[1px] border-foreground bg-foreground px-12 py-3 text-center text-background"
						value="Let's Go!"
					/>
				</div>
			</form>
		</Glass>
	</div>
</Section>
