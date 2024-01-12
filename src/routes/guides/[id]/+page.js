export async function load({ fetch, params }) {
    const id = params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(res)
    if (res.ok) {
        const guide = await res.json();
        return { props: { guide } };
    } else {
        return {
            status: res.status,
            error: new Error('Could not fetch the guides')
        };
    }
}