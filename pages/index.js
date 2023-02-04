/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getQuestions } from '../api/questionData';
import { useAuth } from '../utils/context/authContext';
import QuestionCard from '../components/QuestionCard';

function Home() {
  const [questions, setQuestions] = useState([]);
  const { user } = useAuth();
  /* eslint-disable react-hooks/exhaustive-deps */
  const getAllQuestions = () => {
    getQuestions(user.uid).then(setQuestions);
  };

  useEffect(() => {
    getAllQuestions();
  }, []);
  return (
    <div className="text-center my-4">
      <Link href="/question/new" passHref>
        <Button>add a question</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {questions.map((question) => (
          <QuestionCard key={question.firebaseKey} questionObj={question} onUpdate={getAllQuestions} />
        ))}
      </div>

    </div>
  );
}

export default Home;
