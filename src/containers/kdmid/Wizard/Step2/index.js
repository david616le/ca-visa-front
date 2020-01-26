import React, { Component } from "react";
import { Form, Button, Select, Checkbox } from 'antd';
import * as constants from '../../../../utils/constants'
import * as utils from '../../../../utils'
import resources from '../../../../utils/resources'
import { translate } from '../../../../utils/resources'
import Welcome from '../../Welcome'

const { Option } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  
  render() {
    const { getFieldDecorator, isFieldTouched } = this.props.form;
    const formItemLayout = {
      layout: 'vertical',
      labelCol: {
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 24 },
      },
    };

    const { showPrev, showNext, onPrev, onNext, data, agency, lang } = this.props

    const tr = (r) => translate(r, lang);

    return (
      <Form {...formItemLayout}>
        <Form.Item label={agency ? 
          "Before you begin this application, please read carefully this disclaimer and make sure that you have a valid passport. This application will only accept the following credit cards: MasterCard, VISA and Discover (JCB, Diners Club) or bank transfer. Our agency charges $280 for this premium processing service which includes your MRV fee. This charge does include the Visa Fee of$160 that needs to be paid directly to the Department of State and is NON-REFUNDABLE. All information provided by you, or on your behalf by a designated third party, must be true and correct.": 
          tr(resources.step_2.disclaimer.customer)} required>
        </Form.Item>

        <Welcome lang={lang} />
        
        <Form.Item label={tr(resources.before.confirm.label)} required>
          {getFieldDecorator('data.b_conditions', {
            initialValue: utils.getInitialValue(data.b_conditions),
            valuePropName: "checked",
            rules: [{
              required: true, 
              message: tr(resources.validations.required), 
              transform: value => (value || undefined),  // Those two lines
              type: 'boolean'
            }],
          })(
            <Checkbox>
              {tr(resources.before.confirm.b_conditions)}
            </Checkbox>
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('data.b_processing', {
            initialValue: utils.getInitialValue(data.b_processing),
            valuePropName: "checked",
            rules: [{
              required: true, 
              message: tr(resources.validations.required), 
              transform: value => (value || undefined),  // Those two lines
              type: 'boolean'
            }],
          })(
            <Checkbox>
              {tr(resources.before.confirm.b_processing)}
            </Checkbox>
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('data.b_email_notification', {
            initialValue: utils.getInitialValue(data.b_email_notification),
            valuePropName: "checked",
            rules: [{
              required: true, 
              message: tr(resources.validations.required), 
              transform: value => (value || undefined),  // Those two lines
              type: 'boolean'
            }],
          })(
            <Checkbox>
              {tr(resources.before.confirm.b_email_notification)}
            </Checkbox>
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('data.b_agreement_2_2', {
            initialValue: utils.getInitialValue(data.b_agreement_2_2),
            valuePropName: "checked",
            rules: [{
              required: true, 
              message: tr(resources.validations.required), 
              transform: value => (value || undefined),  // Those two lines
              type: 'boolean'
            }],
          })(
            <Checkbox>
              {tr(resources.step_2.confirm.check)}
            </Checkbox>
          )}
        </Form.Item>

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>{tr(resources.prev)}</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>{tr(resources.next)}</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>{tr(resources.save_and_continue_later)}</Button>
        </div>
      </Form>

    );
  }
}
const Form_DS160_2 = Form.create()(MyForm)
export default Form_DS160_2;
