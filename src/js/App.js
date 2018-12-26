import React from "react";
import {TableCell} from "../ts/TableCell.tsx";
import "./app.css";
import "./test.styl";

const App = () => {
    return (
        <div>
            <p>React h ere! or hееееere</p>
            <TableCell />
            <img src={require("../img/small-image.jpg")} />
        </div>
    );
};
export default App;
