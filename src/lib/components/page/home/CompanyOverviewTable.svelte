<script lang="ts">
    type Overview = {
        label: string;
        data: string;
    }

    const overviews: Overview[] = [
        {
            label: "商号",
            data: "株式会社AGI"
        },
        {
            label: "資本金",
            data: "10,000,000円"
        },
        {
            label: "役員",
            data: "代表取締役  大友直樹"
        },
        {
            label: "役員",
            data: "取締役社長  佐野友昭"
        }
    ]
</script>

<table>
    <tbody>
        {#each overviews as overview}
            <tr>
                <th>{overview.label}</th>
                <td>{overview.data}</td>
            </tr>
        {/each}
    </tbody>
</table>