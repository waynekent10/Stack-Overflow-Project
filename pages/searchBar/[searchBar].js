import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getQuestions } from '../../api/questionData';
import QuestionCard from '../../components/QuestionCard';

export default function SearchBar() {
  const [searchQuestions, setSearchQuestions] = useState([]);
  // declares a state variable for search questions using the usestate hook. utilizing an empty array, the setsearch questions function is used to update the value of the searchquestions state
  const router = useRouter();
  const { searchBar } = router.query;

  const searchAllQuestions = () => {
    getQuestions().then((questions) => {
      const filteredQuestions = questions.filter((question) => question.title.toLowerCase().includes(searchBar) || question.tags.toLowerCase().includes(searchBar));
      setSearchQuestions(filteredQuestions);
    });
  };

  useEffect(() => {
    searchAllQuestions();
    return () => {
      setSearchQuestions([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBar]);

  return (
    <>
      <div className="d-flex flex-wrap">
        {searchQuestions.map((question) => <QuestionCard key={question.firebaseKey} questionObj={question} onUpdate={searchAllQuestions} />)}
      </div>
    </>
  );
}
