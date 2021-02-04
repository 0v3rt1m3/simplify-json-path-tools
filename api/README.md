# Code Generator and Editor

This application can generate and edit codes with built in tools to parse and analyze logs such as:

1. Grok logstash debugger to analyze logs and unstructured data.
2. JSON analyzer that flattens the json object into a json-path format.
3. It also features an instant access clipboard so that you could store data across different tools
4. It has a template manager where you can build and manage templates that can be used to generate code in a structured format.
5. A code builder that's configurable based on a metadata file that allows you to use different templates and preview the output at the same time.
6. After creating the metadata the application will then try to build and test the application before writing.

**NOTE**
This is a code generator and editor. \*not an ide.

## How to Install

- Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
- Renders actual, "native" React DOM elements
- Allows you to escape or skip HTML (try toggling the checkboxes above)
- If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!

## To Do

1. Template
2. Code Builder
3. Build run command

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?

```js
var React = require("react");
var Markdown = require("react-markdown");

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById("content")
);
```

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔       |
| alignment | ✔       |
| wewt      | ✔       |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---
