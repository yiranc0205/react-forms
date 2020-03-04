/* eslint react/prop-types: "off" */
import React, { Fragment } from 'react';
import FormRender, { componentTypes, useFieldApi } from '@data-driven-forms/react-form-renderer';

import './form-fields-mapper-docs.css';

const wrapperStyles = {
  padding: 16,
  borderRadius: 4,
  fontFamily: 'Roboto',
};

const FormWrapper = ({ children, ...props }) => (<form style={ wrapperStyles } { ...props }>{ children }</form>);

const Title = ({ children, ...props }) => <h1>{ children }</h1>;

const Description = ({ children, ...props }) => <p >{ children }</p>;

const getButtonStyle = variant => ({
  color: 'White',
  backgroundColor: variant === 'primary' ? 'RebeccaPurple' : '#888',
  padding: '8px 16px',
  borderRadius: 4,
  cursor: 'pointer',
  border: 'none',
  marginRight: 4,
});

const Button = ({ children, label, variant, ...props }) => <button style={ getButtonStyle(variant) } { ...props }>{ label }</button>;

const TextField = ({ customProp, label, input, isRequired, meta: { error, touched }, FieldArrayProvider, dataType, ...props }) => (
  <div className={ `ddorg__demo-formGroup ${isRequired ? 'required' : ''} ${error ? 'error' : ''}` }>
    <label htmlFor={ input.name }>{ label }</label>
    <input id={ input.name } { ...input } { ...props } />
    { touched && error && <p className="error-text">{ error }</p> }
    { customProp && <p>This is a custom prop and has nothing to do with form schema</p> }
  </div>
);

const CustomComponent = (props) => {
  const { input, meta, ...rest } = useFieldApi(props)
  return <TextField input={ input } meta={ input } { ...rest } />
};

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  'custom-component-type': CustomComponent,
};

const ComponentMapper = () => {
  const schema = {
    fields: [{
      component: componentTypes.TEXT_FIELD,
      name: 'first-name',
      label: 'First name',
      isRequired: true,
      validate: [ value => !value || value.lenght === 0 ? 'Required' : undefined ],
      customProp: true,
    }, {
      component: componentTypes.TEXT_FIELD,
      name: 'last-name',
      label: 'Last name',
      isRequired: true,
      validate: [ value => !value || value.lenght === 0 ? 'Required' : undefined ],
    }, {
      component: componentTypes.TEXT_FIELD,
      name: 'age',
      label: 'Your age',
      type: 'number',
    }, {
      component: 'custom-component-type',
      name: 'password',
      label: 'Your password',
      type: 'password',
    }],
    title: 'Custom form fields mapper and layout mapper',
    description: 'If you want to see the source code, please expand the code example.',
  };
  return (
    <div>
      <FormRender
        componentMapper={ componentMapper }
        FormTemplate={ () => null }
        schema={ schema }
        onSubmit={ console.log }
        onCancel={ () => console.log('cancel action') }
      />
    </div>
  );
};

export default ComponentMapper;
