import React, { Component } from "react";
import { Form, Button, Row, Col, Alert } from "antd";
import * as constants from "../../../../utils/constants";
import VisaRadio from "../../../../components/VisaRadio";
import VisaInput from "../../../../components/VisaInput";
import VisaSelectItem from "../../../../components/VisaSelectItem";
import VisaDatePicker from "../../../../components/VisaDatePicker";
import resources from "../../../../utils/resources";
import { translate } from "../../../../utils/resources";
import validators from "containers/kdmid/Validators";

const flagCountries = [
  "3", // Andorra
  "4", // Anguilla
  "5", // ARE (United Arab Emirates)
  "9", // AUS (Australia)
  "10", // AUT (Austria)
  "13", // BEL (Belgium)
  "17", // BGR (Bulgaria)
  "19", // BHS (Bahamas)
  "23", // BMU (Bermuda)
  "26", // BRB (Barbados)
  "27", // BRN (Brunei Darussalam)
  "32", // CHE (Switzerland)
  "33", // CHL (Chile)
  "35", // CHN (China (Hong Kong SAR))
  "46", // CYM (Cayman Islands)
  "47", // CYP (Cyprus)
  "48", //CZE (Czech Republic)
  "49", // D (Germany, Federal Republic Of)
  "52", // DNK (Denmark)
  "58", // ESP (Spain)
  "59", // EST (Estonia)
  "61", // FIN (Finland)
  "63", // FRA (France)
  "66", // GBD (UK - Brit. overseas terr.)
  "67", // GBN (UK - Brit. Ntl. Overseas)
  "68", // GBO (UK - Brit. overseas citizen)
  "70", // GBR (UK - British citizen)
  "71", // GBS (UK - British subject)
  "78", // GRC (Greece)
  "83", // HRV (Croatia)
  "85", // HUN (Hungary)
  "88", // IRL (Ireland)
  "91", // ISL (Iceland)
  "93", // ITA (Italy)
  "96", // JPN (Japan)
  "103", // KOR (Korea, South)
  "110", // LIE (Liechtenstein)
  "113", // LTU (Lithuania)
  "114", // LUX (Luxembourg)
  "115", // LVA (Latvia)
  "117", // MCO (Monaco)
  "121", // MEX (Mexico)
  "125", // MLT (Malta)
  "131", // MSR (Montserrat)
  "139", // NLD (Netherlands, The)
  "140", // NOR (Norway)
  "143", // NZL (New Zealand)
  "150", // PNG (Papua New Guinea)
  "151", // POL (Poland)
  "153", // PRT (Portugal)
  "164", // SGP (Singapore)
  "165", // SHN (Saint Helena)
  "166", // SLB (Solomon Islands)
  "169", // SMR (San Marino)
  "175", // SVK (Slovakia)
  "176", // SVN (Slovenia)
  "177", // SWE (Sweden)
  "181", // TCA (Turks and Caicos Islands)
  "202", // VAT (Vatican City State)
  "205", // VGB (British Virgin Islands)
  "208" // WSM (Samoa)
];

