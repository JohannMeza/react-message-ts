import { FC, useCallback, useEffect, useState } from 'react';
import { Box, Collapse, Stack, Typography } from '@mui/material';
import {
  CheckOutlined as TrueIcon,
  BlockOutlined as FalseIcon,
} from '@mui/icons-material';

const ValidIcon: FC<{ validatorValue: boolean }> = ({ validatorValue }) => (
  <>
    {validatorValue ? (
      <TrueIcon
        fontSize="small"
        color='success'
      />
    ) : (
      <FalseIcon fontSize="small" />
    )}
  </>
);

const Item: FC<{ title: string; validatorValue: boolean }> = ({
  title,
  validatorValue,
}) => (
  <Box
    sx={{
      fontSize: '12px',
      display: 'flex',
      gap: '5px',
      alignItems: 'center',
      paddingX: '5px'
    }}
  >
    <ValidIcon validatorValue={validatorValue} />
    <Typography fontSize="12px">{title}</Typography>
  </Box>
);

interface IsValidPasswordProps {
  password: string;
  passwordRepeat: string;
  watchValidator: (isValidPassword: boolean) => void;
}
export const IsValidPassword: FC<IsValidPasswordProps> = ({
  password = '',
  passwordRepeat = '',
  watchValidator,
}) => {
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const handleIsValidPassword = useCallback(() => {
    const value = Boolean(
      isLengthValid &&
        hasUppercase &&
        hasLowercase &&
        passwordMatch &&
        hasSpecialChar,
    );
    watchValidator(value);
  }, [hasLowercase, hasSpecialChar, hasUppercase, isLengthValid, passwordMatch, watchValidator]);

  const handlePasswordValidator = useCallback(() => {
    setIsLengthValid(password.length >= 12);
    setHasUppercase(/[A-Z]/.test(password));
    setHasLowercase(/[a-z]/.test(password));
    setHasSpecialChar(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password));
    setPasswordMatch(isLengthValid && password === passwordRepeat);
    handleIsValidPassword();
  }, [handleIsValidPassword, isLengthValid, password, passwordRepeat]);

  useEffect(() => {
    handlePasswordValidator();
  }, [handlePasswordValidator, password]);

  return (
    <Box>
      <Collapse
        in={password.length > 0}
        timeout={800}
        unmountOnExit
      >
        <Stack spacing={1} sx={{ mb: '8px' }} justifyItems={'center'}>
          <Box>
            <Typography component={'b'}>Ensure your password has:</Typography>
          </Box>
          <Item
            validatorValue={hasUppercase}
            title="Al menos una letra mayúscula"
          />
          <Item
            validatorValue={hasLowercase}
            title="Al menos una letra minúscula"
          />
          <Item
            validatorValue={hasSpecialChar}
            title="Al menos un carácter especial"
          />
          <Item validatorValue={isLengthValid} title="Al menos 12 caracteres" />
          <Item validatorValue={passwordMatch} title="Las contraseñas no coinciden" />
        </Stack>
      </Collapse>
    </Box>
  );
};
