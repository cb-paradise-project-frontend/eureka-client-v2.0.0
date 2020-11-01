import React from 'react';

import styles from './Private.module.scss';

// import NavigationMobile from '../components/NavigationMobile';
// import NavigationWebPrivate from '../components/NavigationWebPrivate';
// import NavigationMobilePrivate from '../components/NavigationMobilePrivate';

import { AuthContext } from '../../../auth/Auth';
import Button from '../../Button';
import LogOut from '../components/LogOut';
import AuthModal from '../../AuthModal';
import ToggleContent from '../../ToggleContent';
import PrivateNavDropDown from '../components/PrivateNavDropDown';
class Private extends Component {
  constructor() {
    super();

    this.state = { clicked:false }
  }

  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked}));
  }

  render() {
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
          <AuthModal.Login pageToggler={toggler} />
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
          <AuthModal.SignUp pageToggler={toggler} />
        )}
      />
    );

    return (
      <AuthContext.Consumer>
        {({currentUser}) => (
          <div className={styles.user}>
            {!currentUser ?
              <>
                <SignupButton />
                <LoginButton /> 
              </>
              :
              <>
                <div
                className={styles.userPrivate}
                onClick={this.handleClick}
                >
                  <i className={"far fa-user-circle"}></i>
                </div>
                <LogOut />
                <div className={this.state.clicked ? styles.privateNavDropDownActive : styles.privateNavDropDown}>
                  <PrivateNavDropDown onClick={this.handleClick} />
                </div>
              </>
            }
            </div>
        )}
      </AuthContext.Consumer>
    );
  }
}
export default Private;