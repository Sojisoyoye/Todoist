/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';
import { Projects } from '../Projects';
import { useSelectedProjectValue } from '../../context';
import { AddProject } from '../AddProject';

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProject] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li data-testid="inbox" className={active === 'inbox' ? 'active' : undefined}>
          <div
            aria-label="Show Inbox Tasks"
            role="button"
            tabIndex={0}
            onClick={() => {
              setActive('inbox');
              setSelectedProject('INBOX');
            }}
            onKeyDown={() => {
              setActive('inbox');
              setSelectedProject('INBOX');
            }}
          >
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li data-testid="today" className={active === 'today' ? 'active' : undefined}>
          <div
            aria-label="Show Today's Tasks"
            role="button"
            tabIndex={0}
            onClick={() => {
              setActive('today');
              setSelectedProject('TODAY');
            }}
            onKeyDown={() => {
              setActive('today');
              setSelectedProject('TODAY');
            }}
          >
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li data-testid="next_7" className={active === 'next_7' ? 'active' : undefined}>
          <div
            aria-label="Show Tasks Next 7"
            role="button"
            tabIndex={0}
            onClick={() => {
              setActive('next_7');
              setSelectedProject('NEXT_7');
            }}
            onKeyDown={() => {
              setActive('next_7');
              setSelectedProject('NEXT_7');
            }}
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 Days</span>
          </div>
        </li>
      </ul>

      <div
        role="button"
        tabIndex={0}
        aria-label="Show/Hide Projects"
        className="sidebar__middle"
        onClick={() => setShowProject(!showProjects)}
        onKeyDown={() => setShowProject(!showProjects)}
      >
        <span>
          <FaChevronDown className={!showProjects ? 'hidden-projects' : undefined} />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};
