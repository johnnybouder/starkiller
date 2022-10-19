import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';

import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { User } from './types/user';

export function App() {
  const [currentUser, setCurrentUser] = useState<User>();

  return (
    <div>
      <Header />
      <section id="mainSection" className="usa-section">
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route
            path="/login"
            element={<Login loginCallback={setCurrentUser} />}
          />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
