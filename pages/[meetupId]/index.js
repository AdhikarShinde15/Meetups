import MeetupDetail from "../../components/meetups/MeetupDetail"
import { MongoClient, ObjectId } from "mongodb"

const MeetupDetails = (props) => {
    return <MeetupDetail
    image={props.meetupData.image}
    title={props.meetupData.title}
    address={props.meetupData.address}
    description={props.meetupData.description}
    />
}

export const getStaticPaths = async () => {
    const client = await MongoClient.connect('mongodb+srv://adhikar:kingkonggun@cluster0.uczkq.mongodb.net/meetupDatabase?retryWrites=true&w=majority')
    const meetupDatabase = client.db()
    const meetupsCollections = meetupDatabase.collection('meetups')
    const meetups = await meetupsCollections.find({}, {_id: 1}).toArray()
    client.close()
    return {
        fallback: false,
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
    }
}

export async function getStaticProps (context)  {
//   Fetch Data
const meetupId = context.params.meetupId;
const client = await MongoClient.connect('mongodb+srv://adhikar:kingkonggun@cluster0.uczkq.mongodb.net/meetupDatabase?retryWrites=true&w=majority')
const meetupDatabase = client.db()
const meetupsCollections = meetupDatabase.collection('meetups')
const meetup = await meetupsCollections.findOne({_id: ObjectId(meetupId)})
client.close()
return {
    props: {
        meetupData: {
            id: meetup._id.toString(),
            title: meetup.title,
            image: meetup.image,
            address: meetup.address,
            description: meetup.description
        }
    }
}
}

export default MeetupDetails
