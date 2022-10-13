import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './src/components/header/index';
import Home from './src/pages/Home';
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
            <Home />
          </>
        }
      />
    </SafeAreaProvider>
  );
}
