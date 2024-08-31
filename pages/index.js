import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
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
    const client = await MongoClient.connect("mongodb+srv://monalicg2407:MdAI8yK7oAeDJeV2@cluster0.ltq9m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();
    client.close();


    return {
        props: {
            DUMMY_MEETUPS: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}
export default HomePage;