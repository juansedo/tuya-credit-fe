/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from '_types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeTab: {
            screens: {
              HomeTabScreen: 'one',
            },
          },
          SimulationTab: {
            screens: {
              SimulationTabScreen: 'two',
            },
          },
          ResultTab: {
            screens: {
              SimulationTabScreen: 'three',
            },
          },
        },
      },
      Modal: 'modal',
      Search: 'search',
      NotFound: '*',
    },
  },
};

export default linking;
