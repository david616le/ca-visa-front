import React, { Component } from "react";
import { Form, Button, Checkbox, Row, Col } from 'antd';
import * as constants from '../../../../utils/constants'
import VisaRadio from "../../../../components/VisaRadio";
import VisaInput from "../../../../components/VisaInput";
import VisaSelectItem from "../../../../components/VisaSelectItem";
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

    getFieldDecorator('representativeRelationship', { initialValue: _.get(data, 'representativeRelationship') })
    getFieldDecorator('representativeCompensated', { initialValue: _.get(data, 'representativeCompensated')})
    getFieldDecorator('declareContactAndInformationIsTruthy', { initialValue: _.get(data, 'declareContactAndInformationIsTruthy') })
    

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.step_representative.section_title)}</h2>
        </div>

        <Row>
          <Col sm={16}>
            <VisaSelectItem 
              label={tr(resources.step_representative.representativeRelationship)}
              field="representativeRelationship"
              initialValue={_.get(data, 'representativeRelationship')}
              content={{
                combines: constants.export_list(tr(constants.representativeRelationship))
              }}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>
        </Row>
        
        <VisaRadio
          label={tr(resources.step_representative.representativeCompensated)}
          initialValue={_.get(data, 'representativeCompensated')}
          field="representativeCompensated"
          getFieldDecorator={getFieldDecorator}
        />

        <Row>
          <Col sm={12}>
            {['2', '3', '4'].includes(getFieldValue('representativeRelationship')) && (
              <VisaInput 
                label={tr(resources.step_representative.membershipIdNumber)}
                field="membershipIdNumber"
                initialValue={_.get(data, 'membershipIdNumber')}
                getFieldDecorator={getFieldDecorator}
                maxLength={50}
                customRule={[{ validator: (rule, value, callback) => validators.validateAlphaNumericPunctuation(rule, value, callback, tr(resources.step_representative.membershipIdNumber)) }]}
              />
            )}
          </Col>
          <Col sm={12}>
            {['2', '3'].includes(getFieldValue('representativeRelationship')) && (
              <VisaInput 
                label={tr(resources.step_representative.province)}
                field="province"
                initialValue={_.get(data, 'province')}
                getFieldDecorator={getFieldDecorator}
                maxLength={50}
              />
            )}
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <VisaInput 
              label={tr(resources.step_representative.familyName)}
              field="familyName"
              initialValue={_.get(data, 'familyName')}
              getFieldDecorator={getFieldDecorator}
              maxLength={100}
              customRule={[{ validator: (rule, value, callback) => validators.validateName(rule, value, callback, tr(resources.step_representative.familyName)) }]}
            />
          </Col>
          <Col sm={12}>
            <VisaInput
              label={tr(resources.step_representative.firstName)}
              field="firstName"
              initialValue={_.get(data, 'firstName')}
              getFieldDecorator={getFieldDecorator}
              maxLength={100}
              customRule={[{ validator: (rule, value, callback) => validators.validateName(rule, value, callback, tr(resources.step_representative.familyName)) }]}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            {['1', '2', '3', '4', '5'].includes(getFieldValue('representativeRelationship')) && (
              <VisaInput 
                label={tr(resources.step_representative.organizationName)}
                field="organizationName"
                initialValue={_.get(data, 'organizationName')}
                getFieldDecorator={getFieldDecorator}
                maxLength={75}
              />
            )}
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <VisaInput 
              label={tr(resources.step_representative.mailingAddress)}
              field="mailingAddress"
              initialValue={_.get(data, 'mailingAddress')}
              getFieldDecorator={getFieldDecorator}
              maxLength={200}
              customRule={[{ validator: (rule, value, callback) => validators.validateAlphaNumericPunctuation(rule, value, callback, tr(resources.step_representative.membershipIdNumber)) }]}
            />
          </Col>
          <Col sm={12}>
            <VisaInput
              label={tr(resources.step_representative.phoneNumber)}
              field="phoneNumber"
              initialValue={_.get(data, 'phoneNumber')}
              getFieldDecorator={getFieldDecorator}
              maxLength={20}
              customRule={[{ validator: (rule, value, callback) => validators.validateNumberSpace(rule, value, callback, tr(resources.step_representative.familyName)) }]}
            />
          </Col>
          <Col sm={12}>
            <VisaInput 
              label={tr(resources.step_representative.faxNumber)}
              field="faxNumber"
              initialValue={_.get(data, 'faxNumber')}
              getFieldDecorator={getFieldDecorator}
              required={false}
              maxLength={20}
              customRule={[{ validator: (rule, value, callback) => validators.validateNumberSpace(rule, value, callback, tr(resources.step_representative.faxNumber)) }]}
            />
          </Col>
          <Col sm={12}>
            <VisaInput
              label={tr(resources.step_representative.emailAddress)}
              field="emailAddress"
              initialValue={_.get(data, 'emailAddress')}
              getFieldDecorator={getFieldDecorator}
              required={false}
              maxLength={75}
              customRule={[{ validator: (rule, value, callback) => validators.validateEmail(rule, value, callback, tr(resources.step_representative.emailAddress), true) }]}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            {['2', '3'].includes(getFieldValue('representativeRelationship')) && (
              <VisaInput 
                label={tr(resources.step_representative.postalCodeZip)}
                field="postalCodeZip"
                initialValue={_.get(data, 'postalCodeZip')}
                getFieldDecorator={getFieldDecorator}
                maxLength={30}
              />
            )}
          </Col>
        </Row>

        <Form.Item label={tr(resources.step_representative.declareContactAndInformationIsTruthy.label)} required>
          {getFieldDecorator('declareContactAndInformationIsTruthy', {
            initialValue: _.get(data, 'declareContactAndInformationIsTruthy'),
            valuePropName: "checked",
            rules: [{
              required: true, 
              message: tr(resources.validations.required), 
              transform: value => (value || undefined),  // Those two lines
              type: 'boolean'
            }],
          })(
            <Checkbox>
              {tr(resources.step_representative.declareContactAndInformationIsTruthy.extra)}
            </Checkbox>
          )}
        </Form.Item>

        <Form.Item label={tr(resources.step_representative.understandAndAccept.label)} required>
          {getFieldDecorator('understandAndAccept', {
            initialValue: _.get(data, 'understandAndAccept'),
            valuePropName: "checked",
            rules: [{
              required: true, 
              message: tr(resources.validations.required), 
              transform: value => (value || undefined),  // Those two lines
              type: 'boolean'
            }],
          })(
            <Checkbox>
              {tr(resources.step_representative.understandAndAccept.extra)}
            </Checkbox>
          )}
        </Form.Item>

        <div className="visa-global-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>{tr(resources.prev)}</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>{tr(resources.next)}</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>{tr(resources.save_and_continue_later)}</Button>
        </div>
      </Form>

    );
  }
}
const Form_Representative = Form.create()(MyForm)
export default Form_Representative;
