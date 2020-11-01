import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationWebPrivate.module.scss';

import logo from '../../../../assets/logo.svg';

import ToggleContent from '../../../../components/ToggleContent';
import Button from '../../../../components/Button';
import PostTask from '../.././../../pages/PostTask';
import LogOut from '../LogOut';
import PrivateNavDropDown from '../PrivateNavDropDown';

class NavigationWebPrivate extends Component {
  constructor() {
    super();

    this.state = { clicked: false }
  }

  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }))
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
  
    return(
      <nav className={styles.navBar}>
        <div className={styles.navWebMenu}>
          <Link
            className={styles.logo}
            to="/"
          >
            <img src={logo} alt={logo} />
            <p>Eureka</p>
          </Link>

          <div className={styles.left} >
            <PostTaskButton/>
            <Link
              className={styles.browseTasks}
              to="/tasks"
            >
              Browse tasks
            </Link>
          </div>

          <div className={styles.right} >
            <div
              className={styles.navUser}
              onClick={this.handleClick}
            >
              <i className={"far fa-user-circle"}></i>
            </div>
            <LogOut />
          </div>
          <div className={this.state.clicked ? styles.privateNavDropDownActive : styles.privateNavDropDown}>
            <PrivateNavDropDown />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationWebPrivate;