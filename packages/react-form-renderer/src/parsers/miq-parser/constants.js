import componentTypes from '../../components/component-types';

export const componentMap = {
  DialogFieldTextBox: componentTypes.TEXT_FIELD,
  DialogFieldRadioButton: componentTypes.RADIO,
  DialogFieldCheckBox: componentTypes.CHECKBOX,
  DialogFieldTextAreaBox: componentTypes.TEXTAREA_FIELD,
  DialogFieldDropDownList: componentTypes.SELECT_COMPONENT,
  DialogFieldDateControl: componentTypes.DATE_PICKER,
  DialogFieldDateTimeControl: componentTypes.TIME_PICKER,
};

// for true values
export const neededAttributes = [
  'name',
  'label',
  [ 'label', 'title' ],
  [ 'data_type', 'dataType' ],
  [ 'required', 'isRequired' ],
  [ 'read_only', 'isReadOnly' ],
  [ 'description', 'helperText' ],
];

// for false values
export const neededFalseAttributes = [
  [ 'visible', 'isVisible' ],
];
