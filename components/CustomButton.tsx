import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  containerStyle?: string;
  texttStyle?: string;
}

const CustomButton = ({
  onPress,
  title,
  texttStyle = "",
  containerStyle = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[62px] justify-center ${containerStyle}`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg text-center`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
