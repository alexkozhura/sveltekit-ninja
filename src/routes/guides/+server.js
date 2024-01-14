export function GET() {
    // connect to db and fetch data
    const guides = [
        { id: 1, title: 'Guide 1' },
        { id: 2, title: 'Guide 2' },
        { id: 3, title: 'Guide 3' }
    ];

    return {
        body: { guides }
    };
}