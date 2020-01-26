import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col, Alert } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaRadio from "../../../../components/VisaRadio";
import VisaInput from "../../../../components/VisaInput";
import VisaSelectItem from "../../../../components/VisaSelectItem";
import VisaDatePicker from "../../../../components/VisaDatePicker";
import * as utils from '../../../../utils'
import VisaInputArray from "../../../../components/VisaInputArray";
import resources from '../../../../utils/resources'
import { translate } from '../../../../utils/resources'
import VisaSelect from "../../../../components/VisaSelect";
import validators from 'containers/kdmid/Validators'

const { Option } = Select;
const { TextArea } = Input;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  
  handleDates = (data) => {
    if(data.birth_date)
      data.birth_date = data.birth_date.format('DD.MM.YYYY')
    return data
  }

  travelDocumentTypeChange = value => {
    const { form: { setFieldsValue } } = this.props;

    if (['7', '8'].includes(value)) {
      setFieldsValue({ countryOfCitizenship: '200' })
    }
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

    const { showPrev, showNext, onPrev, onNext, data, lang, } = this.props

    const tr = (r) => translate(r, lang);

    getFieldDecorator('travelDocumentType', { initialValue: _.get(data, 'travelDocumentType') })
    getFieldDecorator('countryOfCitizenship', { initialValue: _.get(data, 'countryOfCitizenship') })
    getFieldDecorator('hasIsraeliNationalPassport', { initialValue: _.get(data, 'hasIsraeliNationalPassport') })

    const travelDocumentType = getFieldValue('travelDocumentType')
    const countryOfCitizenship = getFieldValue('countryOfCitizenship')

    let renderByCountryCode = ''

    switch(countryOfCitizenship) {
      case '31':
        renderByCountryCode = (
          <Alert
            message="As a Canadian citizen, you cannot apply for an eTA"
            description={
              <div>By law, Canadian citizens have the right to enter Canada.  Find out how to <a style={{ textDecoration: 'underline' }}>apply for or renew a Canadian passport.</a></div>}
            type="warning"
            showIcon
          />
        )
        break
      case '92':
        renderByCountryCode = (
          <>
            <VisaRadio
              label={tr(resources.step_prerequisite.hasIsraeliNationalPassport)}
              field="hasIsraeliNationalPassport"
              getFieldDecorator={getFieldDecorator}
            />
            {getFieldValue('hasIsraeliNationalPassport') === '0' && (
              <Row>
                <Col sm={16}>
                  <VisaSelectItem 
                    label={tr(resources.step_prerequisite.passportNotedNationality.label)}
                    extra={tr(resources.step_prerequisite.passportNotedNationality.extra)}
                    field="passportNotedNationality"
                    initialValue={_.get(data, 'passportNotedNationality')}
                    content={{
                      combines: constants.export_list(constants.passportNotedNationality)
                    }}
                    getFieldDecorator={getFieldDecorator}
                  />
                </Col>
              </Row>
            )}
          </>
        )
        break
      default:
        break
    }

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.step_prerequisite.section_title)}</h2>
        </div>

        <Row>
          <Col sm={16}>
            <VisaSelectItem 
              label={tr(resources.step_prerequisite.travelDocumentType)}
              field="travelDocumentType"
              initialValue={_.get(data, 'travelDocumentType')}
              content={{
                combines: constants.export_list(tr(constants.travelDocumentType))
              }}
              onChange={this.travelDocumentTypeChange}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>

        {['5', '6'].includes(travelDocumentType) ? (
          <Alert
            message="Based on your answers, you cannot apply for an eTA!"
            description={
              <div>You may <a style={{ textDecoration: 'underline' }}>need a visa</a> or <a style={{ textDecoration: 'underline' }}>other type of travel document</a> to travel to Canada.</div>}
            type="warning"
            showIcon
          />
        ) : (
          <>
            <Row>
              <Col sm={16}>
                <VisaSelectItem 
                  label={tr(resources.step_prerequisite.countryOfCitizenship.label)}
                  extra={tr(resources.step_prerequisite.countryOfCitizenship.extra)}
                  field="countryOfCitizenship"
                  initialValue={_.get(data, 'countryOfCitizenship')}
                  disabled={['7', '8'].includes(travelDocumentType)}
                  content={{
                    combines: constants.export_list(constants.countryOfCitizenship)
                  }}
                  getFieldDecorator={getFieldDecorator}
                />
              </Col>
            </Row>

            {renderByCountryCode}
          </>
        )}

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>{tr(resources.prev)}</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>{tr(resources.next)}</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>{tr(resources.save_and_continue_later)}</Button>
        </div>
      </Form>

    );
  }
}
const Form_Prerequisite = Form.create()(MyForm)
export default Form_Prerequisite;
