import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import RoomsSearch from './rooms-search/RoomsSearch';
import UsersSearch from './users-search/UsersSearch';
import * as classes from './Dashboard.css';

const Dashboard = ({
  availableRooms,
  availableUsers,
  onSendPrivateMessage,
  onJoinRoomsRequest,
  joinRequestsPending,
  joinRequestsApproved,
  joinRequestSent,
  setJoinRequestSent
}) => {

  const [ filteredUsers, setFilteredUsers ] = useState([]);


  const filterUsers = (e) => {
    const query = e.target.value;
    const filtered = availableUsers.filter(user => {
      return user.includes(query);
    });
    setFilteredUsers(filtered);
    console.log(query);
  }

  return (
    <div className='searchContainer'>
      <Input className='mainSearch' label='Find User' placeholder='Search...' onChange={filterUsers} />
      <UsersSearch filteredUsers={filteredUsers} onSendPrivateMessage={onSendPrivateMessage} />
      <RoomsSearch availableRooms={availableRooms} 
                   onJoinRoomsRequest={onJoinRoomsRequest} 
                   joinRequestSent={joinRequestSent}
                   joinRequestsPending={joinRequestsPending}
                   joinRequestsApproved={joinRequestsApproved}
                   setJoinRequestSent={setJoinRequestSent} />
    </div>
  )
}

export default Dashboard;