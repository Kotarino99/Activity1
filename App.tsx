import { StyleSheet, Text, TextInput, View, ScrollView, SafeAreaView, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "grey" }}>
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.title}>HLOMBS</Text>
          <Text style={styles.subTitle}>Favourite Movie: Devil's Advocate</Text>
          {/*This is adding a local image*/}
        <Image source={require("./assets/DA.png")} 
         resizeMode="contain"
         style={{ width:300, height:400, marginTop:20, alignSelf:"center"}}
        
        />
      


          <Text style={styles.heading}>Favourite Director</Text>
          <Text style={styles.subTitle}>Taylor Hackford</Text>

          <TextInput
            style={styles.textinputstyle}
            placeholder="When was your movie released?"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.textinputstyle}
            placeholder="When was your movie released?"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.textinputstyle}
            placeholder="When was your movie released?"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.textinputstyle}
            placeholder="When was your movie released?"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.textinputstyle}
            placeholder="When was your movie released?"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.textinputstyle}
            placeholder="Who is the Casting Director?"
            placeholderTextColor="white"
          />
           <Image source={{uri:"https://variety.com/wp-content/uploads/2013/09/taylor-hackford.jpg?w=1000&h=563&crop=1" }} 
         resizeMode="contain"
         style={{ width:300, height:400, marginTop:20, alignSelf:"center"}}
      
        />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 64,
    color: "#B5FFE1",
    fontStyle: "italic",
    fontWeight: "bold",
    marginTop: 20,
  },
  subTitle: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
    marginTop: 10,
  },
  heading: {
    fontSize: 48,
    fontStyle: "normal",
    color: "yellow",
    fontWeight: "800",
    marginTop: 30,
    marginBottom: 30,
  },
  textinputstyle: {
    height: 50,
    fontSize: 24,
    borderWidth: 3,
    borderColor: "red",
    color: "gold",
    paddingHorizontal: 10,
    marginTop: 30,
    marginBottom: 10,
    width: "100%",
    borderRadius: 8,
  },
});