import React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import axios  from "axios"

function App() {

  function fetchData() {
    axios.get("https://jsonplaceholder.org/users")//istek atıldı
    .then(response => (console.log(response)))//doğru cevap verildiyse
    .catch(error => (console.log(error)));//sorun varsa
  }

  return(
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "red"
      }}>

        <Button
          title="fetch Data"
          onPress={fetchData}>

        </Button>

    </SafeAreaView>
  )
}

export default App;
//config kontrol edilir.