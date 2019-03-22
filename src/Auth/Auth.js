const Auth =  {
    login : (token) => {
    localStorage.setItem("token",token);
},

 logout : () => {
    localStorage.removeItem("token");
},

 isLoggedIn : () => localStorage.getItem("token")
}

export default Auth;
