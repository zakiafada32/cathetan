---
template: BlogPost
path: /redux-principle
date: 2021-01-1T20:14:12.137Z
title: Redux - Getting Started
thumbnail: '/assets/redux.jpg'
metaDescription: Meta description for Redux - Getting Started
---

January 01, 2021

# Getting Started With Redux - Summary of egghead.io course

---

### Principle of Redux

1. **Everything that changes in your application**, including the data and the UI state, **is contained in a single object**, we call the state or the state tree.
2. **That the state tree is read only**. You cannot modify or write to it. Instead, anytime you want to change the state, you need to dispatch an action. An action is plan JS object describing the change. Just like the state is the minimal representation of the data in your app, the action is the minimal representation of the change to that data.
3. **Reducer functions**. To describe state mutations, you have to write a function that takes the previous state of the app, the action being dispatched, and returns the next state of the app. And the function has to be pure.

```javascript{numberLines: true}
// reducer function example
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
```

> [Open playground](https://embed.plnkr.co/github/eggheadio-projects/getting-started-with-redux/master/05-react-redux-writing-a-counter-reducer-with-tests?show=script,preview)

### Store method

Store binds together the three principles of Redux. It holds the current application's state object. It lets you dispatch actions. When you create it, you need to specify the reducer that tells how state is updated with actions.

&nbsp;&nbsp;&nbsp;&nbsp;**Store has three methods.**

- getState( ), it retrieves the current state of the Redux store.
- dispatch( ), it lets you dispatch actions to change the state of your application.
- subscribe( ), it lets you register a callback that the Redux store will call any time an action has been dispatched, so that you can update the UI of your application. It will reflect the current application state.

> [Open playground](https://embed.plnkr.co/github/eggheadio-projects/getting-started-with-redux/master/06-react-redux-store-methods-getstate-dispatch-and-subscribe?show=script,preview)

### Note

- **Pure function**
  Pure functions whose returned value depends solely on the values of their arguments. Pure functions do not have any observable side effects, such as network or database calls. Pure functions just calculate the new value. If you call the pure function with the same set of arguments, you're going to get the same returned value. They are predictable. And pure functions do not modify the values passed to them.
- **Impure function**
  Impure functions may call the database or the network, they may have side effects, they may operate on the DOM, and they may override the values that you pass to them.
- **The functions** that you're going to write **in Redux have to be pure**, and you need to be mindful of that.

### Resource

> [Getting Started with Redux](https://egghead.io/series/getting-started-with-redux)
