import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, Row, Col } from "antd";
const { TextArea } = Input;
import * as utils from "../../utils";
import resources, { translate } from "../../utils/resources";
import validators from "containers/kdmid/Validators";

class VisaExplain extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    textLabel: "If you answered yes, give details below."
  };
  render() {
    const { label, extra, radioInitialValue, radioField, textField, textInitialValue, getFieldDecorator, radioValue, textLabel, validators, lang, ...rest } = this.props;

    const tr = r => translate(r, lang);

    return (
      <>
        <Form.Item label={label} extra={extra}>
          {getFieldDecorator(radioField, {
            initialValue: utils.getInitialValue(radioInitialValue),
            rules: [{ required: true, message: tr(resources.validations.required) }]
          })(
            <Radio.Group>
              <Radio value="0">{tr(resources.yes)}</Radio>
              <Radio value="1">{tr(resources.no)}</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        {radioValue === "0" && (
          <Form.Item label={textLabel} required>
            {getFieldDecorator(textField, {
              initialValue: utils.getInitialValue(textInitialValue),
              rules: [{ validator: (rule, value, callback) => validators.validateAlphaNumericPunctuation(rule, value, callback, label) }]
            })(<TextArea style={{ textTransform: "uppercase" }} rows={7} />)}
          </Form.Item>
        )}
      </>
    );
  }
}
export default VisaExplain;
