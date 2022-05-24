import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './src/utils/hooks/useCachedResources';
import useColorScheme from './src/utils/hooks/useColorScheme';
import Navigation from './src/navigation';
import CartProvider from './src/utils/cart-context';
import AuthProvider from './src/utils/auth-context';
import * as React from 'react';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AuthProvider>
        <CartProvider>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </CartProvider>
      </AuthProvider>
    );
  }
}

export default App;
