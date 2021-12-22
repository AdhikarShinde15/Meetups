import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'

const DUMMY = [{
    id: "ds",
    title: "Test Img",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    address: "sytd sdyuftg sdtfyu fsdy sd",
    description: "some desc"
}]

const HomePage = (props) => {
    return <MeetupList meetups={props.meetups}/>
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     // Fetch Data from API
//     return {
//         props: {
//             meetups: DUMMY
//         }
//     }
// }

export async function getStaticProps() {
    // Data From API
    const client = await MongoClient.connect('mongodb+srv://adhikar:kingkonggun@cluster0.uczkq.mongodb.net/meetupDatabase?retryWrites=true&w=majority')
    const meetupDatabase = client.db()
    const meetupsCollections = meetupDatabase.collection('meetups')
    const meetups = await meetupsCollections.find().toArray()
    client.close()
    return {
        props: {
            meetups: meetups.map(meetup =>({
                title:meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default HomePage
