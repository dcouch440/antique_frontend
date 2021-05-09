import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Username, HubLink } from './styles';
import { Link } from 'react-router-dom';
import SignOut from '../SignOut';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 40px;
  font-family: 'Pacifico', cursive;
`;

export default function SingedIn ({ user }) {
  return (
    <Grid>
      <Username>Welcome {user.charAt(0).toUpperCase() + user.slice(1)} </Username>
      <HubLink><Link to='/antiques'>antiques</Link></HubLink>
      <HubLink><Link to='/antiques/new'>post</Link></HubLink>
      <HubLink><Link to='/likes'>likes</Link></HubLink>
      <HubLink><Link to='/'>profile</Link></HubLink>
      <SignOut />
    </Grid>
  );
}

SingedIn.propTypes = {
  user: PropTypes.string
};
