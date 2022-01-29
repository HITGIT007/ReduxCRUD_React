import { createSlice } from "@reduxjs/toolkit";
/*A function that accepts an initial state, an object of reducer functions,
and a "slice name", and automatically generates action creators and action
types that correspond to the reducers and state.*/
import { UsersData } from "../FakeData";

export const userSlice = createSlice({
  name: "users", //List of Objects
  initialState: {
    value: UsersData,
  },
  //Now we pass the reducers
  /* reducers are different functions that we can call to provide some 
    action to our state */
  reducers: {
    //The functions have two parameter state and action
    addUser: (state, action) => {
      //The state will access the current value of the state
      //In this function wee wil write code for adding a user
      state.value.push(action.payload);
      //This function will take in the payload from the component
      //and add it directly to the state
    },

    deleteUser: (state, action) => {
        //We can't actually delete a user from the array we actually need to change the whole array 
        //to a new array without the user that we want to delete
        state.value = state.value.filter((user)=> user.id !==  action.payload.id);
    },

    updateUserName: (state, action) => {
        //We can't actually delete a user from the array we actually need to change the whole array 
        //to a new array without the user that we want to delete
        state.value.map((user)=>{
            if(user.id === action.payload.id){
                user.username = action.payload.username;
            }
        })
    },

  },
});
//createSlice accepts a single configuration object parameter
//it will allow us to create all the reducers and the actions for the variables and for the state
//in a single place and it will merge everything together.

export default userSlice.reducer;

//exporting the addUser function so that it can be used in App.js

export const { addUser, deleteUser, updateUserName } = userSlice.actions;
//Here all the actions which are able to alter the state will be grabbed
