import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames/bind';
import styles from './Navigation.module.scss';

import logo from '../../assets/logo.svg';
import postTaskLogo from '../../assets/postTaskLogo.svg';

import { AuthContext } from './../../auth/Auth';
// import { NavContext } from './NavContext';
import LoginModal from '../../components/LoginModal';
import SignupModal from '../../components/SignupModal';
import Categories from '../Navigation/components/Categories';
import ToggleContent from '../../components/ToggleContent';
import Button from '../../components/Button';
import PostTask from './../../pages/PostTask';

const cx = className.bind(styles);

class Navigation extends Component {
  constructor() {
    super();

    this.state = { clicked:false }
  }
  
  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked}))
  }
  render() {
    const PostTaskButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.post_task_button_wrapper} >
            <Button
              color={'navy'}
              onClick={toggler}
              size={'navbar'}
            >
              Post a Task
            </Button>
          </div>
        )}
        content={(toggler) => (
          <PostTask pageToggler={toggler} />
        )}
      />
    );
  
    const LoginButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.login_button_wrapper} >
            <Button.Text
              color={'navy'}
              onClick={toggler}
            >
              Log in
            </Button.Text>
          </div>
        )}
        content={(toggler) => (
          <LoginModal pageToggler={toggler} />
        )}
      />
    );
  
    const SignupButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.signup_button_wrapper} >
            <Button.Text
              color={'navy'}
              onClick={toggler}
            >
              Sign up
            </Button.Text>
          </div>
        )}
        content={(toggler) => (
          <SignupModal pageToggler={toggler} />
        )}
      />
    );
    return (
      <AuthContext.Consumer>
        {(currentUser) => (
          // <NavContext.Consumer>
          <React.Fragment>
            <div className={styles.menuMobile}>
              <nav className={styles.mobileNavBar}>
                <div className={styles.mobileNavMenu}>
                  <div className={styles.responsiveButton}
                    onClick={this.handleClick}
                  >
                    <i className={this.state.clicked ? 'far fa-times-circle' : 'fas fa-bars'}></i>
                  </div>

                  <Link
                    className={styles.mobileLogo}
                    to="/"
                  >
                    <img src={logo} />
                    <p>Brand</p>
                  </Link>

                  <div className={styles.responsivePostTask}>
                    {/* <img src={postTaskLogo} /> */}
                  </div>
                </div>

                <div className={this.state.clicked ? styles.mobileNavDropDownActive : styles.mobileNavDropDown}>
                  <div className={styles.mobileNavDropDownItem}>
                    Categories for Posters
                  </div>
                  <div>
                    <Link className={styles.mobileNavDropDownItem}>Log in</Link>
                    <Link className={styles.mobileNavDropDownItem}>Join Airtasker</Link>
                    <Link className={styles.mobileNavDropDownItem}>
                      Browse Tasks
                    </Link>
                  </div>
                </div>
              </nav>
            </div>

            <div className={styles.web}>
              <nav className={styles.navBar}>
                <div className={styles.navWebMenu}>
                  <Link
                    className={styles.logo}
                    to="/"
                  >
                    <img src={logo} />
                    <p>Brand</p>
                  </Link>

                  <div className={styles.left} >
                    <PostTaskButton/>
                    <Categories />
                    <Link
                      className={styles.browseTasks}
                      to="/tasks"
                    >
                      Browse tasks
                    </Link>
                    {/* <div className={styles.howItWorks}>
                        How it works
                    </div> */}
                  </div>

                  <div className={styles.right} >
                    <SignupButton />
                    <LoginButton />
                    {/* <div className={styles.becomeTasker} >
                      <Button
                        color={'transparent'}
                        size={'small'}
                      >
                        Become a Tasker
                      </Button>
                    </div> */}
                  </div>
                </div>
              </nav>
            </div>
          </React.Fragment>
          // </NavContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

// function Navigation() {

//   const PostTaskButton = () => (
//     <ToggleContent
//       toggle={(toggler) => (
//         <div className={styles.post_task_button_wrapper} >
//           <Button
//             color={'navy'}
//             onClick={toggler}
//             size={'navbar'}
//           >
//             Post a Task
//           </Button>
//         </div>
//       )}
//       content={(toggler) => (
//         <PostTask pageToggler={toggler} />
//       )}
//     />
//   );

//   const LoginButton = () => (
//     <ToggleContent
//       toggle={(toggler) => (
//         <div className={styles.login_button_wrapper} >
//           <Button.Text
//             color={'navy'}
//             onClick={toggler}
//           >
//             Log in
//           </Button.Text>
//         </div>
//       )}
//       content={(toggler) => (
//         <LoginModal pageToggler={toggler} />
//       )}
//     />
//   );

//   const SignupButton = () => (
//     <ToggleContent
//       toggle={(toggler) => (
//         <div className={styles.signup_button_wrapper} >
//           <Button.Text
//             color={'navy'}
//             onClick={toggler}
//           >
//             Sign up
//           </Button.Text>
//         </div>
//       )}
//       content={(toggler) => (
//         <SignupModal pageToggler={toggler} />
//       )}
//     />
//   );

//   return (
//     <AuthContext.Consumer>
//       {(currentUser) => (
//         // <NavContext.Consumer>
//         <React.Fragment>
//           <div className={styles.menuMobile}>
//             <nav className={styles.mobileNavBar}>
//               <div className={styles.mobileNavMenu}>
//                 <div className={styles.responsiveButton}>
//                   <span className={styles.responsiveBar}></span>
//                   <span className={styles.responsiveBar}></span>
//                   <span className={styles.responsiveBar}></span>
//                 </div>

//                 <Link
//                   className={styles.mobileLogo}
//                   to="/"
//                 >
//                   <img src={logo} />
//                   <p>Brand</p>
//                 </Link>

//                 <div className={styles.responsivePostTask}>
//                   {/* <img src={postTaskLogo} /> */}
//                 </div>
//               </div>
            
//               {/* <div className={styles.mobileNavDropDown>
                
//               </div> */}
//             </nav>
//           </div>

//           <div className={styles.web}>
//             <nav className={styles.navBar}>
//               <div className={styles.navWebMenu}>
//                 <Link
//                   className={styles.logo}
//                   to="/"
//                 >
//                   <img src={logo} />
//                   <p>Brand</p>
//                 </Link>

//                 <div className={styles.left} >
//                   <PostTaskButton/>
//                   <Categories />
//                   <Link
//                     className={styles.browseTasks}
//                     to="/tasks"
//                   >
//                     Browse tasks
//                   </Link>
//                   {/* <div className={styles.howItWorks}>
//                       How it works
//                   </div> */}
//                 </div>

//                 <div className={styles.right} >
//                   <SignupButton />
//                   <LoginButton />
//                   <div className={styles.becomeTasker} >
//                     <Button
//                       color={'transparent'}
//                       size={'small'}
//                     >
//                       Become a Tasker
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </React.Fragment>
//         // </NavContext.Consumer>
//       )}
//     </AuthContext.Consumer>
//   );
// }

export default Navigation;
