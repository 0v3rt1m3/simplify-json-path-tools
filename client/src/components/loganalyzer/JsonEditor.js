import React, { useState, useEffect } from "react";
import JSONInput from "react-json-ide";
import "jsoneditor-react/es/editor.min.css";
import locale from "react-json-ide/locale/en";
import jp from "jsonpath";
import { Textarea } from "react-materialize";
import M from "materialize-css";
import { makeStyles } from "@material-ui/core/styles";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Grid from "@material-ui/core/Grid";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function JsonEditor() {
  const [jsonData, setJsonData] = useState({});
  const [jsonData2, setJsonData2] = useState({});
  const classes = useStyles();
  const [editorValue, setValue] = useState("");
  //   M.AutoInit;
  useEffect(() => {
    // Update the document title using the browser API
    if (localStorage.getItem("clipboard"))
      setValue(localStorage.getItem("clipboard"));
  }, []);

  const handleEditorChange = (content, editor) => {
    setValue(content);
    localStorage.setItem("clipboard", content);

    console.log("Content was updated:", content);
  };

  JSON.flatten = function (data) {
    var result = {};
    function recurse(cur, prop) {
      if (Object(cur) !== cur) {
        result[prop] = cur;
      } else if (Array.isArray(cur)) {
        for (var i = 0, l = cur.length; i < l; i++)
          recurse(cur[i], prop ? prop + "[*]" : "" + i);
        if (l === 0) result[prop] = [];
      } else {
        var isEmpty = true;
        for (var p in cur) {
          isEmpty = false;
          recurse(cur[p], prop ? prop + "." + p : p);
        }
        if (isEmpty) result[prop] = {};
      }
    }
    recurse(data, "");
    return result;
  };

  function onJsonChange(obj) {
    // setJsonData(JSON.flatten(JSON.parse(obj.json)));
    if (obj.error === false) {
      // console.log(jp.query(JSON.parse(obj.json), '$.store.book[*].author'));
      console.log(obj.json);
      let jsonobj = {};
      let flattenedJson = JSON.flatten(JSON.parse(obj.json));
      let x = 0;
      Object.keys(flattenedJson).map(function (key) {
        console.log(key);
        if (key != "") {
          let jsonpath = "$." + key;
          console.log(jsonpath);
          let parsed = jp.query(JSON.parse(obj.json), jsonpath);
          jsonobj[jsonpath] = parsed;
          x++;
          console.log(parsed);
        }

        return key;
      });

      setJsonData2(jsonobj);
      // console.log(jp.query(jsonData, "$.store.book[1].category"));
      console.log(jsonData2);
    }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
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

        <Grid
          item
          xs={6}
          direction="column"
          alignItems="center"
          justify="center"
          container
        >
          <Typography>Unflattened JSON</Typography>
        </Grid>

        <Grid
          item
          xs={6}
          direction="column"
          alignItems="center"
          justify="center"
          container
        >
          <Typography>
            Flattened JSON, key-value pair mapped as Json-Path
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <JSONInput
            id="a_unique_id"
            placeholder={jsonData}
            onChange={onJsonChange}
            locale={locale}
            width={(window.innerWidth * 0.97) / 2 + "px"}
            height={window.innerHeight + "px"}
            // reset
            // width=" 600px"
          />
        </Grid>
        <Grid item xs={6}>
          <JSONInput
            id="a_unique_id2"
            placeholder={jsonData2}
            // onChange={onJsonChange}
            locale={locale}
            width={(window.innerWidth * 0.97) / 2 + "px"}
            height={window.innerHeight + "px"}
            viewOnly
            // reset
            // width=" 600px"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JsonEditor;
