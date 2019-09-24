import React from 'react';
import { Header } from './components/layouts/Header'
import { Content } from './components/layouts/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';

export const App = () =>  (
  <SelectedProjectProvider>
    <ProjectsProvider>
    <div className="App">
      <Header />
      <Content />
    </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
);


export default App;
