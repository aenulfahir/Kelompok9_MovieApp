import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStack } from '../navigation/HomeStackNavigation';

type Props = NativeStackScreenProps<RootStack, 'Home'>;

export default function Home({ navigation }: Props): JSX.Element {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Movie Detail"
        onPress={() => navigation.navigate('MovieDetail')}
      />
    </View>
  );
}