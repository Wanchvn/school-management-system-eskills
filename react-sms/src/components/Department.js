import React from "react";
import DepartmentModule from "./DepartmentModule";
import './Department.css';
import Header from "./Header";


const Department = ()=>{

    const headerName = 'Department'



    return(
        <div className="departmentcontent">
            <div className="header-department">
                <h2>{headerName}</h2>
                <p>Department In School</p>
            </div>
            <button className="assigndepartbutton">Create Department</button>


            <div className="departmentmain">
                    <div className="departmentheader">
                        <p>DepartmentID</p>
                            <p>Department Name</p>
                        <p className="action">Action</p>                        
                    </div>
                    
            </div>

        </div>
)

};

export default Department;