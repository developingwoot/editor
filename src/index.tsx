import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/hello";
import { Button } from "./components/button";

ReactDOM.render(
    <Button value="Submit" id="test-button" name="submit-main" />,
    document.getElementById("example")
);