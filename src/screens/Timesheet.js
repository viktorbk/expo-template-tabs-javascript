import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars'

const TimesheetScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date())
  const [marked, setMarked] = useState({})

  const selectDay = (day) => {
    // const dato = new Date(day.dateString)
    debugger
    setDate(day.dateString)
    const newMarked = {...marked }
    newMarked[day.dateString] = {marked: true, selected: true, dotColor: 'red', activeOpacity: 0}
    setMarked(newMarked)
  }

  return (
    <View style={{ flex: 1 }}>
      <Calendar
        // Initially visible month. Default = Date()
        current={date}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        //minDate={'2019-09-1'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        // maxDate={'2021-09-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {selectDay(day)}}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {selectDay(day)}}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        // onMonthChange={(month) => {console.log('month changed', month)}}
        // Hide month navigation arrows. Default = false
        // hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        // renderArrow={(direction) => (<Arrow/>)}
        // Do not show days of other months in month page. Default = false
        // hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        //disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        // hideDayNames={true}
        // Show week numbers to the left. Default = false
        showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        //onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        //onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        //disableArrowLeft={false}
        // Disable right arrow. Default = false
        //disableArrowRight={false}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        //disableAllTouchEventsForDisabledDays={false}
        // Replace default month and year title with custom one. the function receive a date as parameter.
        // renderHeader={(date) => {/*Return JSX*/}}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
        markedDates={ marked }
        theme={{
          selectedDayBackgroundColor: '#00adf5',
          // todayTextColor: 'blue',
          // dayTextColor: 'red',
          indicatorColor: 'blue',
          textDayFontWeight: '300',
          // textMonthFontSize: normalize(17),
          // textDayFontSize: normalize(17),
          // textDayHeaderFontSize: normalize(13)
        }}
      />
    </View>
  );
}

export { TimesheetScreen }