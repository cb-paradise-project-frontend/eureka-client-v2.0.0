import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './DropDown.module.scss';

// import logo from '../../../../assets/logo.svg';
// import postTaskLogo from '../../../../assets/postTaskLogo.svg';


// import LoginModal from '../../../../components/LoginModal';
// import SignupModal from '../../../../components/SignupModal';
import ToggleContent from '../../../../components/ToggleContent';
import Button from '../../../../components/Button';
import PostTask from './../../../../pages/PostTask';
import AuthModal from '../../../AuthModal';
import { AuthContext } from '../../../../auth/Auth';
import LogOut from '../LogOut';

class DropDown extends Component {
  constructor() {
    super();

    this.state = { clicked:false }
  }
  
  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked}))
  }

  render () {
    const LoginButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.mobileNavDropDownItem}>
            <Button.Text
              color={'navMobile'}
              onClick={toggler}
            >
              Log in
            </Button.Text>
          </div>
        )}
        content={(toggler) => (
          <AuthModal.Login pageToggler={toggler} />
        )}
      />
    );
  
    const SignupButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.mobileNavDropDownItem} >
            <Button.Text
              color={'navMobile'}
              onClick={toggler}
            >
              Join Airtasker
            </Button.Text>
          </div>
        )}
        content={(toggler) => (
          <AuthModal.SignUp pageToggler={toggler} />
        )}
      />
    );

    const PostTaskButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.mobileNavDropDownItem} >
            <Button.Text
              color={'navMobile'}
              onClick={toggler}
            >
              Post a Task
            </Button.Text>
          </div>
        )}
        content={(toggler) => (
          <PostTask pageToggler={toggler} />
        )}
      />
    );

  return (
    // <div className={this.state.clicked ? styles.mobileNavDropDownActive : styles.mobileNavDropDown}>
    <AuthContext.Consumer>
      {({currentUser}) =>(
        <div>
          {
            !currentUser ?
            <>
              <LoginButton />
              <SignupButton />
              <Link
                className={styles.mobileNavDropDownItem}
                to="/tasks"
              >
                Browse Tasks
              </Link>
            </>
            :
            <>
              <Link
                className={styles.mobileNavDropDownItem}
                to="/profile"
              >
                Profile
              </Link>
              <PostTaskButton />
              <Link
                className={styles.mobileNavDropDownItem}
                to="/tasks"
              >
                Browse Tasks
              </Link>
              <div className={styles.mobileNavDropDownItem}>
                <LogOut />
              </div> 
            </>
          }
        </div>
      )}
    </AuthContext.Consumer>
    );
  }
}

export default DropDown;