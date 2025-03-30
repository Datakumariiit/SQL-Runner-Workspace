import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/sql/sql";

const QueryEditor = ({ query, setQuery }) => {
  return (
    <div>
      <h3>SQL Query Editor</h3>
      <CodeMirror
        value={query}
        options={{ mode: "sql", lineNumbers: true }}
        onBeforeChange={(editor, data, value) => setQuery(value)}
      />
    </div>
  );
};

export default QueryEditor;
