import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NoLoginHeader } from './NoLoginHeader';
import { LoginHeader } from './LoginHeader';
import css from '../../css/header.module.css';
import { useSelector } from 'react-redux';

export const Header = () => {
  const isLogin = useSelector(state=>state.userCreate.isLogin);
  return (
    <div>
      <div className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" style={{ margin: ' auto 30px' }}>
            Remember Contact
          </NavLink>
        </nav>
        <div className={css.isLogin}>
          {isLogin ? <LoginHeader /> : <NoLoginHeader />}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
