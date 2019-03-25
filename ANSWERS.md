## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
      PropTypes are used is a potential way to catch bugs before it becomes a problem. It ensures which data is being passed and lets you know if the data your passing is that specific type of data

- [ ] Describe a life-cycle event in React?
      A life cycle event is set up in 3 phases birth/mounting => growth/updating => death/unmounting. Birth is when the component is being built and this includes the constructor function and render. Growth phase is when setState or changes to state occur which calls render again. Death is when the component is removed from screen.

- [ ] Explain the details of a Higher Order Component?
      An HOC allows us to reuse component logic. An HOC is a function that takes in a component as a parameter and returns a new component. This is very similar to higher order function in javascript where a function takes in a function/callback and returns something. Using HOC adds more functionality to the component thats put in.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
      We can have a seperate css page to do styling which is good to keep styling alot more seperate from the logic. Another way is using the style tag in JSX to style components which is basically the same as styling in HTML this makes it easy to know what its going to look like without heading over to a css page. The last method is styled-components where we use actual js to style components. Using reactstrap framework, we are able to utilize actual javascript to create styled components which makes it very powerful tool since this would make data alot more reusable.
