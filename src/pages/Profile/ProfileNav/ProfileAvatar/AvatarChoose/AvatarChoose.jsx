import React from 'react';

import styles from './AvatarChoose.module.scss';

import AvatarDisplay from './AvatarDisplay';
import AvatarFinder from '../../../../../components/Avatar/avatarFinder';
import updateAvatar from '../../../../../apis/Profile/updateAvatar';

class AvatarChoose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choosenAvatar: '',
    };

    this.handleAvatarChoose = this.handleAvatarChoose.bind(this);
    this.handleAvatarSubmit = this.handleAvatarSubmit.bind(this);
  }

  componentDidMount() {
    const { avatarID } = this.props;

    this.setState({
      choosenAvatar: avatarID,
    });
  }

  handleAvatarChoose(ID) {
    this.setState({
      choosenAvatar: ID,
    });
  }

  handleAvatarSubmit = async () => {
    const { choosenAvatar } = this.state;
    const avatarIDData = {
      avatarId: choosenAvatar,
    };

    const result = await updateAvatar(avatarIDData);

    if (!choosenAvatar || !result) {
      return;
    }

    this.props.onClose(false);
    this.props.onNavAvatarChange();
  }

  render() {
    const { onClose } = this.props;
    const avatarArray = new Array(20);
    for (let i = 0; i < avatarArray.length; i += 1) {
      avatarArray[i] = i + 1;
    }

    return (
      <div className={styles.avatar_choose_wrapper}>
        <div className={styles.avatar_choose}>
          <button className={styles.close} onClick={() => onClose(false)}>
            <i className="fas fa-times"></i>
          </button>
          <div className={styles.avatar_display}>
            {avatarArray.map((index) => {
              const image = AvatarFinder(index);
              const onAvatarChange = () => this.handleAvatarChoose(index);
              const { choosenAvatar } = this.state;

              return (
                <AvatarDisplay
                  key={index}
                  id={index}
                  image={image}
                  onAvatarChange={onAvatarChange}
                  choosenAvatar={choosenAvatar}
                />
              );
            })}
            </div>
          <button className={styles.choose} onClick={this.handleAvatarSubmit}>
            Choose this as your profile avatar
            </button>
        </div>
      </div>
    );
  }
}

export default AvatarChoose;
