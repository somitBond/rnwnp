import { render } from '@testing-library/react';

import FeaturesScreensRecent from './features-screens-recent';

describe('FeaturesScreensRecent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesScreensRecent />);
    expect(baseElement).toBeTruthy();
  });
});
