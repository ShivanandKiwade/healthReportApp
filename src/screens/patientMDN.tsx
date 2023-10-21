import React from 'react';
import { FlatList, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Favorit from '../assets/favorit';
import EyeSVG from '../assets/eyeSVG';


const { width, height } = Dimensions.get('window');


const diaryEvent = () => {


  const data = [
    {
      id: '1',
      FINDINGS: 'Atrial fibrillation',
      Avg_Heart_Rate: '87 BPM',
      Date: '14/12/2021',
      Time: '12:19 PM',
      status: 'normal'
    },
    {
      id: '2',
      FINDINGS: 'Atrial fibrillation',
      Avg_Heart_Rate: '87 BPM',
      Date: '14/12/2021',
      Time: '12:19 PM',
      status: 'normal'
    },
    {
      id: '3',
      FINDINGS: 'Atrial fibrillation',
      Avg_Heart_Rate: '87 BPM',
      Date: '14/12/2021',
      Time: '12:19 PM',
      status: 'critical'
    },
    {
      id: '4',
      FINDINGS: 'Atrial fibrillation',
      Avg_Heart_Rate: '87 BPM',
      Date: '14/12/2021',
      Time: '12:19 PM',
      status: 'critical'
    },
    {
      id: '5',
      FINDINGS: 'Atrial fibrillation',
      Avg_Heart_Rate: '87 BPM',
      Date: '14/12/2021',
      Time: '12:19 PM',
      status: 'critical'
    },
    {
      id: '6',
      FINDINGS: 'Atrial fibrillation',
      Avg_Heart_Rate: '87 BPM',
      Date: '14/12/2021',
      Time: '12:19 PM',
      status: 'critical'
    },
    {
      id: '7',
      FINDINGS: 'Atrial fibrillation',
      Avg_Heart_Rate: '87 BPM',
      Date: '14/12/2021',
      Time: '12:19 PM',
      status: 'critical'
    },
    {
      id: '8',
      FINDINGS: 'Atrial fibrillation',
      Avg_Heart_Rate: '87 BPM',
      Date: '14/12/2021',
      Time: '12:19 PM',
      status: 'critical'
    },
  ];

  const renderItem = ({ item }) => (



    <View style={style.reportBox}>

      <View style={style.reportBoxInsideContainer} >

        <View style={{ flexDirection: 'column' }}>
          <Text style={style.label}>FINDINGS</Text>
          <Text style={style.resultText}>{item.FINDINGS}</Text>
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Text style={style.label}>Avg Heart Rate</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Favorit />
            <Text style={style.reportBoxText}>{item.Avg_Heart_Rate}</Text>
          </View>
        </View>

        <View>
          <View style={item.status === 'critical' ? style.reportBoxOrangeTick : style.reportBoxVioletTick} />
        </View>

      </View>

      <View style={style.reportBoxInsideContainer2} >

        <View style={{ flexDirection: 'column' }}>
          <Text style={style.label}>Date</Text>
          <Text style={style.resultText}>{item.Date}</Text>
        </View>

        <View style={{ flexDirection: 'column' }}>
          <Text style={style.label}>Time</Text>
          <Text style={style.resultText}>{item.Time}</Text>
        </View>

        <TouchableOpacity style={style.button}>
          <EyeSVG />
          <Text style={style.buttonText}>View MDN</Text>
        </TouchableOpacity>

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
    backgroundColor: '#fff',
    width: width
  },

  reportBox: {
    width: width * 0.90,
    borderRadius: 10,
    alignSelf: 'center',
    elevation: 2,
    marginVertical: width * 0.04,
    padding: width * 0.04,
    backgroundColor: '#fff',
    shadowColor: '#171717',
    borderColor: '#D5ECFF',
    borderWidth: 1
  },

  reportBoxVioletTick: {
    width: 10,
    height: 10,
    backgroundColor: '#CC3366',
    alignSelf: 'flex-start',
    borderRadius: 20,
    marginTop: height * 0.005,
  },

  reportBoxOrangeTick: {
    width: 10,
    height: 10,
    backgroundColor: '#FFB520',
    alignSelf: 'flex-start',
    borderRadius: 20,
    marginTop: height * 0.005,
  },

  reportBoxInsideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.01
  },

  reportBoxInsideContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.01,
    width: width * 0.72,
  },

  reportBoxText: {
    marginLeft: width * 0.03,
    color: '#3A3A3C',
    fontSize: 12,
    fontWeight: 'bold'
  },

  label: {
    color: '#6B7588',
    fontSize: 10
  },

  resultText: {
    color: '#3A3A3C',
    fontSize: 12,
    fontWeight: 'bold'
  },

  button: { backgroundColor: '#336CFF', flexDirection: 'row', alignItems: 'center', width: width * 0.3, borderRadius: 6, paddingHorizontal: width * 0.02, justifyContent: 'space-around' },

  buttonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold'
  }

});