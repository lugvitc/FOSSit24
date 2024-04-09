<script lang="ts">
	import { base } from '$app/paths';
	import Section from '$lib/components/Section.svelte';
	import Glass from '$lib/components/Glass.svelte';
	import Input from '$lib/components/Input.svelte';

	let size = '1';
</script>

<svelte:head>
	<title>Register for FOSSit '24</title>
</svelte:head>

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
			<form class="flex flex-col justify-center" action="https://fossit.tripe.one/" method="GET">
				<h3 class="mb-10 text-center font-bold text-foreground">FOSSit '24 Registration</h3>
				<div class="flex flex-col space-y-8">
					<Input
						title="VIT Chennai Events Username"
						name="username"
						class="w-full"
						placeholder="00AAA0000"
						required
					/>
					<Input
						title="VIT Chennai Events Password"
						name="password"
						class="w-full"
						type="password"
						placeholder="*******"
						required
					/>
					<p class="text-center text-white">
						Don't have an account on VIT Chennai Events? <a
							href="https://www.vitchennaievents.com/conf1/login/"
							class="underline">Make one here</a
						>
					</p>
					<div>
						<p class="font-bold text-foreground">Number of members</p>
						<select
							class="mt-2 w-full rounded-2xl border border-solid border-white bg-zinc-800 bg-opacity-30 p-4 text-foreground"
							name="team_size"
							bind:value={size}
							required
						>
							<option value="1">Solo</option>
							<option value="2">Duo</option>
							<option value="3">Trio</option>
						</select>
					</div>
					{#if size == '1'}
						<Input
							title="Full Name"
							name="team_name"
							class="w-full"
							placeholder="John Doe"
							required
						/>
						<Input
							title="Registration Number"
							name="team_members"
							class="w-full"
							placeholder="00AAA0000"
							required
						/>
					{:else}
						<Input
							title="Team Name"
							name="team_name"
							class="w-full"
							placeholder="Triple A Battery"
							required
						/>
						{#each { length: Number(size) } as _, i}
							<Input
								title="Registration Number {i + 1}"
								name="team_members"
								class="w-full"
								placeholder="00AAA0000"
								required
							/>
						{/each}
					{/if}
					<p class="text-white">
						Please note: Once you have submitted, you will be redirected to VIT Chennai Events to
						complete the payment.
					</p>
					<input
						type="submit"
						class="cursor-pointer rounded-2xl border-[1px] border-foreground bg-foreground px-12 py-3 text-center text-background"
						value="Let's Go!"
					/>
					<a href="{base}/whatsapp" class="text-center underline" target="_blank"
						>Join our WhatsApp group</a
					>
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
