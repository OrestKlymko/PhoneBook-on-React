import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NoLoginHeader } from './NoLoginHeader';
import { LoginHeader } from './LoginHeader';
import css from '../../css/header.module.css';
import { useSelector } from 'react-redux';
import Loader from '../Contact/Loader';

export const Header = () => {
  const isLogin = useSelector(state=>state.userCreate.isLogin);
  const isLoad = useSelector(state=>state.isLoad)
  return (
    <div>
      <div className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" style={{ margin: ' 0 30px' }}>
            Remember Contact
          </NavLink>
          <NavLink to="contacts">List of contact</NavLink>
        </nav>
        <div className={css.isLogin}>
          {isLogin ? <LoginHeader /> : <NoLoginHeader />}
        </div>
      </div>
      {isLoad&&<Loader />}
      <Outlet />
    </div>
  );
};
