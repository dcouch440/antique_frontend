import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { LOGIN } from '../../constant';

export default function OnlineStatus ({ currentUser }) {
  useEffect(() => {
    if (!currentUser.id) {
      return;
    }

    const socket = io('https://agile-fjord-22145.herokuapp.com/:4000', { withCredentials: true });
    socket.emit( LOGIN, { id: currentUser.id, username: currentUser.username } );

    return () => socket.disconnect();

  }, [currentUser]);
}
