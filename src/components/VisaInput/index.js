import React, { Component } from "react";
import { Form, Input } from 'antd';
import * as utils from '../../utils'
import resources, { translate } from '../../utils/resources';

class VisaInput extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    required: true,
    customRule: null,
    placeholder: "",
    maxLength: 40,
    type: ""
  }
  render() {

    const { label, extra, initialValue, field, getFieldDecorator, required, customRule, maxLength, placeholder, type, lang, labelCol, wrapperCol, ...rest } = this.props

    const tr = (r) => translate(r, lang);

    return (
      <Form.Item label={label} extra={extra} required={required} labelCol={labelCol} wrapperCol={wrapperCol}>
        {getFieldDecorator(field, {
          initialValue: utils.getInitialValue(initialValue),
          rules: customRule ? customRule : [{ required: required, message: tr(resources.validations.required)  }],
        })(
          <Input placeholder={placeholder} maxLength={maxLength} type={type}/>
        )}
      </Form.Item>
    );
  }
}
export default VisaInput;
