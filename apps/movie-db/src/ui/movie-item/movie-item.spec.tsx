import { render } from '@testing-library/react';

import MovieItem from './movie-item';

describe('MovieItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovieItem />);
    expect(baseElement).toBeTruthy();
  });
});
