<script>
	import Button from '$lib/components/Button.svelte';
	import Glass from '$lib/components/Glass.svelte';
	import Section from '$lib/components/Section.svelte';
	import { base } from '$app/paths';
</script>

<Section>
	<div class="relative mb-12 flex items-center">
		<h1>FOSSit ‘24</h1>
		<img src="{base}/logo.png" class="mx-16 h-32" />
		<img
			src="assets/Asset 4.png"
			class="absolute right-[-600px] top-[-400px] z-[-100] w-[1280px] rotate-[128deg]"
		/>
	</div>
	<h3 class="text-zinc-400">The open source Hackathon and Workshop</h3>
	<div class="flex space-x-8">
		<Button href="{base}/" primary>Get started</Button>
		<Button href="{base}/">Learn more</Button>
	</div>
</Section>

<Section>
	<h2 class="mb-4">Open the doors to open source</h2>
	<h4>
		Collaborative learning meets hands-on experience
		<br />
		in a dynamic exploration of Git, coding challenges,
		<br />
		and project development
	</h4>
</Section>

<Section>
	<img
		src="{base}/assets/Asset 3.png"
		class="absolute left-1/2 top-1/2 z-[-100] h-screen translate-x-[-50%] translate-y-[-50%]"
	/>
	<Glass>
		<div class="absolute bottom-0 right-[-100px] h-[300px] w-[600px] rounded-tl-3xl bg-white"></div>
		<div class="mb-24 max-w-2xl">
			<h4 class="text-foreground">Contribute to real projects</h4>
			<h4>Embark your journey by contributing to projects built by the linux club</h4>
		</div>
		<a class="font-bold text-foreground" href="{base}/">Take a peek -</a>
	</Glass>
	<div class="mt-4 flex space-x-4">
		<Glass>
			<h4>
				<n class="text-3xl text-white">Compete</n>
				in mini contests win various goodies.
			</h4>
		</Glass>
		<Glass>
			<h4>
				<n class="text-3xl text-white">Implement</n>
				ideas made by you.
			</h4>
		</Glass>
	</div>
</Section>

<Section>
	<img
		src="{base}/assets/Asset 1.png"
		class="absolute bottom-[-950px] left-1/2 z-[-100] w-[1150px] translate-x-[-50%] rotate-[50deg]"
	/>
	<div
		class="absolute bottom-[-950px] left-1/2 z-[-100] h-[1150px] w-[1150px] translate-x-[-50%] bg-gradient-to-b from-transparent to-black to-70%"
	></div>
	<div class="relative mb-12 flex items-center">
		<h1>Get started now.</h1>
	</div>
	<div class="flex space-x-8">
		<Button href="{base}/" primary>Get started</Button>
		<Button href="{base}/">Learn more</Button>
	</div>
</Section>
