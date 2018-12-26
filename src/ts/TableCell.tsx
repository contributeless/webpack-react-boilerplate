import * as React from "react";

export class TableCell extends React.PureComponent<{}, {}> {
    render(){
        return <div className='fc-date-cell'>
            <div className='fc-date-cell-child'>Hi there!!!</div>
            <div className='fc-date-cell-child' >or there!!!</div>
        </div>;
    }
}