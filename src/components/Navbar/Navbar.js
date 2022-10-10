import NavbarStyle from '../../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={NavbarStyle.navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/elektrik">Elektrik</Link>
        </li>
        <li>
          <Link to="/water">Su</Link>
        </li>
        <li>
          <Link to="/gas">Gaz</Link>
        </li>
        <li>
          <Link to="/telekom">Telekominikasyon</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
