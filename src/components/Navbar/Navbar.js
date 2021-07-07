import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../../App';
import SignIn from '../SignIn/SignIn';

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <div className='navbar'>
      <p>Public chat by Konstantin Kamenskiy</p>
      {user ? <SignIn /> : null}
    </div>
  );
};

export default Navbar;