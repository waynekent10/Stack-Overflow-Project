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
    <Card className="display: flex, justify-items: flex-end" style={{ width: '75' }}>
      <Card.Img
        variant="top"
        src={companyObj.img_url}
        style={{ height: '100px', width: '100px' }}
      />
      <Card.Body>
        <Card.Title>{companyObj.company_name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>📍{companyObj.location}</ListGroup.Item>
        <ListGroup.Item p class="text-center">{companyObj.description}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={companyObj.website}>Company Website</Card.Link>
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
    website: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};

export default CompanyCard;
