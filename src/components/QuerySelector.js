import React from "react";

const QuerySelector = ({ queries, setQuery, setResult }) => {
  return (
    <select onChange={(e) => {
      const selected = queries.find(q => q.id === parseInt(e.target.value));
      setQuery(selected.query);
      setResult(selected.data);
    }}>
      {queries.map((q) => (
        <option key={q.id} value={q.id}>{q.query}</option>
      ))}
    </select>
  );
};

export default QuerySelector;
