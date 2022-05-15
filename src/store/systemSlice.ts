import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultTheme } from '../themes';
import { defaultLang } from '../vocabularies';

type TSystemState = {
  isLoggedIn: boolean;
  appName: string;
  currentTheme: string,
  currentLang: string,
  isMenuOpen: boolean,
  isDeleteConfirmOpen: boolean,
};

const initialState: TSystemState = {
  isLoggedIn: false,
  appName: 'Real World',
  currentTheme: defaultTheme,
  currentLang: defaultLang,
  isMenuOpen: false,
  isDeleteConfirmOpen: false,
};

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    onLogin: (state: TSystemState) => ({ ...state, isLoggedIn: true }),
    onLogout: (state: TSystemState) => ({ ...state, isLoggedIn: false }),
    setTheme: (state: TSystemState, action: PayloadAction<string>) => ({
      ...state, currentTheme: action.payload,
    }),
    setLanguage: (state: TSystemState, action: PayloadAction<string>) => ({
      ...state, currentLang: action.payload,
    }),
    openMenu: (state: TSystemState) => ({
      ...state, isMenuOpen: true,
    }),
    closeMenu: (state: TSystemState) => ({
      ...state, isMenuOpen: false,
    }),
    openConfirm: (state: TSystemState) => ({
      ...state, isDeleteConfirmOpen: true,
    }),
    closeConfirm: (state: TSystemState) => ({
      ...state, isDeleteConfirmOpen: false,
    }),
  },
});

const systemReducer = systemSlice.reducer;
export const {
  onLogin,
  onLogout,
  setTheme,
  setLanguage,
  openMenu,
  closeMenu,
  openConfirm,
  closeConfirm,
} = systemSlice.actions;
export default systemReducer;
