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

		// let team_id = formData.get('team_id') || null;

		const { data, error } = await supabase
			.from('temp_registrations')
			.insert([
				{
					// id: $auth_user.id,
					name: formData.get('name') as string,
					reg_no: (formData.get('reg_no') as string).toLowerCase(),
					phone: formData.get('phone') as string,
					block: (formData.get('block') as string).toLowerCase()
					// team: team_id
				}
			])
			.select();

		if (!error) location.replace('/whatsapp');
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
				<h3 class="mb-10 text-center font-bold text-foreground">Register</h3>
				<div class="flex flex-col space-y-8">
					<Input
						title="Registration Number"
						name="reg_no"
						class="w-full"
						placeholder="00AAA0000"
						required
					/>
					<Input title="Full Name" name="name" class="w-full" placeholder="John Doe" required />
					<Input
						title="Phone Number"
						name="phone"
						class="w-full"
						placeholder="XXXXX XXXXX"
						required
					/>
					<Input title="Block" name="block" class="w-full" placeholder="A/B/C/D1/D2" required />
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

<style lang="postcss">
	button {
		@apply rounded-2xl border-[1px] border-foreground px-4 py-3 text-center text-foreground lg:px-0;
	}
	button[data-primary] {
		@apply rounded-2xl border-[1px] border-foreground bg-foreground px-4 py-3 text-center text-background lg:px-0;
	}
</style>
