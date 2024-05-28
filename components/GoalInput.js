import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setenteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setenteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setenteredGoalText('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')}/>
      <TextInput
        style={styles.textInput}
        onChangeText={goalInputHandler}
        placeholder="Your course goal"
        value={enteredGoalText}
      />
      <View styles={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title="Add Goal" onPress={addGoalHandler}  />
        </View>
      <View style={styles.button}>
      <Button title="Cancel" onPress={props.onCancel} color={'#f31282'} />
      </View>
      
      </View>
      
    </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    backgroundColor: "#311b6b",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 26,
    flexDirection: 'row',
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#e4d0ff",
    width: "100%",
    color: '#120438',
    backgroundColor: '#e4d0ff',
    padding: 16,

  },
});
