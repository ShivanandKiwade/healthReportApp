import React from 'react';
import { FlatList, Text, View, Dimensions, StyleSheet } from 'react-native';
import GroupLogo from '../assets/groupSVG';
import Cardiology from '../assets/cardiology';

const { width, height } = Dimensions.get('window');


const diaryEvent = () => {


  const data = [
    {
      id: '1',
      system: 'none',
      time: '11:27 AM',
      symptoms: ['Chest discomfort'],
      result: 'Undefined'
    },
    {
      id: '2',
      system: 'none',
      time: '10:10 AM - 10:12 AM',
      symptoms: ['Arm, neck, throat or jaw discomfort', 'Shortness of breath'],
      result: 'Quiet activity'
    },
    {
      id: '3',
      system: 'System',
      time: '09:19 AM',
      symptoms: ['Falling'],
      result: 'None physical work(paperwork...'
    },
    {
      id: '4',
      system: 'System',
      time: '09:19 AM',
      symptoms: ['Falling'],
      result: 'None physical work(paperwork...'
    },
    {
      id: '5',
      system: 'System',
      time: '09:19 AM',
      symptoms: ['Falling'],
      result: 'None physical work(paperwork...'
    },
    {
      id: '6',
      system: 'System',
      time: '09:19 AM',
      symptoms: ['Falling'],
      result: 'None physical work(paperwork...'
    },
    {
      id: '7',
      system: 'System',
      time: '09:19 AM',
      symptoms: ['Falling'],
      result: 'None physical work(paperwork...'
    },
    {
      id: '8',
      system: 'System',
      time: '09:19 AM',
      symptoms: ['Falling'],
      result: 'None physical work(paperwork...'
    },
  ];

  const renderItem = ({ item }) => (
    <View style={style.flatListContainer}>
      <View style={style.timeBox}>
        <Text style={style.timeText}>{item.time}</Text>
      </View>

      <View style={style.reportBox}>

        {item?.system === 'none' ?
          <View style={item.result !== 'Undefined' ? style.reportBoxOrangeTick : style.reportBoxGreenTick} />
          :
          <View style={style.reportBoxSystem}>
            <Text style={style.reportBoxSystemText}>{item.system}</Text>
          </View>
        }

        {
          item.symptoms && item.symptoms.map((symptom: string) => {
            return (
              <View style={style.reportBoxInsideContainer} key={symptom}>
                <Cardiology />
                <Text key={symptom} style={style.reportBoxText}>{symptom}</Text>
              </View>
            );
          })
        }
        <View style={style.reportBoxInsideContainer}>
          <GroupLogo />
          <Text style={style.reportBoxText}>{item.result}</Text>
        </View>
      </View>
    </View>
  );

  return (

    <View style={style.container}>
      {
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      }
    </View>

  );
};

export default diaryEvent;

const style = StyleSheet.create({

  container: {
    backgroundColor: '#fff'
  },

  flatListContainer: {
    width: width,
    flexDirection: 'row',
    paddingHorizontal: width * 0.05,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginVertical: height * 0.02,
  },

  timeBox: {
    width: width * 0.25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  timeText: {
    fontSize: 16,
  },

  reportBox: {
    width: width * 0.6,
    borderWidth: 1,
    borderColor: '#336CFF',
    borderRadius: 10,
    borderLeftWidth: 10,
    padding: width * 0.03
  },

  reportBoxGreenTick: {
    width: 10,
    height: 10,
    backgroundColor: '#0FD881',
    alignSelf: 'flex-end',
    borderRadius: 20
  },

  reportBoxOrangeTick: {
    width: 10,
    height: 10,
    backgroundColor: '#FFB520',
    alignSelf: 'flex-end',
    borderRadius: 20
  },

  reportBoxSystem: {
    backgroundColor: '#FFB520',
    alignSelf: 'flex-end',
    borderRadius: 20,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.01
  },

  reportBoxSystemText: {
    fontSize: 8,
    color: '#fff'
  },

  reportBoxInsideContainer: {
    flexDirection: 'row',
  },

  reportBoxText: {
    marginLeft: width * 0.03
  }

});