import NewMeetupForm from '@/components/meetups/NewMeetupForm'

function NewMeetUpPage () {
function addMeetUpHandler (meetupData) {
    console.log(meetupData)
}



  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />
}

export default NewMeetUpPage;