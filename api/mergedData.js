import { getQuestionAnswers, getSingleQuestion } from './questionData';

const viewQuestionDetails = (questionFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleQuestion(questionFirebaseKey), getQuestionAnswers(questionFirebaseKey)])
    .then(([questionObject, answersArray]) => {
      resolve({ ...questionObject, members: answersArray });
    }).catch((error) => reject(error));
});

export default viewQuestionDetails;
