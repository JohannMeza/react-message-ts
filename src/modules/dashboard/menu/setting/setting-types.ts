import { FC } from 'react';
import { PrivacityCurrentViewEnum } from './privacity/privacity-types';

export enum SettingCurrentViewEnum {
  MAIN = 'main',
  PROFILE = 'profile',
  NOTIFICATION = 'notification',
  SECURITY = 'security',
  PRIVACITY = 'privacity',
  // THEME = 'theme',
}

export enum ItemSettingEnum {
  TITLE = 'title',
  SUBTITLE = 'subtitle',
  OPTION = 'option',
  DESCRIPTION = 'description',
  INPUT_CHECKBOX = 'input-checkbox',
  INPUT_RADIO = 'input-radio',
}

export enum TypeConfigurationStates {
  TODOS = 1,
  MIS_CONTACTOS = 2,
  MIS_CONTACTOS_EXCEPTO = 3,
  NADIE = 4,
}

export type SettingBoxType = {
  props: SettingMainView &
    SettingProfileView &
    SettingNotificationView &
    SettingSecurityView &
    SettingPrivacyView &
    SettingThemeView;
}


export interface SettingComponentProps {
  [SettingCurrentViewEnum.MAIN]: FC<SettingMainView>;
  [SettingCurrentViewEnum.PROFILE]: FC<SettingProfileView>;
  [SettingCurrentViewEnum.NOTIFICATION]: FC<SettingNotificationView>;
  [SettingCurrentViewEnum.SECURITY]: FC<SettingSecurityView>;
  [SettingCurrentViewEnum.PRIVACITY]: FC<SettingPrivacyView>;
  // [SettingCurrentViewEnum.THEME]: FC<SettingThemeView>;
}

export interface SettingMainView {
  data: ItemSetting[]
  title: string
  view: SettingCurrentViewEnum
};

export interface SettingProfileView { }

export interface SettingNotificationView { 
  data: ItemSetting[]
  title: string
}

export interface SettingSecurityView { 
  message: string; 
  title: string
}

export interface SettingPrivacyView { 
  data: ItemSetting[]
  title: string
  view: SettingCurrentViewEnum
}

export interface SettingThemeView { 
  message: string; 
  title: string
}

export interface ItemSetting {
  children: ItemSetting[]
  configuration: string
  description: string
  idConfiguration: number
  idConfigurationUser: number
  value: string
  idConfigurationParent: number
  idTypeConfiguration: number
  isParent: boolean
  order: number
  view: SettingCurrentViewEnum & PrivacityCurrentViewEnum
  typeConfiguration: ItemSettingEnum
}

export interface ItemSettingGeneralProps {
  configuration: string
  description: string
  idConfiguration: number
  typeConfiguration: ItemSettingEnum
}

export type ItemSettingBoxType = 
  ItemSettingTitleProp &
    ItemSettingSubtitleProp &
    ItemSettingOptionProp &
    ItemSettingDescriptionProp &
    ItemSettingInputCheckboxProp &
    ItemSettingInputRadioProp;

export interface ItemSettingComponents {
  [ItemSettingEnum.TITLE]: FC<ItemSettingTitleProp>;
  [ItemSettingEnum.SUBTITLE]: FC<ItemSettingSubtitleProp>;
  [ItemSettingEnum.OPTION]: FC<ItemSettingOptionProp>;
  [ItemSettingEnum.DESCRIPTION]: FC<ItemSettingDescriptionProp>;
  [ItemSettingEnum.INPUT_CHECKBOX]: FC<ItemSettingInputCheckboxProp>;
  [ItemSettingEnum.INPUT_RADIO]: FC<ItemSettingInputRadioProp>;
  // [SettingCurrentViewEnum.THEME]: FC<SettingThemeView>;
}

export interface ItemSettingTitleProp {
  configuration: string
  description: string
  idConfiguration: number
  typeConfiguration: ItemSettingEnum
}

export interface ItemSettingSubtitleProp {
  configuration: string
  description: string
  idConfiguration: number
  typeConfiguration: ItemSettingEnum
}

export interface ItemSettingOptionProp {
  configuration: string
  description: string
  idConfiguration: number
  typeConfiguration: ItemSettingEnum
  handleClick?: () => void 
}

export interface ItemSettingDescriptionProp {
  configuration: string
  description: string
  idConfiguration: number
  typeConfiguration: ItemSettingEnum
}

export interface ItemSettingInputCheckboxProp {
  configuration: string
  description: string
  idConfiguration: number
  idConfigurationUser: number
  value: string
  typeConfiguration: ItemSettingEnum
}

export interface ItemSettingInputRadioProp {
  configuration: string
  description: string
  idConfiguration: number
  idConfigurationUser: number
  value: string
  typeConfiguration: ItemSettingEnum
}
