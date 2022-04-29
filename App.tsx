import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/utils/hooks/useCachedResources';
import useColorScheme from './src/utils/hooks/useColorScheme';
import Navigation from './src/navigation';
import CartProvider from './src/utils/cart-context';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <CartProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </CartProvider>
    );
  }
}

export default App;
