import React, { useState } from "react";
import QueryEditor from "../components/QueryEditor";
import QuerySelector from "../components/QuerySelector";
import QueryResults from "../components/QueryResults";
import { queries } from "../data/queries";

const Home = () => {
  const [query, setQuery] = useState(queries[0].query);
  const [result, setResult] = useState(queries[0].data);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
      <h2>SQL Runner App</h2>
      <QuerySelector queries={queries} setQuery={setQuery} setResult={setResult} />
      <QueryEditor query={query} setQuery={setQuery} />
      <button onClick={() => setResult(result)}>Run Query</button>
      <QueryResults result={result} />
    </div>
  );
};

export default Home;
