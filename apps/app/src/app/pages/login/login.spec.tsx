import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import Login from './login';

describe('Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    const h1 = baseElement.querySelector('h1');

    expect(baseElement).toBeTruthy();
    expect(h1).toBeTruthy();
  });
});
