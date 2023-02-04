import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleQuestion } from '../../../api/questionData';
import QuestionForm from '../../../components/forms/QuestionForm';

export default function EditQuestion() {
  const [editQuestion, setEditQuestion] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleQuestion(firebaseKey).then(setEditQuestion);
  }, [firebaseKey]);

  return (<QuestionForm obj={editQuestion} />);
}
