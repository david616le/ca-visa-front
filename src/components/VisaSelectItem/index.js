import React, { Component } from "react";
import { Form } from 'antd';
import VisaSelect from '../VisaSelect'
import * as utils from '../../utils'
import resources, { translate } from '../../utils/resources'

class VisaSelectItem extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    required: true,
    disabled: false,
  }
  render() {

    const { label, extra, initialValue, field, getFieldDecorator, required, content, onChange, lang, disabled, ...rest } = this.props

    const tr = (r) => translate(r, lang);

    return (
      <Form.Item label={label} extra={extra}>
        {getFieldDecorator(field, {
          initialValue: utils.getInitialValue(initialValue),
          rules: [{ required: !disabled && required, message: tr(resources.validations.required) }],
        })(
          <VisaSelect {...content} disabled={disabled} onChange={onChange}/>
        )}
      </Form.Item>
    );
  }
}
export default VisaSelectItem;
