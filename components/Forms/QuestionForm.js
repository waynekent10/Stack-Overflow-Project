import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createQuestion, updateQuestion } from '../../api/questionData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  title: '',
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
        .then(() => router.push('/'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createQuestion(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateQuestion(patchPayload).then(() => {
          router.push('/');
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
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="floatinginput1">
        <Form.Label>Details</Form.Label>
        <Form.Control
          label="Details"
          type="text"
          placeholder="What are the details of your problem?"
          name="details"
          value={formInput.details}
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} A Question</Button>
    </Form>
  );
}

QuestionForm.propTypes = {
  obj: PropTypes.shape({
    question: PropTypes.string,
    details: PropTypes.string,
    attempts: PropTypes.string,
    tags: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

QuestionForm.defaultProps = {
  obj: initialState,
};

export default QuestionForm;
