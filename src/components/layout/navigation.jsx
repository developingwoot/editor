import * as React from "react";
import { Link } from "react-router";

export class Navigation extends React.Component {
    render() {
        return (
            <ul role="nav" className={"menu align-right"}>
                <li><Link to='settings'>Settings</Link></li>
                <li><Link to="posts">Posts</Link></li>
                <li><Link to="/">Dashboard</Link></li>
                <li className={"menu-text"}>Sour Mash</li>
            </ul>
        );
    }
}