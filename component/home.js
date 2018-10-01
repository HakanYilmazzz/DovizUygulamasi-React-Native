import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Doviz from "../component/doviz";
import Altin from "../component/altin";
import Kripto from "../component/kripto";





export default createBottomTabNavigator(
    {
        Doviz: {
            screen: Doviz,
            navigationOptions: {
                title: "Döviz",

                tabBarIcon: () => (
                    <Image
                        source={require("../icons/doviz.png")}
                        style={styles.icon}
                    />
                )
            }
        },
        Altin: {
            screen: Altin,
            navigationOptions: {
                title: "Altın",

                tabBarIcon: () => (
                    <Image
                        source={require("../icons/gold.png")}
                        style={styles.icon}
                    />
                )
            }
        },
        Kripto: {
            screen: Kripto,
            navigationOptions: {
                title: "Kripto",

                tabBarIcon: () => (
                    <Image
                        source={require("../icons/kripto.png")}
                        style={styles.icon}
                    />
                )
            }
        },
        
        
    },
    {
        tabPosition:'bottom',
        tabBarOptions: {

            showIcon: true,
            showLabel: true,
            activeBackgroundColor: "#00acc1",
            labelStyle: {
                color: "#FFF",
                fontWeight: "bold"
            },
            style: {
                backgroundColor: "#5ddef4"
            }
        }
    }
);



const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bar: {
        alignItems: 'center',
        backgroundColor: '#000'

    },
    icon: {
        width: 24,
        height: 24,
        
    },


});