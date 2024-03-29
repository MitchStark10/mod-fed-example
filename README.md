Example Host/Remote connection with React

Key Files:
- `app1/src/App.tsx` - Host entry point that handles routing. Note the use of wildcard paths to ensure
  that the remote can have access to deep links on that given path.
- `app2/src/Components/ModuleWrapper.tsx` - Wrapper component for all remotes that handles the receiveing of the access token. The useEffect in that file detects changes to the access token and allows the remote to decide how to share the updated access token.
- `app2/src/Modules/Module1.tsx` - Remote module that provides an example of using deep linking, and how to link across modules using the parent's router.
- `app2/src/Modules/Module2.tsx` - Remote module that provides a basic example of nested content.
- `app1/modulefederation.config.js` - Important notes with the module federation config:
  - We need singletons for React & React Router. Both of these libraries require a single instance to be used across all modules. (An equivalent setup exists in the remote's `app2/modulefederation.config.js` file.)