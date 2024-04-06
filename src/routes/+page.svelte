<script>
	import Button from '$lib/components/Button.svelte';
	import Glass from '$lib/components/Glass.svelte';
	import Section from '$lib/components/Section.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>FOSSit '24</title>
</svelte:head>

<Section>
	<img
		src="assets/Asset 4.png"
		class="gradient absolute right-[-512px] top-[-256px] z-[-100] h-[1024px] w-[1024px] rotate-[128deg]"
		alt="Gradient"
	/>
	<div class="relative mb-8 flex flex-col space-y-8 xl:flex-row xl:items-center">
		<h1>FOSSit ‘24</h1>
		<img src="{base}/logo.png" class="h-24 w-24 xl:mx-8" alt="FOSSit Logo" />
	</div>
	<h3 class="text-zinc-400">The open source Hackathon and Workshop</h3>
	<div class="flex w-fit flex-col space-y-4 xl:flex-row xl:space-x-8 xl:space-y-0">
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
		class="gradient absolute left-1/2 top-1/2 z-[-100] h-screen translate-x-[-50%] translate-y-[-50%]"
		alt="Gradient"
	/>
	<Glass>
		<div class="absolute bottom-0 right-0 h-1/3 w-1/2 rounded-tl-3xl bg-white"></div>
		<div class="mb-24 max-w-2xl">
			<h4 class="text-foreground">Contribute to real projects</h4>
			<h4>Embark your journey by contributing to projects built by the linux club</h4>
		</div>
		<a class="font-bold text-foreground" href="{base}/">Take a peek -</a>
	</Glass>
	<div class="mt-4 flex flex-col space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
		<Glass>
			<h4>
				<dummy class="h4 inline text-white">Compete</dummy>
				in mini contests win various goodies.
			</h4>
		</Glass>
		<Glass>
			<h4>
				<dummy class="h4 inline text-white">Implement</dummy>
				ideas made by you.
			</h4>
		</Glass>
	</div>
</Section>

<Section>
	<img
		src="{base}/assets/Asset 2.png"
		class="gradient absolute right-[-512px] top-0 z-[-100] h-[1024px] w-[1024px]"
		alt="Gradient"
	/>
	<h2 style="text-shadow: 0px 4px 84px 0px rgba(255, 255, 255, 0.85);" class="bg-transparent">
		The Timeline
	</h2>
	<div class="flex">
		<div class="ml-8 h-full xl:ml-24">
			<svg
				width="10"
				height="1024"
				viewBox="0 0 10 1590"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5 5L5.00007 1585"
					stroke="url(#paint0_linear_5_94)"
					stroke-width="20"
					stroke-linecap="round"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_5_94"
						x1="4.5"
						y1="5"
						x2="4.50007"
						y2="1585"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="white" stop-opacity="0" />
						<stop offset="0.25" stop-color="white" />
						<stop offset="0.714651" stop-color="white" />
						<stop offset="1" stop-color="#999999" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</div>
		<div class="mt-24">
			<div>
				<h4 class="mb-12 ml-24 font-bold">15th April</h4>
				<div class="mb-12 flex">
					<svg fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8 w-24 flex-shrink-0">
						<path
							d="M67.6667 14C67.6667 21.3638 73.6362 27.3333 81 27.3333C88.3638 27.3333 94.3333 21.3638 94.3333 14C94.3333 6.6362 88.3638 0.666667 81 0.666667C73.6362 0.666667 67.6667 6.6362 67.6667 14ZM0 16.5H81V11.5H0V16.5Z"
							fill="white"
						/>
					</svg>
					<p>
						Workshop, Mini Contest, Ideation Round<br />9:00am to 12:00pm
					</p>
				</div>
				<div class="mb-12 flex">
					<svg fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8 w-24 flex-shrink-0">
						<path
							d="M67.6667 14C67.6667 21.3638 73.6362 27.3333 81 27.3333C88.3638 27.3333 94.3333 21.3638 94.3333 14C94.3333 6.6362 88.3638 0.666667 81 0.666667C73.6362 0.666667 67.6667 6.6362 67.6667 14ZM0 16.5H81V11.5H0V16.5Z"
							fill="white"
						/>
					</svg>
					<p>
						Round One<br />
						2:00pm to 6:00pm
					</p>
				</div>

				<div class="mb-12 flex">
					<svg fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8 w-24 flex-shrink-0">
						<path
							d="M67.6667 14C67.6667 21.3638 73.6362 27.3333 81 27.3333C88.3638 27.3333 94.3333 21.3638 94.3333 14C94.3333 6.6362 88.3638 0.666667 81 0.666667C73.6362 0.666667 67.6667 6.6362 67.6667 14ZM0 16.5H81V11.5H0V16.5Z"
							fill="white"
						/>
					</svg>
					<p>
						Round 2 Starts
						<br />
						8:00pm
					</p>
				</div>
			</div>

			<div>
				<h4 class="mb-12 ml-24 font-bold">16th April</h4>
				<div class="mb-12 flex">
					<svg fill="none" xmlns="http://www.w3.org/2000/svg" class="w-24 flex-shrink-0">
						<path
							d="M67.6667 14C67.6667 21.3638 73.6362 27.3333 81 27.3333C88.3638 27.3333 94.3333 21.3638 94.3333 14C94.3333 6.6362 88.3638 0.666667 81 0.666667C73.6362 0.666667 67.6667 6.6362 67.6667 14ZM0 16.5H81V11.5H0V16.5Z"
							fill="white"
						/>
					</svg>
					<p>
						Round 2 Ends<br />8:00am
					</p>
				</div>
			</div>
		</div>
	</div>
</Section>

<Section>
	<div class="absolute left-0 top-[-3rem] box-content h-full w-full overflow-clip pb-64">
		<img
			src="{base}/assets/Asset 1.png"
			class="gradient absolute left-1/2 top-0 z-[-100] w-[1024px] max-w-lg translate-x-[-50%] rotate-[50deg]"
			alt="Gradient"
		/>
	</div>
	<div class="relative mb-12 flex items-center">
		<h1>Get started now.</h1>
	</div>
	<div class="flex w-fit flex-col space-y-4 xl:flex-row xl:space-x-8 xl:space-y-0">
		<Button href="{base}/" primary>Get started</Button>
		<Button href="{base}/">Learn more</Button>
	</div>
</Section>
