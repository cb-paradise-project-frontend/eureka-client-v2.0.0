import React, { useContext } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import { AuthContext } from './../../auth/Auth';
import { logOut } from './../../firebase';
import ProfileNav from './ProfileNav';
import ProfileContent from './ProfileContent';

import styles from './Profile.module.scss';

// const Profile = ({ history }) => {
//   const { currentUser } = useContext(AuthContext);
//   const { displayName, email } = currentUser;

//   //signOut方法暂时没有调用，等待潘哥处理完firebase登录问题后修复 --维尼
//   const signOut = () => {
//     logOut();
//     if (!currentUser) {
//       return (<Redirect to="/" />);
//     }
//   };

//   //暂时使用了hack方法达成点击logout返回主页面的效果，等待signOut方法修复后再做修改 --维尼
//   return (
//     <React.Fragment>
//       <button onClick={() => history.push('/')}>Log out</button>
//       <div className={styles.profile_wrapper}>
//         <div className={styles.profile}>
//           <ProfileNav />
//           <ProfileContent />
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNav: 'Account',
      account: {
        Firstname: 'firstname',
        Lastname: 'lastname',
        Email: 'email',
        DOB: 'DOB',
        Mobile: 'mobile',
        Location: 'location',
      },
      payment: {
        bankAccount: {
          holder: 'Alice',
          accountNumber: '12345678',
          bsb: '000-000',
        },
        billingAddress: {
          lineOne: 'addres line1',
          lineTwo: 'address line2 optional',
          suburb: 'suburb',
          state: 'state',
          postcode: 'postcode',
          country: 'country',
        },
      },
    };

    this.handleNavChange = this.handleNavChange.bind(this);
    this.handleInputChangeCreator = this.handleInputChangeCreator.bind(this);
    this.handleBankChange = this.handleBankChange.bind(this);
    this.handleBillChange = this.handleBillChange.bind(this);
  }

  handleNavChange(currentNav) {
    this.setState({
      currentNav,
    });
  }

  handleInputChangeCreator = (key) => ((event) => {
    const { value } = event.target;

    this.setState((prevState) => (
      {
        account: {
          ...prevState.account,
          [key]: value,
        },
      }));
  });

  handleBankChange = (value) => {
    this.setState((prevState) => (
      {payment: {
        ...prevState.payment,
        bankAccount: value,
      }}
    ));
  };

  handleBillChange = (value) => {
    this.setState((prevState) => (
      {payment: {
        ...prevState.payment,
        billingAddress: value,
      }}
    ));
  };

  render() {
    const { history } = this.props;
    const { currentNav, account, payment } = this.state;

    return (
      <React.Fragment>
        <button onClick={() => history.push('/')}>Log out</button>
        <div className={styles.profile_wrapper}>
          <div className={styles.profile}>
            <ProfileNav
              currentNav={currentNav}
              handleNavChange={this.handleNavChange}
            />
            <ProfileContent 
              currentNav={currentNav}
              accountContent={account}
              onProfileChange={this.handleInputChangeCreator}
              paymentContent={payment}
              onBankChange={this.handleBankChange}
              onBillChange={this.handleBillChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Profile);
