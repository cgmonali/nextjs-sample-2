import { useRouter } from 'next/router';

function MeetUpDetail () {
const router = useRouter();
const meetupId = router.query.meetupId;
  return <h1>{meetupId}</h1>
}

export default MeetUpDetail;