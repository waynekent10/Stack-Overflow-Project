import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET ALL QUESTIONS
const getQuestions = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/questions.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createQuestion = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/questions.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SINGLE QUESTION
const getSingleQuestion = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/questions/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE QUESTION
const deleteSingleQuestion = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/questions/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// UPDATE QUESTION
const updateQuestion = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/questions/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getQuestionAnswers = (questionFirebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/answers.json?orderBy="question_id"&equalTo="${questionFirebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getQuestions,
  createQuestion,
  getSingleQuestion,
  deleteSingleQuestion,
  updateQuestion,
  getQuestionAnswers,
};
