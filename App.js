import React from 'react';
import MainStack from './navigation/navigate';
import 'react-native-gesture-handler';

import { Context } from './context';
import { useState } from 'react';
import { ContextAppeal } from './contextAppeal';
import { ContextMS } from './contextMS';
import { ContextVUS } from './contextVUS'
import { ContextPhone } from './contextPhone'
import { ContextFilter } from './contextFilter';
import { ContextFilterOK } from './contextFilterOK';
import { ContextAddVUS } from './contextAddVUS';

export default function App() {

  const [FilterItem, SetFilterItem] = useState('');

  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  const [FilterOK, SetFilterOK] = useState(false);

  const [ContRoomItems, ContRoomSetState] = useState([
    {
      dataType: 'ContRoom',
      key: '1234567',
      data: (new Date('2022-01-26').toLocaleDateString('ru-RU', options)),
      dataFilter: '2021-01-26T17:25:45Z',
      status: 'В работе',
      title: 'Lorem inpus dolor. Lorem inpus dolor. Lorem inpus dolor. Lorem inpus dolor.',
      star: 0,
      theme: 'Жалоба'
    },
    {
      dataType: 'ContRoom',
      key: '123456',
      data: (new Date('2021-01-26').toLocaleDateString('ru-RU', options)),
      dataFilter: '2021-01-26T17:25:45Z',
      status: 'Выполнена',
      title: 'Lorem inpus dolor. Lorem inpus dolor. Lorem inpus dolor. Lorem inpus dolor.',
      star: 0,
      theme: 'Отзыв'
    },
    {
      dataType: 'ContRoom',
      key: '321321',
      data: (new Date('2021-01-26').toLocaleDateString('ru-RU', options)),
      dataFilter: '2021-01-26T17:25:45Z',
      status: 'Выполнена',
      title: 'Lorem inpus dolor. Lorem inpus dolor. Lorem inpus dolor. Lorem inpus dolor.',
      star: 0,
      theme: 'Жалоба'
    },
    {
      dataType: 'ContRoom',
      key: '12345',
      data: (new Date('2021-01-26').toLocaleDateString('ru-RU', options)),
      dataFilter: '2021-01-26T17:25:45Z',
      status: 'Новый',
      title: 'Lorem inpus dolor. Lorem inpus dolor. Lorem inpus dolor. Lorem inpus dolor.',
      star: 0,
      theme: 'Отзыв'
    },
  ])

  const [AppealItems, AppealSetState] = useState([
    {
      dataType: 'Appeal',
      key: '33333',
      status: 'На рассмотрении',
      data: (new Date('2021-01-26').toLocaleDateString('ru-RU', options)),
      dataFilter: '2021-01-26T17:25:45Z',
      title: 'Отзыв',
      star: 0,
      success: false,
      theme: 'Отзыв'
    },
    {
      dataType: 'Appeal',
      key: '12321',
      status: 'Рассмотрено',
      data: (new Date('2019-03-26').toLocaleDateString('ru-RU', options)),
      dataFilter: '2019-03-26T17:25:45Z',
      title: 'Жалоба',
      star: 5,
      success: true,
      theme: 'Жалоба'
    },
    {
      dataType: 'Appeal',
      key: '22331',
      status: 'Рассмотрено',
      data: (new Date('2019-01-26').toLocaleDateString('ru-RU', options)),
      dataFilter: '2019-01-26T17:25:45Z',
      title: 'Жалоба',
      star: 0,
      success: false,
      theme: 'Жалоба'
    },
  ])

  const [MSItem, SetMSItem] = useState([
    {
      key: 'ЕН123445678909',
      tarif: 'Многотарифный',
      place: 'Санузел',
      typeMS: 'Электроэнергия',
      lastPocStatus: true,
      lastPocT1: '600',
      lastPocT2: '600',
      lastPocT3: '4',
      nextVision: '10.05.2021'
    },
    {
      key: 'ЕН12344567810',
      tarif: 'Многотарифный',
      place: 'Санузел',
      typeMS: 'Электроэнергия',
      lastPocStatus: false,
      lastPocT1: '',
      lastPocT2: '',
      lastPocT3: '',
      nextVision: ''
    },
    {
      key: 'ЕН12344567811',
      tarif: 'Однотарифный',
      place: 'Санузел',
      typeMS: 'Холодное водоснабжение',
      lastPocStatus: false,
      lastPocT1: '',
      lastPocT2: '',
      lastPocT3: '',
      nextVision: ''
    },
  ])

  const [VUS, SetVUS] = useState([{
    id:1,
    key:123456,
    data: (new Date('2021-01-26').toLocaleDateString('ru-RU', options)),
    dataFilter: '2021-01-26T17:25:45Z',
    status:'На согласовании',
    office:'Главный',
    officeStreet:'г. Воронеж, ул. Кольцовская, д.40, офис 154',
    service:'Перерасчет коммунальных услуг'
  }])

  const [VUSAdd, SetVUSAdd] = useState([{
    id: '',
    key: '' ,
    data: '',
    dataFilter: '',
    status:'',
    office:'',
    officeStreet:'',
    service:''
  }])

  const [Phone, PhoneSetState] = useState('87773249308');

  return (
    <ContextAddVUS.Provider value={{ VUSAdd, SetVUSAdd }}>
      <ContextVUS.Provider value={{ VUS, SetVUS }}>
        <ContextFilterOK.Provider value={{ FilterOK, SetFilterOK }}>
          <ContextFilter.Provider value={{ FilterItem, SetFilterItem }}>
            <ContextPhone.Provider value={{ Phone, PhoneSetState }}>
              <ContextMS.Provider value={{ MSItem, SetMSItem }}>
                <ContextAppeal.Provider value={{ AppealItems, AppealSetState }}>
                  <Context.Provider value={{ ContRoomItems, ContRoomSetState }}>
                    <MainStack />
                  </Context.Provider>
                </ContextAppeal.Provider>
              </ContextMS.Provider>
            </ContextPhone.Provider>
          </ContextFilter.Provider>
        </ContextFilterOK.Provider>
      </ContextVUS.Provider>
    </ContextAddVUS.Provider>
  );
};