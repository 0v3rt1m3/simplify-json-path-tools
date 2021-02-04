import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import GrokTool from "../components/grok/GrokTool";
import Error from "../components/Error";
import LogAnalyzer from "../components/loganalyzer/LogAnalyzer";
import CodeEditor from "../components/editor/CodeEditor";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/grok" component={GrokTool} />
      <Route path="/loganalyzer" component={LogAnalyzer} />
      <Route path="/codegenerator" component={CodeEditor} />
      <Route component={Error} />
    </Switch>
  );
}

export default Router;
