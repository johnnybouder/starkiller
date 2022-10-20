import { Alert, AlertType } from '@starkiller/base';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../store/user-slice';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const currentUser = useSelector(selectUserData);

  return (
    <div className="grid-container">
      {currentUser ? (
        <div className="grid-row">
          <div className="grid-col">
            <h1>Welcome to the Dark Side!</h1>
          </div>
        </div>
      ) : (
        <div className="grid-row">
          <div className="grid-col">
            <Alert
              id="auth-alert"
              type={AlertType.Warning}
              heading="Login Required"
            >
              You are not currently logged in, please click{' '}
              <Link to="/login">here</Link> to login.
            </Alert>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
