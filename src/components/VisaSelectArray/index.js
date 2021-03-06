import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Icon } from "antd";
import VisaSelect from "../VisaSelect";
import * as constants from "../../utils/constants";
import * as utils from "../../utils";
import resources, { translate } from "../../utils/resources";

class VisaSelectArray extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    required: true
  };

  remove = (k, keysField, dataField) => {
    let keys = this.props.getFieldValue(keysField);
    let data = this.props.getFieldValue(dataField);
    if (keys.length === 0) {
      return;
    }

    keys.splice(k, 1);
    data.splice(k, 1);

    this.props.setFieldsValue({
      [keysField]: keys,
      [dataField]: data
    });
  };

  add = keysField => {
    const keys = this.props.getFieldValue(keysField);
    const nextKeys = keys.concat("");
    this.props.setFieldsValue({
      [keysField]: nextKeys
    });
  };

  render() {
    const { label, getFieldDecorator, getFieldValue, setFieldsValue, initialValue, keysField, arrayField, lang, combines, ...rest } = this.props;

    getFieldDecorator(keysField, { initialValue: utils.getInitialValue(initialValue) });

    const tr = r => translate(r, lang);
    const languages = getFieldValue(keysField);

    const formItems =
      languages &&
      languages.map((lang, index) => (
        <Form.Item label={index === 0 ? label : ""} key={index}>
          {getFieldDecorator(`${arrayField}[${index}]`, {
            validateTrigger: ["onChange", "onBlur"],
            initialValue: utils.getInitialValue(initialValue[index]),
            rules: [
              {
                required: true,
                whitespace: true,
                message: "Please input or delete this field."
              }
            ]
          })(<VisaSelect combines={combines} style={{ width: "60%", marginRight: 8 }} />)}
          {languages.length > 0 ? <Icon className="dynamic-delete-button" type="minus-circle-o" onClick={() => this.remove(index, keysField, arrayField)} /> : null}
        </Form.Item>
      ));

    return (
      <>
        {formItems}
        <Form.Item>
          <Button type="dashed" onClick={() => this.add(keysField)} style={{ width: "60%" }}>
            <Icon type="plus" /> {tr(resources.add_another)}
          </Button>
        </Form.Item>
      </>
    );
  }
}
export default VisaSelectArray;
