import React from "react";
import Employee from "./model/employee";

class Hr extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            employee: new Employee(),
            employees: []
        }
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Employee</h4>
                    </div>
                    <div className="card-body">

                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Employees</h4>
                    </div>
                    <div className="card-body">

                    </div>
                </div>
            </div>
        );
    }

}

export default Hr;
