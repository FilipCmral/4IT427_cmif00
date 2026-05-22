/* -------------- Stylingová metoda: CSS Modules -------------- */



import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

import { WatchlistPage } from './pages/WatchlistPage';
import { AddFilmPage } from './pages/AddFilmPage';

import navStyles from './Navbar.module.css';

function App() {

  return (
    <>
    <nav className={navStyles.nav}>
      <div className={navStyles.inner}>
        <NavLink to="/" end className={({ isActive }) => isActive ? `${navStyles.link} ${navStyles.active}` : navStyles.link}>
          Watchlist
        </NavLink>
        <NavLink to="/form" className={({ isActive }) => isActive ? `${navStyles.link} ${navStyles.active}` : navStyles.link}>
          Add Films
        </NavLink>
      </div>
    </nav>

      <Routes>
        <Route path="/" element={<WatchlistPage />} />
        <Route path="/form" element={<AddFilmPage />} />
        {/*<Route path="/films/:id" element={<Navigate to="/" replace />} />*/}
        <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect any unknown routes to the main page */}
      </Routes>
    </>
  );
}

export default App