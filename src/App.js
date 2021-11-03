import React from 'react';
import Login from './Login';
import Profile from './Profile';

const App = () => {

  const [logged_in , setLogged_in ] = React.useState(false); 

return(
     
     <div>
        {logged_in ? <Profile handleState = {()=>setLogged_in(false)} />: <Login handleState = {()=>setLogged_in(true)} />}
     </div>
)
  
}

export default App;
