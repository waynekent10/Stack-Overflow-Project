import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { deleteSingleAnswer, getSingleAnswer } from '../../api/answerData';

export default function ViewAnswer() {
  const [answerDetails, setAnswerDetails] = useState({});
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
      <Card.Header>{answerDetails.description}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{answerDetails.timestamp}</ListGroup.Item>
      </ListGroup>
      <Link href={`/answer/edit/${answerDetails.firebaseKey}`} passHref>
        <Button variant="info" className="m-2">EDIT</Button>
      </Link>
      <Button variant="danger" onClick={deleteThisAnswer} className="m-2">DELETE</Button>
    </Card>
  );
}
