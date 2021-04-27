import { render } from '@testing-library/react';
import { User } from '../../types/user.types';
import { ProfileComponent } from '../profile.component';

describe('<ProfileComponent >', () => {
  it('should render the component', () => {
    const mockUser: User = {
      firstName: 'Jim',
      lastName: 'Morrison',
      food: 'Pizza',
      img: 'srcImage',
    };
    const { container } = render(<ProfileComponent user={mockUser} />);

    expect(container).toMatchSnapshot();
  });
});
