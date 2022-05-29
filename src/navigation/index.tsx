import * as React from 'react';
import { ColorSchemeName, Pressable, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors, { AppColors } from '_constants/Colors';
import useColorScheme from '_utils/hooks/useColorScheme';
import ModalScreen from '_screens/ModalScreen';
import SearchScreen from '_screens/Search/SearchScreen';
import ScannerScreen from '_screens/Scanner/ScannerScreen';
import LoginScreen from '_screens/Login/LoginScreen';
import NotFoundScreen from '_screens/NotFoundScreen';
import HomeTabScreen from '_screens/Home/HomeTabScreen';
import SimulationTabScreen from '_screens/Simulation/SimulationTabScreen';
import ResultTabScreen from '_screens/Result/ResultTabScreen'
import HomeIcon from '_assets/images/svg/HomeIcon';
import SimulationIcon from '_assets/images/svg/SimulationIcon';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '_types';
import { AuthContext } from '_utils/auth-context';

import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  const { isLoggedIn, state, isLoading, refresh } = React.useContext(AuthContext);

  React.useEffect(() => {
    refresh();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              title: 'Búsqueda de productos',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: AppColors.redColor,
              },
            }}
          />
          <Stack.Screen options={{
            title: 'Lectura de QR',
            headerStyle: {
              backgroundColor: AppColors.redColor,
            },
            headerTintColor: "#fff"
          }} name="Scanner" component={ScannerScreen} />
        </>
      ) : (
        <Stack.Screen options={{
          headerShown: false,
          animationTypeForReplace: state.isSignout ? 'pop' : 'push',

        }}
          name="Login" component={LoginScreen}
        />
      )}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const { signOut } = React.useContext(AuthContext);
  const logo = require('../assets/images/credituya-white.png');
  const results = require('../assets/images/resultIcon.png');

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        // tabBar
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarInactiveBackgroundColor: AppColors.redColor,
        tabBarStyle: {
          backgroundColor: AppColors.redWineColor,
        },
        tabBarIcon: ({ color, size }) => {
          const icons = {
            HomeTab: <HomeIcon />,
            SimulationTab: <SimulationIcon />,
            ResultTab: <Image style={{ height: 25, width: 20 }} source={results} />,
          };

          return icons[route.name];
        },

        // header
        headerTitle: '',
        headerStyle: {
          backgroundColor: AppColors.redColor,
        },
        headerTintColor: '#fff',
        headerLeft: () => (
          <Image style={{ height: 100, width: 100, resizeMode: 'contain' }} source={logo} />
        ),
        headerLeftContainerStyle: {
          paddingLeft: 15,
          paddingBottom: 10,
        },
        headerRight: () => (
          <Pressable
            onPress={signOut}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <FontAwesome
              name="sign-out"
              size={25}
              color='#fff'
              style={{ marginRight: 15 }}
            />
          </Pressable>
        ),
        headerRightContainerStyle: {
          paddingRight: 5,
          paddingBottom: 10,
        },
      })}>

      <BottomTab.Screen
        name="HomeTab"
        component={HomeTabScreen}
        options={({ navigation }: RootTabScreenProps<'HomeTab'>) => ({
          title: 'Inicio',
        })}
      />
      <BottomTab.Screen
        name="SimulationTab"
        component={SimulationTabScreen}
        options={{
          title: 'Simulación',
        }}
      />
      <BottomTab.Screen
        name="ResultTab"
        component={ResultTabScreen}
        options={{
          title: 'Resultado',
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
