import styled from "styled-components";
import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
/* This useSelector hook is basically used when you want to read the current value
 of one of the states that you have created in your store */

/* useDispatch: We can't directly call the addUser function because we need to use a HOOK that
 exists in react redux in order to tell redux that its's a function call which 
 should be registered with our store. This hook is used whenever we have a 
 component which will do some sort of action*/

import { addUser, deleteUser, updateUserName } from "./features/Users";

const Container = styled.div`
  color: palevioletred;
  background-color: black;
  font-weight: bold;
  width: "100%";
  height: "100%";
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container1 = styled.div`
margin: 30px;
border: 5px solid white;
border-radius: 15px;
`;
const Input = styled.input`
  margin: 5px;
  border: thick double #32a1ce;
`;
const Button = styled.button`
  background-color: #4caf50; /* Green */
  border: 2px solid yellow;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: cell;
  border-radius: 15px;

`;

const Button1 = styled.button`
  background-color: red; /* Green */
  border: 2px solid yellow;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: url("https://i.stack.imgur.com/bUGV0.png"), auto;
  margin-left: 5px;
  border-radius: 15px;
`;

const HD1 = styled.h1`
  border: 1px solid brown;
`;

/* Every project that includes redux as a state management library will have to 
have a store configured that is passed throughout sll thr components that you
want to have access to the store. So the store is going to be a place 
where your going to store all of your states and variables and so that you
can determine which components you want to have access to the store and change them
 */

function App() {
  const userList = useSelector((state) => state.users.value);
  //state.userslice_name.data_you_want_to_get

  const dispatch = useDispatch();
  //We need to use this const everytime we do an action
  //It basically mean that we want to dispatch an action

  const [name, setName] = useState("");
  const [username, setusername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <Container>
      {" "}
      <addUser>
        <div style={{marginTop:20}}>
        <Input
          type="text"
          placeholder="Name ..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="UserName ..."
          onChange={(event) => {
            setusername(event.target.value);
          }}
        />
        <Button
          onClick={() => {
            dispatch(addUser({ id: userList[userList.length -1].id + 1, name, username }));
            //In JavaScript if we the key and value have same name then we
            //dont need to write it two times : name: name, username: userName
            //dispatch(action we want to dispatch(payload i.e, the data we ant to send))
          }}
        >
          Add User
        </Button>
        {/* When we click the add user button we will send the data 
        as some sort of payload or object to the addUser function  */}
        </div>
        
      </addUser>
      <displayUsers>
        {userList.map((user) => {
          return (
            <Container1>
              <HD1>
                Name: {user.name}
                <br />
                Username: {user.username}
                
              </HD1>
              <Input
          type="text"
          placeholder="New Username ..."
          onChange={(event) => {
            setNewUsername(event.target.value);
          }}
        />  
        <Button
          onClick={() => {
            dispatch(updateUserName({ id: user.id, username: newUsername }));
            
          }}
        >
          {" "}
          Update Username
        </Button>
        <Button1
          onClick={() => {
            dispatch(deleteUser({ id: user.id }));
            //Since we are in a loop so each user will have an id
          }}
        >
          Delete User
        </Button1>
            </Container1>
          );
        })}
      </displayUsers>
    </Container>
  );
}

export default App;
