//custom middleware
//dispatch is a function, when ran, it will return another function, then return another function
export default function({ dispatch }) {
  //es5 syntax
  return function(next) {
    return function(action) {
      console.log("aysnc middleware: ", action);
      //if action does not have payload property or action does have payload but payload does not have a '.then' property
      //'.then' is a promise
      if (!action.payload || !action.payload.then) {
        //send this action to the next middleware on the stack, else forward to the reducers
        return next(action);
      }

      console.log("We have a promise: ", action);
      //make sure th actions' promise resolves
      action.payload.then(function(response) {
        // create a new action with the old 'type' is a property of the action, but
        // replace the promise with the response data
        const newAction = { ...action, payload: response };

        //send to all of our middleware
        //take this action and send to all middleware again..from top of the middleware stack
        //so for this, the second time, it will hit the if block at the top, which will then send to the next middleware
        dispatch(newAction);
      });
    };
  };

  /*
    //es6 syntax
    return next => action => {
        console.log('aysnc middleware: ',  action);
        next(action);
    };*/
}
