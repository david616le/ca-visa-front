import React, { Component } from "react";
import { Form, Button, Select } from "antd";
import * as constants from "../../../../utils/constants";
import * as utils from "../../../../utils";
import VisaSelect from "../../../../components/VisaSelect";
import { withCookies } from "react-cookie";
import resources, { translate } from "../../../../utils/resources";

const { Option } = Select;

class MyForm extends Component {
  static defaultProps = {
    showPrev: true,
    showNext: true
  };
  render() {
    const { getFieldDecorator, isFieldTouched } = this.props.form;
    const formItemLayout = {
      layout: "vertical",
      labelCol: {
        xs: { span: 24 }
      },
      wrapperCol: {
        sm: { span: 24 },
        md: { span: 12 }
      }
    };

    const { showPrev, showNext, data, agency, lang } = this.props;

    // const token = this.props.cookies.get('canada_token')
    const token = localStorage.getItem("canada_token");
    const user = JSON.parse(localStorage.getItem("canada_user"));

    // console.log(token)

    const tr = r => translate(r, lang);

    return (
      <Form {...formItemLayout}>
        <div className="visa-global-field visa-global-border-bottom">
          <h2 className="visa-global-section-title">
            {tr(resources.submit_your_application)}
          </h2>
        </div>
        <div className="visa-global-form-bottom-btn-group">
          <div style={{ position: 'absolute', right: '50px', top: '20px' }}>
            <Button type="primary" style={{ marginRight: '10px' }} onClick={e => this.props.handleFirst(e, this.props.form, this.handleDates)}>                
              {tr(resources.first)}
            </Button>
            {showPrev && (
              <Button style={{ marginRight: 8 }} onClick={e => this.props.handlePrev(e, this.props.form, this.handleDates)}>
                {tr(resources.prev)}
              </Button>
            )}
          </div>
          {showPrev && (
            <Button
              style={{ marginRight: 8 }}
              onClick={e =>
                this.props.handlePrev(e, this.props.form, this.handleDates)
              }
            >
              {tr(resources.prev)}
            </Button>
          )}
          {showNext && (
            <Button
              type="primary"
              onClick={e =>
                this.props.handleSubmit(e, this.props.form, this.handleDates)
              }
            >
              {agency
                ? "Continue to Your Appointment Information"
                : tr(resources.submit_with_payment)}
            </Button>
          )}
          {token && user.role == constants.USER_ROLE.ADMIN && (
            <Button
              type="danger"
              style={{ marginLeft: "10px" }}
              onClick={e =>
                this.props.handleSubmitWithoutPayment(
                  e,
                  this.props.form,
                  this.handleDates
                )
              }
            >
              SUBMIT WITHOUT PAYMENT
            </Button>
          )}
        </div>
      </Form>
    );
  }
}
const Form_Final = withCookies(Form.create()(MyForm));
export default Form_Final;
