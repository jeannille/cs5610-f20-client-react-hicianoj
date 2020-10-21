import React from "react";

const TopicPills = ({
                        lesson={},
                        tabs=[],
                        deleteTopic,
                        creatTopic,
                        updateTopic,
                        edit,
                        ok,
                    }) =>

    <div>
        <ul className="nav nav-pills wbdv-topic-pill-list">
            <li className="nav-item wbdv-topic-pill">
                <a href="#" className="nav-link">Recurrence Relations</a>
            </li>
            <li className="nav-item wbdv-topic-pill">
                <a href="#" className="nav-link active">Stable Matching</a>
            </li>
            <li className="nav-item wbdv-topic-pill">
                <a href="#" className="nav-link">Asymptotic Order of Growth</a>
            </li>
            <li className="nav-item wbdv-topic-pill">
                <a href="#" className="nav-link wbdv-topic-add-btn"><i
                    className="fa fa-plus fa-.5x"></i> Add
                    topic</a></li>
        </ul>
    </div>

export default TopicPills