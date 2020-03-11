import React, { Component } from "react"
import { Form, Button, Row, Col, Checkbox } from 'antd'
import SignatureCanvas from 'react-signature-canvas'
import axios from 'axios'

import VisaInput from "../../../../components/VisaInput"
import VisaAddress from "../../../../components/VisaAddress"
import resources from '../../../../utils/resources'
import { translate } from '../../../../utils/resources'
import validators from 'containers/kdmid/Validators'

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg'
  if (!isJpgOrPng) {
    message.error('You can only upload JPEG file!')

    return true
  }
  const isLt2M = file.size / 1024 / 1024 < 0.24
  if (!isLt2M) {
    message.error('Image must smaller than 240KB!')

    return true
  }

  return false
}

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }

  componentDidMount = () => {
    const { signature } = this.props.data
    if (signature) { this.sigCanvas.fromDataURL(signature) }
  }
  
  handleDates = (data) => {
    return data
  }

  clearSign = () => {
    this.sigCanvas.clear()
    this.props.form.setFieldsValue({ signature: null })
  }

  handleSign = e => {
    this.props.form.setFieldsValue({ signature: this.sigCanvas.toDataURL('image/png') })
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
          <h2 className="visa-global-section-title">{tr(resources.step_consent.section_title_payment)}</h2>
          <div className="visa-global-section-description">{tr(resources.step_consent.section_descr_payment)}</div>
        </div>

        <Form.Item label={tr(resources.step_consent.payer.label)} required style={{ margin: '0px' }}>
          <Row gutter={16} style={{ margin: '0px' }}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                extra={tr(resources.step_consent.payer.surname)}
                field="payer.surname"
                initialValue={_.get(data, 'payer.surname')}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => validators.validateName(rule, value, callback, tr(resources.step_consent.payer.surname)) }]}
                lang={lang}
              />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput
                extra={tr(resources.step_consent.payer.given_name)}
                field="payer.given_name"
                initialValue={_.get(data, 'payer.given_name')}
                getFieldDecorator={getFieldDecorator}
                customRule={[{ validator: (rule, value, callback) => validators.validateName(rule, value, callback, tr(resources.step_consent.payer.given_name)) }]}
                lang={lang}
              />
            </Col>
          </Row>
        </Form.Item>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.step_consent.payer.phone)}
              field="payer.phone"
              initialValue={_.get(data, 'payer.phone')}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => validators.validateNumberSpace(rule, value, callback, tr(resources.step_consent.payer.phone), true) }]}
              lang={lang}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.step_consent.payer.passport)}
              field="payer.passport"
              initialValue={_.get(data, 'payer.passport')}
              getFieldDecorator={getFieldDecorator}
              lang={lang}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput
              label={tr(resources.step_consent.payer.email)}
              field="payer.email"
              initialValue={_.get(data, 'payer.email')}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => validators.validateEmail(rule, value, callback, 'Email Address', true) }]}
              lang={lang}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaAddress
              label={tr(resources.step_consent.payer.address)}
              field="payer.address"
              initialValue={_.get(data, 'payer.address')}
              getFieldDecorator={getFieldDecorator}
              validators={validators}
              us_address={false}
              lang={lang}
            />
          </Col>
        </Row>

        <Form.Item label={tr(resources.step_consent.b_info_confirm.label)}>
          {getFieldDecorator('b_info_confirm', {
            initialValue: _.get(data, 'b_info_confirm'),
            valuePropName: 'checked',
            rules: [{
              required: true,
              message: tr(resources.validations.required),
              transform: value => (value || undefined), // Those two lines
              type: 'boolean',
            }],
          })(
            <Checkbox>
              {tr(resources.step_consent.b_info_confirm.check)}
            </Checkbox>,
          )}
        </Form.Item>

        <Form.Item label={tr(resources.step_consent.signature)}>
          <SignatureCanvas
            penColor="black"
            canvasProps={{
              width: 500, height: 200, className: 'sigCanvas',
            }}
            onEnd={this.handleSign}
            ref={ref => { this.sigCanvas = ref }}
          />
          <Button shape="circle" icon="sync" style={{ marginLeft: '10px', paddingBottom: '2px' }} onClick={this.clearSign} />
          {
            getFieldDecorator('signature', {
              initialValue: _.get(data, 'signature'),
              rules: [{ required: true, message: tr(resources.validations.required_sign) }],
            })(
              <>
              </>,
            )
          }
        </Form.Item>

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

        <strong id="customer-ip-addr" style={{ display: 'none', marginBottom: '20px' }} />

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
