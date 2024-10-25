import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import taskStyles from '../styles/TaskScreenStyles'; // Import the task screen stylesheet
import formStyles from '../styles/FormInputStyles'; // Import the form input stylesheet

const TaskScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [taskDate, setTaskDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { text: taskText, date: taskDate }]);
      setTaskText('');
      setTaskDate(new Date());
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || taskDate;
    setShowDatePicker(false);
    setTaskDate(currentDate);
  };

  const renderTask = ({ item }) => {
    const today = new Date();
    const taskDate = new Date(item.date);
    const isOverdue = taskDate < today.setHours(0, 0, 0, 0);
    const isToday = taskDate.toDateString() === today.toDateString();

    return (
      <View style={[
        taskStyles.task,
        isOverdue ? taskStyles.overdueTask : isToday ? taskStyles.todayTask : taskStyles.upcomingTask
      ]}>
        <Text>{item.text}</Text>
        <Text>{taskDate.toLocaleDateString()}</Text>
      </View>
    );
  };

  return (
    <View style={taskStyles.container}>
      <Text style={taskStyles.title}>Tarefas</Text>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        style={formStyles.input}
        placeholder="Nova tarefa"
        value={taskText}
        onChangeText={setTaskText}
      />
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text style={taskStyles.datePickerText}>Selecionar Data</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={taskDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <TouchableOpacity style={taskStyles.addButton} onPress={handleAddTask}>
        <Text style={taskStyles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskScreen;