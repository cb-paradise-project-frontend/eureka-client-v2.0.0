import React from 'react';
import styles from './Button.module.scss';


class Button extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    //this.handleJobTitle = this.handleJobTitle.bind(this);
  } 
  
  handleClick(e){
    if (this.props.children === 'Next') {
      //return this.props.handleNextClick(e);
      return this.props.handleNextClick(e);
 
    }
    if (this.props.children === 'Back') {
      return this.props.handleBackClick(e);
    }
  };
  // handleJobTitle(e){
  //   if (this.props.children === 'Next'){
  //     return this.props.handleJobTitle(e);
  //   }
  // }
  
  render() {
    return (
      <button
        className={styles.Button} 
        onClick={
          this.handleClick
        } 
      > 
        { this.props.children } 
      </button> 
    )
  }
}

export default Button;