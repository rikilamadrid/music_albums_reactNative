// import a library to help create Component
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumsList from './src/components/AlbumsList';

// create a Component
const App = () => {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={'Albums'} />
                <AlbumsList />
            </View>
        )
};

// render component to the device
AppRegistry.registerComponent('albums', () => App);
