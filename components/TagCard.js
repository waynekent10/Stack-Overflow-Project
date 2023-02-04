import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import getTags from '../api/tagData';

function TagCard({ tagObj }) {
  const [tagDetails, setTagDetails] = useState([]);

  useEffect(() => {
    getTags(tagObj.firebaseKey).then(setTagDetails);
  }, [tagObj.firebaseKey]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Link href={`/tag/${tagObj.firebaseKey}`}>{tagDetails.tag}</Card.Link>
        <Card.Text>{tagObj.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

TagCard.propTypes = {
  tagObj: PropTypes.shape({
    tag: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

export default TagCard;
