import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Icon, Row, Col, DatePicker } from "antd";
import * as utils from "../../utils";
import * as constants from "../../utils/constants";
import resources, { translate } from "../../utils/resources";
import VisaInput from "../VisaInput";
import VisaSelectItem from "../VisaSelectItem";
import VisaDatePicker from "../VisaDatePicker";
class VisaStays extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    required: true
  };

  remove = (k, keysField, dataField) => {
    let keys = this.props.getFieldValue(keysField);
    let data = this.props.getFieldValue(dataField);
    if (keys.length === 1) {
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
    const nextKeys = keys.concat({
      code: null,
      name: null,
      address: null,
      phone: null,
      fax: null,
      email: null
    });
    this.props.setFieldsValue({
      [keysField]: nextKeys
    });
  };

  render() {
    const { label, getFieldDecorator, getFieldValue, setFieldsValue, initialValue, keysField, validators, arrayField, extra, lang, ...rest } = this.props;

    getFieldDecorator(keysField, { initialValue: utils.getInitialValue(initialValue) });

    const items = getFieldValue(keysField);

    const tr = r => translate(r, lang);

    const formItems = items.map((person, index) => {
      getFieldDecorator(`${arrayField}[${index}].code`, { initialValue: initialValue[index] && initialValue[index].code ? initialValue[index].code : undefined });
      let code = getFieldValue(`${arrayField}[${index}].code`);
      if (code == undefined || code == null) code = "0";
      return (
        <Form.Item label={index === 0 ? label : ""} extra={index == items.length - 1 ? extra : ""} key={index} style={{ borderBottom: `1px dashed black` }} required={index == 0 ? true : false}>
          <VisaSelectItem label={tr(resources.visit.stays.code)} field={`${arrayField}[${index}].code`} initialValue={initialValue[index] ? initialValue[index].code : null} content={{ combines: constants.export_list(tr(constants.new_kdmid_accommodation_type_list)) }} getFieldDecorator={getFieldDecorator} />
          <VisaInput
            label={tr(resources.visit.stays[code].name)}
            field={`${arrayField}[${index}].name`}
            initialValue={initialValue[index] ? initialValue[index].name : null}
            getFieldDecorator={getFieldDecorator}
            customRule={[{ validator: (rule, value, callback) => this.props.validators.validateCyrillic(rule, value, callback, tr(resources.visit.stays[code].name), true) }]}
          />
          <VisaInput
            label={tr(resources.visit.stays[code].address)}
            field={`${arrayField}[${index}].address`}
            initialValue={initialValue[index] ? initialValue[index].address : null}
            getFieldDecorator={getFieldDecorator}
            customRule={[{ validator: (rule, value, callback) => this.props.validators.validateCyrillic(rule, value, callback, tr(resources.visit.stays[code].name), true) }]}
          />
          <VisaInput
            label={tr(resources.visit.stays[code].phone)}
            field={`${arrayField}[${index}].phone`}
            initialValue={initialValue[index] ? initialValue[index].phone : null}
            getFieldDecorator={getFieldDecorator}
            customRule={[{ validator: (rule, value, callback) => this.props.validators.validateTelNumber(rule, value, callback, tr(resources.visit.stays[code].phone), true) }]}
          />
          <VisaInput
            label={tr(resources.visit.stays[code].fax)}
            field={`${arrayField}[${index}].fax`}
            initialValue={initialValue[index] ? initialValue[index].fax : null}
            getFieldDecorator={getFieldDecorator}
            customRule={[{ validator: (rule, value, callback) => this.props.validators.validateTelNumber(rule, value, callback, tr(resources.visit.stays[code].phone), false) }]}
            required={false}
          />

          <Row>
            <Col xs={{ span: 20 }} md={{ span: 20 }} lg={{ span: 20 }}>
              <VisaInput label={tr(resources.visit.stays[code].email)} field={`${arrayField}[${index}].email`} initialValue={initialValue[index] ? initialValue[index].email : null} getFieldDecorator={getFieldDecorator} type="email" customRule={[{ type: "email", message: "Please input valid email address" }]} required={false} />
            </Col>
            {items.length > 1 ? <Icon className="dynamic-delete-button" type="minus-circle-o" style={{ fontSize: "24px", marginTop: "40px", marginLeft: "10px" }} onClick={() => this.remove(index, keysField, arrayField)} /> : null}
          </Row>
        </Form.Item>
      );
    });

    return (
      <>
        {formItems}
        {items.length < 10 && (
          <Form.Item>
            <Button type="dashed" onClick={() => this.add(keysField)} style={{ width: "60%" }}>
              <Icon type="plus" /> {tr(resources.add_another)}
            </Button>
          </Form.Item>
        )}
      </>
    );
  }
}

export default VisaStays;
