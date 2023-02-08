/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';
import getCompanies from '../api/companyData';

function CompanyCard({ companyObj }) {
  const [, setCompanyDetails] = useState([]);

  useEffect(() => {
    getCompanies(companyObj.firebaseKey).then(setCompanyDetails);
  }, [companyObj.firebaseKey]);

  return (
    <Card style={{ width: '200px' }}>
      <Card.Img style={{ height: '200px', width: '200px' }} variant="top" src={companyObj.img_url} />
      <Card.Body>
        <Card.Title>{companyObj.company_name}</Card.Title>
        <Card.Text>
          {companyObj.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{companyObj.location}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
CompanyCard.propTypes = {
  companyObj: PropTypes.shape({
    company_name: PropTypes.string,
    img_url: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

export default CompanyCard;
