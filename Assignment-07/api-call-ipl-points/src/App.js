// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;










import React, { useEffect, useState } from 'react';

const IPLPointsTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then((response) => response.json())
      .then((data) => {
        // Sort teams by NRR in ascending order
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>IPL 2022 Points Table (Sorted by NRR Ascending)</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches Played</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.Team}>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Wins}</td>
              <td>{team.Losses}</td>
              <td>{team.Points}</td>
              <td>{team.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPLPointsTable;
