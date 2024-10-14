import { Link, useLocation } from 'react-router-dom';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar-container">
      <h1>Aden Neal</h1>
      <ul className="navbar nav-list">
        <li>
          <Link
            to="/"
            className={currentPage === '/' ? 'navbarActive' : 'navbar'}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Projects"
            className={currentPage === '/Projects' ? 'navbarActive' : 'navbar'}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'navbarActive' : 'navbar'}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'navbarActive' : 'navbar'}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );}

export default NavTabs;
