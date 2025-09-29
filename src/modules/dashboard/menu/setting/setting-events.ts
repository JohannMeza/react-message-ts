import { Event, createEvent } from '@cobuildlab/react-simple-state';
import { ItemSetting, SettingCurrentViewEnum, SettingBoxType } from './setting-types';
import { ResponseError, ResponseSuccess } from '@src/shared/types/type';

export const settingCurrentViewEvent = createEvent({
  initialValue: { view: SettingCurrentViewEnum.MAIN, position: '0%' },
});
export const settingCurrentViewEventError: Event<Error> = createEvent();

export const listSettingsEvent = createEvent<ItemSetting[]>();
export const listSettingsEventError = createEvent<ResponseError>();

export const propsCurrentViewEvent = createEvent<SettingBoxType>({ initialValue: {} as SettingBoxType });
export const propsCurrentViewEventError = createEvent<Error>();

export const updateUserSettingEvent = createEvent<ResponseSuccess>();
export const updateUserSettingEventError = createEvent<ResponseError>();