import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { Icon, ListItem, Button } from 'react-native-elements'

const AlertsScreen = ({navigation}) => {
  const alerts = useSelector(state => state.alert.alerts)

  const onClick = itm => {
    navigation.navigate('ProjectDetail', { title: 'Projects deatil' })
  }

  return (
    <View style={{ flex: 1 }}>
      {
        alerts.map((item, i) => (
          <ListItem key={i} bottomDivider onPress={() => onClick(item)} onLongPress={() => onClick(item)}>
            <Icon name={item.icon} type="font-awesome-5" />
            <ListItem.Content>
              <ListItem.Title>{`${item.number} - ${item.name}`}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))
      }
    </View>
  );
}

export { AlertsScreen }