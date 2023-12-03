
import React from "react";


function Table(){
    return(
        <div id={"table"} className={'table'}>
            <div id={"x-column"} className={"column"}>
                <div className={"head"}>X</div>
            </div>
            <div id={"y-column"} className={"column"}>
                <div className={"head"} >Y</div>
            </div>
            <div id={"r-column"} className={"column"}>
                <div className={"head"}>R</div>
            </div>
            <div id={"date-column"} className={"column"}>
                <div className={"head"}>Time</div>
            </div>
            <div id={"result-column"} className={"column"}>
                <div className={"head"}>Result</div>
            </div>
            <a className={"go-to-graph"} href={"#graph"}>↑</a>
        </div>

    )
}
export default Table
