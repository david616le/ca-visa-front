import React, { Component } from "react";
import { Form, Button, Row, Col } from "antd";
import * as constants from "../../../../utils/constants";
import VisaRadio from "../../../../components/VisaRadio";
import VisaInput from "../../../../components/VisaInput";
import VisaSelectItem from "../../../../components/VisaSelectItem";
import VisaDatePicker from "../../../../components/VisaDatePicker";
import resources from "../../../../utils/resources";
import { translate } from "../../../../utils/resources";
import VisaSelectArray from "../../../../components/VisaSelectArray";
import validators from "containers/kdmid/Validators";
import moment from "moment";

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true
  };

  handleDates = data => {
    if (data.dob) data.dob = data.dob.format("DD.MM.YYYY");
    if (data.issueDate) data.issueDate = data.issueDate.format("DD.MM.YYYY");
    if (data.expiryDate) data.expiryDate = data.expiryDate.format("DD.MM.YYYY");
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

    const { showPrev, showNext, onPrev, onNext, data, lang, age, isApplyingOnBehalfOfMinorChild } = this.props;

    const tr = r => translate(r, lang);

    getFieldDecorator("passportNumber", {
      initialValue: _.get(data, "passportNumber")
    });
    getFieldDecorator("hasPreviouslyAppliedToCanada", {
      initialValue: _.get(data, "hasPreviouslyAppliedToCanada")
    });

    const passportNumber = getFieldValue("passportNumber");
    const hasPreviouslyAppliedToCanada = getFieldValue("hasPreviouslyAppliedToCanada");

    console.log(moment(new Date(), "DD.MM.YYYY").add(18, "years"));

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.step_passport.section_title)}</h2>
        </div>

        <Row>
          <Col sm={12}>
            <VisaInput label={tr(resources.step_passport.passportNumber.label)} extra={tr(resources.step_passport.passportNumber.extra)} field="passportNumber" initialValue={_.get(data, "passportNumber")} getFieldDecorator={getFieldDecorator} maxLength={12} customRule={[{ validator: validators.validatePassportNumber }]} />
          </Col>
          <Col sm={12}>
            <VisaInput
              label={tr(resources.step_passport.passportNumberReEnter.label)}
              extra={tr(resources.step_passport.passportNumberReEnter.extra)}
              field="passportNumberReEnter"
              initialValue={_.get(data, "passportNumberReEnter")}
              getFieldDecorator={getFieldDecorator}
              maxLength={12}
              customRule={[
                {
                  validator: (rule, value, callback) => validators.validatePassportNumberReEnter(rule, value, callback, passportNumber)
                }
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <VisaInput
              label={tr(resources.step_passport.lastName.label)}
              extra={tr(resources.step_passport.lastName.extra)}
              field="lastName"
              initialValue={_.get(data, "lastName")}
              getFieldDecorator={getFieldDecorator}
              maxLength={50}
              customRule={[
                {
                  validator: (rule, value, callback) => validators.validateName(rule, value, callback, tr(resources.step_passport.lastName.label))
                }
              ]}
            />
          </Col>
          <Col sm={12}>
            <VisaInput
              label={tr(resources.step_passport.firstName.label)}
              extra={tr(resources.step_passport.firstName.extra)}
              field="firstName"
              initialValue={_.get(data, "firstName")}
              getFieldDecorator={getFieldDecorator}
              maxLength={50}
              customRule={[
                {
                  validator: (rule, value, callback) => validators.validateName(rule, value, callback, tr(resources.step_passport.firstName.label))
                }
              ]}
            />
          </Col>
          <Col sm={12}>
            <VisaDatePicker
              label={tr(resources.step_passport.dob)}
              field="dob"
              initialValue={_.get(data, "dob")}
              getFieldDecorator={getFieldDecorator}
              customRule={[
                {
                  validator: isApplyingOnBehalfOfMinorChild === "0" ? (rule, value, callback) => validators.validateBetweenDate(rule, value, callback, tr(resources.step_passport.dob), moment(new Date(), "DD.MM.YYYY").add(-18, "years"), true) : validators.validateEarlierDate
                }
              ]}
              setFieldsValue={setFieldsValue}
              getFieldValue={getFieldValue}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <VisaSelectItem
              label={tr(resources.step_passport.gender)}
              field="gender"
              initialValue={_.get(data, "gender")}
              content={{
                combines: constants.export_list(tr(constants.gender))
              }}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
          <Col sm={12}>
            <VisaSelectItem
              label={tr(resources.step_passport.countryOfBirth)}
              field="countryOfBirth"
              initialValue={_.get(data, "countryOfBirth")}
              content={{
                combines: constants.export_list(constants.countryOfBirth, true)
              }}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
          <Col sm={12}>
            <VisaInput
              label={tr(resources.step_passport.cityTownOfBirth)}
              field="cityTownOfBirth"
              initialValue={_.get(data, "cityTownOfBirth")}
              getFieldDecorator={getFieldDecorator}
              maxLength={50}
              customRule={[
                {
                  validator: (rule, value, callback) => validators.validateAlphaNumericPunctuation(rule, value, callback, tr(resources.step_passport.cityTownOfBirth))
                }
              ]}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <VisaDatePicker label={tr(resources.step_passport.issueDate)} field="issueDate" initialValue={_.get(data, "issueDate")} getFieldDecorator={getFieldDecorator} customRule={[{ validator: validators.validateEarlierDate }]} setFieldsValue={setFieldsValue} getFieldValue={getFieldValue} />
          </Col>
          <Col sm={12}>
            <VisaDatePicker label={tr(resources.step_passport.expiryDate)} field="expiryDate" initialValue={_.get(data, "expiryDate")} getFieldDecorator={getFieldDecorator} customRule={[{ validator: validators.validateLaterDate }]} setFieldsValue={setFieldsValue} getFieldValue={getFieldValue} />
          </Col>
        </Row>

        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.step_personal.section_title)}</h2>
        </div>

        <VisaSelectArray
          label={tr(resources.step_personal.additionalCitizenships)}
          getFieldDecorator={getFieldDecorator}
          getFieldValue={getFieldValue}
          setFieldsValue={setFieldsValue}
          initialValue={_.get(data, "additionalCitizenships")}
          arrayField="additionalCitizenships"
          keysField="copy.additionalCitizenships"
          combines={constants.export_list(constants.additionalCitizenships, true)}
          tr={tr}
        />

        {age >= 18 && (
          <Row>
            <Col sm={12}>
              <VisaSelectItem
                label={tr(resources.step_passport.maritalStatus)}
                field="maritalStatus"
                initialValue={_.get(data, "maritalStatus")}
                content={{
                  combines: constants.export_list(tr(constants.maritalStatus))
                }}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
          </Row>
        )}

        <VisaRadio label={tr(resources.step_personal.hasPreviouslyAppliedToCanada)} initialValue={_.get(data, "hasPreviouslyAppliedToCanada")} field="hasPreviouslyAppliedToCanada" getFieldDecorator={getFieldDecorator} />

        {getFieldValue("hasPreviouslyAppliedToCanada") === "0" && (
          <Row>
            <Col sm={12}>
              <VisaInput
                label={tr(resources.step_personal.uci)}
                field="uci"
                initialValue={_.get(data, "uci")}
                getFieldDecorator={getFieldDecorator}
                maxLength={20}
                customRule={[
                  {
                    validator: (rule, value, callback) => validators.validateAlphaNumeric(rule, value, callback, false)
                  }
                ]}
              />
            </Col>
            <Col sm={12}>
              <VisaInput
                label={tr(resources.step_personal.uciReEnter)}
                field="uciReEnter"
                initialValue={_.get(data, "uciReEnter")}
                getFieldDecorator={getFieldDecorator}
                maxLength={20}
                customRule={[
                  {
                    validator: (rule, value, callback) => validators.validateReEnter(rule, value, callback, getFieldValue("uci"), "Values must match", false)
                  }
                ]}
              />
            </Col>
          </Row>
        )}

        <div className="visa-global-form-bottom-btn-group">
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
const Form_Passport = Form.create()(MyForm);
export default Form_Passport;
