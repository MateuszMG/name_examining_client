import { GroupBase, StylesConfig } from 'react-select';

import { palette } from '../../../utils/theme/themeConfig';

export const reactSelectStyles: StylesConfig<any, false, GroupBase<any>> = {
  input: (provided) => ({
    ...provided,
  }),
  container: (provided) => ({
    ...provided,
    minWidth: '120px',
    ':focus': {
      outline: 'none',
      border: 'none',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: `2px solid ${palette.primary}`,
    color: state.isSelected ? `${palette.primary}` : `${palette.black}`,
  }),

  control: (provided) => ({
    ...provided,
    width: '100%',
    borderRadius: '8px',
    outline: 'none',
    ':focus': {
      outline: 'none',
      border: 'none',
    },
  }),
};
