import React, { useState } from "react";
import { Button, FlatList, SafeAreaView, Text } from "react-native";
import axios from "axios"
import UserCard from "./src/components/UserCard";

function App() {

  /*  
  #get çalışır, response dönmesini beklemeden bir alt satıra geçer
  function fetchData() {
    axios
    .get("https://jsonplaceholder.org/users")//istek atıldı
    .then(response => (console.log(response)))//doğru cevap verildiyse
    .catch(error => (console.log(error)));//sorun varsa
  }
  */


  /*
  #cevap dönmesini bekliyorsak bu yapıyı kullanırız 
  async function fetchData() {
    const response = await axios.get("https://jsonplaceholder.org/users")
    console.log("response here");
  }
  */

  const [userList, setUserList] = useState([]);

  async function fetchData() {
    const response = await axios.get("https://jsonplaceholder.org/users")
    console.log("response");
    setUserList(response.data);
  }

  const renderUser = ({ item }) => <UserCard firstname={item.firstname} />

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "red"
      }}>

      <Button
        title="fetch Data"
        onPress={fetchData}>

      </Button>

      <FlatList
        data={userList}
        renderItem={renderUser}
      />

    </SafeAreaView>
  )
}

export default App;
