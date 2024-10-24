import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles/FormInputStyles';

const FormInput = ({ placeholder, value, onChangeText, secureTextEntry, placeholderTextColor }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={placeholderTextColor || "#aaa"}
    />
  );
};

export default FormInput;