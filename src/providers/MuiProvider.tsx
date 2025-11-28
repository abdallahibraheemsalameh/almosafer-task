"use client";

import { type ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  PRIMARY,
  SECONDARY,
  ERROR,
  BACKGROUND,
  SCROLLBAR,
} from "@/styles/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: PRIMARY.main,
      light: PRIMARY.light,
      dark: PRIMARY.dark,
    },
    secondary: {
      main: SECONDARY.main,
    },
    background: {
      default: BACKGROUND.darkest,
      paper: BACKGROUND.paper,
    },
    error: {
      main: ERROR.main,
    },
  },
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: `${SCROLLBAR.thumb} ${SCROLLBAR.track}`,
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: 8,
            height: 8,
          },
          "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
            background: SCROLLBAR.track,
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            background: SCROLLBAR.thumb,
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              background: SCROLLBAR.thumbHover,
            },
        },
      },
    },
  },
});

export function MuiProvider({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
