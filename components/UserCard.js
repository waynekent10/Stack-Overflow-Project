import React, { useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import getUsers from '../api/userData';

function UserCard({ userObj }) {
  // const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    getUsers(userObj.firebaseKey).then();
  }, [userObj.firebaseKey]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={userObj.img_url} alt={userObj.name} style={{ height: '100px', width: '100px' }} />
      <Card.Header>{userObj.name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{userObj.location}</ListGroup.Item>
        <ListGroup.Item>{userObj.questions_answered}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

UserCard.propTypes = {
  userObj: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    questions_answered: PropTypes.string,
    firebaseKey: PropTypes.string,
    img_url: PropTypes.string,
  }).isRequired,
};

export default UserCard;
