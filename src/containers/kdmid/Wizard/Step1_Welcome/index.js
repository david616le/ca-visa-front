import React, { Component } from "react";
import { Form, Button, Select } from 'antd';
import * as constants from '../../../../utils/constants'
import * as utils from '../../../../utils'
import VisaSelect from "../../../../components/VisaSelect"
import VisaRadio from 'components/VisaRadio'
import resources from '../../../../utils/resources'
import { translate } from '../../../../utils/resources'

const { Option, OptGroup } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  onChangeCitizenCode = (e) => {
    this.props.form.setFieldsValue({ "data.visitArea" : undefined })
  }
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

    const { showPrev, showNext, data, agency } = this.props

    getFieldDecorator('language', { initialValue: _.get(data, 'language') })
    getFieldDecorator('isRepresentative', { initialValue: _.get(data, 'isRepresentative') })
    getFieldDecorator('isApplyingOnBehalfOfMinorChild', { initialValue: _.get(data, 'isApplyingOnBehalfOfMinorChild') })

    const lang = getFieldValue('language')
    const tr = (r) => translate(r, lang)

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">
            {tr(resources.step_welcome.section_title)}
          </h2>
        </div>

        <Form.Item label={tr(resources.language.label)} extra={tr(resources.language.extra)}>
          {getFieldDecorator('language', {
            initialValue: _.get(data, 'language'),
            rules: [{ required: true, message: tr(resources.validations.required) }],
          })(
            <VisaSelect combines={constants.export_list(constants.new_kdmid_hints_and_help_language)} />
          )}
        </Form.Item>
        
        <VisaRadio
          label={tr(resources.step_welcome.isRepresentative)}
          field="isRepresentative"
          getFieldDecorator={getFieldDecorator}
        />

        {getFieldValue('isRepresentative') === '0' && (
          <VisaRadio
            label={tr(resources.step_welcome.isApplyingOnBehalfOfMinorChild)}
            field="isApplyingOnBehalfOfMinorChild"
            getFieldDecorator={getFieldDecorator}
          />
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
const Form_DS160_1 = Form.create()(MyForm)
export default Form_DS160_1;
