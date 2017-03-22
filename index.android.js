/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image
} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Container, Content, Form, Label, Input, Item, Button, Text} from 'native-base';

export default class instakw extends Component {
    render() {
        return (
            <Container style={{backgroundColor: '#FFF'}}>
                <Content>
                    <View style={{alignItems: 'center', marginTop: 100}}>
                        <Image
                            style={styles.gambar}
                            source={require('./img/insta.png')}
                        />
                    </View>
                    <View style={styles.textbox}>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input/>
                        </Item>
                    </View>
                    <View style={styles.tombol}>
                        <Button info block>
                            <Text>Log In</Text>
                        </Button>
                    </View>
                    <Grid style={{marginLeft:30, marginTop:10}}>
                        <Col>
                            <Text style={{color: '#a6a6a6', fontSize: 15}}>
                                Forgot your login detail?
                            </Text>
                        </Col>
                        <Col>
                            <Text style={{color: '#707070', fontSize: 15}}>
                                Get help signing in
                            </Text>
                        </Col>
                    </Grid>
                    <Grid style={{marginTop: 50}}>
                        <Col size={4}>
                            <View
                                style={{width:120, height:2, backgroundColor:'#a6a6a6', marginLeft:30, marginTop:10}}
                            />
                        </Col>
                        <Col size={1}>
                            <Text style={{color: '#a6a6a6'}}> OR </Text>
                        </Col>
                        <Col size={4}>
                            <View
                                style={{width:120, height:2, backgroundColor:'#a6a6a6', marginTop:10}}
                            />
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    textbox: {
        marginLeft: 30,
        marginRight: 30,
    },
    gambar: {
        justifyContent: 'center',
        height: 91,
        width: 300,
    },
    tombol: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 25,
    },
    lupa: {
        marginLeft: 30,
        marginRight: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('instakw', () => instakw);
