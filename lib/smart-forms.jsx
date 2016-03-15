import Formsy from 'formsy-react';
import FRC from 'formsy-react-components';

const Checkbox = FRC.Checkbox;
const CheckboxGroup = FRC.CheckboxGroup;
const Input = FRC.Input;
const RadioGroup = FRC.RadioGroup;
const Select = FRC.Select;
const Textarea = FRC.Textarea;

const SmartForms = {};

// add support for nested properties
const deepValue = function(obj, path){
  for (var i=0, path=path.split('.'), len=path.length; i<len; i++){
    obj = obj[path[i]];
  };
  return obj;
};

SmartForms.getComponent = (fieldName, field, document) => {

  let options = [];
  if (field.autoform && field.autoform.options) {
    options = typeof field.autoform.options === "function" ? field.autoform.options() : field.autoform.options;
  }

  const value = deepValue(document, fieldName) ? deepValue(document, fieldName) : "";

  switch (field.control) {

    case "text":
      return <Input         key={fieldName} name={fieldName} value={value} label={fieldName} type="text" className="text-input"/>;
    case "textarea":
      return <Textarea      key={fieldName} name={fieldName} value={value} label={fieldName} className="textarea"/>;
    case "checkbox":
      return <Checkbox      key={fieldName} name={fieldName} value={value} label={fieldName}/>;        
    case "checkboxgroup":
      return <CheckboxGroup key={fieldName} name={fieldName} value={value} label={fieldName} options={options} />;
    case "radiogroup":
      return <RadioGroup    key={fieldName} name={fieldName} value={value} label={fieldName} options={options} />;
    case "select":
      return <Select        key={fieldName} name={fieldName} value={value} label={fieldName} options={options} />;
    default: 
      return <Input         key={fieldName} name={fieldName} value={value} label={fieldName} type="text" className="text-input"/>;
  }
}

export default SmartForms;