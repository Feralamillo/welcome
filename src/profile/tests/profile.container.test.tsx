import { render } from '@testing-library/react';
import { userApi } from '../../api/user.api';
import { User } from '../../types/user.types';

import { Profile } from '../profile.container';

const getUserInfo = jest.spyOn(userApi, 'getUser');

jest.mock('../profile.component', () => ({
  ProfileComponent: 'mock-profile-component',
}));
jest.mock('../../ui-components/loader/loader', () => ({
  Loader: 'mock-loader',
}));

describe('<Profile>', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render with data', (done) => {
    expect.assertions(1);
    const mockUser: User = {
      firstName: 'Jim',
      lastName: 'Morrison',
      food: 'Pizza',
      img: 'srcImage',
    };
    getUserInfo.mockResolvedValueOnce({
      success: true,
      result: mockUser,
    });

    const { container } = render(<Profile />);

    setTimeout(async () => {
      expect(container).toMatchSnapshot();
      done();
    });
  });

  it('should render with error', (done) => {
    expect.assertions(1);
    getUserInfo.mockResolvedValueOnce({
      success: false,
      status: 400,
    });

    const { container } = render(<Profile />);

    setTimeout(async () => {
      expect(container).toMatchSnapshot();
      done();
    });
  });

  it('should render loading', () => {
    expect.assertions(1);
    const { container } = render(<Profile />);

    expect(container).toMatchSnapshot();
  });
});
