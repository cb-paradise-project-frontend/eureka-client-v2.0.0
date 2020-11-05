import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Public.module.scss';

import logo from '../../../assets/logo.svg';
import postTaskLogo from '../../../assets/postTaskLogo.svg';

import Button from '../../Button';
import ToggleContent from '../../ToggleContent';
import PostTask from '../../../pages/PostTask';
import DropDown from '../components/DropDown';

// import NavigationMobile from '../components/NavigationMobile';
// import NavigationWeb from '../components/NavigationWeb';

class Public extends Component {
  constructor() {
    super();

    this.state = { clicked:false }
  }

  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked}));
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

    const PostTaskIconButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.post_task_icon_button_wrapper}>
            <Button.IconButton
              onClick={toggler}
            >
              <img src={postTaskLogo} alt={postTaskLogo} />
            </Button.IconButton>
          </div>
        )}
        content={(toggler) => (
          <PostTask pageToggler={toggler} />
        )}
      />
    );

    const PostTaskButtonMobile = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.post_task_button_wrapper} >
            <Button
              color={'mint'}
              onClick={toggler}
              size={'small'}
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

    return (
      <div className={styles.Public}>
        <div
          className={styles.responsiveButton}
          onClick={this.handleClick}
        >
          <i className={this.state.clicked ? 'far fa-times-circle' : 'fas fa-bars'}></i>
        </div>

        <Link
          className={styles.logo}
          to="/"
        >
          <img src={logo} alt={logo} />
          <p>Eureka</p>
        </Link>

        <div className={styles.left} >
          <PostTaskButton />
          <Link
            className={styles.browseTasks}
            to="/tasks"
          >
            Browse tasks
          </Link>
        </div>

        <div className={styles.responsivePostTask}>
          <PostTaskIconButton />
          <div className={this.state.clicked ? styles.postTaskButtonActive : styles.postTaskButton}>
            <PostTaskButtonMobile />
          </div>
        </div>

        <div  className={this.state.clicked ? styles.mobileNavDropDownActive : styles.mobileNavDropDown}>
          <DropDown />
        </div>
      </div>
    );
  }
}

export default Public;