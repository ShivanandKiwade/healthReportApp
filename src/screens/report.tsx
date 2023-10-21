import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import ChartSVG from '../assets/chartSVG';
import Favorit from "../assets/favorit";
import Line from "../assets/lineSVG";
import Clock from "../assets/clock";
import Calender from "../assets/calender";
import Activity from "../assets/activity";
import Arrow from "../assets/arrow";


const { width, height } = Dimensions.get('window');


const report = () => {

  return (

    <View style={{backgroundColor:'#fff'}}>
      <Text style={{ fontSize: 20, color: '#3A3A3C', width: width * 0.95, alignSelf: 'center', marginVertical: height * 0.01 }}>Sinus Rhythm</Text>
      <Text style={{ fontSize: 16, color: '#3A3A3C', width: width * 0.95, alignSelf: 'center' }}>03-Aug-2023 at 1:46 PM</Text>

      <View style={{ alignSelf: 'center', marginVertical: height * 0.03 }}>
        <ChartSVG />
      </View>

      <View style={{ borderWidth: 1, borderColor: '#D5ECFF', padding:15, width: width * 0.95, alignSelf: 'center', elevation: 1, borderRadius: 10, backgroundColor: '#fff' }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Favorit />
          <Text style={{ fontSize: 15, color: '#3A3A3C', marginLeft: 10 }}>87 BPM Average</Text>
        </View>
        <Line />

        <View style={{ flexDirection: 'row',justifyContent:'space-between',alignItems:'center'}}>

          <View style={{ flexDirection: 'column',width:width*0.7}}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: height * 0.02 }}>

              <View>
                <Text style={style.label}>Name</Text>
                <Text style={style.reportBoxText}>Stuart, Gilbert</Text>
              </View>

              <View>
                <Text style={style.label}>Gender</Text>
                <Text style={style.reportBoxText}>Female</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#D5ECFF', borderRadius: 5, width: width * 0.25, justifyContent: 'space-evenly' }}>
                <Text style={{ color: '#0B1A5B', fontSize: 10 }}>14/12/2021</Text>
                <Calender />
              </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: height * 0.02 }}>

              <View>
                <Text style={style.label}>Age</Text>
                <Text style={style.reportBoxText}>29</Text>
              </View>

              <View>
                <Text style={style.label}>Weight</Text>
                <Text style={style.reportBoxText}>42</Text>
              </View>

              <View>
                <Text style={style.label}>Activity</Text>
                <Activity />
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#D5ECFF', borderRadius: 5, width: width * 0.25, justifyContent: 'space-evenly' }}>
                <Text style={{ color: '#0B1A5B', fontSize: 10 }}>12:19 PM</Text>
                <Clock />
              </View>

            </View>

          </View>

          <View style={{ width: width * 0.11, backgroundColor: '#D5ECFF', alignItems: 'center', justifyContent: 'space-evenly',borderRadius:5,height:height*0.11,marginTop:10}}>
            <View style={style.reportBoxOrangeTick} />
            <Text style={{ color: '#0B1A5B', fontSize: 10 }}>Aleart</Text>
          </View>

        </View>

      </View>

      <Text style={{ fontSize: 16, color: '#3A3A3C', width: width * 0.95, alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
        Preliminary findings
      </Text>

      <View style={{ width: width * 0.8, alignSelf: 'center' }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Arrow />
          <Text style={{ color: '#3A3A3C', fontSize: 14, marginLeft: 10 }}>Predominant rhythm was sinus.</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Arrow />
          <Text style={{ color: '#3A3A3C', fontSize: 14, marginTop: 10, marginLeft: 10 }}>Min HR of 56 bpm HR of 133 bpm and Avg HR of 86 bpm.</Text>
        </View>

      </View>




    </View>

  );

}

export default report;

const style = StyleSheet.create({

  label: {
    color: '#6B7588',
    fontSize: 10
  },

  reportBoxText: {
    color: '#3A3A3C',
    fontSize: 12,
    fontWeight: 'bold'
  },

  reportBoxOrangeTick: {
    width: 10,
    height: 10,
    backgroundColor: '#FFB520',
    borderRadius: 20
  },

});