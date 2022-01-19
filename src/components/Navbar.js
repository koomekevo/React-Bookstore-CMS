import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav className="navBar">
      <img src="https://res.cloudinary.com/djjuu1pzp/image/upload/v1642525457/bookstorecmslogo_vvlpzr.png" alt="logo" height="30" width="200" loading="lazy" />
      <ul className="navlist">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              activeClassName="active-link"
              exact
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
