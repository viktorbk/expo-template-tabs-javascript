import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'

const MainScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Main Screen</Text>
    </View>
  );
}

export { MainScreen }