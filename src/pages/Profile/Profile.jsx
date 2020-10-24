import React from 'react';
import { withRouter } from 'react-router-dom';

import { AuthContext } from '../../auth/Auth';
import ProfileNav from './ProfileNav';
import ProfileContent from './ProfileContent';
import getProfile from '../../apis/Profile/getProfile';
import { saveProfile } from '../../apis';
import { setIntializeBirthday, setIntializePayment, setInitalizeBilling } from './utils';
import updateUserName from '../../apis/Profile/updateUserName';
import { toDate } from '../OfferModal/ProfilePage/SubPages/Birthday/utils';

import styles from './Profile.module.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNav: 'Account',
      displayName: '',
      account: {
        userId: '',
        email: '',
        firstName: '',
        lastName: '',
        birthday: '',
        mobile: '',
      },
      payment: {
        bankAccount: '',
        billingAddress: '',
      },
    };

    this.handleNavChange = this.handleNavChange.bind(this);
    this.handleInputChangeCreator = this.handleInputChangeCreator.bind(this);
    this.handlePaymentCreator = this.handlePaymentCreator.bind(this);
    this.handleBirthdayChangeCreator = this.handleBirthdayChangeCreator.bind(this);
    this.handleDalin = this.handleDalin.bind(this);
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
    this.getUserProfile = this.getUserProfile.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleDalin = () => {
    const pathName = this.props.history.location.pathname;

    if (pathName.includes('tasks')) {
      this.handleNavChange('Tasks');
      this.props.history.push('/profile');
    }
  }

  getUserProfile = async () => {
    const {
      bankAccount,
      billingAddress,
      birthday,
      mobile,
    } = await getProfile();
    const bankAccountData = setIntializePayment(bankAccount);
    const billingAddressData = setInitalizeBilling(billingAddress);

    this.setState((prevState) => ({
      account: {
        ...prevState.account,
        birthday: setIntializeBirthday(birthday),
        mobile,
      },
      payment: {
        bankAccount: bankAccountData,
        billingAddress: billingAddressData,
      },
    }));
  }

  componentDidMount() {
    const {
      userId, firstName, lastName, email,
    } = this.context.currentUser;

    // 给大林设计的那个postTask发送完跳转至Profile->Tasks页面
    this.handleDalin();
    // 跳转结束 --- 维尼

    this.setState((prevState) => ({
      displayName: `${firstName} ${lastName}`,
      account: {
        ...prevState.account,
        userId,
        firstName,
        lastName,
        email,
      },
    }), () => this.getUserProfile());
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

  handleBirthdayChangeCreator = (index) => ((value) => {
    this.setState((prevState) => (
      {
        account: {
          ...prevState.account,
          birthday: {
            ...prevState.account.birthday,
            [index]: value,
          },
        },
      }));
  });

  handlePaymentCreator = (index, objName) => ((value) => {
    this.setState((prevState) => (
      {
        payment: {
          ...prevState.payment,
          [objName]: {
            ...prevState.payment[objName],
            [index]: value,
          },
        },
      }
    ));
  });

  handleUpdateProfile = async () => {
    const {
      account: {
        birthday, mobile,
      },
      payment: {
        bankAccount: {
          accountHolder,
          accountNumber,
          bsb,
        },
        billingAddress,
      },
    } = this.state;

    const profile = {
      bankAccount: {
        accountHolder: accountHolder,
        accountNumber,
        bsb,
      },
      billingAddress,
      birthday: toDate(birthday),
      mobile,
    };

    const res = await saveProfile(profile);

    if (res) {
      return console.log(202, 'succeeded updated', res);
    }
    return console.log(500, 'failed');
  }

  handleNameChange = async () => {
    const {
      account: {
        firstName,
        lastName,
      },
    } = this.state;

    const username = { firstName, lastName };
    const res = await updateUserName(username);

    if (res) {
      this.setState({
        displayName: `${res.firstName} ${res.lastName}`,
      });
    }
  }

  render() {
    const { history } = this.props;
    const {
      currentNav,
      displayName,
      account,
      payment,
    } = this.state;

    return (
      <React.Fragment>
        <div className={styles.profile_wrapper}>
          <div className={styles.profile}>
            <ProfileNav
              currentNav={currentNav}
              handleNavChange={this.handleNavChange}
              userName={displayName}
            />
            <ProfileContent
              currentNav={currentNav}
              accountContent={account}
              onProfileChange={this.handleInputChangeCreator}
              paymentContent={payment}
              onPaymentChange={this.handlePaymentCreator}
              onBirthdayChange={this.handleBirthdayChangeCreator}
              onSubmit={this.handleUpdateProfile}
              onNameChange={this.handleNameChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Profile.contextType = AuthContext;

export default withRouter(Profile);
