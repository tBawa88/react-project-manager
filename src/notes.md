## Refactoring the project to context api
- To prevent the prop drilling in the previous version, I decided to migrate this entire project to use the Context api provided by react
- Created a new component 'ProjectDashboard' which will now render all other components instead of doing it all inside App component
- This makes ProjectDashboard the new root of the entire project
- Now this root can be wrapped inside the context provider and we can access the context value anywhere inside the project
- This approach prevents all the prop drilling