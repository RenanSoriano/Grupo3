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
  const [showOverdueTasks, setShowOverdueTasks] = useState(true);
  const [showTodayTasks, setShowTodayTasks] = useState(true);
  const [showUpcomingTasks, setShowUpcomingTasks] = useState(true);

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

  const today = new Date();
  const overdueTasks = tasks.filter(task => new Date(task.date) < today.setHours(0, 0, 0, 0));
  const todayTasks = tasks.filter(task => new Date(task.date).toDateString() === today.toDateString());
  const upcomingTasks = tasks.filter(task => new Date(task.date) > today.setHours(23, 59, 59, 999));

  const renderTask = ({ item }) => (
    <View style={[
      taskStyles.task,
      new Date(item.date) < today.setHours(0, 0, 0, 0) ? taskStyles.overdueTask :
      new Date(item.date).toDateString() === today.toDateString() ? taskStyles.todayTask :
      taskStyles.upcomingTask
    ]}>
      <Text>{item.text}</Text>
      <Text>{new Date(item.date).toLocaleDateString()}</Text>
    </View>
  );

  return (
    <View style={taskStyles.container}>
      <Text style={taskStyles.title}>Tarefas</Text>
      
      <View style={taskStyles.sectionHeader}>
        <Text style={taskStyles.sectionTitle}>Atrasadas</Text>
        <TouchableOpacity onPress={() => setShowOverdueTasks(!showOverdueTasks)}>
          <Text style={taskStyles.toggleButton}>{showOverdueTasks ? '-' : '+'}</Text>
        </TouchableOpacity>
      </View>
      {showOverdueTasks && (
        <FlatList
          data={overdueTasks}
          renderItem={renderTask}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      
      <View style={taskStyles.sectionHeader}>
        <Text style={taskStyles.sectionTitle}>Hoje</Text>
        <TouchableOpacity onPress={() => setShowTodayTasks(!showTodayTasks)}>
          <Text style={taskStyles.toggleButton}>{showTodayTasks ? '-' : '+'}</Text>
        </TouchableOpacity>
      </View>
      {showTodayTasks && (
        <FlatList
          data={todayTasks}
          renderItem={renderTask}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      
      <View style={taskStyles.sectionHeader}>
        <Text style={taskStyles.sectionTitle}>A Fazer</Text>
        <TouchableOpacity onPress={() => setShowUpcomingTasks(!showUpcomingTasks)}>
          <Text style={taskStyles.toggleButton}>{showUpcomingTasks ? '-' : '+'}</Text>
        </TouchableOpacity>
      </View>
      {showUpcomingTasks && (
        <FlatList
          data={upcomingTasks}
          renderItem={renderTask}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      
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