import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

const roundTo = require('round-to');
class Kripto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null
    };

    this.arrayholder = [];
  }
  
  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://www.doviz.com/api/v1/coins/all/latest`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
          error: res.error || null,
          loading: false
        });
        this.arrayholder = res;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
  searchFilterFunction = text => {    
    const newData = this.arrayholder.filter(item => {      
    const itemData = `${item.full_name.toUpperCase()}`;
    const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;    
    });    
  
    this.setState({ data: newData });  
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          margin:5,
          backgroundColor: "#CED0CE",
          
        }}
      />
    );
  };
  
  renderHeader = () => {
    return (
      <View>
      <SearchBar
        placeholder="Para Birimi Seçiniz.."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
      />
      <View style={{flex:1,height:30,backgroundColor:'#419BC9',flexDirection:"row",alignItems: "center", justifyContent: "center"}}>
        <Text style={{flex:2,color:'#fff',left:15,fontWeight:"bold"}}>ADI</Text>
        
        <Text style={{flex:1,color:'#fff',fontWeight:"bold"}}>SATIŞ</Text>
        
        <Text style={{flex:1,color:'#fff',fontWeight:"bold"}}>DEĞİŞİM</Text>
      </View>
      </View>
    );
  };

  render() {
    if (this.state.loading) {
      return ( 
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator />
        </View>
        
      );
    }
    return (
      <View >
      
      <View>
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
      
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            
            <ListItem
              
              title={
                <View style={{flex:1,flexDirection:"row"}}>
                <View style={{flex:2}}>
                <Text> {item.full_name}</Text>  
                </View>
                <View style={{flex:1}}>
                <Text> {roundTo(item.selling,4)} TL</Text>
                 </View> 
                <View style={{flex:1}}>
                
                 <Text style={{color:'#FF0000' }}> {roundTo(item.change_rate,3)}</Text>
                 </View>
                </View>
              }
              subtitle={item.symbol}
              hideChevron={true}
              containerStyle={{ borderBottomWidth: 0 }}
            >
                
            </ListItem>
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
        
      </List>
      </View>
      </View>
    );
  }
}

export default Kripto;
