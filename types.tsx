/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Search: undefined;
  Scanner: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  HomeTab: undefined;
  SimulationTab: undefined;
  ResultTab: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type fee = {
  date: string,
  value: string,
  amortizationValue: string,
  interestValue?: string
  balance: string,
  number: number,
  handlingFeeValue?: string
};

export type ProductDTO = {
  id: string,
  ref: string,
  image_url: string,
  description: string,
  value: string,
  discount_percent: string,
  special_discount_percent: string,
  warehouse: string,
};

export type ProductItem = {
  product: ProductDTO,
  amount: number
}

