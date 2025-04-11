🏃‍♂️ HOW TO RUN:

    • Copy the code into a .js file ( e.g index.js ) 
    • Run the file using Node.js 
        ( e.g node index.js )
    • You'll see logs showing how the state changes after each action is dispatched.


🛠 OVERVIEW: 
The app mimics Redux's core principles:

    • Reducer Function: Pure function (theReducer) that updates the state based on action types (ADD, SUBTRACT, RESET).
    • Store Creator: Custom theStore function replicates Redux’s store behavior — it maintains the state, allows        
      subscribing to changes, and handles dispatching actions.
    • Immutable Updates: Each state update returns a new object instead of mutating the current state.
    • Logging: Console logs show the action being dispatched.
    
🧠 CHALLENGES:

Two things I struggled with, were the Reducer and Subscribe functions. Trying to figure out the logic behind these two were a bit of a challenge, but I just took my time with them trying to find solutions and a lot of research. Eventually I found a workable solution.