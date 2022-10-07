import NavbarStyle from '../../styles/Navbar.module.css';

function Navbar() {
  return (
    <div className={NavbarStyle.navbar}>
      <ul>
        <li>Elektrik</li>
        <li>Su</li>
        <li>Gaz</li>
        <li>Telekominikasyon</li>
      </ul>
    </div>
  );
}

export default Navbar;
