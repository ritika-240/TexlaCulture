import React from "react";
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import {CreateNativeStackNavigator} from "@react-navigation/native-stack";

const Comp1 = () => {

    const names = [
        {name: "Travel", date:"24 April, 23", expense:"$500", percen:"12%"},
        {name: "Travel", date:"24 April, 23", expense:"$500", percen:"12%"},
        {name: "Travel", date:"24 April, 23", expense:"$500", percen:"12%"},
        {name: "Travel", date:"24 April, 23", expense:"$500", percen:"12%"},
        {name: "Travel", date:"24 April, 23", expense:"$500", percen:"12%"},
         {name: "Food", date:"24 April, 23", expense:"$500", percen:"28%"}, {name: "Business developemnt", date:"24 April, 23", expense:"$500", percen :"10%"}, {name: "Miscelaneous", date:"24 April, 23", expense:"$500", percen:"50%"}];
    const reim = [{id: 1, claimed: "$6000", approved:"$6000", paid:"--"}, {id: 2, claimed: "$600", approved: "$600", paid:"$600"}];
    
    return(

        <View>
            <View style={styles.view1Style}>
                <Text style={styles.text1Style}>My Expenses</Text>
            </View>
            <View style={styles.view2Style}>
                <Text style={styles.text2Style}>December, 2023</Text>
                <View style={styles.view3Style} >
                    <Text style={styles.text3Style}>Unclaimed Expense $12000</Text>
                    <FlatList
                     keyExtractor = {(key)=>{return key.name;}}
                     horizontal
                     data = {names}
                     renderItem = {(element)=>{
                         return(
                            <View>
                                <Text style={{fontSize:15}}>   {element.item.percen}    </Text>
                                <Text style={{fontSize:15}}>   {element.item.name}     </Text>
                                
                            </View>
                         );
                     }}
                    />
                </View>
                <Text style = {styles.text2Style}>Reimbursement History</Text>
                <View>
            
                    <FlatList 
                     keyExtractor = {(key)=>{return key.id;}}
                     horizontal
                     data = {reim}
                     renderItem = {(element)=>{
                         return (
                         
                        <View style = {styles.view4Style}>
                            
                            <Text style = {styles.text4Style}>Claimed:      {element.item.claimed}</Text>
                            <Text style = {styles.text4Style}>Approved:     {element.item.approved}</Text>
                            <Text style = {styles.text4Style}>Paid:              {element.item.paid}</Text>
                        </View>
                            
                        );
                         
                     }}
                    />
                </View>
                <Text style = {styles.text2Style} >Unclaimed Expenses</Text>
                <View>
            
                    <FlatList style = {styles.flatList2Style}
                     keyExtractor = {(key)=>{return key.name;}}
                     //horizontal
                     data = {names}
                     renderItem = {(element)=>{
                         return (
                            
                        <View style = {styles.view5Style}>
                            <Text style = {styles.text5Style}> {element.item.name}</Text>
                            <Text >                                                                            {element.item.date}</Text>
                            <Text style={{fontWeight:"bold"}}> {element.item.expense}</Text>
                            
                        </View>
                            
                        );
                         
                     }}
                    />
                </View>
                <TouchableOpacity style = {styles.toStyle}
                >
                    <Text style = {styles.text6Style}>Add New Expense</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({

    view1Style : {
        backgroundColor : "#d8bfd8",
       padding:30
    },
    view2Style : {
        backgroundColor : "#f5f5f5",
       
    },
    view3Style : {
        backgroundColor : "white",
       height:90,
       margin:10,
       borderRadius :10
       
    },
    view4Style : {
        backgroundColor : "#e0ffff",
       height:135,
       width: 200,
       margin:10,
       borderRadius :10
       
    },
    view5Style : {
        color : "white",
       //width:200,
       //margin:10,
       borderRadius :5,
       borderWidth:1
       
    },
    text1Style : {
        color : "black",
        fontWeight: "bold",
        fontSize: 30

    },
    text2Style : {
        color : "black",
        fontWeight: "bold",
        fontSize: 25,
        //padding:10
        marginLeft:10
        

    },
    text3Style : {
        color : "black",
        fontSize: 20,
        padding: 10,
        fontWeight: "bold",

    }
    ,
    text4Style : {
        color : "black",
        fontSize: 20,
        padding: 10,
        fontWeight: "bold",

    },
    text5Style : {
        color : "black",
        fontSize: 20,
        //padding: 10,
        //fontWeight: "bold",

    },
    
    text6Style : {
        color : "white",
        fontSize: 15,
        //padding: 10,
        fontWeight: "bold",
        textAlign:"center"

    },
    flatList2Style : {
        backgroundColor:"white",
       // padding:30,
        margin:10

    }
    ,
    toStyle : {
        backgroundColor:"#9400d3",
        width:150,
        height:200,
        left:"35%",
        borderRadius:10
       // padding:30,
        //margin:10

    }
  });

export default Comp1;