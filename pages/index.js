import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS =[
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!'

    },
    {
        id: 'm3',
        title: 'A Third Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg',
        address: 'Some address 15, 12345 Some City',
        description: 'This is a third meetup!'
    }
]


function HomePage (props){

return <><MeetupList meetups={props.DUMMY_MEETUPS}/></>
}

export async function getStaticProps(){
    // fetch data from an API
    return {
        props: {
            DUMMY_MEETUPS: DUMMY_MEETUPS
        },
        revalidate: 1
    }
}
export default HomePage;