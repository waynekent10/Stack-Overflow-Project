// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import { getSingleAnswer } from '../../../api/answerData';

// export default function EditAnswer() {
//   const [editSingleAnswer, setEditAnswer] = useState({});
//   const router = useRouter();
//   const { firebaseKey } = router.query;

//   useEffect(() => {
//     getSingleAnswer(firebaseKey).then(setEditAnswer);
//   }, [firebaseKey]);

//   return (<AnswerForm obj={editSingleAnswer} />);
// }
