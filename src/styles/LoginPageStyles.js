import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 40,
    color: '#2D3748',
    letterSpacing: 0.5,
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'white',
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
    backgroundColor: '#F7FAFC',
    padding: 15,
    marginBottom: 20,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    fontSize: 16,
    color: '#4A5568',
  },
  button: {
    backgroundColor: '#4299E1',
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#4299E1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  createAccountButton: {
    backgroundColor: 'transparent',
    width: '100%',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4299E1',
    marginTop: 12,
  },
  createAccountText: {
    color: '#4299E1',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    width: '100%',
  },
  dividerLine: {
    flex: 1,
    height: 1.5,
    backgroundColor: '#E2E8F0',
  },
  dividerText: {
    color: '#718096',
    paddingHorizontal: 16,
    fontSize: 15,
    fontWeight: '500',
  }
});