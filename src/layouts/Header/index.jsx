import logo from '../../assets/logo.png';

function Header() {
  return (
    <header id='Header'>
      <img src={logo} alt='' />
      <h1>
        <span>HR</span>Net
      </h1>
    </header>
  );
}

export default Header;
