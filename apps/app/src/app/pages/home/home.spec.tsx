import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import Home from './home';
import { setCurrentUser } from '../../store/user-slice';
import { user1 } from '../../types/__test_data__/user.fixture';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );
    const h1 = baseElement.querySelector('h1');

    expect(baseElement).toBeTruthy();
    expect(h1).toBeFalsy();
  });

  it('should render with user data', () => {
    store.dispatch(setCurrentUser(user1));

    const { baseElement } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );
    const h1 = baseElement.querySelector('h1');

    expect(baseElement).toBeTruthy();
    expect(h1).toBeTruthy();
  });
});
