import React from 'react';
import {Pressable, Text, View} from 'react-native';

const Settings = () => {
  const [count, setCount] = React.useState(1);
  return (
    <View>
      <Pressable onPress={() => setCount(p => p + 1)}>
        <Text>{count}</Text>
      </Pressable>
    </View>
  );
};

export default Settings;
