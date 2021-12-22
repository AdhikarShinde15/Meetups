import { MongoClient } from "mongodb"

const handler = async (req, res) => {
    if (req.method === 'POST') {
       const data = req.body
       const client = await MongoClient.connect('mongodb+srv://adhikar:kingkonggun@cluster0.uczkq.mongodb.net/meetupDatabase?retryWrites=true&w=majority')
       const meetupDatabase = client.db()
       const meetupsCollections = meetupDatabase.collection('meetups')
       const result = await meetupsCollections.insertOne(data)
       console.log(result)
       client.close()
       res.status(201).json({message: 'Meetup Inserted'})
    }
    return 
}

export default handler
