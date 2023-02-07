/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';
import getTags from '../api/tagData';

function TagCard({ tagObj }) {
  const [, setTagDetails] = useState([]);

  useEffect(() => {
    getTags(tagObj.firebaseKey).then(setTagDetails);
  }, [tagObj.firebaseKey]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Link href={`/tag/${tagObj.firebaseKey}`}>
          <Button variant="info">{tagObj.tag}</Button>
        </Link>
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
