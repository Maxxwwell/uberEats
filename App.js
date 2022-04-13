import React from 'react';
import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';
import BottomTabs from './app/components/bottomTabs/BottomTabs';
import AppNavigation from './app/components/navigation/AppNavigation';
import {theme} from './app/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          {/* for bottomTabs to stop shaking */}
          <AppNavigation />
        </SafeAreaProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
