// Assuming this is in ../theme/index.ts or theme.ts
import { Theme } from '@mui/material/styles';

export interface CustomTheme extends Theme {
  palette: {
    info: {
      light: string;
    };
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    // Add other palette options as needed
  };
  // Add other custom theme properties if any
}
