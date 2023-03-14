const {v4: uuidv4} = require('uuid')

const articles = require('express').Router()
const db = require('../db')

articles.route('/')
    .get((req, res) => {
        res.send(db.articles)
    })
    .post((req, res) => {
        var date = new Date()
        const currentDate = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()

        const newArticle = {
            id: uuidv4(),
            title: req.body.title,
            content: req.body.content,
            date: currentDate,
            author: req.body.author
        }

        db.articles.push(newArticle)
    })

articles.get('/:articleId', (req, res) => {
    res.send(db.articles.find(article => article.id === req.params.articleId))
})

articles.route('/:articleId/comments')
    .get((req, res) => {
        const comments = []

        for(let i = 0; i < db.comments.length; i++){
            if(db.comments[i].articleId === req.params.articleId)
                comments.push(db.comments[i])
        }

        res.send(comments)
    })
    .post( (req, res) => {
        if(db.articles.find(article => article.id === req.params.articleId)){
            const newComment = {
                id: uuidv4(),
                timestamp: Date.now(),
                content: req.body.content,
                articleId: req.params.articleId,
                author: req.body.author
            }

            db.comments.push(newComment)
        }
    })

articles.get('/:articleId/comments/:commentId', (req, res) => {
    if(db.articles.find(article => article.id === req.params.articleId)){
        res.send(db.comments.find(comment => comment.id === req.params.commentId))
    }
})

module.exports = articles;