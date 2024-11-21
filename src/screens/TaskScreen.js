import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import taskStyles from '../styles/TaskScreenStyles'; // Importa o estilo da tela de tarefas
import formStyles from '../styles/FormInputStyles'; // Importa o estilo do formulário
import api from '../api'; // Importa o cliente HTTP configurado

const TaskScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [taskDate, setTaskDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [editingDate, setEditingDate] = useState(new Date());

  // Carrega as tarefas ao iniciar a página
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
        Alert.alert('Erro', 'Não foi possível carregar as tarefas.');
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (taskText.trim()) {
      try {
        const response = await api.post('/tasks', {
          text: taskText,
          date: taskDate,
        });
        setTasks([...tasks, response.data]);
        setTaskText('');
        setTaskDate(new Date());
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
        Alert.alert('Erro', 'Não foi possível adicionar a tarefa.');
      }
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

  const handleRemoveTask = async (taskToRemove) => {
    try {
      await api.delete(`/tasks/${taskToRemove.id}`);
      setTasks(tasks.filter(task => task.id !== taskToRemove.id));
    } catch (error) {
      console.error('Erro ao remover tarefa:', error);
      Alert.alert('Erro', 'Não foi possível remover a tarefa.');
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setEditingText(task.text);
    setEditingDate(new Date(task.date));
  };

  const handleSaveEdit = async () => {
    try {
      const updatedTask = {
        text: editingText,
        date: editingDate,
      };

      const response = await api.put(`/tasks/${editingTask.id}`, updatedTask);
      setTasks(tasks.map(task => 
        task.id === editingTask.id ? response.data : task
      ));
      setEditingTask(null);
      setEditingText('');
      setEditingDate(new Date());
    } catch (error) {
      console.error('Erro ao editar tarefa:', error);
      Alert.alert('Erro', 'Não foi possível salvar as alterações.');
    }
  };

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderTask = ({ item }) => (
    <View style={[
      taskStyles.task,
      { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }
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

      <FlatList
        data={filteredTasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
      />
      
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
