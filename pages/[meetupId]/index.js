import { useRouter } from 'next/router';
import { MongoClient,ObjectId } from 'mongodb';
function MeetUpDetail (props) {
const router = useRouter();
const meetupId = router.query.meetupId;
  return <>
  <h3>{props.meetupData.title}</h3>
    <img src={props.meetupData.image} alt={props.meetupData.title} style={{width:'100%'}}/>
    <p>{props.meetupData.address}</p>
    <p>{props.meetupData.description}</p>
  
  </>
}




export async function getStaticPaths(){
    const client = await MongoClient.connect("mongodb+srv://monalicg2407:MdAI8yK7oAeDJeV2@cluster0.ltq9m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find({},{_id:1}).toArray();

    client.close();
    
    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {meetupId: meetup._id.toString()}
        }))
    }
}

export async function getStaticProps(context){
    // fetch data for a single meetup
    const client = await MongoClient.connect("mongodb+srv://monalicg2407:MdAI8yK7oAeDJeV2@cluster0.ltq9m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    // Correctly create an ObjectId using the value from context.params.meetupId
    const id = new ObjectId(context.params.meetupId);

    // Find the document with the matching ObjectId
    const selectedMeetup = await meetupsCollection.findOne({ _id: id });

    console.log(id,'1');  // Logs the ObjectId
    console.log(selectedMeetup,'2');  // Logs the document found in the collection





    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
        }
    }
}
export default MeetUpDetail;