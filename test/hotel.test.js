// Test JEST
const {MongoClient} = require('mongodb')
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017'
const Hotel = require('../models/index')
let connection;
let db;

beforeAll(async () => {
    connection = await MongoClient.connect(databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    db = await connection.db();
});

afterAll(async () => {
    await connection.close();
});

describe('Test GET Hotel /', () => {
    it('Test get all hotels', async (done) => {
        const hotel = await Hotel.findAll()
        expect(hotel).toEqual(expect.arrayContaining([
            expect.objectContaining({_id: expect.any(String)}),
            expect.objectContaining({name: expect.any(String)}),
            expect.objectContaining({room_type: expect.any(Array)}),
            expect.objectContaining({facilities: expect.any(Array)})
        ]))
    })
})
