import * as React from "react";

export interface ButtonProps { id: string, name: string; value: string; }

export class Button extends React.Component<ButtonProps, {}> {
    render() {
        return <input className={'button'} type='button' id={this.props.id} value={this.props.value} name={this.props.name} />;
    }
}