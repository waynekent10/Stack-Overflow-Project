import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { deleteSingleQuestion, getSingleQuestion } from '../../api/questionData';
import AnswerForm from '../../components/forms/AnswerForm';

export default function ViewQuestion() {
  const [questionDetails, setQuestionDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleQuestion(firebaseKey).then(setQuestionDetails);
  }, [firebaseKey]);

  const deleteThisQuestion = () => {
    if (window.confirm('Delete this question?')) {
      deleteSingleQuestion(questionDetails.firebaseKey).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Header>{questionDetails.title}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{questionDetails.details}</ListGroup.Item>
            <ListGroup.Item>{questionDetails.attempts}</ListGroup.Item>
            <ListGroup.Item>{questionDetails.tags}</ListGroup.Item>
            <ListGroup.Item>{questionDetails.submit_time}</ListGroup.Item>
          </ListGroup>
          <Link href={`/question/edit/${questionDetails.firebaseKey}`} passHref>
            <Button variant="info" className="m-2">
              EDIT
            </Button>
          </Link>
          <Button variant="danger" onClick={deleteThisQuestion} className="m-2">
            DELETE
          </Button>
        </Card>
      </div>
      <div><AnswerForm /></div>
    </>
  );
}
