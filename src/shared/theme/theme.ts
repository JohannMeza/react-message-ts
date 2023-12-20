import { Theme, alpha, createTheme } from '@mui/material/styles';
// import { Theme as DefaultTheme } from '@mui/system/createTheme';

declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    small: true
    medium: true
    large: true
  }
  interface InputBaseProps {
    variant: 'primary' | 'rounded'
  }
}

declare module '@mui/material/DialogContent' {
  interface DialogContentProps {
    variant: 'default' | 'none-padding'
  }
}

declare module '@mui/material/styles' {
  interface PaletteColorOptions{}

  interface Palette {
    tertiary: Palette['primary'];
    white: Palette['primary'];
    red: Palette['primary'];
    light_red: Palette['primary'];
    green: Palette['primary'];
    blue: Palette['primary'];
    background_colors_opacity: {
      [50]: string
      [60]: string
    }
  }
  
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    red: PaletteOptions['primary'];
    light_red: PaletteOptions['primary'];
    green: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    background_colors_opacity: {
      [50]: string
      [60]: string
    }
  }
  
  interface PaletteColorOptions {
    main: string
    contrastText: string
  }
}

export const configTheme = <T extends Theme>(themeDefault?: Theme | T): Theme => createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#92A9BD',
      contrastText: '#203232',
    },
    secondary: {
      main: '#7C99AC',
      contrastText: '#203232',  
    },
    tertiary: {
      main: '#D3DEDC',
      contrastText: '#203232',
    },

    red: {
      main: '#DA1E37',
      contrastText: '#203232',  
    },
    light_red: {
      main: '#FFEFEF',
      contrastText: '#203232',  
    },
    green: {
      main: '#DA1E37',
      contrastText: '#203232',  
    },
    blue: {
      main: '#3A86FF',
      contrastText: '#203232',  
    },

    white: {
      main: '#F8F9FA',
      contrastText: '#203232',  
    },

    background_colors_opacity: {
      '50': 'rgba(248, 249, 250, 0.5)',
      '60': 'rgba(248, 249, 250, 0.6)'
    },

    grey: {
      '50': '#F8F9FA',
      '100': '#E9ECEF',
      '200': '#DEE2E6',
      '300': '#CED4DA',
      '400': '#ADB5BD',
      '500': '#6C757D',
      '600': '#495057',
      '700': '#343A40',
      '800': '#212529',
    }
  },
  typography: {
    fontFamily: 'Baloo Chettan 2',
  },
  components: {
    MuiInputLabel: {
      defaultProps: {
        focused: false,
        style: {
          position: 'relative',
          transformOrigin: 'center left'
        }
      },
      variants: [
        {
          props: { size: 'normal' },
          style: {
            fontWeight: '700',
            fontSize: '18px',
            '%.Mui-focused': {
              color: 'blue'
            }
          }
        },
        {
          props: { color: 'error' },
          style: {
            color: 'red'
          }
        },
      ],
    },
    MuiInputBase: {
      defaultProps: {
        size: 'medium'
      },
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: themeDefault && themeDefault.palette.white.main,
            // backgroundColor: '#F3F6F9',
            // borderColor: themeDefault.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
            border: '1px solid',
            borderColor: '#E0E3E7',
            fontSize: 16,
            width: 'auto',
            padding: '4px 12px',
            transition: themeDefault && themeDefault.transitions.create([
              'border-color',
              'background-color',
              'box-shadow',
            ]),
            '&.Mui-focused': {
              boxShadow: themeDefault && `${alpha(themeDefault.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
              borderColor: themeDefault && themeDefault.palette.primary.main,
            }
          }
        },
        {
          props: { variant: 'rounded' },
          style: {
            borderRadius: '1000px',
            position: 'relative',
            backgroundColor: themeDefault && themeDefault.palette.white.main,
            border: '1px solid',
            borderColor: '#E0E3E7',
            fontSize: 16,
            width: 'auto',
            padding: '4px 12px',
            transition: themeDefault && themeDefault.transitions.create([
              'border-color',
              'background-color',
              'box-shadow',
            ]),
            '&.Mui-focused': {
              boxShadow: themeDefault && `${alpha(themeDefault.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
              borderColor: themeDefault && themeDefault.palette.primary.main,
            }
          }
        },
        {
          props: { size: 'small' },
          style: {
            height: '38px',
          }
        },
        {
          props: { size: 'medium' },
          style: {
            height: '40px'
          }
        },
        {
          props: { size: 'large' },
          style: {
            height: '50px'
          }
        }
      ]
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: 'elevation' },
          style: {
            boxShadow: 'none',
          }
        }
      ]
    },
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none',
        }
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid',
            borderColor: themeDefault?.palette.grey[600],
            backgroundColor: themeDefault?.palette.tertiary.main,
            color: themeDefault?.palette.grey[700],
            borderRadius: '100px',
            '&:hover': {
              borderColor: themeDefault?.palette.grey[600],
              backgroundColor: themeDefault?.palette.tertiary.main,
              color: themeDefault?.palette.grey[700],
            },
            '&:active': {
              borderColor: themeDefault?.palette.grey[600],
              backgroundColor: themeDefault?.palette.tertiary.main,
              color: themeDefault?.palette.grey[700],
            },
            '&.Mui-focusVisible': {
              borderColor: themeDefault?.palette.grey[600],
              backgroundColor: themeDefault?.palette.tertiary.main,
              color: themeDefault?.palette.grey[700],
            },
            '&:disabled': {
              borderColor: themeDefault?.palette.grey[600],
              backgroundColor: themeDefault?.palette.tertiary.main,
              color: themeDefault?.palette.grey[700],
            }
          }
        },
        {
          props: { color: 'info' },
          style: {
            background: themeDefault?.palette.blue.main
          }
        }
      ]
    },
    MuiIconButton: {
      defaultProps: {
        color: 'primary'
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            color: themeDefault?.palette.blue.main
          }
        },
        {
          props: { color: 'error' },
          style: {
            color: themeDefault?.palette.red.main
          }
        },
        {
          props: { color: 'default' },
          style: {
            color: themeDefault?.palette.grey[700]
          }
        }
      ]
    },
    MuiAlert: {
      variants: [
        {
          props: { color: 'info' },
          style: {
            color: themeDefault?.palette.grey['700'],
            background: themeDefault?.palette.tertiary.main,
            justifyContent: 'center',
            textAlign: 'center'
          }
        }
      ]
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: themeDefault?.palette.blue.main,
          height: '3px',
        }
      },
      variants: [
        {
          props: { variant: 'scrollable' },
          style: {
            '& .Mui-selected': {
              color: `${themeDefault?.palette.blue.main} !important`
            },
          }
        }
      ]
    },
    MuiTab: {
      styleOverrides: {
        textColorPrimary: {
          textTransform: 'initial',
          fontSize: 16,
          fontWeight: 600,
          color: themeDefault?.palette.grey[700]
        },
        selected: true
      }
    },
    MuiChip: {
      variants: [
        {
          props: { variant: 'filled' },
          style: {
            background: themeDefault?.palette.primary.main,
            color: themeDefault?.palette.white.main,
          }
        }
      ]
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: themeDefault?.palette.white.main
        }
      },
      defaultProps: {
        style: {
          zIndex: 100000,
          colorScheme: 'red' 
        }
      }
    },
    MuiDialogTitle: {
      defaultProps: {
        style: {
          padding: '10px 15px',
          background: themeDefault?.palette.grey[200]
        }
      }
    },
    MuiDialogContent: {
      variants: [
        {
          props: { variant: 'none-padding' },
          style: {
            padding: 0
          }
        }
      ]
    }
  }
});