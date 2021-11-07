import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { Icon, ListItem, Button } from 'react-native-elements'

const ProjectDetailScreen = ({navigation}) => {
  const list = [
    {
      number: '9747',
      name: 'Steinerud BHG',
      icon: 'av-timer'
    },
    {
      number: '9746',
      name: 'ISS bygget',
      icon: 'av-timer'
    },
  ]

  const onClick = itm => {
    alert('asdf')
    debugger
  }

  return (
    <View style={{ flex: 1 }}>
      {
        list.map((item, i) => (
          <ListItem key={i} bottomDivider onPress={() => onClick(item)} onLongPress={() => onClick(item)}>
            <Icon name={item.icon} />
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

export { ProjectDetailScreen }