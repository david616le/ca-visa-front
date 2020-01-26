import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaRadio from "../../../../components/VisaRadio";
import VisaInput from "../../../../components/VisaInput";
import VisaSelectItem from "../../../../components/VisaSelectItem";
import VisaDatePicker from "../../../../components/VisaDatePicker";
import * as utils from '../../../../utils'
import resources, { translate } from '../../../../utils/resources'
import VisaStays from "../../../../components/VisaStays";
import moment from 'moment'
const { Option, OptGroup } = Select;
const { TextArea } = Input;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  
  handleDates = (data) => {
    console.log('handleDate')
    if(data.entry_date)
      data.entry_date = data.entry_date.format('DD.MM.YYYY')
    if(data.visite_russia_info && data.visite_russia_info.date_to)
       data.visite_russia_info.date_to = data.visite_russia_info.date_to.format('DD.MM.YYYY')
    if(data.visite_russia_info && data.visite_russia_info.date_from)
      data.visite_russia_info.date_from = data.visite_russia_info.date_from.format('DD.MM.YYYY')
      console.log('handleDate end')
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

    const { showPrev, showNext, onPrev, onNext, data, date_birth, lang, citizenCode } = this.props

    getFieldDecorator('data.b_visited_russia', { initialValue: utils.getInitialValue(data.b_visited_russia) })
    
    const tr = (r) => translate(r, lang);

    let visitAreaType = constants.new_kdmid_visitArea_list['default']
    if(constants.new_kdmid_visitArea_list[citizenCode])
      visitAreaType = constants.new_kdmid_visitArea_list[citizenCode]

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.visit.section_title)}</h2>
        </div>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaSelectItem 
              label={tr(resources.visit.visakind.label)}
              extra={tr(resources.visit.visakind.extra)}
              field="data.visakind"
              initialValue={data.visakind}
              content={{
                combines: constants.export_list(tr(constants.new_kdmid_purpose_of_visit_list))
              }}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item label={tr(resources.visit.visitArea.label)} extra={tr(resources.visitArea.extra)}>
              {getFieldDecorator('data.visitArea', {
                initialValue: utils.getInitialValue(data.visitArea),
                rules: [{ required: true, message: tr(resources.validations.required) }],
              })(
                <Select placeholder="Choose area..." showSearch optionFilterProp="children">
                  {citizenCode && constants.export_opt_list(constants.new_kdmid_visitArea_list_types[visitAreaType]).map((optgroup, index) => {
                    return <OptGroup label={optgroup.label} key={index}>
                      {
                        optgroup.options.length ? 
                          optgroup.options.map((option, option_index) => <Option value={option.props.value} key={option_index}>{option.props.children}</Option>) : 
                          <Option value={optgroup.options.props.value} key="0">{optgroup.options.props.children}</Option>
                      }
                    </OptGroup>
                  })}
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaDatePicker 
              label={tr(resources.visit.entry_date.label)}
              extra={tr(resources.visit.entry_date.extra)}
              field="data.entry_date"
              initialValue={data.entry_date}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateBetweenDate(rule, value, callback, 'Entry date', moment(new Date(), 'DD.MM.YYYY').add(5, 'days'), true, moment(new Date(), 'DD.MM.YYYY').add(20, 'days')) }]}

              setFieldsValue={setFieldsValue}
              getFieldValue={getFieldValue}
            />
          </Col>
        </Row>

        <VisaStays
          label={tr(resources.visit.stays.label)}
          extra={tr(resources.visit.stays.extra)}
          getFieldDecorator={getFieldDecorator}
          getFieldValue={getFieldValue}
          setFieldsValue={setFieldsValue}
          initialValue={data.stays}
          arrayField="data.stays"
          keysField="copy.stays"
          lang={lang}
          validators={this.props.validators}
        />

        <VisaRadio
          label={tr(resources.visit.b_visited_russia.label)}
          extra={tr(resources.visit.b_visited_russia.extra)}
          field="data.b_visited_russia"
          initialValue={data.b_visited_russia}
          getFieldDecorator={getFieldDecorator}
          combines={[
            { value: 'yes', label: tr(resources.yes) }, 
            { value: 'I never visited Russia', label: tr(resources.visit.b_visited_russia.options.never) }
          ]}
        />

        {
          getFieldValue('data.b_visited_russia') == 'yes' && 
          <>
            <Row gutter={16} style={{ paddingLeft: '10px'}}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaInput 
                  label={tr(resources.visit.visite_russia_info.amount)}
                  field="data.visite_russia_info.amount"
                  initialValue={data.visite_russia_info.amount}
                  getFieldDecorator={getFieldDecorator}
                  maxLength={3}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, 'Visit Times', true, 3) }]}
                />
              </Col>
            </Row>
            <Row gutter={16} style={{ paddingLeft: '10px'}}>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaDatePicker 
                  label={tr(resources.visit.visite_russia_info.date_from)}
                  field="data.visite_russia_info.date_from"
                  initialValue={data.visite_russia_info.date_from}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateBetweenDate(rule, value, callback, 'From Date', moment(date_birth, 'DD.MM.YYYY')) }]}

                  setFieldsValue={setFieldsValue}
                  getFieldValue={getFieldValue}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }}>
                <VisaDatePicker 
                  label={tr(resources.visit.visite_russia_info.date_to)}
                  field="data.visite_russia_info.date_to"
                  initialValue={data.visite_russia_info.date_to}
                  getFieldDecorator={getFieldDecorator}
                  customRule={[{ validator: (rule, value, callback) => this.props.validators.validateBetweenDate(rule, value, callback, 'To Date', getFieldValue('data.visite_russia_info.date_from')) }]}

                  setFieldsValue={setFieldsValue}
                  getFieldValue={getFieldValue}
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
const Form_Visit = Form.create()(MyForm)
export default Form_Visit;
