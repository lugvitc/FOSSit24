<script lang="ts">
	import Glass from '$lib/components/Glass.svelte';
	import Section from '$lib/components/Section.svelte';
	import Input from '$lib/components/Input.svelte';
	import { user, auth_user, team } from '$lib/stores';
	import { onMount } from 'svelte';
	import supabase from '$lib/supabase';

	interface TeamMembers {
		name: string;
		reg_no: string;
	}
	let team_members: TeamMembers[] = [];
	let isContentVisible = false;
	let buttonText: string = 'Copy Team ID';
	let copied = false;

	function toggleContent() {
		isContentVisible = !isContentVisible;
		buttonText = isContentVisible ? 'Copied!' : 'Copy Team ID';
		copyToClipboard();
		setTimeout(() => {
			buttonText = 'Copy Team ID';
		}, 3000);
	}

	function copyToClipboard() {
		const textToCopy = $user.team;
		navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				copied = true;
				setTimeout(() => {
					copied = false;
				}, 2000);
			})
			.catch((error) => {
				console.error('Error copying to clipboard:', error);
			});
	}

	async function logout() {
		const { error } = await supabase.auth.signOut();
		location.reload();
	}

	async function leaveTeam() {
		const { error } = await supabase
			.from('users')
			.update({ id: $user.id, team: null })
			.eq('id', $user.id);
		if (error) {
			console.log('Error abandoning friends:', error);
		}
		if (!error) location.replace('/dashboard');
	}
	async function joinTeam(e: SubmitEvent) {
		const formData = new FormData(e.target as HTMLFormElement);

		let team_id = formData.get('team_id') || null;
		console.log(team_id);

		const { data, error } = await supabase
			.from('users')
			.update({ team: team_id })
			.eq('id', $user.id)
			.select();
		if (error) {
			console.log(error);
		}
		if (!error) location.replace('/dashboard');
	}

	onMount(async () => {
		if ($user.team) {
			const { data, error } = await supabase
				.from('teams')
				.select('*')
				.eq('team_id', $user.team)
				.single();

			if (error) {
				console.error('Error fetching teams:', error.message);
				return;
			}

			if (data) {
				team.set(data);
				console.log(data);
			}

			const members = await supabase
				.from('users')
				.select('name, reg_no')
				.eq('team', $user.team)
				.neq('id', $user.id);
			team_members = members.data;
			console.log(team_members);
		}
	});
</script>

<Section>
	<Glass>
		<div
			class="flex flex-col justify-center space-y-12 md:flex-row md:justify-normal md:space-x-12"
		>
			<div class="flex flex-col">
				<img
					src={$auth_user.user_metadata.avatar_url}
					class="mb-4 ml-auto mr-auto max-w-64 rounded-full"
					alt="user avatar"
				/>
				<h4 class="text-center text-foreground">{$user.name}</h4>
				<p class="text-center uppercase">{$user.reg_no}</p>
				<a
					class="text-center"
					href="https://github.com/{$auth_user.user_metadata.preferred_username}/"
					>@{$auth_user.user_metadata.preferred_username}</a
				>
			</div>
			<div class="h-full w-full">
				<div class="mb-4 space-y-4">
					{#if $user.team}
						<h4 class="text-foreground">{$team.name} - {$team.points} points</h4>
						<p>Team Members</p>
						<ul>
							{#each team_members as member}
								<li>{member.name} - {member.reg_no}</li>
							{/each}
						</ul>
						<button class="w-full" on:click={toggleContent}>
							{buttonText}
						</button>

						<div
							class="bottom-12 right-12 flex flex-col space-y-4 md:absolute md:flex-row md:space-x-4 md:space-y-0"
						>
							<button on:click={logout}>Logout</button>
							<button class="border-0 bg-negative text-background" on:click={leaveTeam}
								>Leave Team</button
							>
						</div>
					{:else}
						<form
							class="flex flex-col justify-center space-y-4"
							on:submit|preventDefault={joinTeam}
						>
							<Input
								title="Enter Team ID to get started"
								name="team_id"
								class="w-full"
								placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
								required
							/>
							<input
								type="submit"
								class="cursor-pointer rounded-2xl border-[1px] border-positive bg-positive px-12 py-3 text-center text-background"
								value="Let's Go!"
							/>
						</form>
					{/if}
				</div>
			</div>
		</div></Glass
	>
</Section>
