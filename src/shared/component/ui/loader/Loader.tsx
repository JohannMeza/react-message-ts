import { CSSProperties, PropsWithChildren, useEffect, useState } from 'react';
import {
  Box,
  CircularProgress,
  Fade,
  Container as MUIContainer,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface LoaderProps {
  fullPage?: boolean;
  centered?: boolean;
  size?: string;
  minHeight?: string | number;
  height?: string | number;
  style?: CSSProperties
}

interface WrapperLoaderStyledProps {
  fullPage?: boolean;
  centered?: boolean;
}

const Container = styled(MUIContainer)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const WrapperLoader = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'fullPage' && prop !== 'centered',
})<WrapperLoaderStyledProps>(({ fullPage, centered }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  ...(fullPage && {
    height: '100vh',
  }),
  ...(centered && {
    height: '100%',
  }),
}));

/**
 * @param {LoaderProps} props - Props of Loader.
 * @returns {JSX.Element} - Main loader component.
 */
export const Loader: React.FC<LoaderProps> = ({
  fullPage = false,
  centered = false,
  size = '5rem',
  minHeight = '85px',
  height = 'inherit',
  style = {}
}: LoaderProps): JSX.Element => {
  if (fullPage || centered) {
    return (
      <Container fixed sx={{ minHeight, height, ...style }}>
        <WrapperLoader fullPage={fullPage} centered={centered}>
          <CircularProgress size={size} />
        </WrapperLoader>
      </Container>
    );
  }
  return <CircularProgress size={size} />;
};

interface LoaderAwaitProps extends PropsWithChildren {
  fullPage?: boolean;
  centered?: boolean;
  size?: string;
  timer?: number;
  open?: boolean;
  minHeight?: string | number;
  height?: string | number;
  style?: CSSProperties
}

/**
 * @param {LoaderProps} props - Props of Loader.
 * @returns {JSX.Element} - Main loader component.
 */
export const LoaderAwait: React.FC<LoaderAwaitProps> = ({
  open,
  timer = 0,
  fullPage = false,
  centered = false,
  size = '5rem',
  minHeight,
  height,
  children,
  style
}) => {
  const [isOpen, setIsOpen] = useState(timer > 0 ? true : false);

  useEffect(() => {
    if (timer > 0) {
      const time = setTimeout(() => {
        setIsOpen(false);
      }, timer * 1000);
      return () => clearTimeout(time);
    }
  }, [timer]);

  if (open || isOpen)
    return <Loader fullPage={fullPage} style={style} centered={centered} size={size} minHeight={minHeight} height={height} />;

  return (
    <Fade in={!open || !isOpen} timeout={1000} unmountOnExit>
      <div style={style}>{children}</div>
    </Fade>
  );
};
