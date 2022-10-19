import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Characters from './characters';

describe('Characters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Characters />
      </BrowserRouter>
    );
    const h1 = baseElement.querySelector('h1');

    expect(baseElement).toBeTruthy();
    expect(h1).toBeTruthy();
  });
});
