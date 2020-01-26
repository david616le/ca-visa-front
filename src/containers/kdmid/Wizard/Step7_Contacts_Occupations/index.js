import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import VisaRadio from "../../../../components/VisaRadio";
import VisaInput from "../../../../components/VisaInput";
import * as utils from '../../../../utils'
import resources, { translate } from '../../../../utils/resources'

const { Option } = Select;
const { TextArea } = Input;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  
  handleDates = (data) => {
    return data
  }

  render() {
    const { getFieldDecorator, isFieldTouched, setFieldsValue, getFieldValue } = this.props.form;
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    };

    const { showPrev, showNext, onPrev, onNext, data, date_birth, lang } = this.props

    getFieldDecorator('data.b_resident', { initialValue: utils.getInitialValue(data.b_resident) })
    getFieldDecorator('data.b_occupation', { initialValue: utils.getInitialValue(data.b_occupation) })

    const tr = (r) => translate(r, lang);

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.contacts_occupations.section_title)}</h2>
        </div>

        <VisaRadio
          label={tr(resources.contacts_occupations.b_resident.label)}
          extra={tr(resources.contacts_occupations.b_resident.extra)}
          field="data.b_resident"
          initialValue={data.b_resident}
          getFieldDecorator={getFieldDecorator}
          combines={[
            { value: 'yes', label: tr(resources.yes) },
            { value: 'I do not have a permanent residential address', label: tr(resources.contacts_occupations.b_resident.options.not) }
          ]}
        />

        {getFieldValue('data.b_resident') == 'yes' && 
          <>
            <Row gutter={16} style={{ paddingLeft: '10px'}}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput 
                  label={tr(resources.contacts_occupations.resident.address)}
                  field="data.resident.address"
                  initialValue={data.resident.address}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateCyrillic(rule, value, callback, "Your permanent address", true) }]} 
                />
              </Col>
            </Row>
            <Row gutter={16} style={{ paddingLeft: '10px'}}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput 
                  label={tr(resources.contacts_occupations.resident.phone)}
                  field="data.resident.phone"
                  initialValue={data.resident.phone}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateTelNumber(rule, value, callback, 'Your phone number', false, 20) }]}
                  maxLength={20}
                  required={false}
                />
              </Col>
            </Row>
            <Row gutter={16} style={{ paddingLeft: '10px'}}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput 
                  label={tr(resources.contacts_occupations.resident.fax)}
                  field="data.resident.fax"
                  initialValue={data.resident.fax}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateTelNumber(rule, value, callback, 'Your fax', false, 20) }]}
                  maxLength={20}
                  required={false}
                />
              </Col>
            </Row>
          </>
        }

        <VisaRadio
          label={tr(resources.contacts_occupations.b_occupation.label)}
          extra={tr(resources.contacts_occupations.b_occupation.extra)}
          field="data.b_occupation"
          initialValue={data.b_occupation}
          getFieldDecorator={getFieldDecorator}
          combines={[
            { value: "yes", label: tr(resources.yes) }, 
            { value: "I do not work and I do not study in the present time", label: tr(resources.contacts_occupations.b_occupation.options.not) }
          ]}
        />

        {getFieldValue('data.b_occupation') == 'yes' && 
          <>
            <Row gutter={16} style={{ paddingLeft: '10px'}}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput 
                  label={tr(resources.contacts_occupations.occupation.name)}
                  field="data.occupation.name"
                  initialValue={data.occupation.name}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateCyrillic(rule, value, callback, "Name of employer", true) }]} 
                />
              </Col>
            </Row>
            <Row gutter={16} style={{ paddingLeft: '10px'}}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput 
                  label={tr(resources.contacts_occupations.occupation.position)}
                  field="data.occupation.position"
                  initialValue={data.occupation.position}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateCyrillic(rule, value, callback, "Work position", true) }]} 
                />
              </Col>
            </Row>
            <Row gutter={16} style={{ paddingLeft: '10px'}}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput 
                  label={tr(resources.contacts_occupations.occupation.address)}
                  field="data.occupation.address"
                  initialValue={data.occupation.address}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateCyrillic(rule, value, callback, "Employer address", true) }]} 
                />
              </Col>
            </Row>
            <Row gutter={16} style={{ paddingLeft: '10px'}}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput 
                  label={tr(resources.contacts_occupations.occupation.phone)}
                  field="data.occupation.phone"
                  initialValue={data.occupation.phone}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateTelNumber(rule, value, callback, 'Work telephone', true, 20) }]}
                  maxLength={20}
                />
              </Col>
            </Row>
            <Row gutter={16} style={{ paddingLeft: '10px'}}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput 
                  label={tr(resources.contacts_occupations.occupation.fax)}
                  field="data.occupation.fax"
                  initialValue={data.occupation.fax}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateTelNumber(rule, value, callback, 'Your fax', false, 20) }]}
                  maxLength={20}
                  required={false}
                />
              </Col>
            </Row>
            <Row gutter={16} style={{ paddingLeft: '10px'}}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput 
                  label={tr(resources.contacts_occupations.occupation.email)}
                  field="data.occupation.email"
                  initialValue={data.occupation.email}
                  getFieldDecorator={getFieldDecorator}
                  type="email"
                  customRule={[{ type: 'email', message: 'Please input valid email address' }]}
                  
                  required={false}
                />
              </Col>
            </Row>
          </>
        }

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>{tr(resources.prev)}</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>{tr(resources.next)}</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>{tr(resources.save_and_continue_later)}</Button>
        </div>
      </Form>

    );
  }
}
const Form_Contacts_Occupations = Form.create()(MyForm)
export default Form_Contacts_Occupations;
