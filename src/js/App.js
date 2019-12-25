import React from "react";
import {TableCell} from "../ts/TableCell.tsx";
import "./app.css";
import "./test.styl";

const App = () => {
    return (

        <div>
            <p>webpack-react-boilerplate</p>
            <TableCell />
            <img src={require("../img/small-image.jpg").default} />
        </div>
    );
};
export default App;
