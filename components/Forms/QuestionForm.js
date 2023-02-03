import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap/';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Button } from 'bootstrap';
import { createQuestion, updateQuestion } from '../../api/questionData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  question: '',
  details: '',
  attempts: '',
  tags: '',
  submit_time: '',
  firebaseKey: '',
};

function QuestionForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  // const [questions, setQuestions] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    // getQuestions(user).then(setQuestions);
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateQuestion(formInput)
        .then(() => router.push('/question'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createQuestion(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateQuestion(patchPayload).then(() => {
          router.push('question');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="floatinginput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          label="Title"
          type="text"
          placeholder="Be specific and imagine you`re asking a question to another person."
          name="title"
          value={formInput.title}
          onCHange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="floatinginput1">
        <Form.Label>Details</Form.Label>
        <Form.Control
          label="Details"
          type="text"
          placeholder="What arethe details of your problem?"
          name="details"
          value={formInput.details}
          onCHange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="floatinginput1">
        <Form.Label>Attempts</Form.Label>
        <Form.Control
          label="Attempts"
          type="text"
          placeholder="What did you try and what were you expecting?"
          name="attempts"
          value={formInput.attempts}
          onCHange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="floatinginput1">
        <Form.Label>Tags</Form.Label>
        <Form.Control
          label="Tags"
          type="text"
          placeholder="Add tags to describe what your question is about."
          name="tags"
          value={formInput.tags}
          onCHange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} A Question</Button>
    </Form>
  );
}

QuestionForm.propTypes = {
  obj: PropTypes.shape({
    question: propTypes.string,
    details: propTypes.string,
    attempts: propTypes.string,
    tags: propTypes.string,
    firebaseKey: propTypes.string,
  }),
};

QuestionForm.defaultProps = {
  obj: initialState,
};

export default QuestionForm;
