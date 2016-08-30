import * as React from "react";

export class Button extends React.Component {
    render() {
        return <input className={'button'} type='button' id={this.props.id} value={this.props.value} name={this.props.name} />;
    }
}