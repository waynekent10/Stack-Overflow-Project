import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import getTags from '../api/tagData';
import TagCard from '../components/TagCard';
// import { useAuth } from '../utils/context/authContext';

export default function ViewTags() {
  const [tags, setTags] = useState([]);
  //   const { user } = useAuth;

  const getAllTags = () => {
    getTags().then(setTags);
  };

  useEffect(() => {
    getAllTags();
  }, []);

  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search..."
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <div className="d-flex flex-wrap">
        {tags.map((tag) => (
          <TagCard key={tag.firebaseKey} tagObj={tag} onUpdate={getAllTags} />
        ))}
      </div>
    </div>
  );
}
