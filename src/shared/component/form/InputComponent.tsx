import {
  FormControl,
  InputBase,
  InputBaseProps,
  InputLabel,
  Typography,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
type InputComponentProps = InputBaseProps & {
  label?: string;
  htmlFor?: string;
  helperText?: string
};
export const InputComponent: FC<InputComponentProps> = (props) => {
  const { error, required, helperText } = props;
  
  const theme = useTheme();
  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel htmlFor={props.htmlFor} size="normal" shrink color={ error ? 'error' : 'primary' }>
        {props.label} { required && ' *' }
      </InputLabel>
      <InputBase {...props} />
      
      {
        error &&
        <Typography 
          color={theme.palette.red.main}
          component={'div'} 
          sx={{ 
            display: 'flex', 
            justifyContent: 'flex-start', 
            alignItems: 'center', 
            gap: '2px',
            marginTop: '2px'
          }} >
          <ErrorOutlineIcon color='error' fontSize='small' />
          { helperText }
        </Typography>
      }
    </FormControl>
  );  
};