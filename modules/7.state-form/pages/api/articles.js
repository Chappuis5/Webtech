export const db = [{
    slug: 'best-movies',
    title: 'Best movies',
    content: 'Tenet, Blade Runner 2049, La La Land',
    author: 'Maxime Pires',
    date: '2022'
}, {
    slug: 'best-albums',
    title: 'Best albums',
    content: 'TPA (Romeo Elvis), Memoria (Jazzy Bazz)',
    author: 'Maxime Pires',
    date: '2022'
}, {
    slug: 'boring-article',
    title: 'A boring article',
    content: 'Did you know .... (too long)',
    author: 'Evan Flament',
    date: '2022'
}]

export default function handler(req, res) {
    res.status(200).json(db)
}