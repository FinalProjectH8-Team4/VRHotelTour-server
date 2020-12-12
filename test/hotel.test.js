const supertest = require('supertest')
const app = require('../app')
const request = supertest(app)
const testPayload = require('./payload.test.json')


describe('Test GET Hotel /', () => {
    it('Test get all hotels', async (done) => {
        const res = await request.get("/")
        expect(res.status).toBe(200)
        expect(res.body).toEqual(expect.arrayContaining([
            expect.objectContaining({
                _id: expect.any(String),
                name: expect.any(String),
                room_type: expect.any(Array),
                facilities: expect.any(Array)
            })
        ]))
        done()
    })
})

describe('Test GET Hotel By ID /:id', () => {
    it('Test get hotel by ID success', async (done) => {
        let id = '5fd304867e7b384e1eac9345'
        const res = await request.get(`/${id}`)
        expect(res.status).toBe(200)
        expect(res.body).toEqual(expect.objectContaining({
            _id: expect.any(String),
            name: expect.any(String),
            room_type: expect.any(Array),
            facilities: expect.any(Array)
        }))
        done()
    })

    it('Test get hotel by ID failed, wrong ID', async (done) => {
        const id = '123456abcdef'
        const res = await request.get(`/${id}`)
        expect(res.status).toBe(404)
        expect(res.body).toEqual(expect.objectContaining({
            msg: expect.any(String)
        }))
        done()
    })

    it('Test get hotel by ID failed, no ID', async (done) => {
        const id = null
        const res = await request.get(`/${id}`)
        expect(res.status).toBe(500)
        expect(res.body).toEqual(expect.objectContaining({
            msg: expect.any(String)
        }))
        done()
    })
})
