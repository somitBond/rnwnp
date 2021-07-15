import { render } from '@testing-library/react';

import FeaturesScreensMusic from './features-screens-music';

describe('FeaturesScreensMusic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesScreensMusic />);
    expect(baseElement).toBeTruthy();
  });
});
