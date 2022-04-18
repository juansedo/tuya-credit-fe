/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Image } from 'react-native';

import Colors, { AppColors } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import ScannerScreen from '../screens/Scanner/ScannerScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeTabScreen from '../screens/Home/HomeTabScreen';
import SimulationTabScreen from '../screens/Simulation/SimulationTabScreen';
import ResultTabScreen from '../screens/Result/ResultTabScreen'
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeIcon from '../assets/images/svg/HomeIcon';
import SimulationIcon from '../assets/images/svg/SimulationIcon';
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
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen options={{
        title: 'Lectura de QR',
        headerStyle: {
          backgroundColor: AppColors.redColor,
        },
        headerTintColor: "#fff"
      }} name="Scanner" component={ScannerScreen} />
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

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerTitle: '',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: AppColors.redWineColor,
        },
        tabBarInactiveBackgroundColor: AppColors.redColor
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeTabScreen}
        options={({ navigation }: RootTabScreenProps<'HomeTab'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon />,
          headerStyle: {
            backgroundColor: AppColors.redColor
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color='#fff'
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="SimulationTab"
        component={SimulationTabScreen}
        options={{
          title: 'Simulación',
          tabBarIcon: ({ color }) => <SimulationIcon />,
          headerStyle: {
            backgroundColor: AppColors.redColor
          },
          headerTintColor: '#fff',
        }}
      />
      <BottomTab.Screen
        name="ResultTab"
        component={ResultTabScreen}
        options={{
          title: 'Resultado',
          tabBarIcon: ({ color }) => <Image style={{ height: 25, width: 20 }} source={require('../assets/images/resultIcon.png')} />,
          headerStyle: {
            backgroundColor: AppColors.redColor
          },
          headerTintColor: '#fff',
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
