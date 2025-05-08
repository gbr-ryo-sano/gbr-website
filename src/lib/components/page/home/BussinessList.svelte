<script lang="ts">
    import Card from "$lib/components/Card.svelte";
	import { link } from "$lib/link";
	import type { ComponentProps } from "svelte";

    const cards: (ComponentProps<typeof Card> & { href: string })[] = [
        {
            thumbnail: link("dummy_image", { detail: "400x16:9"}),
            title: "会社概要",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt tempus orci at rutrum. Donec sagittis, ex quis volutpat tincidunt",
            href: link("about")
        },
        {
            thumbnail: link("dummy_image", { detail: "400x16:9"}),
            title: "事業内容",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt tempus orci at rutrum. Donec sagittis, ex quis volutpat tincidunt",
            href: link("business")
        },
        {
            thumbnail: link("dummy_image", { detail: "400x16:9"}),
            title: "企業理念",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt tempus orci at rutrum. Donec sagittis, ex quis volutpat tincidunt",
            href: link("philosophy")
        },
        {
            thumbnail: link("dummy_image", { detail: "400x16:9"}),
            title: "採用情報",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt tempus orci at rutrum. Donec sagittis, ex quis volutpat tincidunt",
            href: link("recruit")
        },
    ]
</script>

<ul class="wa-grid">
    {#each cards as { href, ...card }}
        <Card {...card}>
            {#snippet footer()}
                <a class="wa-button" {href}>詳細を見る</a>
            {/snippet}
        </Card>
    {/each}
</ul>

