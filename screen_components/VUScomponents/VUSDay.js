import { React, useState } from 'react'
import { Text, View, StyleSheet , FlatList} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function VUSDay() {

  const [time, SetTime] = useState([{
    id: 1,
    time: '10:00',
    selected: false
  },
  {
    id: 2,
    time: '10:30',
    selected: false
  },
  {
    id: 3,
    time: '11:00',
    selected: false
  },
  {
    id: 4,
    time: '11:30',
    selected: false
  },
  {
    id: 5,
    time: '12:00',
    selected: false
  },
  {
    id: 6,
    time: '12:30',
    selected: false
  },
  {
    id: 7,
    time: '13:00',
    selected: false
  },
  {
    id: 8,
    time: '13:30',
    selected: false
  },
  ])

  const [data, setData] = useState(time);

  function VUSTimeOpen({ item, index }) {
    const setSelectedIndex = (id) => {
      time.map((item, index) => {
        if (index == id-1) {
          time[index].selected = true;
        } else {
          time[index].selected = false;
        }
      });  
      setData([...time]);
    };
    return(
      <View>
      <TouchableOpacity onPress={() => setSelectedIndex(item.id)}>
        <View style={[item.selected ? styles.dayBgActive : styles.dayBg]}>
          <Text style={[item.selected ? styles.textActive : styles.text]}>{item.time}</Text>
        </View>
      </TouchableOpacity>
    </View>
    )
  }

  return (
    <View>
      <FlatList
        data={data}
        numColumns={4}
        renderItem={({ item }) => (
          <VUSTimeOpen item={item} />
        )}
        columnWrapperStyle={{justifyContent:'space-between', paddingHorizontal: 5}}
        style={{ marginTop: 20 }}
      />
    </View>
  );


}

const styles = StyleSheet.create({
  dayBg: {
    width: '100%', height: 37, justifyContent: 'center',
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderRadius: 4,
  },
  dayBgActive: {
    width: '100%', height: 37, justifyContent: 'center',
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#1EA133',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderRadius: 4,
  },
  text:{
    color:'black',
    paddingHorizontal: 16, fontWeight: '600'
  },
  textActive:{
    color:"white",
    paddingHorizontal: 16, fontWeight: '600'
  }
})