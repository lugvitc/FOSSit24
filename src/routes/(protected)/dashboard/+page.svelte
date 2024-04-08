<script lang="ts">
	import Glass from '$lib/components/Glass.svelte';
	import Section from '$lib/components/Section.svelte';
	import { user, auth_user, team } from '$lib/stores';
	import { onMount } from 'svelte';
	import supabase from '$lib/supabase';

	let team_members: any = [];
	let isContentVisible = false;
	let buttonText: string = 'Copy Team ID';
	let copied = false;

	function toggleContent() {
		isContentVisible = !isContentVisible;
		buttonText = isContentVisible ? 'Copied!' : 'Copy Team ID';
		copyToClipboard();
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
		console.log('Why do you abandon your friends?');
	}

	onMount(async () => {
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
	});
</script>

<Section>
	<img
		src="assets/Asset 4.png"
		class="gradient absolute right-[-512px] top-[-256px] -z-10 h-[1024px] w-[1024px] rotate-[128deg]"
		alt="Gradient"
	/>

	<Glass>
		<div class="flex flex-row space-x-12">
			<div class="flex flex-col">
				<img
					src={$auth_user.user_metadata.avatar_url}
					class="mb-4 max-w-64 rounded-full"
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
			<div class="h-full">
				<div class="space-y-4">
					<h4 class="text-foreground">{$team.name} - {$team.points} points</h4>
					<p>Team Members</p>
					<ul>
						{#each team_members as member}
							<li>{member.name} - {member.reg_no}</li>
						{/each}
					</ul>
					<button on:click={toggleContent}>
						{buttonText}
					</button>
				</div>
				<div class="absolute bottom-12 right-12 flex flex-row space-x-4">
					<button on:click={logout}>Logout</button>
					<button class="border-0 bg-red-600 text-background" on:click={leaveTeam}
						>Leave Team</button
					>
				</div>
			</div>
		</div>
	</Glass>
</Section>
