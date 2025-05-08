<script lang="ts">
	import { link } from "$lib/link";
	import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        thumbnail: string;
        title: string;
        description: string;
        footer: Snippet;
        thumbnail_alt?: string;
    } & HTMLAttributes<HTMLDivElement>;

    let { thumbnail = link("dummy_image", { detail: "300x4:3" }), title, description, footer, thumbnail_alt, ...rest }: Props = $props()
</script>

{/* ts-ignore */ null}
<wa-card with-image with-footer class="card-overview" ...rest>
    <img
      slot="image"
      src={thumbnail}
      alt={thumbnail_alt ?? ""}
    />
    <strong>{title}</strong>
    {description}<br />
    <div slot="footer" class="wa-split">
      {@render footer()}
    </div>
</wa-card>

<style>
    wa-card {
        max-width: 300px;
    }
</style>
