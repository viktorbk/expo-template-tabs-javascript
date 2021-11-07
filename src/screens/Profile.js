import React, { useEffect, useState } from 'react';
import { View } from 'react-native'
import { Icon, ListItem, Button } from 'react-native-elements'

const ProfileScreen = ({navigation}) => {

  return (
    <View style={{ flex: 1, padding: 4 }}>
      <Button
        icon={{
          type: "font-awesome-5",
          name: "sign-out-alt",
          size: 15,
          color: "white"
        }}
        title="Logout"
        onPress={ () => navigation.navigate('Login') }
      />
    </View>
  );
}

export { ProfileScreen }