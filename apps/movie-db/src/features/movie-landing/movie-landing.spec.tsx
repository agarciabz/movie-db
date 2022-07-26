import { render } from '@testing-library/react';

import MovieLanding from './movie-landing';

describe('MovieLanding', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovieLanding />);
    expect(baseElement).toBeTruthy();
  });
});
