import * as React from "react";

export interface InputProps { name: string; label: string; type: string; }

export class InputField extends React.Component<InputProps, {}> {
    render() {
        return (
            <div className="medium-6 columns">
                <label>
                    {this.props.label}
                    <input type={this.props.type} name={this.props.name} />
                </label>
            </div>
            );
    }
}