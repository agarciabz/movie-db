import { render } from '@testing-library/react';

import MovieDetail from './movie-detail';

describe('MovieDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovieDetail />);
    expect(baseElement).toBeTruthy();
  });
});
