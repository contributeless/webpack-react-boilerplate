import * as React from "react";

export class TableCell extends React.PureComponent<{}, {}> {
    render(){
        return <div className='fc-date-cell'>
            <div className='fc-date-cell-child'>Test content1</div>
            <div className='fc-date-cell-child' >Test content2</div>
        </div>;
    }
}
