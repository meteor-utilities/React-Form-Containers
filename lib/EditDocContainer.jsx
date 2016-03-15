import SmartForms from "./smart-forms.jsx";
import Formsy from 'formsy-react';

import Utils from './utils.js';

const EditDocContainer = React.createClass({
  
  propTypes: {
    document: React.PropTypes.object, // required but might be passed later on
    collection: React.PropTypes.object, // required but might be passed later on
    label: React.PropTypes.string,
    successCallback: React.PropTypes.func,
    errorCallback: React.PropTypes.func,
    methodName: React.PropTypes.string
  },

  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  submitForm(data) {
    
    console.log(data)

    const document = this.props.document;
    const modifier = {$set: _.compactObject(Utils.flatten(data))};
    const collection = this.props.collection;
    const methodName = this.props.methodName ? this.props.methodName : collection._name+'.edit';
    
    console.log(modifier)

    Meteor.call(methodName, document._id, modifier, (error, document) => {
      if (error) {
        console.log(error)
        if (this.props.errorCallback) {
          this.props.errorCallback(document);
        }
      } else {
        if (this.props.successCallback) {
          this.props.successCallback(document);
        }
      }
    });
  },

  render() {

    const document = this.props.document;
    const collection = this.props.collection;
    const fields = collection.getInsertableFields(this.data.currentUser);

    return (
      <div className="document-edit">
        <h3>{this.props.label}</h3>
        <Formsy.Form onSubmit={this.submitForm}>
          {fields.map(fieldName => SmartForms.getComponent(fieldName, collection.simpleSchema()._schema[fieldName], document))}
          <button type="submit" className="button button--primary">Submit</button>
        </Formsy.Form>
      </div>
    )
  }
});

module.exports = EditDocContainer;
export default EditDocContainer;