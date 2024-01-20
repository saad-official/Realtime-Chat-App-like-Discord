import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { auth, provider } from "../firebase";
import {
    signOut,
    createUserWithEmailAndPassword,
  } from "firebase/auth";


const onFinish = async (values) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, values.email, values.password);
      // Set the signedIn state to true
}
catch (error) {
    console.log("er", error);
    alert('Something Went Wrong');
    signOut();
    }
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const SignUp = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));

  };
    return (
  <>
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 400,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your Password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>


    
        <button className='mx-auto w-full flex items-center justify-center md:ml-10 text-center mt-2 bg-blue-900 h-10 text-white rounded-md '>
        Submit
        </button>

  </Form>
   <div className="flex items-center justify-center mt-2">
   <button onClick={signIn} className=" w-40 flex items-center justify-center md:ml-10 text-center mt-2 bg-blue-900 h-10 text-white rounded-md ">
   Sign In With Google
 </button>
 </div>
 </>
    )
    };
export default SignUp;