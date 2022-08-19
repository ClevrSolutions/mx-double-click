import { Component, createElement } from "react";

import "./ui/DoubleClick.css";

export default class DoubleClick extends Component {

    constructor(props) {
        super(props);

        this.onDoubleClick = this.onDoubleClick.bind(this);
    }

    onDoubleClick() {
        if (this.props.dblClickAction && this.props.dblClickAction.canExecute && 
                (this.props.allowConcurrent || !this.props.dblClickAction.isExecuting)) {
            this.props.dblClickAction.execute();
        }
    }

    render() {
        var classes = "";
        if (this.props.showPointer) {
            classes += "widget-doubleclick-clickable";
        }
        return (
            <div
                className={classes}
                onDoubleClick={this.onDoubleClick}
            >
                {this.props.children}
            </div>
        );
    }


}
