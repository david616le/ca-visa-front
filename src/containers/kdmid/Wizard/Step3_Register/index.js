import React, { Component } from "react";
import { Form, Button, Select } from 'antd';
import * as constants from '../../../../utils/constants'
import * as utils from '../../../../utils'
import VisaSelect from "../../../../components/VisaSelect";
import VisaInput from "../../../../components/VisaInput";
import VisaSelectItem from "../../../../components/VisaSelectItem";
import resources from '../../../../utils/resources'
import { translate } from '../../../../utils/resources'

const { Option, OptGroup } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  validatePwd = (rule, value, callback) => {
    const { getFieldValue } = this.props.form;
    const lang = getFieldValue('data.language')
    const tr = (r) => translate(r, lang);
    if(!value) {
      callback(tr(resources.validations.required))
      return
    }
    if(value.length < 6) {
      callback(tr(resources.validations.validatePwd.short));
      return;
    }
    if(!/\d/.test(value) || !/[A-Za-z]/.test(value)) {
      callback(tr(resources.validations.validatePwd.complexity))
      return;
    }
    callback();
  };
  validatePwdConfirm = (rule, value, callback) => {
    const { getFieldValue } = this.props.form;
    const lang = getFieldValue('data.language')
    const tr = (r) => translate(r, lang);
    if(!value) {
      callback(tr(resources.validations.required))
      return
    }
    if(value != this.props.form.getFieldValue('data.password')) {
      callback(tr(resources.validations.validatePwdConfirm.notmatch));
      return;
    }
    callback();
  };
  validateEmailConfirm = (rule, value, callback) => {
    const { getFieldValue } = this.props.form;
    const lang = getFieldValue('data.language')
    const tr = (r) => translate(r, lang);
    if(!value) {
      callback(tr(resources.validations.required))
      return
    }
    if(value != this.props.form.getFieldValue('data.email')) {
      callback(tr(resources.validations.validateEmailConfirm.notmatch));
      return;
    }
    callback();
  };
  render() {
    const { getFieldDecorator, isFieldTouched, getFieldValue } = this.props.form;
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
        md: { span: 12 }
      },
    };

    const { showPrev, showNext, data, agency, lang } = this.props

    const tr = (r) => translate(r, lang);

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">
            {tr(resources.register.section_title)}
          </h2>
        </div>
        <VisaInput 
          label={tr(resources.email.label)}
          extra={tr(resources.email.extra)}
          field="data.email"
          initialValue={data.email}
          getFieldDecorator={getFieldDecorator}
          type="email"
          customRule={[{ type: 'email', required: true, message: 'Please input valid email address' }]}
        />
        <VisaInput 
          label={tr(resources.email_confirm.label)}
          field="data.emailConfirmation"
          initialValue={data.emailConfirmation}
          getFieldDecorator={getFieldDecorator}
          type="email"
          customRule={[{ validator: this.validateEmailConfirm }]}
        />

        <VisaInput 
          label={tr(resources.pwd.label)}
          extra={tr(resources.pwd.extra)}
          field="data.password"
          initialValue={data.password}
          getFieldDecorator={getFieldDecorator}
          type="password"
          customRule={[{ validator: this.validatePwd }]}
        />
        <VisaInput 
          label={tr(resources.pwd_confirm.label)}
          extra={tr(resources.pwd_confirm.extra)}
          field="data.confirmPassword"
          initialValue={data.confirmPassword}
          getFieldDecorator={getFieldDecorator}
          type="password"
          customRule={[{ validator: this.validatePwdConfirm }]}
        />
        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>{tr(resources.prev)}</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>{tr(resources.next)}</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>{tr(resources.save_and_continue_later)}</Button>
        </div>
      </Form>

    );
  }
}
const Form_Register = Form.create()(MyForm)
export default Form_Register;
