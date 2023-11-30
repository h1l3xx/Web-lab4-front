
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
                <div className={"head"}>Date</div>
            </div>
            <div id={"result-column"} className={"column"}>
                <div className={"head"}>Result</div>
            </div>
            <div id={"resend-column"} className={"column"}>
                <div className={"head"}>Try Again</div>
            </div>
        </div>

    )
}
export default Table
