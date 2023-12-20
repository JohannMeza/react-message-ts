import { Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MessageNormal = styled(Paper)<{ isendme: boolean | string }>(({ isendme }) => ({
  maxWidth: 350,
  minWidth: 'auto',
  padding: '0.5rem 1rem',
  position: 'relative',
  alignSelf: isendme ? 'flex-end' : 'flex-start',
  '&:hover > div': {
    opacity: 1,
  }
}));

export const MessageInfo = styled(Paper)(({ theme }) => ({
  alignSelf: 'center',
  padding: '0.5rem 1rem',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.white.main,
  fontSize: 14,
  fontWeight: 600,
  margin: '5px 0',
}));

export const MessageLocked = styled(Paper)(({ theme }) => ({
  alignSelf: 'center',
  padding: '0.5rem 1rem',
  backgroundColor: theme.palette.red.main,
  color: theme.palette.white.main,
  fontSize: 14,
  fontWeight: 600,
  margin: '5px 0'
}));

export const MessageNotification = styled(Paper)(({ theme }) => ({
  alignSelf: 'center',
  padding: '0.5rem 1rem',
  backgroundColor: theme.palette.tertiary.main,
  color: theme.palette.grey['700'],
  fontSize: 14,
  fontWeight: 600,
  margin: '5px 0',
  textAlign: 'center'
}));

export const MessageInfoDay = styled(Paper)(({ theme }) => ({
  alignSelf: 'center',
  padding: '3px 10px',
  backgroundColor: theme.palette.grey[500],
  color: theme.palette.white.main,
  fontSize: 14,
  fontWeight: 600,
  margin: '5px 0',
  position: 'sticky',
  top: 0,
  zIndex: 10
}));

export const MessageNormalIconButton = styled(Stack)<{ open: boolean }>(({ theme, open }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '5px',
  right: '5px',
  zIndex: '100',
  width: '21px',
  height: '21px',
  opacity: open ? 1 : 0,
  transition: 'opacity .3s ease-in',
  backgroundColor: theme.palette.white.main,
  borderRadius: 100,
  cursor: 'pointer',
  boxShadow: `0px 0px 5px 2px ${theme.palette.white.main}`,
}));