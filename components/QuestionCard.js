import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { deleteSingleQuestion, getSingleQuestion } from '../api/questionData';

function QuestionCard({ questionObj, onUpdate }) {
  const [questionDetails, setQuestionDetails] = useState([]);

  useEffect(() => {
    getSingleQuestion(questionObj.firebaseKey).then(setQuestionDetails);
  }, [questionObj.firebaseKey]);

  const deleteThisQuestion = () => {
    if (window.confirm('Delete this question?')) {
      deleteSingleQuestion(questionObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (

    <Card style={{ width: '18rem' }}>
      <Link href={`/question/${questionObj.firebaseKey}`} passHref>
        <Card.Header style={{ cursor: 'pointer' }}>{questionDetails.title}</Card.Header>
      </Link>
      <ListGroup variant="flush">
        <ListGroup.Item>{questionObj.details}</ListGroup.Item>
        <ListGroup.Item>{questionObj.attempts}</ListGroup.Item>
        <ListGroup.Item>{questionObj.tags}</ListGroup.Item>
        <ListGroup.Item>{questionObj.submit_time}</ListGroup.Item>
      </ListGroup>
      <Link href={`/question/edit/${questionObj.firebaseKey}`} passHref>
        <Button variant="info" className="m-2">EDIT</Button>
      </Link>
      <Button variant="danger" onClick={deleteThisQuestion} className="m-2">
        DELETE
      </Button>
    </Card>
  );
}

QuestionCard.propTypes = {
  questionObj: PropTypes.shape({
    title: PropTypes.string,
    details: PropTypes.string,
    attempts: PropTypes.string,
    tags: PropTypes.string,
    submit_time: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default QuestionCard;
