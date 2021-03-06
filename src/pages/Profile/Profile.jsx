import React from 'react';
import { withRouter } from 'react-router-dom';

import { AuthContext } from '../../auth/Auth';
import ProfileNav from './ProfileNav';
import ProfileContent from './ProfileContent';
import getProfile from '../../apis/Profile/getProfile';
import { saveProfile } from '../../apis';
import { setIntializeBirthday, setIntializePayment, setInitalizeBilling } from './utils';
import updateUserName from '../../apis/Profile/updateUserName';
import getAvatar from '../../apis/Profile/getAvatar';
import { toDate } from '../OfferModal/ProfilePage/SubPages/Birthday/utils';
import Notification from '../../components/Notification';

import styles from './Profile.module.scss';
import { FetchContext } from '../../apis/Fetch';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNav: 'Account',
      isAvatarShow: false,
      displayName: '',
      account: {
        userId: '',
        email: '',
        firstName: '',
        lastName: '',
        birthday: '',
        mobile: '',
        avatarId: '',
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
    this.handleAvatarShow = this.handleAvatarShow.bind(this);
    this.handleAvatarChange = this.handleAvatarChange.bind(this);
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
    const { avatarId } = await getAvatar();
    const bankAccountData = setIntializePayment(bankAccount);
    const billingAddressData = setInitalizeBilling(billingAddress);

    this.setState((prevState) => ({
      account: {
        ...prevState.account,
        birthday: setIntializeBirthday(birthday),
        mobile,
        avatarId,
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
    const { onNotification } = this.props;
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
        accountHolder,
        accountNumber,
        bsb,
      },
      billingAddress,
      birthday: toDate(birthday),
      mobile,
    };

    const res = await saveProfile(profile);
    console.log(999, res);
    if (res.data) {
      return onNotification({
        status: 'error',
        message: 'update profile failed, please check payment details'
      });
    }
    return onNotification({
      status: 'success',
      message: 'update profile succeeded'
    });
  }

  handleNameChange = async () => {
    const { onNotification } = this.props;
    const {
      account: {
        firstName,
        lastName,
      },
    } = this.state;

    const username = { firstName, lastName };
    const res = await updateUserName(username);

    if (res.data) {
      return onNotification({
        status: 'error',
        message: 'update name failed'
      })
    }

    this.setState({
      displayName: `${res.firstName} ${res.lastName}`,
    });
    return onNotification({
      status: 'success',
      message: 'update name succeeded',
    });
  }

  handleAvatarShow(boolean) {
    this.setState({
      isAvatarShow: boolean,
    });
  }

  handleAvatarChange(avatarId) {
    this.setState((prevState) => ({
      ...prevState,
      account: {
        ...prevState.account,
        avatarId,
      },
    }));
  }

  render() {
    const {
      currentNav,
      displayName,
      account,
      payment,
      isAvatarShow,
    } = this.state;
    const { onNotification } = this.props;

    return (
      <React.Fragment>
        <div className={styles.profile_wrapper}>
          <div className={styles.profile}>
            <ProfileNav
              currentNav={currentNav}
              handleNavChange={this.handleNavChange}
              userName={displayName}
              avatarID={account.avatarId}
              isAvatarShow={isAvatarShow}
              onAvatarShowChange={this.handleAvatarShow}
              onNavAvatarChange={this.handleNameChange}
              onAvatarChange={this.handleAvatarChange}
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
              onNotification={onNotification}
            />
          </div>
        </div>
        </React.Fragment>
    );
  }
}

Profile.contextType = AuthContext;

export default withRouter(Profile);
