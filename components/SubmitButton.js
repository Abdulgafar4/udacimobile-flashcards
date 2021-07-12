import React from "react";
import { Text, TouchableOpacity } from "react-native";
import allstyles from '../utils/style'

export default function SubmitButton({ onPress, children, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[allstyles.textbutton, style]}>{children}</Text>
    </TouchableOpacity>
  );
}