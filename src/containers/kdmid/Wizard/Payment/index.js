import React, { Component } from "react";
import { Form, Button, Select } from "antd";
import * as utils from "utils";
import VisaInput from "components/VisaInput";
import VisaAddress from "components/VisaAddress";
import { Checkbox, Row, Col } from "antd";
import SignatureCanvas from "react-signature-canvas";
import resources, { translate } from "utils/resources";

const { Option } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true
  };
  state = {
    loading: false
  };

  clearSign = () => {
    this.sigCanvas.clear();
    this.props.form.setFieldsValue({ data: { signature: null } });
  };

  handleSign = e => {
    this.props.form.setFieldsValue({ data: { signature: this.sigCanvas.toDataURL("image/png") } });
  };

  componentDidMount = () => {
    const { signature } = this.props.data;
    if (signature) this.sigCanvas.fromDataURL(signature);
  };

  render() {
    const { getFieldDecorator, isFieldTouched } = this.props.form;
    const formItemLayout = {
      layout: "vertical",
      labelCol: {
        xs: { span: 24 }
      },
      wrapperCol: {
        sm: { span: 24 },
        md: { span: 24 }
      }
    };

    const { showPrev, showNext, data, lang } = this.props;

    const tr = r => translate(r, lang);

    if (!data.payer.address)
      data.payer.address = {
        street_addr1: null,
        street_addr2: null,
        city: null,
        state: null,
        zip_code: null,
        country: null
      };

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.payment.section_title)}</h2>
        </div>

        <Form.Item label={tr(resources.payment.payer_name.label)} extra={tr(resources.payment.payer_name.extra)} required>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput extra="First" field="data.payer.surname" initialValue={data.payer.surname} getFieldDecorator={getFieldDecorator} customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "First Name") }]} />
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <VisaInput extra="Last" field="data.payer.given_name" initialValue={data.payer.given_name} getFieldDecorator={getFieldDecorator} customRule={[{ validator: (rule, value, callback) => this.props.validators.validateName(rule, value, callback, "Last Name") }]} />
            </Col>
          </Row>
        </Form.Item>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput label="Payer Phone Number" field="data.payer.phone" initialValue={data.payer.phone} getFieldDecorator={getFieldDecorator} customRule={[{ validator: (rule, value, callback) => this.props.validators.validateNumber(rule, value, callback, "Phone Number", true) }]} />
            <VisaInput label="Payer's Passport Number" field="data.payer.passport" initialValue={data.payer.passport} getFieldDecorator={getFieldDecorator} />
            <VisaInput label="Payer's Email" field="data.payer.email" initialValue={data.payer.email} getFieldDecorator={getFieldDecorator} customRule={[{ validator: (rule, value, callback) => this.props.validators.validateEmail(rule, value, callback, "Email Address", true) }]} />
            <VisaAddress label="Address" field="data.payer.address" initialValue={data.payer.address} getFieldDecorator={getFieldDecorator} validators={this.props.validators} us_address={false} />
          </Col>
        </Row>

        <Form.Item label="Information Confirmation">
          {getFieldDecorator("data.b_info_confirm", {
            initialValue: utils.getInitialValue(data.b_info_confirm),
            valuePropName: "checked",
            rules: [
              {
                required: true,
                message: tr(resources.validations.required),
                transform: value => value || undefined, // Those two lines
                type: "boolean"
              }
            ]
          })(
            <Checkbox>
              I confirm that the information provided on this form is correct and accurate to the best of my knowledge. I have read and agreed with the Disclaimer, the Terms and Conditions and the Refund Policy. I understand that this transaction is Non-Refundable. This site is not a US Government entity and is in no way associated with any US
              Embassy or Consulate and if a cardholder attempts to falsely report that a transaction was fraudulent and requests a chargeback of an application fee, the Embassy will be informed and it may result in cancellation of any visas already scheduled. Your submission of credit card information, or any kind of payment card information,
              constitutes your authorization for our agency to charge your card for the services ordered and for any related fees or expenses. You further agree to abide by the terms of your card issuer’s agreement. This applies to any fee charged, incurred or paid by our agency for or in any way relating to publication requirements for any
              document we prepare and/or file at your request whether the filing is ultimately accepted or not.
            </Checkbox>
          )}
        </Form.Item>

        <Form.Item label="Signature">
          <SignatureCanvas
            penColor="black"
            canvasProps={{
              width: 500,
              height: 200,
              className: "sigCanvas"
            }}
            onEnd={this.handleSign}
            ref={ref => {
              this.sigCanvas = ref;
            }}
          />
          <Button shape="circle" icon="sync" style={{ marginLeft: "10px", paddingBottom: "2px" }} onClick={this.clearSign} />
          {getFieldDecorator("data.signature", {
            initialValue: utils.getInitialValue(data.signature),
            rules: [{ required: true, message: "Please sign" }]
          })(<></>)}
        </Form.Item>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput label="E-Signature of Applicant" extra="Enter your full name as a digital signature." field="data.fullname_sign" initialValue={data.fullname_sign} getFieldDecorator={getFieldDecorator} />
          </Col>
        </Row>

        <Form.Item label="Digital Signature Acknowledgment">
          {getFieldDecorator("data.b_certify", {
            initialValue: utils.getInitialValue(data.b_certify),
            valuePropName: "checked",
            rules: [
              {
                required: true,
                message: tr(resources.validations.required),
                transform: value => value || undefined, // Those two lines
                type: "boolean"
              }
            ]
          })(<Checkbox>I certify under penalty of perjury under the laws of the United States of America that the foregoing is true and correct. I acknowledge and approve that entering my name in the signature field legally replace my physical signature.</Checkbox>)}
        </Form.Item>

        <div className="visa-form-bottom-btn-group">
          {showPrev && (
            <Button style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>
              {tr(resources.prev)}
            </Button>
          )}
          {showNext && (
            <Button type="primary" onClick={e => this.props.handleNext(e, this.props.form, this.handleDates)}>
              {tr(resources.next)}
            </Button>
          )}
          <Button type="link" onClick={e => this.props.handleSave(e, this.props.form, this.handleDates)}>
            {tr(resources.save_and_continue_later)}
          </Button>
        </div>
      </Form>
    );
  }
}
const Form_Payment = Form.create()(MyForm);
export default Form_Payment;
