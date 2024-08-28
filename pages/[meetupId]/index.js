import { useRouter } from 'next/router';

function MeetUpDetail () {
const router = useRouter();
const meetupId = router.query.meetupId;
  return <h1>{meetupId}</h1>
}




export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
            {
              params: {
                  meetupId: 'm3'
              }
          }
        ]
    }
}

export async function getStaticProps(context){
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return {
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg',
                title: 'First Meetup',
                address: 'Some address 5, 12345 Some City',
                description: 'This is a first meetup!'
            }
        }
    }
}
export default MeetUpDetail;