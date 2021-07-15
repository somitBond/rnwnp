import { render } from '@testing-library/react';

import FeaturesScreensAlbum from './features-screens-album';

describe('FeaturesScreensAlbum', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesScreensAlbum />);
    expect(baseElement).toBeTruthy();
  });
});
