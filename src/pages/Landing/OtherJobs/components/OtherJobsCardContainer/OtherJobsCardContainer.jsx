import React from 'react';

import styles from './OtherJobsCardContainer.module.scss';

import OtherJobsCard from '../OtherJobsCard';


class OtherJobsCardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  }

  render() {
    const { data, } = this.state;

    return (
      <div className={styles.OtherJobs__cards}>
        <div className={styles.OtherJobs__description}>
          <h4>{this.props.tabDescription}</h4>
        </div>

        <div className={styles.OtherJobs__cardGrid}>
          {
            data.map((e, index) =>
              <OtherJobsCard
                key = {index}
                title = {this.props.title}
                description = {this.props.description}
                price = {this.props.price}
                rate = {this.props.rate}
              />
            )
          }
        </div>
      </div>
    );
  }
}

export default OtherJobsCardContainer;