import * as React from "react";

export class InputField extends React.Component {
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