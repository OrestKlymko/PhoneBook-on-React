import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NoLoginHeader } from './NoLoginHeader';
import { LoginHeader } from './LoginHeader';

export const Header = () => {
  const isLogin = true;
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
          borderBottom: '2px solid gray',
        }}
      >
        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
          <NavLink to="/" style={{ margin: ' auto 30px' }}>
            Remember Contact
          </NavLink>
          <NavLink to="contacts">List of contact</NavLink>
        </nav>
        <div
          style={{
            width: '200px',
            display: 'flex',
            justifyContent: 'space-between',
            marginRight: '20px',
          }}
        >
          {isLogin ? <LoginHeader /> : <NoLoginHeader />}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
