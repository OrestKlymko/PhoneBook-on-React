import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Button} from '@chakra-ui/react';
import { Logout } from '../../redux/Auth/operations';

export const LoginHeader = () => {

  const name = useSelector(state=>state.userCreate.name);
const dispatch = useDispatch();





  return (
    <div style={{display:'flex', justifyContent:'space-between', width:'300px', alignItems:'center'}}>
      <NavLink to="contacts">List of contact</NavLink>
      <span>Hello, {name}</span>
      <Button colorScheme="red"
              variant="solid"
              type="submit"
             onClick={()=>dispatch(Logout())}>Exit</Button>
    </div>
  );
};
