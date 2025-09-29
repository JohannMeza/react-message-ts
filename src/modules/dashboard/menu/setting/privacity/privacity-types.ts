import { FC } from 'react';
import { ItemSetting, SettingCurrentViewEnum } from '../setting-types';

export enum PrivacityCurrentViewEnum {
  MAIN = 'main',
  GROUP = 'group',
  INFORMATION = 'information',
  PROFILE = 'profile',
  LOCKED = 'locked',
  ONLINE = 'online',
}

export type PrivacyBoxType = ItemPrivacyMain &
    ItemPrivacyGroup &
    ItemPrivacyInformation &
    ItemPrivacyProfile &
    ItemPrivacyLocked &
    ItemPrivacyOnline;

export interface ItemPrivacyComponents {
  [PrivacityCurrentViewEnum.MAIN]: FC<ItemPrivacyMain>;
  [PrivacityCurrentViewEnum.GROUP]: FC<ItemPrivacyGroup>;
  [PrivacityCurrentViewEnum.INFORMATION]: FC<ItemPrivacyInformation>;
  [PrivacityCurrentViewEnum.PROFILE]: FC<ItemPrivacyProfile>;
  [PrivacityCurrentViewEnum.LOCKED]: FC<ItemPrivacyLocked>;
  [PrivacityCurrentViewEnum.ONLINE]: FC<ItemPrivacyOnline>;
}

export interface ItemPrivacyMain {
  data: ItemSetting[]
  title: string
  view: SettingCurrentViewEnum
}
export interface ItemPrivacyGroup {
  data: ItemSetting[]
  title: string
  view: SettingCurrentViewEnum
}
export interface ItemPrivacyInformation {
  data: ItemSetting[]
  title: string
  view: SettingCurrentViewEnum
}
export interface ItemPrivacyProfile {
  data: ItemSetting[]
  title: string
  view: SettingCurrentViewEnum
}
export interface ItemPrivacyLocked {
  data: ItemSetting[]
  title: string
  view: SettingCurrentViewEnum
}
export interface ItemPrivacyOnline {
  data: ItemSetting[]
  title: string
  view: SettingCurrentViewEnum
}
