# How to clone and reuse (for iOS) + Flux details

## How to rename the app
1.    clone from git
2.    run the following command
```
npm install
```
3.    edit the following file go to /ios/MakeMe/AppDelegate.m
4.    on line 45 change "MakeMe" to the name of app you want
```
moduleName:@"MakeMe"
```
5.    edit index.ios.js and replace MakeMe with the name you used in the step above
```
AppRegistry.registerComponent('MakeMe', () => MakeMe);
```

This is the optional if you want to change the name.  You can just run the npm install command and open the app per the instructions on facebook.

## Flux details
#### There are other ways to implement (e.g. make more functions private outside the class), this is just a simple setup.

1.    You just need to install "flux" and "events" node modules to run this flux.
2.    That was done for you when you did the npm install command
3.    Make a dispatcher and make sure it is a singleton by creating when you export. e.g. export default new Flux.Dispatcher();
4.    Make constants for your actions in snake_case
5.    Make actions based on CONSTANTS but make them camelCase.  Don't use magic strings!
6.    The dispatcher is used in the actions in this setup because the app is not making API calls.  
  *   If there are API calls,
  *   then the action may make a call to retrieve the data,
  *   then that API call will return a function when the data is received and there you use the dispatcher.
  *   Have single responsibility.  
7.    The store is setup and registers to evaluate actionTypes and do something with payload, usually the case.
  *   Example when you don't have a payload and just change state, e.g. isLoading: true | false
8.    The store that handles it will then emit that a certain change event has occurred.
9.    Each store should have a function to allows components to listen for events and register a callback AND a function to remove the certain callback when the component unmounts.  Otherwise you will have listeners to running a callback to something that doesn't exist.  Very very bad.
10.   Have getter functions for the data, state, so components can retrieve them.
11.   The data is outside the class to keep them private.  The class has access to them but it cannot be called by store object where you can change it (e.g AppStore.isAdmin = true).  The store is the only thing that can mutate the data.  There are no setters.
12.   Make sure to follow the singleton pattern for the stores so there is only one copy of used by multiple components.  That is to make sure there is a single source of truth.  e.g. export default new fooStore();
13.   If a component wants data from a store and then wants to get notified when some event happens so it can do something, then import the actions and store to the component.
14.   For example, use the store to get the data and set the state.
15.   When you want to do an action, e.g. add something, then the handle function should call the action with data it needs.
16.   Add a listener for change events, and pass a callback that will call setState.  You should use the store getter to assign the state variable as it will be the single source of truth.
17.   Order of operations:
  *   action will be requested
  *   payload dispatched and received by stores
  *   possibly update the data
  *   broadcast a change event
  *   run the callback you registered
  *   that callback will set the state with the latest info.
18.   Make sure to remove listener when the component unmounts.

This is how it is implemented in this app and can be done differently.  Redux could be used as well to reduce the number of stores and other benefits.  I have done both and for this app I chose flux to try out.  There is no need to mapStateToProps or use HOC or ES7 decorators.  
