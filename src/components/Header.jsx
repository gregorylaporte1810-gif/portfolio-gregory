
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">
        Grégory<span>.dev</span>
      </div>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-controls="navigation-principale"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav
        id="navigation-principale"
        aria-label="Navigation principale"
        className={menuOpen ? 'menu-ouvert' : ''}
      >
        <a href="#accueil" onClick={closeMenu}>Accueil</a>
        <a href="#apropos" onClick={closeMenu}>À propos</a>
        <a href="#projets" onClick={closeMenu}>Projets</a>
        <a href="#competences" onClick={closeMenu}>Compétences</a>
        <a href="#parcours" onClick={closeMenu}>Parcours</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
