import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import moment from 'moment'
import VisaInput from "../../../../components/VisaInput";
import VisaDatePicker from "../../../../components/VisaDatePicker";
import VisaSelectItem from "../../../../components/VisaSelectItem";
import resources from '../../../../utils/resources'
import { translate } from '../../../../utils/resources'
import * as constants from '../../../../utils/constants'
const { Option } = Select;
const { TextArea } = Input;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  
  handleDates = (data) => {
    if(data.issue_date)
      data.issue_date = data.issue_date.format('DD.MM.YYYY')
    if(data.expiration_date)
      data.expiration_date = data.expiration_date.format('DD.MM.YYYY')
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

    const { showPrev, showNext, onPrev, onNext, data, date_birth, departure_date, lang } = this.props

    // getFieldDecorator('data.b_ever_loss', { initialValue: utils.getInitialValue(data.b_ever_loss) })
    const tr = (r) => translate(r, lang);

    const issue_date = getFieldValue('data.issue_date')
    let limit = moment().add(10, 'years')
    if(issue_date) {
        limit = moment(issue_date, 'DD.MM.YYYY').add(10, 'years')
    }

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.passport.section_title)}</h2>
        </div>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaSelectItem 
              label={tr(resources.passport.type.label)}
              extra={tr(resources.passport.type.extra)}
              field="data.type"
              initialValue={data.type}
              content={{
                combines: constants.export_list(tr(constants.new_kdmid_passport_type_list))
              }}
              getFieldDecorator={getFieldDecorator}
              
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaInput 
              label={tr(resources.passport.number.label)}
              extra={tr(resources.passport.number.extra)}
              field="data.number"
              initialValue={data.number}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validatePassport(rule, value, callback, tr(resources.passport.number.label), true) }]}
            />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaDatePicker 
              label={tr(resources.passport.issue_date.label)}
              field="data.issue_date"
              initialValue={data.issue_date}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateBetweenDate(rule, value, callback, tr(resources.passport.issue_date.label), moment.max(moment(date_birth, 'DD.MM.YYYY'), moment().subtract(10, 'years')), true) }]}

              setFieldsValue={setFieldsValue}
              getFieldValue={getFieldValue}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <VisaDatePicker 
              label={tr(resources.passport.expiration_date.label)}
              field="data.expiration_date"
              initialValue={data.expiration_date}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: (rule, value, callback) => this.props.validators.validateBetweenDate(rule, value, callback, tr(resources.passport.expiration_date.label), moment(new Date(), 'DD.MM.YYYY'), true, limit) }]}

              setFieldsValue={setFieldsValue}
              getFieldValue={getFieldValue}
            />
          </Col>
        </Row>

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>{tr(resources.prev)}</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>{tr(resources.next)}</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>{tr(resources.save_and_continue_later)}</Button>
        </div>
      </Form>

    );
  }
}
const Form_Passport = Form.create()(MyForm)
export default Form_Passport;
