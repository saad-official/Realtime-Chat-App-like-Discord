import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import SignIn from './SignIn';
import SignUp from './Signup';
const Auth = ({isLogin}) => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
  setOpen(false);
  }


  return (
    <>
      <Button type="" className='black font-bold' onClick={showModal}>
      {isLogin ? "Log in" : "Sign Up" }
      </Button>
      <Modal
        title={isLogin ? "Log In" : "Sign Up"}
        open={open}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true, hidden:true }}
        cancelButtonProps={{ disabled: true, hidden:true }}
      >
       
      {isLogin ?  <SignIn /> : <SignUp />}
      </Modal>
    </>
  );
};
export default Auth;