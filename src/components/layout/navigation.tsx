import * as React from "react";
import { Link } from "react-router";

var menuStyle = {
    "minWidth" : "400px"
};

export class Navigation extends React.Component<{}, {}> {
    render() {
        return (
            <ul role="nav" style={menuStyle} className={"menu align-right"}>
                <li><Link to="settings">Settings</Link></li>
                <li><Link to="posts">Posts</Link></li>
                <li><Link to="/">Dashboard</Link></li>
                <li className={"menu-text"}>Sour Mash</li>
            </ul>
        );
    }
}