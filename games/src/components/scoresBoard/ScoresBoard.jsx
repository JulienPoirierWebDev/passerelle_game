function ScoresBoard({ scores }){
  return (
    <div>
      <h2>Scoreboard</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">Player</th>
            <th className="border px-4 py-2">Computer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">{scores.player}</td>
            <td className="border px-4 py-2">{scores.computer}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoresBoard;