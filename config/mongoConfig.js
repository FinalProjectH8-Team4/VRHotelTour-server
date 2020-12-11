const { MongoClient } = require('mongodb')
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017'
const databaseName = process.env.DATABASE_NAME || "InepInn"
const client = new MongoClient(databaseUrl, {useUnifiedTopology: true})
client.connect()
const db = client.db(databaseName)

module.exports = db