import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './src/components/header/index';
import Anime from './src/pages/Anime';
import MyBackGround from './src/components/back_ground';
import MyStatusBar from './src/components/status_bar';

export default function App() {
  return (
    <SafeAreaProvider>
      <MyStatusBar backgroundColor="#ffffff" barStyle="default" />
      <MyBackGround
        content={
          <>
            <Header />
            <Anime id={1} />
          </>
        }
      />
    </SafeAreaProvider>
  );
}
