import React, { Component } from "react";
import { Form, Button, Row, Col } from "antd";
import * as constants from "../../../../utils/constants";
import VisaRadio from "../../../../components/VisaRadio";
import VisaSelectItem from "../../../../components/VisaSelectItem";
import VisaDatePicker from "../../../../components/VisaDatePicker";
import resources from "../../../../utils/resources";
import { translate } from "../../../../utils/resources";
import validators from "containers/kdmid/Validators";

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true
  };

  handleDates = data => {
    if (data.travelDate) data.travelDate = data.travelDate.format("DD.MM.YYYY");
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

    const { showPrev, showNext, onPrev, onNext, data, lang } = this.props;

    const tr = r => translate(r, lang);

    getFieldDecorator("isTravelDateKnown", { initialValue: _.get(data, "isTravelDateKnown") });

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">{tr(resources.step_travel.section_title)}</h2>
        </div>

        <VisaRadio label={tr(resources.step_travel.isTravelDateKnown.label)} extra={tr(resources.step_travel.isTravelDateKnown.extra)} initialValue={_.get(data, "isTravelDateKnown")} field="isTravelDateKnown" getFieldDecorator={getFieldDecorator} />

        {getFieldValue("isTravelDateKnown") === "0" && (
          <>
            <VisaDatePicker
              label={tr(resources.step_travel.travelDate.label)}
              extra={tr(resources.step_travel.travelDate.extra)}
              field="travelDate"
              initialValue={_.get(data, "travelDate")}
              getFieldDecorator={getFieldDecorator}
              customRule={[{ validator: validators.validateLaterDate }]}
              setFieldsValue={setFieldsValue}
              getFieldValue={getFieldValue}
            />
            <Form.Item label={tr(resources.step_travel.travelTime)}>
              <Row>
                <Col md={8}>
                  <VisaSelectItem
                    label={tr(resources.step_travel.travelDateTimeHour)}
                    field="travelDateTimeHour"
                    initialValue={_.get(data, "travelDateTimeHour")}
                    content={{
                      combines: constants.export_list(constants.travelDateTimeHour)
                    }}
                    getFieldDecorator={getFieldDecorator}
                  />
                </Col>
                <Col md={8}>
                  <VisaSelectItem
                    label={tr(resources.step_travel.travelDateTimeMinute)}
                    field="travelDateTimeMinute"
                    initialValue={_.get(data, "travelDateTimeMinute")}
                    content={{
                      combines: constants.export_list(constants.travelDateTimeMinute)
                    }}
                    getFieldDecorator={getFieldDecorator}
                  />
                </Col>
                <Col md={8}>
                  <VisaSelectItem
                    label={tr(resources.step_travel.travelDateTimeTimezone)}
                    field="travelDateTimeTimezone"
                    initialValue={_.get(data, "travelDateTimeTimezone")}
                    content={{
                      combines: constants.export_list(constants.travelDateTimeTimezone)
                    }}
                    getFieldDecorator={getFieldDecorator}
                  />
                </Col>
              </Row>
            </Form.Item>
          </>
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
const Form_Travel = Form.create()(MyForm);
export default Form_Travel;
