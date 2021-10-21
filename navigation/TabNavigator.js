import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import feed from "../screens/feed";
import CreatePost from "../screens/CreatePost";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator =()=>{
    return(
        <Tab.Navigator 
            labeled={false}
             barStyle={{backgroundColor:"#404040",height:"8%",borderRadius:5,overFlow:"hidden",position:"absolute",}}
          
             screenOptions={({route})=>({
                 tabBarIcon:({focused,color,size})=>{
                 var iconName;
                 if(route.name=== "feed"){
                     iconName=focused?"home":"home-outline"
                 }
                 else if(route.name==="CreatePost"){
                         iconName=focused?"add-circle":"add-circle-outline"
                 } 
                    return <Ionicons name={ iconName }size={RFValue(15)} color={color}style={{width:RFValue(30),height:RFValue(30)}}/>
             }})}
            
                 activeColor={"tomato"}
                 inactivecolor={"grey"}
           
          >
              <Tab.Screen name="feed" component={feed}></Tab.Screen>
              <Tab.Screen name="CreatePost" component={CreatePost}></Tab.Screen>
          </Tab.Navigator>

    )

}
export default BottomTabNavigator