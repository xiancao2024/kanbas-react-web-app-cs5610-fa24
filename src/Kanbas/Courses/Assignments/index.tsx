
import {BsGripVertical} from "react-icons/bs";

import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaRegFileLines } from "react-icons/fa6";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentControls /><br /><br /><br /><br />
            <ul id="wd-assignment-list" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <FaRegFileLines className="me-3 text-success" />
                                <div>
                                    <div >
                                        <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">
                                        <strong>A1</strong>
                                        </a>
                                        </div>
                                    <div>
                                        <span className="text-danger">Multiple Modules</span> |
                                        <strong> Not available until</strong> May 6 at 12:00am |
                                        <strong> Due</strong> May 13 at 11:59pm | 100 pts
                                    </div>
                                </div>
                            </div>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <FaRegFileLines className="me-3 text-success" />
                                <div>
                                    <div><strong>A2</strong></div>
                                    <div>
                                        <span className="text-danger">Multiple Modules</span> |
                                        <strong> Not available until</strong> May 13 at 12:00am |
                                        <strong> Due</strong> May 20 at 11:59pm | 100 pts
                                    </div>
                                </div>
                            </div>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <FaRegFileLines className="me-3 text-success" />
                                <div>
                                    <div><strong>A3</strong></div>
                                    <div>
                                        <span className="text-danger">Multiple Modules</span> |
                                        <strong> Not available until</strong> May 20 at 12:00am |
                                        <strong> Due</strong> May 27 at 11:59pm | 100 pts
                                    </div>
                                </div>
                            </div>
                            <LessonControlButtons />
                        </li>
                        </ul>
                    </li>
            </ul>


        </div>
    );}