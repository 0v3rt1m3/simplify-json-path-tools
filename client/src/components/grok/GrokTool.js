import React, { useState, useEffect } from "react";
import FetchPost from "../hooks/FetchPost";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { spacing } from "@material-ui/system";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import JSONInput from "react-json-ide";
import locale from "react-json-ide/locale/en";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function GrokTool() {
  const [jsonData, setJsonData] = useState({});
  const classes = useStyles();
  const [editorValue, setValue] = useState("");
  const [grokPattern, setGrokPattern] = useState("");
  const [inputLog, setInputLog] = useState("");

  const handleEditorChange = (content, editor) => {
    setValue(content);
    localStorage.setItem("clipboard", content);

    console.log("Content was updated:", content);
  };

  const onChangeInputLog = (e) => {
    // console.log(e.target.value);
    setInputLog(e.target.value);
    let payload = {};
    payload.log = inputLog;
    payload.pattern = grokPattern;
    console.log(payload);
    retrieveParsedGrok("http://localhost:9000/grok/grok", payload);
    // console.log(jsonData);
  };
  const onChangeGrokPattern = (e) => {
    // console.log(e.target.value);
    setGrokPattern(e.target.value);
    let payload = {};
    payload.log = inputLog;
    payload.pattern = grokPattern;
    console.log(payload);
    retrieveParsedGrok("http://localhost:9000/grok/grok", payload);
    // console.log(resdata);
    console.log(jsonData);
  };

  async function retrieveParsedGrok(url, payload) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    };
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data);
    if (data != null) setJsonData(data);
    // return data;
  }

  useEffect(() => {
    // Update the document title using the browser API
    if (localStorage.getItem("clipboard"))
      setValue(localStorage.getItem("clipboard"));
  }, []);

  // const data = FetchPost("http://localhost:9000/testApi", { test: "DATA" });
  // console.log(data);
  // POST request using fetch inside useEffect React hook
  // const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ title: 'React POST Request Example' })
  // };
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);
  // const data = await response.json();
  // this.setState({ postId: data.id });
  // empty dependency array means this effect will only run once (like componentDidMount in classes)

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} m={3}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography align="center">Clipboard </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AceEditor
              mode="java"
              theme="monokai"
              value={editorValue}
              onChange={handleEditorChange}
              width={window.innerWidth + "px"}
              height={window.innerHeight / 2 + "px"}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
              }}
            />
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <div className="input-field ">
          <input
            placeholder="Add input log here"
            id="inputlog"
            type="text"
            className="validate"
            onChange={onChangeInputLog}
          />
        </div>
      </Grid>

      <Grid item xs={1}></Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={10} m={3}>
        <div className="input-field ">
          <input
            placeholder="Add GROK pattern here"
            id="pattern"
            type="text"
            className="validate"
            onChange={onChangeGrokPattern}
          />
        </div>
      </Grid>

      <Grid item xs={1}></Grid>

      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <JSONInput
          id="a_unique_id"
          placeholder={jsonData}
          locale={locale}
          width={(window.innerWidth * 0.97) / 1.3 + "px"}
          height={window.innerHeight + "px"}
          viewOnly
          // reset
          // width=" 600px"
        />
      </Grid>
      <Grid item xs={1}></Grid>

      <Grid item xs={12}></Grid>
    </Grid>
  );
}
