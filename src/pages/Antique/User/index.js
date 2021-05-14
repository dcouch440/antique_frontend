import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Context } from '../../../Context';
import OnlineAnimation from '../../../Framer/OnlineAnimation';
import {
  Online,
  AvatarContainer,
  AboutMe,
  Avatar
} from './styles';

export default function User ({ ownerInfo }) {
  const { currentUser: { id } } = useContext(Context);
  console.log(ownerInfo);
  const isCurrentUserPostOrUserOnline = (id === ownerInfo.id && id) ? true : ownerInfo.online;
  const onlineOfflineText = isCurrentUserPostOrUserOnline ? 'Online' : 'Offline';

  return (
    <AvatarContainer>
      <AboutMe>{ownerInfo.username}</AboutMe>
      <Avatar
        status={true}
        src={ownerInfo.avatar?.url}
        alt={'avatar'}
      />
      <Online status={isCurrentUserPostOrUserOnline}>
        <OnlineAnimation status={isCurrentUserPostOrUserOnline}/>
        {onlineOfflineText}
      </Online>
    </AvatarContainer>
  );
}

User.propTypes = {
  ownerInfo: PropTypes.shape({
    avatar: PropTypes.shape({
      image_url: PropTypes.string,
      user_id: PropTypes.number
    }),
    online: PropTypes.bool,
    username: PropTypes.string
  })
};
