import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import { MessageNormalIconButton } from '../message-styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const MessagePopper: FC<PropsWithChildren> = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const handleToggle = (): void => setOpen((prevOpen) => !prevOpen);
  const prevOpen = useRef(open);

  const handleClose = (event: Event | React.SyntheticEvent): void => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    )
      return;
    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) anchorRef.current!.focus();
    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <MessageNormalIconButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        open={open}
      >
        <KeyboardArrowDownIcon />
      </MessageNormalIconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        sx={{ zIndex: 1000 }}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
