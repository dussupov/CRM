import React, { Component, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class VUSCal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  

  render() {
    const handleTitleChange = () => {
      return this.props.onChangeTitle('Выберете день посещения')
    }

    handleTitleChange();
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const minDate = new Date(); // Today
    let customDatesStyles = [];

    const datesOpen = ['2022-07-17T08:51:36.380Z', '2022-07-20T08:51:36.380Z', '2022-07-22T08:51:36.380Z', '2022-07-25T08:51:36.380Z']

    const changeDatesOpen = () => {
      datesOpen.forEach(element => {
        customDatesStyles.push ({
          date: element,
          textStyle: { color: '#1EA133', fontWeight: '600' },
          containerStyle: [], 
          allowDisabled: true, 
        });
      });
    }

    changeDatesOpen()
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          minDate={minDate}
          weekdays={['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']}
          months={['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Открябрь', 'Ноябрь', 'Декабрь']}
          previousTitle="Назад"
          nextTitle="Вперед"
          previousTitleStyle={{ paddingHorizontal: 20, opacity: 0 }}
          nextTitleStyle={{ paddingHorizontal: 20, opacity: 0 }}
          textStyle={{
            color: '#062A3D',
            fontSize: 15
          }}
          selectedDayTextColor={'white'}
          selectedDayStyle={{
            backgroundColor: '#1EA133'
          }}
          dayLabelsWrapper={{ borderBottomWidth: 'none', borderTopWidth: 'none' }}
          yearTitleStyle={{ display: 'none' }}
          monthTitleStyle={{ fontSize: 16, fontWeight: '600' }}
          customDatesStyles={customDatesStyles}
        />

        {/* <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 10
  },
  customDatesStyles: {
    color: 'green',
    fontSize: 40,
  }
});