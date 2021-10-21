import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton, HeaderButtons} from 'react-navigation-header-buttons';
import {THEME} from '../constants/Theme';
import Icon from 'react-native-ionicons';

export const AppHeaderIcon = props => {
  return (
    <HeaderButton
      IconComponent={Icon}
      iconSize={24}
      {...props}
      color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
    />
  );
};
