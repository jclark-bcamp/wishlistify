import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

   // Only render the NavTabs if not on the /login page
   if (currentPage === '/login') {
    return null; // Hides the navbar on the login page
  }

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/login"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      {/* Conditionally render the Amazon link if the current page is not the login page */}
      {currentPage !== '/login' && (
        <li className="nav-item">
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Amazon
          </a>
        </li>
      )}
    </ul>
  );
}

export default NavTabs;
