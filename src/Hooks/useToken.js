import { useEffect, useState } from "react"

const useToken = user =>{
    const axios = require("axios").default;
    const [token, setToken] = useState('');
    useEffect( () =>{
        console.log(user);
        const email = user?.user?.email;
 

        if(email){
            const userData = {
                email 
              }
              console.log(user);
              axios
              .put(`http://localhost:5000/user/${email}`, userData)
              .then(function (response) { 
                console.log(response);
                const accessToken = response.data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
              })
              .catch(function (error) {
                console.log(error);
              }); 
        }

    }, [user]);
    return [token];
}

export default useToken;