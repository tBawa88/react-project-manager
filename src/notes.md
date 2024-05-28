## Refactoring the project to context api
- Version 1.0 of this project was written by managing state and state updating functions inside App component
- To prevent the prop drilling in that version, I decided to migrate this entire project to use the Context api provided by react

## ProjectDashboard component
- Created a new component 'ProjectDashboard' which will now render all other components instead of doing it all inside App component
- This makes ProjectDashboard the new **root** of the entire project tree
- Now this root can be wrapped inside the context provider and we can access the context value anywhere inside the project
- This approach prevents all the prop drilling

## ProjectStateProvider component
- Created a new directory 'Context' and inside it a new file 'ProjectStateComponent.jsx'
- Two things happening in this file
    1. Created a context object using `const ProjectContext = createContext({})`
        - This object is initialized with empty functions to help with autocomplete
        - By importing this object, other components which are being wrapped inside Provider will be able to access the Project state
    2. Created a wrapper component `function ProjectStateProvider(){}` 
        - Managing the entire state and state updating functions  inside this component  
        - Using the context object's **Provider** component, and using it to wrap the children prop being passed to this component
        - A context value is being derived from the current state of this component, and it is then passed as the value prop of Provider component
        - This component is being imported inside App, and is being used to wrap ProjectDashboard
        - This way all the components inside ProjectDashboard can access the latest value of the project state by importing the ProjectContext and using    **useContext(ProjectContext)** hook