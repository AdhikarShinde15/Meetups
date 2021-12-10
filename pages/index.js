import MeetupList from '../components/meetups/MeetupList'

const DUMMY = [{
    id: "ds",
    title: "Test Img",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    address: "sytd sdyuftg sdtfyu fsdy sd",
    description: "some desc"
}]

const HomePage = () => {
    return <MeetupList meetups={DUMMY}/>
}

export async function getStaticProps() {
    // Data From API
    return {
        props: {
            meetups: DUMMY
        }
    }
}

export default HomePage
