import React, { useEffect, useState } from 'react';
import User from "./User";
import { getUser } from '../../api/getUser';
import "./UserContainer.css";


const UserContainer = () => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(1);
  const [error, setError] = useState(false);
  const [pagination, setPagination] = useState({
    previous: true,
    next: false
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(id);
        setUser(userData);
        setError(false);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    fetchUser();
  }, [id]);

  useEffect(() => {
    setPagination({
      previous: id <= 1,
      next: id >= 10
    });
  }, [id]);

  const clickHandler = (change) => {
    if (change === 'previous') {
      setId(prev => prev - 1);
    } else {
      setId(prev => prev + 1);
    }
  };

  return (
   <div className="user-container">
  <ul>
    {user && <User user={user} />}
  </ul>

  {error && <div>Error</div>}

  <div className="buttons">
    <button onClick={() => clickHandler('previous')} disabled={pagination.previous}>Previous</button>
    <button onClick={() => clickHandler('next')} disabled={pagination.next}>Next</button>
  </div>
</div>

  );
};

export default UserContainer;
