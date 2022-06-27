import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
  Platform
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const DismissKeyboardView = ({children, ...props}) => (
  //accessible = 장애인을 위한 웹 접근성
  //behavior = 키보드 나올시 인풋창 자동으로 올려주는 기능
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> 
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;