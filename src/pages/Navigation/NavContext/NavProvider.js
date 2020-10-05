import React, { useState } from 'react';
import NavContext from './NavContext';

const NavProvider = ({children}) => {

  const [navBar,setNavBar] = useState(false);
  // const [browseTasks,setBrowseTasks] = useState(false);
  

  const changeNavBarBackground = () => {
    if (window.scrollY >= 60) {
      setNavBar(true);
      // setBrowseTasks(true);
      // console.log(1, window.scrollY);
      } else {
        setNavBar(false);
        // setBrowseTasks(false);
        // if (window.scrollY < 60 && window.scrollY > 0)
        // console.log(2, window.scrollY);
      } 
      // else if (window.scrollY <= 0) {
      //   console.log(3, window.scrollY);
      //   window.location.reload();
      // }
  }

  window.addEventListener('scroll', changeNavBarBackground);

  return (
    <NavContext.Provider value={ navBar }>
      {children}
    </NavContext.Provider>
  )
}

export default NavProvider;