import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [editingDate, setEditingDate] = useState(new Date());

  const handleAddTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { text: taskText, date: taskDate }]);
      setTaskText('');
      setTaskDate(new Date());
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || (editingTask ? editingDate : taskDate);
    setShowDatePicker(false);
    if (editingTask) {
      setEditingDate(currentDate);
    } else {
      setTaskDate(currentDate);
    }
  };

  const handleRemoveTask = (taskToRemove) => {
    setTasks(tasks.filter(task => task !== taskToRemove));
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setEditingText(task.text);
    setEditingDate(new Date(task.date));
  };

  const handleSaveEdit = () => {
    setTasks(tasks.map(task => 
      task === editingTask ? { ...task, text: editingText, date: editingDate } : task
    ));
    setEditingTask(null);
    setEditingText('');
    setEditingDate(new Date());
  };

  const today = new Date();
  const overdueTasks = tasks.filter(task => new Date(task.date) < today.setHours(0, 0, 0, 0));
  const todayTasks = tasks.filter(task => new Date(task.date).toDateString() === today.toDateString());
  const upcomingTasks = tasks.filter(task => new Date(task.date) > today.setHours(23, 59, 59, 999));

  const filteredTasks = tasks.filter(task => 
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderTask = ({ item }) => (
    <View style={[
      taskStyles.task,
      { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
      new Date(item.date) < today.setHours(0, 0, 0, 0) ? taskStyles.overdueTask :
      new Date(item.date).toDateString() === today.toDateString() ? taskStyles.todayTask :
      taskStyles.upcomingTask
    ]}>
      <View>
        <Text>{item.text}</Text>
        <Text>{new Date(item.date).toLocaleDateString()}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => handleEditTask(item)}>
          <Icon name="edit" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveTask(item)}>
          <Icon name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={taskStyles.container}>
      <Text style={taskStyles.title}>Tarefas</Text>
      
      <TextInput
        style={formStyles.input}
        placeholder="Pesquisar tarefa"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={taskStyles.sectionHeader}>
        <Text style={taskStyles.sectionTitle}>Atrasadas</Text>
        <TouchableOpacity onPress={() => setShowOverdueTasks(!showOverdueTasks)}>
          <Text style={taskStyles.toggleButton}>{showOverdueTasks ? '-' : '+'}</Text>
        </TouchableOpacity>
      </View>
      {showOverdueTasks && (
        <FlatList
          data={filteredTasks.filter(task => overdueTasks.includes(task))}
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
          data={filteredTasks.filter(task => todayTasks.includes(task))}
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
          data={filteredTasks.filter(task => upcomingTasks.includes(task))}
          renderItem={renderTask}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      
      <TextInput
        style={formStyles.input}
        placeholder="Nova tarefa"
        value={editingTask ? editingText : taskText}
        onChangeText={editingTask ? setEditingText : setTaskText}
      />
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text style={taskStyles.datePickerText}>Selecionar Data</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={editingTask ? editingDate : taskDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <TouchableOpacity
        style={taskStyles.addButton}
        onPress={editingTask ? handleSaveEdit : handleAddTask}
      >
        <Text style={taskStyles.addButtonText}>{editingTask ? 'Salvar' : '+'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskScreen;