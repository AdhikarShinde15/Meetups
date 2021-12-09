import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
    const addMeetups = (meetupData) => {
        console.log(meetupData)
    }
    return <NewMeetupForm  onAddMeetup={addMeetups}/>
}

export default NewMeetupPage
