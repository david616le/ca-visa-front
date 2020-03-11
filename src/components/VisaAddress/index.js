import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../utils/constants'
import VisaSelect from '../VisaSelect'
import * as utils from '../../utils'
import resources, { translate } from '../../utils/resources';

class VisaAddress extends Component {
  static defaultProps = {
    extra: "",
    label: "",
    hideCountry: false,
    us_address: true,
    hidePhone: true,
    maxTelLength: 20
  }
  render() {

    const { label, extra, initialValue, field, getFieldDecorator, maxTelLength, hideCountry, us_address, hidePhone, validators, lang, ...rest } = this.props

    const tr = (r) => translate(r, lang);

    return (
      <Form.Item label={label} extra={extra} required>
        <Form.Item extra="Street Address">
          {getFieldDecorator( field + '.street_addr1', {
            initialValue: _.get(initialValue, 'street_addr1'),
            rules: [{ validator: (rule, value, callback) => validators.validateExplain(rule, value, callback, 'Street Address (Line 1)', true) }]
          })(
            <Input maxLength={40}/>
          )}
        </Form.Item>

        <Form.Item extra="Address Line 2 (Optional)">
          {getFieldDecorator( field + '.street_addr2', {
            initialValue: _.get(initialValue, 'street_addr2'),
            rules: [{ validator: (rule, value, callback) => validators.validateExplain(rule, value, callback, 'Address Line 2', false) }]
          })(
            <Input maxLength={40}/>
          )}
        </Form.Item>

         <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra="City">
              {getFieldDecorator(field + '.city', {
                initialValue: _.get(initialValue, 'city'),
                rules: [{ validator: (rule, value, callback) => validators.validateStudyCourse(rule, value, callback, 'City', true)}],
              })(
                <Input maxLength={20}/>
              )}
            </Form.Item>
          </Col>
          {us_address ? <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra="State / Province / Region">
              {getFieldDecorator( field + '.state', {
                initialValue: _.get(initialValue, 'state'),
                rules: [{ required: true, message: tr(resources.validations.required) }],
              })(
                <VisaSelect combines={constants.export_list(constants.state)} />
              )}
            </Form.Item>
          </Col> : <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra="State / Province / Region">
              {getFieldDecorator( field + '.state', {
                initialValue: _.get(initialValue, 'state'),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateLeadingSpace(rule, value, callback, "State / Province", true) }]
              })(
                <Input maxLength={20}/>
              )}
            </Form.Item>
          </Col>}
          
        </Row>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra="ZIP / Postal Code">
              {getFieldDecorator( field + '.zip_code', {
                initialValue: _.get(initialValue, 'zip_code'),
                // rules: [{ required: true, message: tr(resources.validations.required) }],
                rules: (hideCountry || us_address) 
                  ? [{ validator: (rule, value, callback) => this.props.validators.validateUSZipCode(rule, value, callback, "ZIP Code", true) }] 
                  : [{ validator: (rule, value, callback) => this.props.validators.validateZipCode(rule, value, callback, "ZIP Code", false) }],
              })(
                <Input maxLength={10}/>
              )}
            </Form.Item>
          </Col>
          {!hidePhone &&
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Form.Item extra="Phone">
              {getFieldDecorator( field + '.tel_number', {
                initialValue: _.get(initialValue, 'tel_number'),
                rules: [{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Phone Number", true) }]
              })(
                <Input maxLength={maxTelLength}/>
              )}
            </Form.Item>
          </Col>
          }
          {!hideCountry && 
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Form.Item extra="Country">
                {getFieldDecorator( field + '.country', {
                  initialValue: _.get(initialValue, 'country'),
                  rules: [{ required: true, message: tr(resources.validations.required) }],
                })(
                  <VisaSelect combines={constants.export_list(constants.country)} />
                )}
              </Form.Item>
            </Col>
          }
        </Row>
      </Form.Item>
    );
  }
}
export default VisaAddress;
