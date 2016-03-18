import React, { PropTypes, Component } from 'react';

import SmartForms from "./smart-forms.jsx";
import Formsy from 'formsy-react';

import Utils from './utils.js';

const NewDocContainer = React.createClass({

  propTypes: {
    collection: React.PropTypes.object.isRequired,
    label: React.PropTypes.string,
    errorCallback: React.PropTypes.func,
    successCallback: React.PropTypes.func,
    methodName: React.PropTypes.string
  },

  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  submitForm(data) {
    
    // remove any empty properties
    const document = _.compactObject(Utils.flatten(data)); 
    const collection = this.props.collection;
    const methodName = this.props.methodName ? this.props.methodName : collection._name+'.create';

    Meteor.call(methodName, document, (error, document) => {
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
    
    const collection = this.props.collection;
    const fields = collection.getInsertableFields(this.data.currentUser);

    return (
      <div className="new-document">
        <h3>{this.props.label}</h3>
        <Formsy.Form onSubmit={this.submitForm}>
          {fields.map(fieldName => SmartForms.getComponent(fieldName, collection.simpleSchema()._schema[fieldName]))}
          <button type="submit" className="button button--primary">Submit</button>
        </Formsy.Form>
      </div>
    )
  }
});

module.exports = NewDocContainer;
export default NewDocContainer;