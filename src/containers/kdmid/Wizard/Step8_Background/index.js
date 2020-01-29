import React, { Component } from "react"
import { Form, Button, Input } from 'antd'
import * as constants from '../../../../utils/constants'
import VisaRadio from "../../../../components/VisaRadio"
import VisaSelectItem from "../../../../components/VisaSelectItem"
import VisaExplain from "../../../../components/VisaExplain"
import resources from '../../../../utils/resources'
import { translate } from '../../../../utils/resources'
import validators from 'containers/kdmid/Validators'

const { TextArea } = Input

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true,
  }
  
  handleDates = (data) => {
    if(data.travelDate)
      data.travelDate = data.travelDate.format('DD.MM.YYYY')
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

    getFieldDecorator('refusedVisaOrPermitOrDeniedEntryToCanada', { initialValue: _.get(data, 'refusedVisaOrPermitOrDeniedEntryToCanada') })
    getFieldDecorator('committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhere', { initialValue: _.get(data, 'committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhere') })
    getFieldDecorator('inThePastTwoYearsWereYouDiagnosedOrInCloseContactWithTuberculosis', { initialValue: _.get(data, 'inThePastTwoYearsWereYouDiagnosedOrInCloseContactWithTuberculosis') })
    getFieldDecorator('isYourContactWithTuberculosisTheResultOfBeingAHeathCareWorker', { initialValue: _.get(data, 'isYourContactWithTuberculosisTheResultOfBeingAHeathCareWorker') })
    getFieldDecorator('haveYouEverBeenDiagnosedWithTuberculosis', { initialValue: _.get(data, 'haveYouEverBeenDiagnosedWithTuberculosis') })

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.step_background.section_title)}</h2>
        </div>

        <VisaExplain
          label={tr(resources.step_background.refusedVisaOrPermitOrDeniedEntryToCanada)}
          radioField="refusedVisaOrPermitOrDeniedEntryToCanada"
          radioInitialValue={_.get(data, 'refusedVisaOrPermitOrDeniedEntryToCanada')}
          radioValue={getFieldValue('refusedVisaOrPermitOrDeniedEntryToCanada')}
          textField="refusedVisaOrPermitOrDeniedEntryToCanadaDetails"
          textLabel={tr(resources.step_background.refusedVisaOrPermitOrDeniedEntryToCanadaDetails)}
          textInitialValue={_.get(data, 'refusedVisaOrPermitOrDeniedEntryToCanadaDetails')}
          getFieldDecorator={getFieldDecorator}
          tr={tr}
        />

        <VisaExplain
          label={tr(resources.step_background.committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhere)}
          radioField="committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhere"
          radioInitialValue={_.get(data, 'committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhere')}
          radioValue={getFieldValue('committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhere')}
          textField="committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhereDetails"
          textLabel={tr(resources.step_background.committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhereDetails)}
          textInitialValue={_.get(data, 'committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhereDetails')}
          getFieldDecorator={getFieldDecorator}
          tr={tr}
        />

        <VisaRadio
          label={tr(resources.step_background.inThePastTwoYearsWereYouDiagnosedOrInCloseContactWithTuberculosis)}
          initialValue={_.get(data, 'inThePastTwoYearsWereYouDiagnosedOrInCloseContactWithTuberculosis')}
          field="inThePastTwoYearsWereYouDiagnosedOrInCloseContactWithTuberculosis"
          getFieldDecorator={getFieldDecorator}
        />

        {getFieldValue('inThePastTwoYearsWereYouDiagnosedOrInCloseContactWithTuberculosis') === '0' && (
          <>
            <VisaRadio
              label={tr(resources.step_background.isYourContactWithTuberculosisTheResultOfBeingAHeathCareWorker)}
              initialValue={_.get(data, 'isYourContactWithTuberculosisTheResultOfBeingAHeathCareWorker')}
              field="isYourContactWithTuberculosisTheResultOfBeingAHeathCareWorker"
              getFieldDecorator={getFieldDecorator}
            />
            {getFieldValue('isYourContactWithTuberculosisTheResultOfBeingAHeathCareWorker') === '0' && (
              <VisaRadio
                label={tr(resources.step_background.haveYouEverBeenDiagnosedWithTuberculosis)}
                initialValue={_.get(data, 'haveYouEverBeenDiagnosedWithTuberculosis')}
                field="haveYouEverBeenDiagnosedWithTuberculosis"
                getFieldDecorator={getFieldDecorator}
              />
            )}
          </>
        )}

        <VisaSelectItem 
          label={tr(resources.step_background.doYouHaveOneOfTheseConditions)}
          field="doYouHaveOneOfTheseConditions"
          initialValue={_.get(data, 'doYouHaveOneOfTheseConditions')}
          content={{
            combines: constants.export_list(tr(constants.doYouHaveOneOfTheseConditions))
          }}
          getFieldDecorator={getFieldDecorator}
        />

        <Form.Item label={tr(resources.step_background.haveOrWillHaveHealthInsuranceValidInCanadaDuringStayDetails)} required>
          {getFieldDecorator("haveOrWillHaveHealthInsuranceValidInCanadaDuringStayDetails", {
            initialValue: _.get(data, 'haveOrWillHaveHealthInsuranceValidInCanadaDuringStayDetails'),
            rules: [{ validator: validators.validateAlphaNumericPunctuation }]
          })(
            <TextArea style={{textTransform: 'uppercase'}} rows={7}/>
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
const Form_Background = Form.create()(MyForm)
export default Form_Background;
