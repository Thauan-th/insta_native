import {USER_LOGGED_IN,USER_LOGGED_OUT } from '../constants'
export const login = user =>{
  return{
    type: USER_LOGGED_IN,
    payload:{
      email:user.email,
      password:user.password
    }
  }
}
export const logout = user =>{
  return{
    type: USER_LOGGED_OUT ,
    payload:user
  }
}