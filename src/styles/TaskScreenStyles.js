import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  toggleButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B9EFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Espaço entre os itens
    alignItems: 'center', // Alinhar itens verticalmente
    marginBottom: 16,
    paddingHorizontal: 16, // Espaçamento lateral
  },
  task: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  overdueTask: {
    backgroundColor: '#ffcccc',
  },
  todayTask: {
    backgroundColor: '#ccffcc',
  },
  upcomingTask: {
    backgroundColor: '#cce5ff',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#4B9EFF',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  datePickerText: {
    color: '#4B9EFF',
    textAlign: 'center',
    marginBottom: 20,
  },
    profileBox: {
      padding: 8,
      backgroundColor: '#ddd',
      borderRadius: 8,
    },
    profileText: {
      fontSize: 16,
      color: '#333',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center',
      flex: 1,
    },
    placeholder: {
      width: 64, // Mesmo tamanho que o botão "Perfil"
    },
});

export default styles;