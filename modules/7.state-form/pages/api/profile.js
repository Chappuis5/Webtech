export const db = [
    {
        username: 'maximepires',
        email: 'maximepires4@gmail.com'
    }, {
        username: 'evanflament',
        email: 'evanflament@gmail.com'
    }
]

export default function handler(req, res) {
    res.status(200).json(db)
}