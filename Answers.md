1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .filter, .reduce do not produce side effects.

Object.assign


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions : actions are objects that are passed to the reducers with information on how to update the state tree. Actions contain Action Creators and Action Type

Reducers: function that returns and object that will represent the state tree.

Store:  The store is an object that will contain all the state data for our applications.

single source of truth means that in redux all your data is stored into one single object



1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state:  Represents the entire state of an appliaction.


Component State: 

Data stored in the state of your component.



1.  What is middleware? 

Middleware tool adds new functionality to redux, it lets us manipulate data we are passing through our actions to the reducers.
Middleware stops actions, forward untouched actions and dispatch or change the action. 



1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux thunk is a function returned by another function, used in action creators for asynchronous operations.



1.  Which `react-redux` method links up our `components` with our `redux store`?
connect.