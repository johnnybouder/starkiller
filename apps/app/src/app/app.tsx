import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';

import { Header } from './components/header/header';
import CharacterDetails from './pages/characters/character-details/character-details';
import Characters from './pages/characters/characters';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';

export function App() {
  return (
    <div>
      <Header />
      <section id="mainSection" className="usa-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
