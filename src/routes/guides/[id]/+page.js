import { redirect } from '@sveltejs/kit';

export async function load({ fetch, params }) {
    const id = params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (res.ok) {
        const guide = await res.json();
        return { props: { guide } };
    } else {
        throw redirect(301, '/guides')
    }
}