import {
  Stack,
  IconButton,
  Typography,
  Divider,
} from '@mui/material';
import { ItemPrivacyInformation, PrivacityCurrentViewEnum } from '../privacity-types';
import { useHandleChangePrivacityView } from '../privacity-hooks';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { ItemSettingBox } from '../../component/ItemSetting';

export const InformationView = <T extends ItemPrivacyInformation>(
  props: T
): React.ReactElement => {
  const { handleChangePrivacity } = useHandleChangePrivacityView();

  return (
    <>
      <Stack flexDirection="row" alignItems="center" gap={2} padding="10px">
        <IconButton
          onClick={() =>
            handleChangePrivacity(PrivacityCurrentViewEnum.MAIN, false)
          }
          color="default"
        >
          <NavigateBeforeIcon />
        </IconButton>
        <Typography fontSize={20} fontWeight={700} color="grey.700">
          Información
        </Typography>
      </Stack>
      <Stack paddingX="20px" paddingY="10px" gap={3}>
        {
          props.data.map((el) => (
            <>
              <Stack gap={1}>
                <ItemSettingBox { ...el } />
              </Stack>
              { props.data.length !== 1 && <Divider /> }
            </>
          ))
        }
      </Stack>
    </>
  );
};
