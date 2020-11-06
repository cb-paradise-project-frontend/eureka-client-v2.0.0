import React from 'react';

import styles from './OtherJobsShowCard.module.scss'

import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

class ShowCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.children);
  }


  render() {
    console.log(this.props.active)
    return (
      <div 
      className={cx({
        OtherJobsShowCard__container: true, 
        OtherJobsShowCard__container__active:this.props.active, 
      })}>
      {/* // className = {styles.OtherJobsShowCard__container}> */}
        <p onClick = {this.handleClick}>
          {this.props.children}
        </p>
      </div>

    )
  }
}

export default ShowCard;