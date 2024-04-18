import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Leaderboard.css'
import { User } from '@prisma/client';

const Leaderboard = () => {
  // Sort users based on points in descending order
  let [userData, setUserData] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
        await axios.get('http://localhost:8080/user/getAll', 
            {}).then(function(response) {
                console.log(response.data.data);
                setUserData(response.data.data);
                console.log(userData);
            }).catch(function (error) {
                console.log(error);
            });
    };
    fetchData();
    }, []);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <div className="user-list">
        {userData.map((userData, index) => (
          <div key={index} className="user">
            <span>{userData?.name}</span>
            <span>{userData?.points}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
