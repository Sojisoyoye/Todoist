import React, { useState } from 'react';
import {
    FaChevronDown,
    FaInbox,
    FaRegCalendarAlt,
    FaRegCalendar,
} from 'react-icons/fa';
import { Projects } from '../Projects';
import { useSelectedProjectValue } from '../../context';

export const Sidebar = () => {
    const { selectedProject } = useSelectedProjectValue;
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProject] = useState(true);
 
     return (
    <div className="sidebar" data-testid="sidebar">

    <ul className="sidebar__generic">
    <li data-testid="inbox" className="inbox" >
        <span>
            <FaInbox />
        </span>
        <span>Inbox</span>
    </li>
    <li data-testid="today" className="today" >
        <span>
            <FaRegCalendar />
        </span>
        <span>Today</span>
    </li>
    <li data-testid="next_7" className="next_7" >
        <span>
            <FaRegCalendarAlt />
        </span>
        <span>Next 7 Days</span>
    </li>
    </ul>

    <div className="sidebar__middle">
        <span>
            <FaChevronDown />
            <h2>Projects</h2>
        </span>
    </div>

    <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
    {showProjects && <Projects />}
    </div>
);
};
