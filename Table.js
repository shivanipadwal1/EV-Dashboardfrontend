import React from 'react';

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Model</th>
          <th>Manufacturer</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td>{row.Model}</td>
            <td>{row.Manufacturer}</td>
            <td>{row.Count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;