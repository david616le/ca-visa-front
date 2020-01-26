import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Icon, Row, Col, DatePicker } from 'antd';
import * as utils from '../../utils'
import * as constants from '../../utils/constants'
import VisaInput from "../VisaInput";
import VisaSelectItem from '../VisaSelectItem';
import VisaDatePicker from '../VisaDatePicker';
import resources, { translate } from '../../utils/resources';

class VisaRelatives extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    required: true,
  }

  remove = (k, keysField, dataField) => {
    let keys = this.props.getFieldValue(keysField);
    let data = this.props.getFieldValue(dataField)
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

  add = (keysField) => {
    const keys = this.props.getFieldValue(keysField);
    const nextKeys = keys.concat({
      surname: null,
      firstname: null,
      degree: null,
      birth_date: null,
      address: null
    });
    this.props.setFieldsValue({
      [keysField]: nextKeys,
    });
  };

  render() {

    const { label, getFieldDecorator, getFieldValue, setFieldsValue, initialValue, keysField, validators, martial_status, arrayField, extra, lang, ...rest } = this.props

    getFieldDecorator(keysField, { initialValue: utils.getInitialValue(initialValue) });

    const tr = (r) => translate(r, lang);
    const people = getFieldValue(keysField);

    const formItems = people.map((person, index) => (
      <Form.Item
        label={index === 0 ? label : ''}
        key={index}
        style={{ borderBottom: `1px dashed black`}}
        required
      >
        <Row gutter={16} >
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
            <VisaSelectItem 
              label={tr(resources.relatives.relatives.degree)}
              field={`${arrayField}[${index}].degree`}
              initialValue={initialValue[index] ? initialValue[index].degree : null}
              content={{ combines: constants.export_list(tr(constants.new_kdmid_relation_degree_list)) }}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
            <VisaInput
              label={tr(resources.relatives.relatives.surname)}
              field={`${arrayField}[${index}].surname`}
              initialValue={initialValue[index] ? initialValue[index].surname : null}
              maxLength={30}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 16 }}>
            <VisaInput
              label={tr(resources.relatives.relatives.firstname)}
              field={`${arrayField}[${index}].firstname`}
              initialValue={initialValue[index] ? initialValue[index].firstname : null}
              getFieldDecorator={getFieldDecorator}
              maxLength={60}
              required={false}
            />
          </Col>
          
        </Row>
        <Row>
          <Col xs={{ span: 20 }} md={{ span: 20 }} lg={{ span: 10 }}>
            <VisaDatePicker 
              label={tr(resources.relatives.relatives.birth_date)}
              field={`${arrayField}[${index}].birth_date`}
              initialValue={initialValue[index] ? initialValue[index].birth_date : null}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEarlierDate(rule, value, callback, 'Date of birth', true) }]}

              setFieldsValue={setFieldsValue}
              getFieldValue={getFieldValue}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 18 }} md={{ span: 18 }} lg={{ span: 16 }}>
            <VisaInput
              label={tr(resources.relatives.relatives.address)}
              field={`${arrayField}[${index}].address`}
              initialValue={initialValue[index] ? initialValue[index].address : null}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
          {people.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              style={{ fontSize: '24px', marginTop: '40px', marginLeft: '10px' }}
              onClick={() => this.remove(index, keysField, arrayField)}
            />
          ) : null}
        </Row>
        
      </Form.Item>
    ));

    return (
      <>
        {formItems}
        {(people.length < 5) && <Form.Item>
          <Button type="dashed" onClick={() => this.add(keysField)} style={{ width: '60%' }}>
            <Icon type="plus" /> {tr(resources.add_another)}
          </Button>
        </Form.Item>}
      </>
    );
  }
}

export default VisaRelatives;
