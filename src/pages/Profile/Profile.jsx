import React from 'react';
import { withRouter } from 'react-router-dom';

import { AuthContext } from '../../auth/Auth';
import ProfileNav from './ProfileNav';
import ProfileContent from './ProfileContent';
import getProfile from '../../apis/Profile/getProfile.js';

import styles from './Profile.module.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNav: 'Account',
      account: {
        userId: '',
        email: 'email',
        firstName: 'firstname',
        lastName: 'lastname',
        birthday: {
          day: 'DD',
          month: 'MM',
          year: 'YYYY',
        },
        mobile: 'mobile',
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
    // this.context = this.contextType;
  }

  componentDidMount() {
    const {
      userId, firstName, lastName, email,
    } = this.context.currentUser;

    getProfile(userId)
      .then((res) => console.log('reslove', res))
      .catch((e) => console.log('reject', e));

    this.setState((prevState) => ({
      account: {
        ...prevState.account,
        userId,
        firstName,
        lastName,
        email,
      },
    }));
  }

  handleNavChange(currentNav) {
    this.setState({
      currentNav,
    });
  }

  handleInputChangeCreator = (key) => ((value) => {
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
      {
        payment: {
          ...prevState.payment,
          bankAccount: value,
        },
      }
    ));
  };

  handleBillChange = (value) => {
    this.setState((prevState) => (
      {
        payment: {
          ...prevState.payment,
          billingAddress: value,
        },
      }
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
              userName={account}
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

Profile.contextType = AuthContext;

export default withRouter(Profile);
