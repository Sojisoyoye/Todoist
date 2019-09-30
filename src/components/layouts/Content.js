/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';

export const Content = () => (
  <section className="content">
    <Sidebar />
    <Tasks />
  </section>
);
