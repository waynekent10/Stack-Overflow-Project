import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { createAnswer, updateAnswer } from '../../api/answerData';

const initialState = {
  answer: '',
};

function AnswerForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { firebaseKey } = router.query;
  const { user } = useAuth();

  useEffect(() => {
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
      updateAnswer(formInput)
        .then(() => router.push(`/question/${firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid, question_id: firebaseKey };
      createAnswer(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateAnswer(patchPayload).then(() => {
          router.push(`/question/${firebaseKey}`);
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="floatinginput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          label="Answer"
          type="text"
          placeholder="Type your answer here"
          name="answer"
          value={formInput.answer}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} An Answer</Button>
    </Form>
  );
}

AnswerForm.propTypes = {
  obj: PropTypes.shape({
    answer: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

AnswerForm.defaultProps = {
  obj: initialState,
};

export default AnswerForm;
