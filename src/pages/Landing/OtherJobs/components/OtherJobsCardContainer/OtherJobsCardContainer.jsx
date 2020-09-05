import React from 'react';

import styles from './OtherJobsCardContainer.module.scss';

import OtherJobsCard from '../OtherJobsCard'


// class OtherJobsCardContainer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [1, 2, 3, 4, 5, 6, 7, 8]
//     }
//   }

//   render() {
//     const (
//       data, 
//       props.title,
//       props.description,
//       props.price,
//       props.rate,
//     ) = this.state;

//     return (
//       <div className={styles.OtherJobs__cards}>
//         <div className={styles.OtherJobs__description}>
//           <h5>{props.tabDescription}</h5>
//         </div>

//         <div className={styles.OtherJobs__cardGrid}>
//           {
//             data.map((e) =>
//               <OtherJobsCard
//                 title = {props.title}
//                 description = {props.description}
//                 price = {props.price}
//                 rate = {props.rate}
//               />
//             )
//           }
//         </div>
//       </div>
//     );
//   };
// };

function OtherJobsCardContainer(props) {
  return (
    <div className={styles.OtherJobs__cards}>
      <div className={styles.OtherJobs__description}>
        <h5>{props.tabDescription}</h5>
      </div>

      <div className={styles.OtherJobs__cardGrid}>
        <OtherJobsCard
          title = {props.title}
          description = {props.description}
          price = {props.price}
          rate = {props.rate}
        />
      </div>
    </div>
  );
}

export default OtherJobsCardContainer;