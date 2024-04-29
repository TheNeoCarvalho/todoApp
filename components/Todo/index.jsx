import { Text, TouchableOpacity, View } from "react-native";
const Todo = ({ id, task, status }) => {
  return (
    <TouchableOpacity>
      <View style={{ width: 300, marginTop: 8 }}>
        <Text>{task}</Text>
        <Text>{status ? "Concluida" : "Nao concluida"}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Todo;
