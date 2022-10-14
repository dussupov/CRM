import { React, useState, useEffect , useContext} from 'react'
import { ContextAddVUS } from '../../contextAddVUS';

import { Text, View, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function VUSOffice({onChangeTitle}) {

    const {VUSAdd, SetVUSAdd} = useContext(ContextAddVUS);

    const Open = true

    const handleTitleChange = () =>{
        return onChangeTitle('Выберите офис посещения')
    }

    handleTitleChange();

    const [name, somethingSetState] = useState([{
        id: 1,
        OfficeName: 'Главный',
        Adress: "г. Воронеж, ул. Лебедева, д. 51, офис 234",
        WorkTime: 'пн-пт 10:00 17:00',
        OfficePhone: '+7 (4732) 78-90-86',
        selected: false
    },
    {
        id:2,
        OfficeName: 'Левобережный',
        Adress: "г. Воронеж, ул. Лебедева, д. 51, офис 234",
        WorkTime: 'пн-пт 10:00 17:01',
        OfficePhone: '+7 (4732) 78-90-87',
        selected: false
    },
    {
        id:3,
        OfficeName: 'Бухгалтерия',
        Adress: "г. Воронеж, ул. Лебедева, д. 51, офис 234",
        WorkTime: 'пн-пт 10:00 17:02',
        OfficePhone: '+7 (4732) 78-90-88',
        selected: false
    },])

    const [data, setData] = useState(name);

    function VUSOfficeItem({ item, index }) {
        const setSelectedIndex = (id) => {
            // alert(JSON.stringify(name))
            name.map((item, index) => {
              // alert(JSON.stringify(index))
              if (index == id-1) {
                name[index].selected = true;
                SetVUSAdd(prevState =>
                    prevState.map(el =>
                        Open
                        ? { ...el, office: name[index].OfficeName }
                        : el
                    )
                )
              } else {
                name[index].selected = false;
              }
            //   name[index].selected=true
            });
        
            setData([...name]);
          };
        return (
            <View>
                <View>
                    <TouchableOpacity onPress={() => setSelectedIndex(item.id)}>
                        <View style={[item.selected ? styles.HomeScreenMainActive : styles.HomeScreenMain]}>
                            <Text style={{ paddingHorizontal: 16, fontWeight: '600' }}>{item.OfficeName}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <VUSOfficeItem item={item} />
                )}
                style={{ marginTop: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    HomeScreenMain: {
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.1,
        shadowRadius: 16.00,
        elevation: 24,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    HomeScreenMainActive: {
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.05,
        shadowRadius: 16.00,
        elevation: 24,
        marginHorizontal: 10,
        marginVertical: 5,
        borderColor: 'green',
        borderWidth: 1,
    }
})
