import React from 'react';

import styles from './OtherJobsShowCard.module.scss'

class ShowCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.children);
  }

  render() {
    return (
      <div className = {styles.OtherJobsShowCard__container}>
        <p onClick = {this.handleClick}>
          {this.props.children}
        </p>
      </div>

    )
  }
}

export default ShowCard;