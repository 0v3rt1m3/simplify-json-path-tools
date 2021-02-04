import React, { useState, useEffect } from "react";
import VerticalTabs from "./VerticalTabs";
import { split as SplitEditor } from "react-ace";
import Button from "@material-ui/core/Button";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

const CodeEditor = () => {
  const [flagInitializer, setFlag] = React.useState(false);

  return (
    <div>
      fsdfsd
      <Button
        variant="contained"
        color="primary"
        onClick={() => setFlag(!flagInitializer)}
      >
        Primary
      </Button>
      <VerticalTabs flagInitializer={flagInitializer} />
    </div>
  );
};

export default CodeEditor;
