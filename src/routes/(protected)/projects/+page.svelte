<script lang="ts">
	import Glass from '$lib/components/Glass.svelte';
	import Section from '$lib/components/Section.svelte';
	import { user, auth_user } from '$lib/stores';
	import { onMount } from 'svelte';
	import supabase from '$lib/supabase';
</script>
