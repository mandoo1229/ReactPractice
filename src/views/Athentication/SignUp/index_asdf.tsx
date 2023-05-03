import React, { useState } from 'react'
import axios from "axios"
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { response } from 'express';




export default function SignUp() {
    const [userId, setuserId] = useState<string>('');  //아이디 값을 입력받음
    const [userPassword, setUserPassword] = useState<string>('');  //비밀번호 값을 입력 받음
    const [userPasswordCheck, setUserPasswordCheck] = useState<string>('');  //비밀번호 입력값을 받음
    const [userNickname, setUserNickname] = useState<string>('');  //닉네임 값을 입력 받음

    //위에 적힌 함수를 호출합니다.
    const signUpHandler = () =>{
      const data = {
        "userid": userId,
        "userPassword": userPassword,
        "userPasswordCheck": userPasswordCheck,
        "userNickname": userNickname,
      };

      console.log(data);

      axios //입력한 데이터를 받음.
        .post("/api/member/signup", data)
        .then((response) => {console.log(response.data)})  //성공했을시 response를 받아옴.
        .catch((error) =>{console.log(error)});   //실패했을 시 error를 발생함.
    };
    
  return (
      <form>
        <input type="text" name="userid" defaultValue={userId} onChange={(e) => setuserId(e.target.value)}></input>
        {/* <TextField fullWidth type="text" id="outlined-basic" label="아이디" variant="standard" onChange={(e) => setuserId(e.target.value)} />
        <TextField fullWidth type="password" id="outlined-basic" label="비밀번호" variant="standard" onChange={(e) => setUserPassword(e.target.value)} />
        <TextField fullWidth type="password" id="outlined-basic" label="비밀번호확인" variant="standard" onChange={(e) => setUserPasswordCheck(e.target.value)} />
        <TextField fullWidth type="text" id="outlined-basic" label="닉네임" variant="standard" onChange={(e) => setUserNickname(e.target.value)} /> */}
      <button onClick={signUpHandler} > 회원가입 </button>
      </form>
  )
}
