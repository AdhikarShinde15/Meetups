import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import {useRouter} from 'next/router'

const NewMeetupPage = () => {
    const router = useRouter()
    const addMeetups = async(meetupData) => {
        const response = await fetch('/api/new-meetups', {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        const data = await response.json()
        router.push('/')
    }
    return <NewMeetupForm  onAddMeetup={addMeetups}/>
}

export default NewMeetupPage
