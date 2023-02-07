import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'react-bootstrap/Image';
import { viewUserDetails } from '../../api/userData';

export default function ViewUser() {
  const [userDetails, setUserDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewUserDetails(firebaseKey).then(setUserDetails);
  }, [firebaseKey]);

  return (
    <>
      <title>{userDetails.name}</title>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column" />
        <div className="text-white ms-5 details">
          <h5>
            <div className="d-flex flex-column">
              <Image src={userDetails.img_url} alt={userDetails.name} style={{ height: '200px', width: '200px' }} />
            </div>
            Name: {userDetails.name}
            <br />
            Class: {userDetails.location}
            <br />
            Species: {userDetails.questions_answered}
          </h5>
          <hr />
        </div>
      </div>
    </>
  );
}
