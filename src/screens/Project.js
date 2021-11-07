import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { Icon, ListItem, Button } from 'react-native-elements'

const ProjectScreen = ({navigation}) => {
  const projects = useSelector(state => state.project.projects)

  const onClick = itm => {
    navigation.navigate('ProjectDetail', { title: 'Projects deatil' })
  }

  const getColor = status => {
    switch(status) {
      case 1: return 'orange'
      case 2: return 'green'
      case 3: return 'red'
      default: return 'grey'
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {
        projects.map((item, i) => (
          <ListItem key={i} bottomDivider onPress={() => onClick(item)} onLongPress={() => onClick(item)}>
            <Icon name={item.icon} color={getColor(item.status)} />
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

export { ProjectScreen }