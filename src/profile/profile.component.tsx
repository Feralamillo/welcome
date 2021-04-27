import React from 'react';

import { User } from '../types/user.types';

interface Props {
  user: User;
}

export const ProfileComponent: React.FC<Props> = ({
  user: { firstName, lastName, img, food },
}) => (
  <div className='container'>
    <div className='user-profile'>
      <img src={img} alt={`${firstName} ${lastName}`} className='user-image' />
      <h1 className='title'>{`${firstName} ${lastName}`}</h1>
      <p>
        My favourite food is <span className='food'>{food}</span>
      </p>
    </div>
  </div>
);
