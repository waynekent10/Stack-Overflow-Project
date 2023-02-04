// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { getQuestions } from '../../api/questionData';

// export default function ViewQuestion() {
//   const [questionDetails, setQuestionDetails] = useState({});
//   const router = useRouter();

//   // TODO: grab firebaseKey from url
//   const { firebaseKey } = router.query;

//   // TODO: make call to API layer to get the data
//   useEffect(() => {
//     getQuestions(firebaseKey).then(setQuestionDetails);
//   }, [firebaseKey]);
// };
