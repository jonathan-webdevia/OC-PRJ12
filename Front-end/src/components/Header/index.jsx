import { Link } from "react-router-dom";

import logo from "../../assets/media/logo.png";

const Header = () => {
  return (
    <header>
      <nav className="header1">
        <Link>
          <img src={logo} alt="logo de sportsee" className="logo"></img>
        </Link>
        <div className="rightNav">
          <Link to="/">Accueil</Link>
          <Link to="/profil">Profil</Link>
          <Link to="/settings">Réglages</Link>
          <Link to="/community">Communauté</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
