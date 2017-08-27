# using ngrx for manage states

For larger Angular applications with a lot of asynchronous activity and where there's a lot of state that is being shared and manipulated across multiple components and modules, managing state can be quite challenging

Ngrx/store is an "RxJS powered state management library for Angular applications, inspired by Redux".

## Fundamental Tenets of ngrx/store

- State is a single, immutable data structure
- Actions describe state changes
- Pure functions called reducers take the previous state and the next action to compute the new state
- State accessed with the Store, an observable of state and an observer of actions


The following is a quick overview of Actions, Reduce and Store:

1. **Actions :**
Actions are information payloads that send data from the application to the reducer, which updates the store. Actions are the only way the store receives data.

2. **Reducer :**
Reducers specify how the state changes in response to actions. A reducer is a pure function that describes state mutations in the app by taking the previous state and the dispatched action and returning the next state as a new object, generally using Object.assign and/or spread syntax

3. **Store :**
The store holds the entire immutable state of the application. The store in ngrx/store is an RxJS observable of state and an observer of actions.
We can use Store to dispatch actions. We can also subscribe to observe and react to state changes over time with Store's select() method, which returns an observable.

To read your application state in Redux, we need to use the select() method on @ngrx's Store class. This method creates and returns an Observable that is bound to a specific property in your application state.

>In this example we use "ngrx" to implement state managment :
>
>1. Actions are "INCREMENT" , "DECREMENT" and "RESET",
>2. reducer is "counterReducer" that manage the state with a function and then send it to store. 
>
>all part of module should Communicate with store for knowing the state. and for changing the state, store use the reducer function.
