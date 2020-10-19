import React from "react";


const ModuleListComponent = () =>

        <div className="row">

            <div className>  {/*previous row = 4*/}
                <ul className="list-group wbdv-module-list">
                    <li className="list-group-item active wbdv-module-item">Module 1: Intro &
                        Review
                        <i className="fa fa-times float-right wbdv-module-item-delete-btn "></i>
                    </li>
                    <li className="list-group-item wbdv-module-item">Module 2: Divide & Conquer
                        <i className="fa fa-times float-right wbdv-module-item-delete-btn"></i>
                    </li>
                    <li className="list-group-item wbdv-module-item">Module 3 :Dynamic
                        Programming
                        <i className="fa fa-times float-right wbdv-module-item-delete-btn"></i>
                    </li>
                    <li className="list-group-item wbdv-module-item"> Module 4: Greedy
                        Algorithms
                        <i className="fa fa-times float-right wbdv-module-item-delete-btn"></i>
                    </li>
                    <li className="list-group-item wbdv-module-item">Module 5: Graph
                        Algorithms<i
                            className="fa fa-times float-right wbdv-module-item-delete-btn"></i>
                    </li>

                    <li className="list-group-item">New Module<i
                        className="fa fa-plus float-right wbdv-module-item-delete-btn"></i>
                    </li>
                </ul>
            </div>
        </div>



export default ModuleListComponent



