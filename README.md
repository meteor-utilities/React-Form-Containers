# React Form Containers

This package provides two containers (`NewDocContainer` and `EditDocContainer`) that work with the schema extension defined in the [smart-methods](https://github.com/meteor-utilities/smart-methods) package to let you easily generate new document and edit document forms. 

### Install

`meteor add utilities:react-form-containers`

### `NewDocContainer`

This container takes the following properties:

- `collection`: the collection in which to insert the new document.
- `label`: a label for the form.
- `errorCallback`: a function to call on error.
- `successCallback`: a function to call on success.
- `methodName`: the name of the method to submit the form to. 

### `EditDocContainer`

This containers takes the same properties as `NewDocContainer`, plus:

- `document`: the document being edited. 