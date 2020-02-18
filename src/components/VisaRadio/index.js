import React, { Component } from "react";
import { Form, Radio } from "antd";
import * as utils from "../../utils";
import resources, { translate } from "../../utils/resources";

class VisaRadio extends Component {
  static defaultProps = {
    extra: "",
    label: ""
  };
  render() {
    const { label, extra, initialValue, field, getFieldDecorator, combines, lang, ...rest } = this.props;

    const tr = r => translate(r, lang);

    console.log(tr(resources.yes));

    return (
      <Form.Item label={label} extra={extra}>
        {getFieldDecorator(field, {
          initialValue: utils.getInitialValue(initialValue),
          rules: [{ required: true, message: tr(resources.validations.required) }]
        })(
          <Radio.Group>
            {combines ? (
              combines.map((item, index) => (
                <Radio value={item.value} key={index}>
                  {item.label}
                </Radio>
              ))
            ) : (
              <>
                <Radio value="0">{tr(resources.yes)}</Radio>
                <Radio value="1">{tr(resources.no)}</Radio>
              </>
            )}
          </Radio.Group>
        )}
      </Form.Item>
    );
  }
}
export default VisaRadio;
