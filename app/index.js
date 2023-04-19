import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router'; 
import { COLORS, icons, images, SIZES } from '../constants';
import { NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {

    return (
        <SafeAreaView style={{ flex: 1, background: COLORS.lightWhite }}>
            <Stack.Screen options={{ 
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
                ),
                headerTitle: ""
            }} />
        </SafeAreaView>
    );
}

export default Home;
