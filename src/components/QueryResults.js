import React from "react";

const QueryResults = ({ result }) => {
  if (!result || result.length === 0) return <p>No data to display</p>;

  return (
    <div>
      <h3>Query Results</h3>
      <table border="1">
        <thead>
          <tr>{Object.keys(result[0]).map((key) => <th key={key}>{key}</th>)}</tr>
        </thead>
        <tbody>
          {result.map((row, idx) => (
            <tr key={idx}>
              {Object.values(row).map((val, i) => <td key={i}>{val}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryResults;
