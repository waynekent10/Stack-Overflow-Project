import React, { useEffect, useState } from 'react';
import getCompanies from '../api/companyData';
import CompanyCard from '../components/CompanyCard';

export default function ViewCompanies() {
  const [companies, setCompanies] = useState([]);

  const getAllCompanies = () => {
    getCompanies().then(setCompanies);
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {companies.map((company) => (
          <CompanyCard key={company.firebasekey} companyObj={company} onUpdate={getAllCompanies} />
        ))}
      </div>
    </div>
  );
}
