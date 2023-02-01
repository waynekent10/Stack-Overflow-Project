import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET ALL COMPANIES
const getAnswers = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/answers.json?orderBy="uid"&equalTo="${uid}"`, {
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

const createAnswer = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/answers.json`, {
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

// GET SINGLE Answer
const getSingleAnswer = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/answers/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE Answer
const deleteSingleAnswer = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/answers/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// UPDATE Answer
const updateAnswer = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/answers/${payload.firebaseKey}.json`, {
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

export {
  getAnswers,
  createAnswer,
  getSingleAnswer,
  deleteSingleAnswer,
  updateAnswer,
};
