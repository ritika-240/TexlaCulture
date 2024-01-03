import React from "react";
import {Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput} from "react-native";


const Comp2 = () => {

    const names = [{name: "Travel", date:"24 April, 23", expense:"$500", percen:"12%"}, 
    {name: "Travel", date:"24 April, 23", expense:"$500", percen:"12%"},
    {name: "Travel", date:"24 April, 23", expense:"$500", percen:"12%"},
    {name: "Travel", date:"24 April, 23", expense:"$500", percen:"12%"},
    {name: "Food", date:"24 April, 23", expense:"$500", percen:"28%"}, {name: "Business developemnt", date:"24 April, 23", expense:"$500", percen :"10%"}, {name: "Miscelaneous", date:"24 April, 23", expense:"$500", percen:"50%"}];
    const reim = [{id: 1, claimed: "$6000", approved:"$6000", paid:"--"}, {id: 2, claimed: "$600", approved: "$600", paid:"$600"}];
    
    return(

        <View style = {styles.view0Style}>
            <View style = {styles.view1Style}>
            <Text style = {styles.text1Style}>My Leaves</Text>
            </View>
            <View style = {styles.view2Style}>
                <Text style = {styles.text2Style}>Add New Expense</Text>
                <View>
                    <Text style = {styles.text3Style}>Date of Expense</Text>
                </View>
                <View style = {styles.view2Style}>
                    <Text style = {{fontWeight : "bold"}}>Expense Type</Text>
                    <FlatList style = {styles.flatList2Style}
                     keyExtractor = {(key)=>{return key.name;}}
                     horizontal
                     data = {names}
                     renderItem = {(element)=>{
                         return(
                            <View>
                               
                                <Text style={{fontSize:15}}>{element.item.name}     </Text>
                                
                            </View>
                         );
                     }}
                    />
                    <Text style = {{fontWeight : "bold"}}>Expense Amount</Text>
                    
                    <TextInput 
                        autoCapitalise = "none"
                        autoCorrect = {false}
    
                    />
                    <Text style = {{fontWeight : "bold"}}>Comment</Text>
                    <TextInput 
                        autoCapitalise = "none"
                        autoCorrect = {false}
    
                    />
                </View>
                
            </View>

            <View>
                <Text style = {{fontWeight : "bold"}}>Status</Text>
            </View>
                    
         
        </View>
        
    );
};

const styles = StyleSheet.create({
    view0Style : {
        backgroundColor : "white",
      // padding:30
    },
    view1Style : {
        backgroundColor : "#d8bfd8",
       padding:30
    },
    view2Style : {
       // backgroundColor : "#f5f5f5",
      // padding:30
     // margin:20,
      color:"white",
      borderRadius:10,
    },
   text1Style:{
    color:"black",
    fontSize: 30,
    fontWeight: "bold",
   },
   text2Style:{
    fontWeight: "bold",
    color:"black",
    
    fontSize: 20,
    height: 30,
   }
   ,
   text3Style:{
    fontWeight: "bold",
    color:"black",
    
    fontSize: 15,
    height: 30,
   },
   flatList2Style : {
    backgroundColor:"white",
   // padding:30,
    margin:10

}
});

export default Comp2;