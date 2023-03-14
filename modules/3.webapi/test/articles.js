const app = require('../src/index')
const request = require('supertest')
const assert = require('assert');
const db = require('../src/db')
const {response} = require("express");


describe('Articles', function () {
    it('Get all articles', function () {
        request(app)
            .get('/articles')
            .expect('Content-Type', /json/)
            .expect(200)
    })

    it('Get article by ID', function () {
        const articleId = '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b'
        return request(app)
            .get('/articles/' + articleId)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                assert(response.body.id, articleId)
            })
    })

    it('Post article', function () {

        const newArticle = {
            title: "A great article",
            content: "Wonderful content",
            author: "Maxime Pires"
        }

        db.articles.push(newArticle)

        request(app)
            .get('/articles')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                assert(response.body.title, newArticle.title)
                assert(response.body.content, newArticle.content)
                assert(response.body.author, newArticle.author)
            })
    })
})