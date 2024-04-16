import React from 'react';
import '../styles/Leaderboard.css'

interface User {
  id: number;
  name: string;
  points: number;
}

interface LeaderboardProps {
  users: User[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ users }) => {
  // Sort users based on points in descending order
  const sortedUsers = users.sort((a, b) => b.points - a.points);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ol>
        {sortedUsers.map((user, index) => (
          <li key={user.id}>
            <span>{user.name} </span>
            <span className="points">{user.points} pts</span>
            {index < sortedUsers.length - 1 && <hr />} {/* Add a horizontal line if not the last item */}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