const flagNations = [
  "3", // Andorra
  "8", // Australia
  "9", // Austria
  "11", // Bahamas
  "14", // Barbados
  "16", // Belgium
  "24", // Brunei Darussalam
  "25", // Bulgaria
  "35", // Chile
  "37", // China (Hong Kong SAR)
  "42", // Croatia
  "44", // Cyprus
  "45", // Czech Republic
  "47", // Denmark
  "57", // Estonia
  "61", // Finland
  "62", // France
  "66", // Germany', Federal Republic Of
  "68", // Greece
  "76", // Hungary
  "77", // Iceland
  "82", // Ireland
  "84", // Italy
  "87", // Japan
  "93", // Korea', South
  "98", // Latvia
  "103", // Liechtenstein
  "104", // Lithuania
  "105", // Luxembourg
  "112", // Malta
  "116", // Mexico
  "118", // Monaco
  "126", // Netherlands', The
  "128", // New Zealand
  "133", // Norway
  "138", // Papua New Guinea
  "142", // Poland
  "143", // Portugal
  "147", // Romania
  "152", // Samoa
  "153", // San Marino
  "160", // Singapore
  "161", // Slovakia
  "162", // Slovenia
  "163", // Solomon Islands
  "167", // Spain
  "174", // Sweden
  "175", // Switzerland
  "189", // UK - Brit. Ntl. Overseas
  "190", // UK - Brit. overseas citizen
  "191", // UK - Brit. overseas terr.
  "192", // UK - British citizen
  "194", // United Arab Emirates
  "199" // Vatican City State
];

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true
  };

  handleDates = data => {
    if (data.usaResidentCardExpiryDate) data.usaResidentCardExpiryDate = data.usaResidentCardExpiryDate.format("DD.MM.YYYY");
    return data;
  };

  travelDocumentTypeChange = value => {
    const {
      form: { setFieldsValue }
    } = this.props;

    if (["7", "8"].includes(value)) {
      setFieldsValue({ countryOfCitizenship: "200" });
    }
  };

  handleChange = (value, field) => {
    const { setFieldsValue } = this.props.form;
    switch (field) {
      case "countryOfCitizenship":
        setFieldsValue({
          hasPassportIssuedByMFA: undefined,
          hasIsraeliNationalPassport: undefined,
          hasEPassport: undefined,
          isPermanentResidentOfUSAndHaveProofOfPermResidence: undefined,
          isTravellingByAir: undefined,
          taiwanIDNumber: undefined,
          taiwanIDNumberReEnter: undefined,
          usaResidentCardNumber: undefined,
          usaResidentCardNumberReEnter: undefined,
          passportNotedNationality: undefined
        });
        break;
    }
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
    let bNext = false;

    getFieldDecorator("travelDocumentType", { initialValue: _.get(data, "travelDocumentType") });
    getFieldDecorator("countryOfCitizenship", { initialValue: _.get(data, "countryOfCitizenship") });
    getFieldDecorator("hasIsraeliNationalPassport", { initialValue: _.get(data, "hasIsraeliNationalPassport") });
    getFieldDecorator("passportNotedNationality", { initialValue: _.get(data, "passportNotedNationality") });
    getFieldDecorator("isPermanentResidentOfUSAndHaveProofOfPermResidence", { initialValue: _.get(data, "isPermanentResidentOfUSAndHaveProofOfPermResidence") });
    getFieldDecorator("usaResidentCardNumber", { initialValue: _.get(data, "usaResidentCardNumber") });
    getFieldDecorator("usaResidentCardNumberReEnter", { initialValue: _.get(data, "usaResidentCardNumberReEnter") });
    getFieldDecorator("usaResidentCardExpiryDate", { initialValue: _.get(data, "usaResidentCardExpiryDate") });
    getFieldDecorator("taiwanIDNumber", { initialValue: _.get(data, "taiwanIDNumber") });
    getFieldDecorator("taiwanIDNumberReEnter", { initialValue: _.get(data, "taiwanIDNumberReEnter") });

    const travelDocumentType = getFieldValue("travelDocumentType");
    const countryOfCitizenship = getFieldValue("countryOfCitizenship");
    const isPermanentResidentOfUSAndHaveProofOfPermResidence = getFieldValue("isPermanentResidentOfUSAndHaveProofOfPermResidence");
    const usaResidentCardNumber = getFieldValue("usaResidentCardNumber");
    const passportNotedNationality = getFieldValue("passportNotedNationality");
    const usaResidentCardNumberReEnter = getFieldValue("usaResidentCardNumberReEnter");
    const taiwanIDNumber = getFieldValue("taiwanIDNumber");

    let renderByCountryCode = "";

    const renderLawful = () => {
      if (isPermanentResidentOfUSAndHaveProofOfPermResidence !== "1" && !["32", "195"].includes(passportNotedNationality)) bNext = true;
      return (
        <>
          <VisaRadio label={tr(resources.step_prerequisite.isPermanentResidentOfUSAndHaveProofOfPermResidence)} initialValue={_.get(data, "isPermanentResidentOfUSAndHaveProofOfPermResidence")} field="isPermanentResidentOfUSAndHaveProofOfPermResidence" getFieldDecorator={getFieldDecorator} lang={lang} />
          {isPermanentResidentOfUSAndHaveProofOfPermResidence === "1" && (
            <Alert
              message="Based on your answers, you cannot apply for an eTA"
              description={
                <div>
                  You may <a style={{ textDecoration: "underline" }}>need a visa</a> or <a style={{ textDecoration: "underline" }}>other type of travel document</a> to travel to Canada.
                </div>
              }
              type="warning"
              showIcon
            />
          )}
          {isPermanentResidentOfUSAndHaveProofOfPermResidence === "0" && (
            <>
              <Alert message="As a lawful permanent resident of the U.S." description={<div>You must show proof of your United States lawful permanent resident card (USCIS) and travel with the passport you will use for this application to be able to board your flight to Canada.</div>} type="warning" showIcon />
              <Row>
                <Col sm={16}>
                  <VisaInput label={tr(resources.step_prerequisite.usaResidentCardNumber)} field="usaResidentCardNumber" initialValue={_.get(data, "usaResidentCardNumber")} getFieldDecorator={getFieldDecorator} maxLength={9} customRule={[{ validator: validators.validateUSAResidentCardNumber }]} />
                </Col>
                <Col sm={16}>
                  <VisaInput
                    label={tr(resources.step_prerequisite.usaResidentCardNumberReEnter)}
                    field="usaResidentCardNumberReEnter"
                    initialValue={_.get(data, "usaResidentCardNumberReEnter")}
                    getFieldDecorator={getFieldDecorator}
                    maxLength={9}
                    customRule={[{ validator: (rule, value, callback) => validators.validateUSAResidentCardNumberReEnter(rule, value, callback, usaResidentCardNumber) }]}
                  />
                </Col>
                <Col sm={16}>
                  <VisaDatePicker
                    label={tr(resources.step_prerequisite.usaResidentCardExpiryDate)}
                    field="usaResidentCardExpiryDate"
                    initialValue={_.get(data, "usaResidentCardExpiryDate")}
                    getFieldDecorator={getFieldDecorator}
                    customRule={[{ validator: validators.validateLaterDate }]}
                    setFieldsValue={setFieldsValue}
                    getFieldValue={getFieldValue}
                  />
                </Col>
                <Col sm={16}>
                  <VisaSelectItem
                    label={tr(resources.step_prerequisite.passportNotedNationality.label)}
                    extra={tr(resources.step_prerequisite.passportNotedNationality.extra)}
                    field="passportNotedNationality"
                    initialValue={_.get(data, "passportNotedNationality")}
                    content={{
                      combines: constants.export_list(constants.passportNotedNationality)
                    }}
                    getFieldDecorator={getFieldDecorator}
                  />
                </Col>
              </Row>
              {passportNotedNationality === "32" && <Alert message="As a Canadian citizen, you cannot apply for an eTA" description={<div>By law, Canadian citizens have the right to enter Canada. Find out how to apply for or renew a Canadian passport.</div>} type="warning" showIcon />}
              {passportNotedNationality === "195" && <Alert message="As a U.S. citizen, you are exempt from the eTA requirement." description={<div>You do not need an eTA to travel to Canada. Make sure to travel with valid proof of U.S. citizenship such as a passport and other acceptable travel documents.</div>} type="warning" showIcon />}
            </>
          )}
        </>
      );
    };

    switch (countryOfCitizenship) {
      case undefined:
      case null:
        break;
      case "31":
        renderByCountryCode = (
          <Alert
            message="As a Canadian citizen, you cannot apply for an eTA"
            description={
              <div>
                By law, Canadian citizens have the right to enter Canada. Find out how to <a style={{ textDecoration: "underline" }}>apply for or renew a Canadian passport.</a>
              </div>
            }
            type="warning"
            showIcon
          />
        );
        bNext = false;
        break;
      case "92":
        // Israel
        if (getFieldValue("hasIsraeliNationalPassport") === "0" && getFieldValue("passportNotedNationality") === "83") bNext = true;
        renderByCountryCode = (
          <>
            <VisaRadio label={tr(resources.step_prerequisite.hasIsraeliNationalPassport)} initialValue={_.get(data, "hasIsraeliNationalPassport")} field="hasIsraeliNationalPassport" getFieldDecorator={getFieldDecorator} lang={lang} />
            {getFieldValue("hasIsraeliNationalPassport") === "0" && (
              <>
                <Row>
                  <Col sm={16}>
                    <VisaSelectItem
                      label={tr(resources.step_prerequisite.passportNotedNationality.label)}
                      extra={tr(resources.step_prerequisite.passportNotedNationality.extra)}
                      field="passportNotedNationality"
                      initialValue={_.get(data, "passportNotedNationality")}
                      content={{
                        combines: constants.export_list(constants.passportNotedNationality)
                      }}
                      getFieldDecorator={getFieldDecorator}
                    />
                  </Col>
                </Row>
                {getFieldValue("passportNotedNationality") && getFieldValue("passportNotedNationality") !== "83" && (
                  <Alert
                    message="Based on your answers, you cannot apply for an eTA"
                    description={
                      <div>
                        You may <a style={{ textDecoration: "underline" }}>need a visa</a> or <a style={{ textDecoration: "underline" }}>other type of travel document</a> to travel to Canada.
                      </div>
                    }
                    type="warning"
                    showIcon
                  />
                )}
              </>
            )}
            {getFieldValue("hasIsraeliNationalPassport") === "1" && renderLawful()}
          </>
        );
        break;
      case "158":
        // Romania
        if (getFieldValue("hasEPassport") === "0" && getFieldValue("passportNotedNationality") === "147") bNext = true;
        renderByCountryCode = (
          <>
            <VisaRadio label={tr(resources.step_prerequisite.hasEPassport)} initialValue={_.get(data, "hasEPassport")} field="hasEPassport" getFieldDecorator={getFieldDecorator} lang={lang} />
            {getFieldValue("hasEPassport") === "0" && (
              <>
                <Row>
                  <Col sm={16}>
                    <VisaSelectItem
                      label={tr(resources.step_prerequisite.passportNotedNationality.label)}
                      extra={tr(resources.step_prerequisite.passportNotedNationality.extra)}
                      field="passportNotedNationality"
                      initialValue={_.get(data, "passportNotedNationality")}
                      content={{
                        combines: constants.export_list(constants.passportNotedNationality)
                      }}
                      getFieldDecorator={getFieldDecorator}
                    />
                  </Col>
                </Row>
                {getFieldValue("passportNotedNationality") && getFieldValue("passportNotedNationality") !== "147" && (
                  <Alert
                    message="Based on your answers, you cannot apply for an eTA"
                    description={
                      <div>
                        You may <a style={{ textDecoration: "underline" }}>need a visa</a> or <a style={{ textDecoration: "underline" }}>other type of travel document</a> to travel to Canada.
                      </div>
                    }
                    type="warning"
                    showIcon
                  />
                )}
              </>
            )}
            {getFieldValue("hasEPassport") === "1" && renderLawful()}
          </>
        );
        break;
      case "193":
        // Taiwan
        if (getFieldValue("hasPassportIssuedByMFA") === "0" && getFieldValue("passportNotedNationality") === "177") bNext = true;
        renderByCountryCode = (
          <>
            <VisaRadio label={tr(resources.step_prerequisite.hasPassportIssuedByMFA)} initialValue={_.get(data, "hasPassportIssuedByMFA")} field="hasPassportIssuedByMFA" getFieldDecorator={hasPassportIssuedByMFA} lang={lang} />
            {getFieldValue("hasPassportIssuedByMFA") === "0" && (
              <>
                <Row>
                  <Col sm={16}>
                    <VisaInput
                      label={tr(resources.step_prerequisite.taiwanIDNumber)}
                      field="taiwanIDNumber"
                      initialValue={_.get(data, "taiwanIDNumber")}
                      getFieldDecorator={getFieldDecorator}
                      maxLength={20}
                      customRule={[{ validator: (rule, value, callback) => validators.validateAlphaNumericSpace(rule, value, callback, tr(resources.step_prerequisite.taiwanIDNumberReEnter)) }]}
                    />
                  </Col>
                  <Col sm={16}>
                    <VisaInput
                      label={tr(resources.step_prerequisite.taiwanIDNumberReEnter)}
                      field="taiwanIDNumberReEnter"
                      initialValue={_.get(data, "taiwanIDNumberReEnter")}
                      getFieldDecorator={getFieldDecorator}
                      maxLength={20}
                      customRule={[
                        {
                          validator: (rule, value, callback) => {
                            if (!value) {
                              callback("This field is required");
                              return;
                            }

                            if (value !== taiwanIDNumber) {
                              callback(`Taiwan personal identification number values must match.`);
                              return;
                            }
                            callback();
                          }
                        }
                      ]}
                    />
                  </Col>
                  <Col sm={16}>
                    <VisaSelectItem
                      label={tr(resources.step_prerequisite.passportNotedNationality.label)}
                      extra={tr(resources.step_prerequisite.passportNotedNationality.extra)}
                      field="passportNotedNationality"
                      initialValue={_.get(data, "passportNotedNationality")}
                      content={{
                        combines: constants.export_list(constants.passportNotedNationality)
                      }}
                      getFieldDecorator={getFieldDecorator}
                    />
                  </Col>
                </Row>
                {getFieldValue("passportNotedNationality") && getFieldValue("passportNotedNationality") !== "177" && (
                  <Alert
                    message="Based on your answers, you cannot apply for an eTA"
                    description={
                      <div>
                        You may <a style={{ textDecoration: "underline" }}>need a visa</a> or <a style={{ textDecoration: "underline" }}>other type of travel document</a> to travel to Canada.
                      </div>
                    }
                    type="warning"
                    showIcon
                  />
                )}
              </>
            )}
            {getFieldValue("hasPassportIssuedByMFA") === "1" && renderLawful()}
          </>
        );
        break;
      default:
        if (flagCountries.includes(countryOfCitizenship)) {
          if (!passportNotedNationality || flagNations.includes(passportNotedNationality)) bNext = true;
          renderByCountryCode = (
            <>
              <Row>
                <Col sm={16}>
                  <VisaSelectItem
                    label={tr(resources.step_prerequisite.passportNotedNationality.label)}
                    extra={tr(resources.step_prerequisite.passportNotedNationality.extra)}
                    field="passportNotedNationality"
                    initialValue={_.get(data, "passportNotedNationality")}
                    content={{
                      combines: constants.export_list(constants.passportNotedNationality)
                    }}
                    getFieldDecorator={getFieldDecorator}
                  />
                </Col>
              </Row>
              {passportNotedNationality && !flagNations.includes(passportNotedNationality) && (
                <Alert
                  message="Based on your answers, you cannot apply for an eTA"
                  description={
                    <div>
                      You may <a style={{ textDecoration: "underline" }}>need a visa</a> or <a style={{ textDecoration: "underline" }}>other type of travel document</a> to travel to Canada.
                    </div>
                  }
                  type="warning"
                  showIcon
                />
              )}
            </>
          );
        } else {
          renderByCountryCode = renderLawful();
        }
        break;
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
              initialValue={_.get(data, "travelDocumentType")}
              content={{
                combines: constants.export_list(tr(constants.travelDocumentType))
              }}
              onChange={this.travelDocumentTypeChange}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>

        {["5", "6"].includes(travelDocumentType) ? (
          <Alert
            message="Based on your answers, you cannot apply for an eTA!"
            description={
              <div>
                You may <a style={{ textDecoration: "underline" }}>need a visa</a> or <a style={{ textDecoration: "underline" }}>other type of travel document</a> to travel to Canada.
              </div>
            }
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
                  initialValue={_.get(data, "countryOfCitizenship")}
                  disabled={["7", "8"].includes(travelDocumentType)}
                  content={{
                    combines: constants.export_list(constants.countryOfCitizenship)
                  }}
                  onChange={value => this.handleChange(value, "countryOfCitizenship")}
                  getFieldDecorator={getFieldDecorator}
                />
              </Col>
            </Row>

            {renderByCountryCode}
          </>
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
const Form_Prerequisite = Form.create()(MyForm);
export default Form_Prerequisite;
