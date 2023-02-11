import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { deleteSingleAnswer, getSingleAnswer } from '../api/answerData';

function AnswerCard({ answerObj }) {
  const [answerDetails, setAnswerDetails] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleAnswer(firebaseKey).then(setAnswerDetails);
  }, [firebaseKey]);

  const deleteThisAnswer = () => {
    if (window.confirm('Delete this answer?')) {
      deleteSingleAnswer(answerDetails.firebaseKey).then(() => {
        router.push(`/question/${firebaseKey}`);
      });
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>{answerObj.description}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{answerObj.submit_time}</ListGroup.Item>
      </ListGroup>
      <Link href={`/answer/edit/${answerObj.firebaseKey}`} passHref>
        <Button variant="info" className="m-2">EDIT</Button>
      </Link>
      <Button variant="danger" onClick={deleteThisAnswer} className="m-2">DELETE</Button>
    </Card>
  );
}
AnswerCard.propTypes = {
  answerObj: PropTypes.shape({
    description: PropTypes.string,
    submit_time: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
export default AnswerCard;
