import React, { useEffect, useState } from 'react';

import { userApi } from '../api/user.api';
import { User } from '../types/user.types';
import { Loader } from '../ui-components/loader/loader';
import { ProfileComponent } from './profile.component';

import './profile.scss';

export const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isFetching, setFetching] = useState(true);

  const fetchUser = async () => {
    const response = await userApi.getUser();

    if (response.success) {
      setUser(response.result);
    } else {
      /* @TODO: error management */
      setUser(null);
    }

    setFetching(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isFetching) {
    return (
      <div className='container'>
        <Loader />
      </div>
    );
  }

  if (!user) {
    return (
      <div className='container'>
        <div>Sorry...there has been an error</div>
      </div>
    );
  }

  return <ProfileComponent user={user} />;
};
