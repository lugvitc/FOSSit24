<script lang="ts">
	import { base } from '$app/paths';
	import Section from '$lib/components/Section.svelte';
	import Glass from '$lib/components/Glass.svelte';
	import Input from '$lib/components/Input.svelte';
</script>

<div class="absolute left-0 top-0 -z-10 h-screen w-full overflow-clip">
	<img
		src="{base}/assets/Asset 1.png"
		class="gradient absolute left-1/2 top-48 -z-10 w-[512px] max-w-lg translate-x-[-50%] rotate-[50deg] xl:w-[768px]"
		alt="Gradient"
	/>
</div>
<Section class="my-12">
	<!-- <img src="{base}/logo.png" class="m-auto mb-12 h-24 w-24" alt="FOSSit Logo" /> -->
	<div class="m-auto max-w-xl">
		<Glass>
			<form class="flex flex-col justify-center">
				<h3 class="mb-10 text-center font-bold text-foreground">Create an account</h3>
				<div class="flex flex-col space-y-8">
					<Input title="Registration number" class="w-full" placeholder="00AAA0000" />
					<Input title="Name" class="w-full" placeholder="John Doe" />
					<Input title="Github username" class="w-full" placeholder="fieryalpacadev" />
					<input
						type="submit"
						class="block rounded-2xl border-[1px] border-foreground bg-foreground px-12 py-3 text-center text-background"
						value="Let's Go!"
					/>
				</div>
			</form>
		</Glass>
	</div>
</Section>
<!-- <div class="flex flex-col justify-center bg-white"> -->
<!-- 	<div class="flex w-full flex-col bg-black p-20 max-md:max-w-full max-md:px-5"> -->
<!-- 		<div -->
<!-- 			class="relative mb-36 mt-20 flex min-h-[1081px] w-[1080px] max-w-full flex-col items-center self-center overflow-hidden px-16 pb-16 max-md:my-10 max-md:px-5" -->
<!-- 		> -->
<!-- 			<img -->
<!-- 				loading="lazy" -->
<!-- 				src="{base}/assets/Asset 1.png" -->
<!-- 				class="absolute inset-0 size-full object-cover" -->
<!-- 			/> -->
<!-- 			<div class="relative flex w-[756px] max-w-full flex-col"> -->
<!-- 				<div class="flex w-64 max-w-full flex-col justify-center self-center shadow-sm"> -->
<!-- 					<img loading="lazy" src="{base}/logo.png" class="aspect-square w-full" /> -->
<!-- 				</div> -->
<!-- 				<div -->
<!-- 					class="flex flex-col rounded-[40px] border border-solid border-white px-20 py-20 backdrop-blur-[128px] max-md:max-w-full max-md:px-5" -->
<!-- 				> -->
<!-- 					<div class="mt-14 flex flex-col max-md:mt-10 max-md:max-w-full"> -->
<!-- 						<div class="text-xl font-bold text-white max-md:max-w-full">Registration Number</div> -->
<!-- 						<div -->
<!-- 							class="mt-5 items-start justify-center whitespace-nowrap rounded-3xl border border-solid border-white bg-zinc-800 bg-opacity-30 px-8 py-9 text-2xl text-zinc-400 max-md:max-w-full max-md:px-5" -->
<!-- 						> -->
<!-- 							2XBXXXXXX -->
<!-- 						</div> -->
<!-- 					</div> -->
<!-- 					<div class="mt-7 flex flex-col max-md:max-w-full"> -->
<!-- 						<div class="text-xl font-bold text-white max-md:max-w-full">Name</div> -->
<!-- 						<div -->
<!-- 							class="mt-6 items-start justify-center rounded-3xl border border-solid border-white bg-zinc-800 bg-opacity-30 px-8 py-9 text-2xl text-zinc-400 max-md:max-w-full max-md:px-5" -->
<!-- 						> -->
<!-- 							John Doe -->
<!-- 						</div> -->
<!-- 					</div> -->
<!-- 					<div class="mt-7 flex flex-col max-md:max-w-full"> -->
<!-- 						<div class="text-xl font-bold text-white max-md:max-w-full">Github Username</div> -->
<!-- 						<div -->
<!-- 							class="mt-6 items-start justify-center whitespace-nowrap rounded-3xl border border-solid border-white bg-zinc-800 bg-opacity-30 p-8 text-2xl text-zinc-400 max-md:max-w-full max-md:px-5" -->
<!-- 						> -->
<!-- 							fieryalpacadev -->
<!-- 						</div> -->
<!-- 					</div> -->
<!-- 					<div -->
<!-- 						class="mt-14 items-center justify-center rounded-3xl bg-white px-16 py-9 text-3xl text-black max-md:mt-10 max-md:max-w-full max-md:px-5" -->
<!-- 					> -->
<!-- 						Let’s Go! -->
<!-- 					</div> -->
<!-- 				</div> -->
<!-- 			</div> -->
<!-- 		</div> -->
<!-- 	</div> -->
<!-- </div> -->
