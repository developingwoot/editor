import * as React from "react";
import { Link } from "react-router";

export class Navigation extends React.Component<{}, {}> {
    render() {
        return (
            <ul role="nav" className={"menu align-right"}>
                <li className={"menu-text"}>Sour Mash</li>
                <li><Link to="posts">Posts</Link></li>
                <li><Link to="/">Dashboard</Link></li>
            </ul>
        );
    }
}