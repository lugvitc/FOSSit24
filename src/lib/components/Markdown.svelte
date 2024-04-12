<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	const styles = `
<style lang="postcss">
    .readme-container summary {
        cursor: pointer;
        text-decoration: underline;
    }

    .readme-container hr {
        color: #bbb;
        background-color: #bbb;
        height: 1px;
        flex: 0 1 auto;
        padding: 0;
        border: none;
        @apply mb-8
    }

    .readme-container .hljs-operator {
        color: #868686;
    }

    .readme-container a {
        color: #0366d6;
        text-decoration: none;
        @apply text-sm
    }

    .readme-container a:visited {
        color: #0366d6;
    }

    .readme-container a:hover {
        color: #0366d6;
        text-decoration: underline;
    }

    .readme-container pre {
        background-color: #f6f8fa;
        border-radius: 3px;
        font-size: 85%;
        line-height: 1.45;
        overflow: auto;
        padding: 16px;
    }

    .readme-container code {
        background: linear-gradient(190deg, #ffffff -50%, rgba(155, 155, 155, 2) 100%);
        border-radius: 3px;
        font-size: 85%;
        margin: 0;
        word-wrap: break-word;
        padding: .2em .4em;
        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
    }

    .readme-container pre>code {
        background: transparent;
        border: 0;
        display: inline;
        line-height: inherit;
        margin: 0;
        overflow: visible;
        padding: 0;
        word-wrap: normal;
        font-size: 100%;
    }

    .readme-container blockquote {
        margin-left: 30px;
        margin-top: 0px;
        margin-bottom: 16px;
        border-left-width: 3px;
        padding: 0 1em;
        border-left: 4px solid #e8e8e8;
        padding-left: 15px;
        font-size: 18px;
        letter-spacing: -1px;
        font-style: italic;
        @apply text-foreground;
    }

    .readme-container blockquote * {
        font-style: normal !important;
        letter-spacing: 0;
        @apply text-zinc-400 !important
    }

    .readme-container table {
        border-spacing: 2px;
        display: block;
        font-size: 14px;
        overflow: auto;
        width: 100%;
        margin-bottom: 16px;
        border-spacing: 0;
        border-collapse: collapse;
    }

    .readme-container td {
        padding: 6px 13px;
        border: 1px solid #dfe2e5;
    }

    .readme-container th {
        font-weight: 600;
        padding: 6px 13px;
        border: 1px solid #dfe2e5;
    }

    .readme-container tr {
        background-color: #fff;
        border-top: 1px solid #c6cbd1;
    }

    .readme-container table tr:nth-child(2n) {
        background-color: #f6f8fa;
    }

    .readme-container img {
        max-width: 100%;
    }

    .readme-container p {
        line-height: 24px;
        font-weight: 400;
        font-size: 16px;
        @apply text-foreground
    }

    .readme-container ul {
        margin-top: 0;
    }

    .readme-container li {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        @apply text-foreground;
    }

    .readme-container li+li {
        margin-top: 0.25em;
    }

    .readme-container * {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        @apply text-foreground;
    }

    .readme-container a:visited {
        color: #0366d6;
    }

    .readme-container h1,
    .readme-container h2,
    .readme-container h3 {
        border-bottom: 1px solid #eaecef;
        @apply text-foreground my-8;
    }

	.readme-container h1 {
		font-size: 3rem;
	}

	.readme-container h2 {
		font-size: 2rem;
	}

	.readme-container pre {
	  background-color: #1e1e2e; /* Crust */
	  color: #cdd6f4; /* Text */
	  padding: 1rem;
	  border-radius: 0.5rem;
	  font-family: monospace;
	  overflow-x: auto;
	}

	.readme-container pre code {
	  color: #cdd6f4; /* Text */
	}

    .readme-container code>* {
        font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace !important;
    }
</style>
`;

	let content: string;
	let className: string = '';
	export { content };
	export { className as class };
</script>

<div class="readme-container {className}">
	<SvelteMarkdown source={content + styles} />
</div>
