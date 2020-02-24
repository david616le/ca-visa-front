import React, { Component } from "react";
import { Form, Button, Alert, Row, Col } from "antd";
import * as constants from "../../../../utils/constants";
import VisaInput from "../../../../components/VisaInput";
import VisaSelectItem from "../../../../components/VisaSelectItem";
import resources from "../../../../utils/resources";
import { translate } from "../../../../utils/resources";
import validators from "containers/kdmid/Validators";

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true
  };

  handleDates = data => {
    return data;
  };

  render() {
    const { getFieldDecorator, isFieldTouched, setFieldsValue, getFieldValue } = this.props.form;
    const formItemLayout = {
      layout: "vertical",
      labelCol: {
        xs: { span: 24 }
      },
      wrapperCol: {
        sm: { span: 24 }
      }
    };

    const { showPrev, showNext, onPrev, onNext, data, lang } = this.props;

    const tr = r => translate(r, lang);

    getFieldDecorator("passportNumber", { initialValue: _.get(data, "passportNumber") });
    getFieldDecorator("hasPreviouslyAppliedToCanada", { initialValue: _.get(data, "hasPreviouslyAppliedToCanada") });
    getFieldDecorator("country", { initialValue: _.get(data, "country") });

    const passportNumber = getFieldValue("passportNumber");
    const hasPreviouslyAppliedToCanada = getFieldValue("hasPreviouslyAppliedToCanada");
    const country = getFieldValue("country");

    let bNext = true;

    if (country === "37") bNext = false;

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.step_contact.section_title)}</h2>
        </div>

        <Row>
          <Col sm={12}>
            <VisaSelectItem
              label={tr(resources.step_contact.languageOfPreference)}
              field="languageOfPreference"
              initialValue={_.get(data, "languageOfPreference")}
              content={{
                combines: constants.export_list(tr(constants.languageOfPreference))
              }}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <VisaInput
              label={tr(resources.step_contact.emailAddress.label)}
              extra={tr(resources.step_contact.emailAddress.extra)}
              field="emailAddress"
              initialValue={_.get(data, "emailAddress")}
              getFieldDecorator={getFieldDecorator}
              maxLength={100}
              customRule={[{ validator: (rule, value, callback) => validators.validateEmail(rule, value, callback, tr(resources.step_contact.emailAddress), true) }]}
            />
          </Col>
          <Col sm={12}>
            <VisaInput
              label={tr(resources.step_contact.emailAddressReEnter.label)}
              extra={tr(resources.step_contact.emailAddressReEnter.extra)}
              field="emailAddressReEnter"
              initialValue={_.get(data, "emailAddressReEnter")}
              getFieldDecorator={getFieldDecorator}
              maxLength={100}
              customRule={[{ validator: (rule, value, callback) => validators.validateReEnter(rule, value, callback, getFieldValue("emailAddress"), "Values must match", false) }]}
            />
          </Col>
        </Row>

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.step_residential.section_title)}</h2>
          <div className="visa-global-section-description">{tr(resources.step_residential.section_description)}</div>
        </div>

        <Row>
          <Col sm={12}>
            <VisaInput label={tr(resources.step_residential.aptUnit)} field="aptUnit" initialValue={_.get(data, "aptUnit")} getFieldDecorator={getFieldDecorator} maxLength={10} required={false} />
          </Col>
          <Col sm={12}>
            <VisaInput label={tr(resources.step_residential.streetNo)} field="streetNo" initialValue={_.get(data, "streetNo")} getFieldDecorator={getFieldDecorator} maxLength={30} customRule={[{ validator: validators.validateAlphaNumericSpace }]}/>
          </Col>
          <Col sm={12}>
            <VisaInput label={tr(resources.step_residential.streetAddress)} field="streetAddress" initialValue={_.get(data, "streetAddress")} getFieldDecorator={getFieldDecorator} maxLength={100} customRule={[{ validator: validators.validateAlphaNumericPunctuation }]} />
          </Col>
          <Col sm={12}>
            <VisaInput
              label={tr(resources.step_residential.streetAddressAlt)}
              field="streetAddressAlt"
              initialValue={_.get(data, "streetAddressAlt")}
              getFieldDecorator={getFieldDecorator}
              maxLength={100}
              required={false}
              customRule={[{ validator: (rule, value, callback) => validators.validateAlphaNumericPunctuation(rule, value, callback, tr(resources.step_residential.streetAddressAlt), false) }]}
            />
          </Col>
          <Col sm={12}>
            <VisaInput label={tr(resources.step_residential.city)} field="city" initialValue={_.get(data, "city")} getFieldDecorator={getFieldDecorator} maxLength={50} customRule={[{ validator: (rule, value, callback) => validators.validateAlphaNumericPunctuation(rule, value, callback, tr(resources.step_residential.city)) }]} />
          </Col>
          <Col sm={12}>
            <VisaSelectItem
              label={tr(resources.step_residential.country)}
              field="country"
              initialValue={_.get(data, "country")}
              content={{
                combines: constants.export_list(constants.country, true)
              }}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
          {country === "223" && (
            <>
              <Col sm={12}>
                <VisaSelectItem
                  label={tr(resources.step_residential.state)}
                  field="state"
                  initialValue={_.get(data, "state")}
                  content={{
                    combines: constants.export_list(constants.state)
                  }}
                  getFieldDecorator={getFieldDecorator}
                />
              </Col>
              <Col sm={12}>
                <VisaInput label={tr(resources.step_residential.zipCode)} field="zipCode" initialValue={_.get(data, "zipCode")} getFieldDecorator={getFieldDecorator} maxLength={10} customRule={[{ validator: validators.validateUSZipCode }]} />
              </Col>
            </>
          )}
          {country && country !== "223" && country !== "37" && (
            <Col sm={12}>
              <VisaInput
                label={tr(resources.step_residential.district)}
                field="district"
                initialValue={_.get(data, "district")}
                getFieldDecorator={getFieldDecorator}
                maxLength={50}
                required={false}
                customRule={[{ validator: (rule, value, callback) => validators.validateAlphaNumericPunctuation(rule, value, callback, tr(resources.step_residential.district), false) }]}
              />
            </Col>
          )}
        </Row>

        {country === "37" && (
          <Alert
            message="You indicate that you live in Canada. If you are a Canadian permanent resident, you cannot apply for an eTA."
            description={<div>You must present your valid PR card or permanent resident travel document (PRTD) to board your flight to Canada. Find out how to apply for, renew or replace a PR Card.</div>}
            type="warning"
            showIcon
          />
        )}

        <div className="visa-global-form-bottom-btn-group">
          {showPrev && (
            <Button style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>
              {tr(resources.prev)}
            </Button>
          )}
          {bNext && showNext && (
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
const Form_Contact = Form.create()(MyForm);
export default Form_Contact;
