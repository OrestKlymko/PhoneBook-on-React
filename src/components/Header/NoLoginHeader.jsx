import { NavLink } from 'react-router-dom';
import css from 'css/noLoginHeader.module.css'

export const NoLoginHeader = () => {
  return (
    <>
      <NavLink to="/login" className={css.login}>Login</NavLink>
      <NavLink to="/registration" className={css.registration}>Registration</NavLink>
    </>
  );
};
