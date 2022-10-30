const SERVER_URL = "http://localhost:8080";

async function login(username, password){
    try{
      let res = await fetch(`${SERVER_URL}/login`, {
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        credentials: "include",
        body: JSON.stringify({username:username, password:password})
      });
      res = await res.json();
      if(!res.success){
        throw res.message
      }
      // TODO: Handle when you are logged in in frontend
    }catch(e){
      alert(e);
    }
}

async function register(email, password, username){
    try{
      let res = await fetch(`${SERVER_URL}/register`, {
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        credentials: "include",
        body: JSON.stringify({username:username, email:email, password:password})
      });
      res = await res.json();
      if(!res.success){
        throw res.message
      }
      // TODO: Handle when you are registered correctly, maybe navigate('/home')
    }catch(e){
      alert(e);
    }
}

export {SERVER_URL}

