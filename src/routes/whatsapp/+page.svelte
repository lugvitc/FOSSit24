<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Glass from '$lib/components/Glass.svelte';
	import { base } from '$app/paths';
</script>

<Section class="my-12">
	<div class="m-auto max-w-xl">
		<Glass class="justify-center">
			<div class="flex w-full flex-col justify-center">
				<h3 class="text-center text-white">Join Whatsapp Group</h3>
				<img src="{base}/whatsapp.jpeg" class="p-12" alt="whatsapp group qr" />
				<a
					href="https://chat.whatsapp.com/GagcQHkL0qo2HyhL4N1k6p"
					class="w-full text-center text-white"
				>
					Join Whatsapp Link
				</a>
			</div>
		</Glass>
	</div>
</Section>
