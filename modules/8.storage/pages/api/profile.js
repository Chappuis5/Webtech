export const db = [
    {
        username: 'maximepires4',
        email: 'maximepires4@gmail.com'
    }, {
        username: 'evanflament',
        email: 'evanflament@gmail.com'
    }, {
        username: 'sergkudinov',
        email: 'sergkudinov@gmail.com'
    }
]

export default function handler(req, res) {
    res.status(200).json(db)
}