import { ListSettingBox } from '@src/modules/dashboard/component/ContainedBoxView';
import { ItemSettingTitleProp, ItemSettingDescriptionProp, ItemSettingInputCheckboxProp, ItemSettingInputRadioProp, ItemSettingOptionProp, ItemSettingSubtitleProp, ItemSettingComponents, ItemSettingEnum, ItemSettingBoxType, TypeConfigurationStates, ItemSetting } from '../setting-types';
import { Box, Checkbox, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { useCallAction } from '@cobuildlab/react-simple-state';
import { updateUserSettingActions } from '../setting-actions';
import { useHandleChangeSettingView } from '../setting-hooks';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const updateConfigurationValue = (
  configArray: ItemSetting[],
  targetId: number,
  newValue: string
): ItemSetting[] => {
  const updateRecursive = (items: ItemSetting[]): boolean => {
    for (const item of items) {
      if (item.idConfiguration === targetId) {
        item.value = newValue;
        return true;
      }
      if (item.children?.length) {
        const updated = updateRecursive(item.children);
        if (updated) return true;
      }
    }
    return false;
  };

  updateRecursive(configArray);
  return configArray;
};

export const ItemSettingTitle = <T extends ItemSettingTitleProp>(
  props: T
): React.ReactElement => (
  <Typography fontSize={20} fontWeight={700} color="grey.700">
    { props.configuration }
  </Typography>
);

export const ItemSettingSubtitle = <T extends ItemSettingSubtitleProp>(
  props: T
): React.ReactElement => (
  <Typography padding="10px" fontSize={16} fontWeight={600}>
    { props.configuration }
  </Typography>
);

export const ItemSettingOption = <T extends ItemSettingOptionProp>(
  props: T
): React.ReactElement => (
  <ListSettingBox
    onClick={props.handleClick}
  >
    <Box>
      <Typography fontSize={16} fontWeight={500} color="grey.700">
        { props.configuration }
      </Typography>
      <Typography fontSize={14} color="grey.700">
        Todos
      </Typography>
    </Box>
    <ChevronRightIcon />
  </ListSettingBox>
);

export const ItemSettingDescription = <T extends ItemSettingDescriptionProp>(
  props: T
): React.ReactElement => (
  <Typography fontSize={14} color="grey.700">
    { props.description }
  </Typography>
);

export const ItemSettingInputCheckbox = <T extends ItemSettingInputCheckboxProp>(
  props: T
): React.ReactElement => {
  const { handleChangeProps, props: propsSetting } = useHandleChangeSettingView();
  const [call] = useCallAction(updateUserSettingActions);

  return (
    <ListSettingBox>
      <Box>
        <Typography fontSize={16} fontWeight={500} color="grey.700">
          { props.configuration }
        </Typography>
        <Typography fontSize={14} color="grey.700">
          { props.description }
        </Typography>
      </Box>
      <Checkbox checked={parseInt(props.value) ? true : false} onChange={(e) => {
        const value = e.target.checked ? '1' : '0';
        call(props.idConfigurationUser, value);
        handleChangeProps({
          props: {
            ...propsSetting.props,
            data: updateConfigurationValue(propsSetting.props.data, props.idConfiguration, value)
          }
        });
      }} />
    </ListSettingBox>
  );
};

export const ItemSettingInputRadio = <T extends ItemSettingInputRadioProp>(
  props: T
): React.ReactElement => {
  const { handleChangeProps, props: propsSetting } = useHandleChangeSettingView();
  const [call] = useCallAction(updateUserSettingActions);
  return (
    <>
      <Typography fontSize={16} fontWeight={600}>
        { props.configuration }
      </Typography>
      <FormControl>
        <RadioGroup defaultValue={props.value} name="hora-ult-vez" onChange={(e) => {
          call(props.idConfigurationUser, e.target.value);
          handleChangeProps({
            props: {
              ...propsSetting.props,
              data: updateConfigurationValue(propsSetting.props.data, props.idConfiguration, e.target.value)
            }
          });
        }}>
          <FormControlLabel
            value={TypeConfigurationStates.TODOS}
            control={<Radio />}
            label="Todos"
          />
          <FormControlLabel
            value={TypeConfigurationStates.MIS_CONTACTOS}
            control={<Radio />}
            label="Mis contactos"
          />
          <FormControlLabel
            value={TypeConfigurationStates.MIS_CONTACTOS_EXCEPTO}
            control={<Radio />}
            label="Mis contactos, excepto"
          />
          <FormControlLabel
            value={TypeConfigurationStates.NADIE}
            control={<Radio />}
            label="Nadie"
          />
        </RadioGroup>
      </FormControl>
    
    </>
  );
};

export const ItemSettingBox = <T extends ItemSettingBoxType>(
  props: T,
): React.ReactElement => {

  const ItemSettingView: ItemSettingComponents = {
    [ItemSettingEnum.TITLE]: ItemSettingTitle,
    [ItemSettingEnum.SUBTITLE]: ItemSettingSubtitle,
    [ItemSettingEnum.OPTION]: ItemSettingOption,
    [ItemSettingEnum.DESCRIPTION]: ItemSettingDescription,
    [ItemSettingEnum.INPUT_CHECKBOX]: ItemSettingInputCheckbox,
    [ItemSettingEnum.INPUT_RADIO]: ItemSettingInputRadio,
  };
  
  const ComponentsView = ItemSettingView[props.typeConfiguration];
    
  return <ComponentsView { ...props } />;
};