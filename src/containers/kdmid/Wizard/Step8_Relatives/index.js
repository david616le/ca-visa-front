import React, { Component } from "react";
import { Form, Button, Select, Checkbox, Input, Radio, DatePicker, Row, Col } from 'antd';
import VisaRadio from "../../../../components/VisaRadio";
import VisaRelatives from "../../../../components/VisaRelatives";
import * as utils from '../../../../utils'
import resources, { translate } from '../../../../utils/resources'

const { Option } = Select;
const { TextArea } = Input;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  
  handleDates = (data) => {
    if(data.relatives) {
      for(let i in data.relatives) {
        if(data.relatives[i].birth_date)
          data.relatives[i].birth_date = data.relatives[i].birth_date.format('DD.MM.YYYY')
      }
    }
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

    const { showPrev, showNext, onPrev, onNext, data, date_birth, lang } = this.props

    getFieldDecorator('data.b_relatives', { initialValue: utils.getInitialValue(data.b_relatives) })

    const tr = (r) => translate(r, lang);

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.relatives.section_title)}</h2>
        </div>

        <VisaRadio
          label={tr(resources.relatives.b_relatives.label)}
          extra={tr(resources.relatives.b_relatives.extra)}
          field="data.b_relatives"
          initialValue={data.b_relatives}
          getFieldDecorator={getFieldDecorator}
          combines={[
            { value: "yes", label: tr(resources.yes) }, 
            { value: "no", label: tr(resources.no) }
          ]}
        />

        {getFieldValue('data.b_relatives') == 'yes' &&
          <VisaRelatives 
            label={tr(resources.relatives.relatives.list)}
            getFieldDecorator={getFieldDecorator}
            getFieldValue={getFieldValue}
            setFieldsValue={setFieldsValue}
            initialValue={data.relatives}
            arrayField="data.relatives"
            keysField="copy.relatives"
            lang={lang}
            validators={this.props.validators}
          />
        }

        <div className="visa-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>{tr(resources.prev)}</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>{tr(resources.next)}</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>{tr(resources.save_and_continue_later)}</Button>
        </div>
      </Form>

    );
  }
}
const Form_Relatives = Form.create()(MyForm)
export default Form_Relatives;
