import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#2D3748',
    marginBottom: 40,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  
  formContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CBD5E0',
    fontSize: 16,
    color: '#4A5568',
  },
  
  registerButton: {
    backgroundColor: '#4299E1',
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    shadowColor: '#4299E1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  }
});

export default styles;