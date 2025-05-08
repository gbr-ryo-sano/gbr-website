<script lang="ts">
	import { link } from "$lib/link";
	import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        thumbnail: string;
        title: string;
        description: string;
        footer?: Snippet;
        thumbnail_alt?: string;
    }

    let { thumbnail = link("dummy_image", { detail: "300x4:3" }), title, description, footer, thumbnail_alt }: Props = $props()
</script>

<!-- @ts-ignore -->
<wa-card with-image with-footer class="card-overview">
    <img
      slot="image"
      src={thumbnail}
      alt={thumbnail_alt ?? ""}
    />
    <strong>{title}</strong><br />
    {description}<br />
    {#if footer}
        <div slot="footer" class="wa-split">
        {@render footer()}
        </div>
    {/if}
</wa-card>

<style>
    wa-card {
        max-width: 300px;
    }
</style>
