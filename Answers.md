1. What problem does the context API help solve?
Context API helps to solve the complicated prop drilling problem. Once app gets bigger, the nested components gets complicated to get the props. So context api helps by injecting the state no matter how deep it nested.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions: give specific instructions to how to update the state.
  Reducers: Accept the instructions from action and update the state accordingly.
  Store: Store stores all our state in the single place thats why it is called 'single source of truth'.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is the one that stored in store. And is immutable. Components state only belongs that specific component only. Application state should be used when we have a state that needs to be shared through many components. otherwise just component state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
     Thunk is basicly function returned by function and it with middleware helps us to make an api call. When function (thunk) returned by action creater it will invoke that function and pass in the dispatch function as an argument which makes it possible to run an async  function.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
      I enjoyed Context Api but ultimately Redux is the best and secure way to handle state.