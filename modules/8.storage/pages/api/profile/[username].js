import { db } from '../profile'

export default function handler(req, res) {
    const profile = db.find( profile => profile.username === req.query.username)
    if(!profile) return res.status(401).json(`No user ${req.query.username}`)
    res.status(200).json(profile)
}