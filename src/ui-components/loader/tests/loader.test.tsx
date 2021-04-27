import { render } from '@testing-library/react';

import { Loader } from '../loader';

describe('<Loader />', () => {
  it('should render the component', () => {
    const { container } = render(<Loader />);

    expect(container).toMatchSnapshot();
  });
});
