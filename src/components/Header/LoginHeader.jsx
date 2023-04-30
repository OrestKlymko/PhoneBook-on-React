
import { useDispatch, useSelector } from 'react-redux';
import {Button} from '@chakra-ui/react';
import { logOut } from '../../redux/Auth/operations';

export const LoginHeader = () => {

  const name = useSelector(state=>state.userCreate.name);
const dispatch = useDispatch();


  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <span style={{marginRight:'20px'}}><b>Hello, {name}</b></span>
      <Button colorScheme="red"
              variant="solid"
              type="submit"
             onClick={()=>dispatch(logOut())}>Exit</Button>
    </div>
  );
};
