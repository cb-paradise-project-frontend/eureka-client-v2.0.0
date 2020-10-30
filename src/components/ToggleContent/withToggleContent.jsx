import React from 'react';

// a draft HOC, not tested, not bug free, just for inspiration
// const showState = {
//   Login: false,
//   MsgBox: false,
// }// 需要两个toggle，一个toggle Login，一个toggle MsgBox

/* ================= */
const withToggleContent = (showState) => (Component) => (
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // showState: initToggle(),
        showState 
        //{ Login: false, MsgBox: false,}
      };

      this.toggleShow = this.toggleShow.bind(this);
    }
//然后生成对应state，setState包一层creator
    toggleShow(target)  {
      return () => {
      this.setState((prevState) => ({
        showState:{
          ...prevState.showState,
          [target]: !prevState.showState[target],
        }
      })) 
    }//1. 柯里fn, 要()()才会启动 2. 漏了一层showState 3. target， 变量语法用错，.target是定值的key，取的是叫target的值，但是target在这里是个变量，所以应该是obj[key]的语法
  }
//showState传进来，{ key1: T&F, key2: T&F }
// children(login, MsgBox)
//keys => [ key1, key2 ]
//reduce => obj = { key1: F, key2: T && <Children /> }
//values => [ key1.value, key2.value ]
    render() {
      const { showState } = this.state;
      console.log(555,showState);
      const ControlledContent = Object.keys(showState).reduce((obj, key) => { 
        return {
          ...obj,
          [key]: ({ children }) => (this.state.showState[key] ? children : null),
        };
      }, {});
      
      return (
        <Component
          toggleShow={this.toggleShow}
          ControlledContent={ControlledContent}
          {...this.props}
        />
      );
    }
  }
);

export default withToggleContent;

// example of calling withToggleContent

// const ParentComponent = ({ toggleShow, ControlledComponent }) => (

// );

// const { ControlledContent, toggleShow } = this.props

// <ControlledContent.Login>
//   <Login toggleShow={toggleShow('Login')} />
// </ControlledContent.Login>
// <ControlledContent.MsgBox>
//   <MsgBox toggleShow={toggleShow('MsgBox')} />
// </ControlledContent.MsgBox>