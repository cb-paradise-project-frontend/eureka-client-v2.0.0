import React from 'react';
import className from 'classnames/bind';

import styles from './Categories.module.scss';

import CategoriesContent from '../CategoriesContent';
import { NavContext } from '../../NavContext';

const cx = className.bind(styles);

function Categories() {
  return (
    <NavContext.Consumer>
      {(navBar) =>(
        <div  
          // className = {styles.categories}
          className={cx({
            categories: true, 
            categoriesActive: navBar,
          })}
        >
          <div>Categories</div>
          <div className = {styles.category_content}>
            <div className = {styles.category_details_left}>
              <p>What are you looking for?</p>
              <p>Pick a type of task.</p>
              <div className = {styles.category_details_wrapper}>
                <h3>AS A POSTER</h3>
                <p>I need to hire some one for ...</p>
              </div>
            </div>
            <div className = {styles.category_details_right}>
                
            </div>
          </div>
        </div>
      )}
    </NavContext.Consumer>
  );
}


// class Categories extends React.Component {
//   constructor() {
//     super();

//     // this.state = {
//     //   currentComponentIndex: "As a tasker",
//     // }

//     // this.handleComponentShowing = this.handleComponentShowing.bind(this);
//     // this.handleShowingBlock = this.handleShowingBlock.bind(this);

//     // }

//     // handleShowingBlock(index) {
//     //   this.setState({
//     //     currentComponentIndex: index,
//     //   })
//     // }

//     // handleComponentShowing(index) {
//     //   switch(index) {
//     //     case("As a tasker"): 
//     //       return(
//     //         <CategoriesDetails value="123" />
//     //       );
//     //     case("As a poster"): 
//     //       return(
//     //         <CategoriesDetails value="456" />
//     //       );
//     //     default: 
//     //     return (
//     //       <h1>something wrong</h1>
//     //     )
//     //   }
//     // }

//   render() {
//     // const { currentComponentIndex } = this.state;

//     return(
//       <div  className = {styles.categories}>
//         <div>Categories</div>
//         <div className = {styles.category_details}>
//           <div className = {styles.category_details_type}>
//             <p>What are you looking for?</p>
//             <p>Pick a type of task.</p>
//             {/* <Button isNavCategoriesButton>
//               <ShowCategoriesDetails onClick={this.handleShowingBlock}>As a tasker</ShowCategoriesDetails>
//               {/* <p>I'm looking for work in ...</p> */}
//             {/* </Button> */} */}
//             {/* <Button isNavCategoriesButton>
//               <ShowCategoriesDetails onClick={this.handleShowingBlock}>As a poster</ShowCategoriesDetails>
//               <p>I need to hire someone for ...</p>
//             </Button> */}
//             <ShowCategoriesDetails onClick={this.handleShowingBlock}>As a tasker</ShowCategoriesDetails>
//             <ShowCategoriesDetails onClick={this.handleShowingBlock}>As a poster</ShowCategoriesDetails>
//           </div>
//           <div className = {styles.category_details_type_details}>
//             {
//               this.handleComponentShowing(currentComponentIndex)
//             }
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Categories;