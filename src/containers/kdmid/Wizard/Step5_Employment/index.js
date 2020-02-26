import React, { Component } from "react"
import { Form, Button, Row, Col } from 'antd'
import * as constants from '../../../../utils/constants'
import VisaInput from "../../../../components/VisaInput"
import VisaSelectItem from "../../../../components/VisaSelectItem"
import resources from '../../../../utils/resources'
import { translate } from '../../../../utils/resources'

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

    getFieldDecorator('occupation', { initialValue: _.get(data, 'occupation') })
    getFieldDecorator('country', { initialValue: _.get(data, 'country') })

    const occupation = getFieldValue('occupation')
    const yearsOptions = []
    const currentYear = parseInt(new Date().getFullYear())

    for (let i = currentYear; i >= 1900; i--)
      yearsOptions.push({ value: i, label: i })

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.step_employment.section_title)}</h2>
        </div>

        <Row>
          <Col sm={12}>
            <VisaSelectItem 
              label={tr(resources.step_employment.occupation.label)}
              extra={tr(resources.step_employment.occupation.extra)}
              field="occupation"
              initialValue={_.get(data, 'occupation')}
              content={{
                combines: constants.export_list(tr(constants.occupation))
              }}
              getFieldDecorator={getFieldDecorator}
            />
          </Col>  
        </Row>

        {occupation && !['4', '10', '14'].includes(occupation) && (
          <Row>
            {occupation !== '12' && (
              <Col sm={16}>
                <VisaSelectItem 
                  label={tr(resources.step_employment.title.label)}
                  extra={tr(resources.step_employment.title.extra)}
                  field="title"
                  initialValue={_.get(data, 'title')}
                  content={{
                    combines: constants.export_list(tr(constants.jobTitle[occupation]))
                  }}
                  getFieldDecorator={getFieldDecorator}
                />
              </Col>
            )}
            <Col sm={16}>
              <VisaInput
                label={tr(resources.step_employment.companyEmployerSchoolFacilityName)}
                field="companyEmployerSchoolFacilityName"
                initialValue={_.get(data, 'companyEmployerSchoolFacilityName')}
                getFieldDecorator={getFieldDecorator}
                maxLength={75}
              />
            </Col>
            <Col sm={16}>
              <VisaSelectItem 
                label={tr(resources.step_employment.country)}
                field="country"
                initialValue={_.get(data, 'country')}
                content={{
                  combines: constants.export_list(constants.country)
                }}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
            {['223', '37'].includes(getFieldValue('country')) && (
              <Col sm={16}>
                <VisaSelectItem 
                  label={tr(resources.step_employment.province)}
                  field="province"
                  initialValue={_.get(data, 'province')}
                  content={{
                    combines: constants.export_list(constants.state)
                  }}
                  getFieldDecorator={getFieldDecorator}
                />
              </Col>
            )}
            <Col sm={16}>
              <VisaInput
                label={tr(resources.step_employment.city)}
                field="city"
                initialValue={_.get(data, 'city')}
                getFieldDecorator={getFieldDecorator}
                maxLength={50}
              />
            </Col>
            <Col sm={12}>
              <VisaSelectItem 
                label={tr(resources.step_employment.fromDateYear)}
                field="fromDateYear"
                initialValue={_.get(data, 'fromDateYear')}
                content={{
                  combines: yearsOptions,
                }}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
          </Row>
        )}

        <div className="visa-global-form-bottom-btn-group">
          {showPrev && <Button style={{ marginRight: 8 }} onClick={(e) => this.props.handlePrev(e, this.props.form, this.handleDates)}>{tr(resources.prev)}</Button>}
          {showNext && <Button type="primary" onClick={(e) => this.props.handleNext(e, this.props.form, this.handleDates)}>{tr(resources.next)}</Button>}
          <Button type="link" onClick={(e) => this.props.handleSave(e, this.props.form, this.handleDates)}>{tr(resources.save_and_continue_later)}</Button>
        </div>
      </Form>

    );
  }
}
const Form_Contact = Form.create()(MyForm)
export default Form_Contact;
