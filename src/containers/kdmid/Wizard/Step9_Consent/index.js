import React, { Component } from "react"
import { Form, Button, Row, Col, Checkbox } from 'antd'
import VisaInput from "../../../../components/VisaInput"
import resources from '../../../../utils/resources'
import { translate } from '../../../../utils/resources'
import validators from 'containers/kdmid/Validators'

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

    const { showPrev, showNext, onPrev, onNext, data, lang, } = this.props

    const tr = (r) => translate(r, lang);

    getFieldDecorator('isTravelDateKnown', { initialValue: _.get(data, 'isTravelDateKnown') })

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.step_consent.section_title)}</h2>
          {/* <div className="visa-global-section-description">{tr(resources.step_consent.section_description_1)}</div> */}
          <div className="visa-global-section-description">{tr(resources.step_consent.section_description_2)}</div>
          <div className="visa-global-section-description">{tr(resources.step_consent.section_description_3)}</div>
          <div className="visa-global-section-description">{tr(resources.step_consent.section_description_4)}</div>
        </div>

        <Form.Item label={tr(resources.step_consent.inAggreance.label)} required>
          {getFieldDecorator('inAggreance', {
            initialValue: _.get(data, 'inAggreance'),
            valuePropName: "checked",
            rules: [{
              required: true, 
              message: tr(resources.validations.required), 
              transform: value => (value || undefined),  // Those two lines
              type: 'boolean'
            }],
          })(
            <Checkbox>
              {tr(resources.step_consent.inAggreance.extra)}
            </Checkbox>
          )}
        </Form.Item>

        <Row>
          <Col sm={16}>
            <VisaInput
              label={tr(resources.step_consent.fullName.label)}
              extra={tr(resources.step_consent.fullName.extra)}
              field="fullName"
              initialValue={_.get(data, 'fullName')}
              getFieldDecorator={getFieldDecorator}
              maxLength={150}
              customRule={[{ validator: (rule, value, callback) => validators.validateName(rule, value, callback, tr(resources.step_consent.fullName.label)) }]}
            />
          </Col>
        </Row>

        <div className="visa-global-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>{tr(resources.prev)}</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>{tr(resources.next)}</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>{tr(resources.save_and_continue_later)}</Button>
        </div>
      </Form>

    );
  }
}
const Form_Consent = Form.create()(MyForm)
export default Form_Consent;
