import * as React from "react";
import { InputField } from '../../components/inputs/InputField'
import { Button } from '../../components/inputs/button'


export class Settings extends React.Component<{}, {}> {
    render() {
        return (
            <div className={"medium-12 colums"}>
                <div className={'row'} >
                    <div className={'small-2 medium-2 colums'} >
                        <h3>Settings</h3>
                    </div>
                    <div className={'small-1 small-offset-3 medium-1 medium-offset-4 colums'} >
                        <Button id="settings-save" name="settings-save" value="Save" />
                    </div>
                </div>

                <hr />
                <div className={"row"} >
                    <InputField label={"Jekyll Location"} type={"text"} name={"settings-jekyll-location"} />
                </div>
            </div>
        );
    }
}