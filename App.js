import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Todo from "./components/Todo";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function AddTodo() {
    const addNewTask = {
      task: newTask,
      status: false,
    };
    setTasks([...tasks, addNewTask]);
    console.log(tasks);
  }
  function toggleStatus(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            padding: 8,
            fontSize: 22,
          }}
        >
          ToDo
        </Text>
        <TextInput
          value={newTask}
          onChangeText={setNewTask}
          style={{
            height: 50,
            width: 300,
            borderWidth: 2,
            padding: 8,
            fontSize: 22,
          }}
        />
        <TouchableOpacity
          onPress={AddTodo}
          style={{
            width: 300,
            height: 50,
            backgroundColor: "#C00",
            padding: 8,
            marginTop: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      {tasks.map((todo) => (
        <Todo
          onPress={toggleStatus}
          id={todo.id}
          task={todo.task}
          status={todo.status}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
