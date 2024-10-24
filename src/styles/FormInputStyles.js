import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  inputFocused: {
    borderColor: '#4B9EFF',
    borderWidth: 2,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  errorInput: {
    borderColor: '#FF4444',
    borderWidth: 1,
  },

  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    marginLeft: 2,
  },

  errorText: {
    color: '#FF4444',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 2,
  },

  icon: {
    position: 'absolute',
    right: 15,
    top: 15,
  }
});