import React from 'react';

const WithForm = (FORM) => (Component) => {
  const initFormData = () => Object
    .keys(FORM)
    .reduce((obj, key) => ({
      ...obj,
      [key]: {
        value: '',
      },
    }), {});

  class Wrapper extends React.Component {
    constructor(props) {
      super (props)

      this.state = {
        formData: initFormData(),
      };

      this.getData = this.getData.bind(this);
      this.getErrorMessage = this.getErrorMessage.bind(this);
      this.handleFormDataChange = this.handleFormDataChange.bind(this);
    }

    getData() {
      const { formData } = this.state;
      const data = Object
        .keys(formData)
        .reduce((obj, key) => ({
          ...obj,
          [key]: formData[key].value,
        }), {});

      return data;
    }

    getErrorMessage(target) {
      const { formData } = this.state;

      const { getErrorMessage } = FORM[target];
      const { value } = formData[target];
      const data = this.getData();

      const errorMessage = getErrorMessage(value, data);

      return errorMessage;
    }

    handleFormDataChange = (target) => (value) => {
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [target]: {
            value,
          },
        },
      }));
    }

    render() {
      const { formData } = this.state;

      return (
        <Component
          {...this.props}
          formData={formData}
          getData={this.getData}
          getErrorMessage={this.getErrorMessage}
          handleFormDataChange={this.handleFormDataChange}
        />
      );
    }
  }
};

export default WithForm;
