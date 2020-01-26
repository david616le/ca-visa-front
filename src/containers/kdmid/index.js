import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Icon, Form, Select, Row, Col, Checkbox, Alert } from 'antd';
import VisaHeader from '@bit/jasonhendricksdev.visa.visa-header'
import VisaBanner from '@bit/jasonhendricksdev.visa.visa-banner'
import VisaRadio from 'components/VisaRadio'
import VisaInput from 'components/VisaInput'
import { DS160 } from '../../actions/types'
import resources, { translate } from 'utils/resources'
import * as constants from 'utils/constants'
import * as utils from 'utils'

const { Option, OptGroup } = Select

import './index.scss'

const MyForm = ({
  agency, history, resetState, initLang = 'en-US', form,
}) => {
  const { getFieldDecorator, getFieldValue, setFieldsValue } = form
  const [lang, setLanguage] = useState('en-US')
  const tr = (r) => translate(r, lang);

  useEffect(() => {
    setLanguage(initLang)
  }, [initLang])

  function onStartApplication(e, form) {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
          console.log(values)
          if(agency) {
            history.push({
              pathname: '/visa/application-form', 
              search: `?agency=${agency}`
            });  
          } else {
            history.push('/visa/application-form')
          }
          resetState(DS160.DS160_INIT_STATE, {
            ds160: {
              welcome: {
                language: lang,
              },
            }
          })
      }
    });
  }

  function onChangeLang(lang) {
    setLanguage(lang)
  }

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

  getFieldDecorator('bPassportFranceOrVenezuela', { initialValue: undefined })

  return (
    <div className="visa-ds160">
      <VisaHeader />
      <VisaBanner>
        Canada Electronic Travel Authorization (eTA)
      </VisaBanner>
      <div className="visa-ds160__content container">
        <Form {...formItemLayout}>
          <div className="visa-global-field visa-global-border-bottom">
            <h2 className="visa-global-section-title ant-form-item-required">
              {tr(resources.before.section_title)}
            </h2>
          </div>

          <Form.Item label={tr(resources.language.label)} extra={tr(resources.language.extra)}>
            <Select placeholder="Select an Option" value={lang} onChange={onChangeLang} optionFilterProp="children" showSearch style={{ width: '300px' }}>
              <Option value="en-US">ENGLISH</Option>
              <Option value="fr-FR">FRANÇAIS (FRENCH)</Option>
              <Option value="es-ES">ESPAÑOL (SPANISH)</Option>
              <Option value="de-DE">DEUTSCH (GERMAN)</Option>
              <Option value="it-IT">ITALIANO (ITALIAN)</Option>
            </Select>
          </Form.Item>

          <VisaRadio
            label={tr(resources.before.bPassportFranceOrVenezuela)}
            field="bPassportFranceOrVenezuela"
            getFieldDecorator={getFieldDecorator}
            combines={[
              { label: 'Yes', value: true },
              { label: 'No', value: false },
            ]}
          />

          {getFieldValue('bPassportFranceOrVenezuela') === true && (
            <VisaRadio
              label={tr(resources.before.bFrance)}
              field="bFrance"
              getFieldDecorator={getFieldDecorator}
              combines={[
                { label: 'France', value: true },
                { label: 'Venezuela', value: false },
              ]}
            />
          )}

          {getFieldValue('bFrance') === false && (
            <VisaRadio
              label={tr(resources.before.bHasGreenCard)}
              field="bHasGreenCard"
              getFieldDecorator={getFieldDecorator}
              combines={[
                { label: 'Yes', value: true },
                { label: 'No', value: false },
              ]}
            />
          )}

          {getFieldValue('bHasGreenCard') === false && (
            <Alert
              message="You may need a visa to travel to Canada"
              description={
                <div><a style={{ textDecoration: 'underline' }}>Find out what document you need</a> to travel to, or transit through Canada.</div>}
              type="warning"
              showIcon
            />
          )}

          {getFieldValue('bHasGreenCard') === true && (
            <VisaRadio
              label={tr(resources.before.bVenezuelaPassportExpired)}
              field="bVenezuelaPassportExpired"
              getFieldDecorator={getFieldDecorator}
              combines={[
                { label: 'Yes', value: true },
                { label: 'No', value: false },
              ]}
            />
          )}

          {getFieldValue('bVenezuelaPassportExpired') === true && (
            <VisaRadio
              label={tr(resources.before.bUCI.label)}
              extra={tr(resources.before.bUCI.extra)}
              field="bUCI"
              getFieldDecorator={getFieldDecorator}
              combines={[
                { label: 'Yes', value: true },
                { label: 'No', value: false },
              ]}
            />
          )}

          {(getFieldValue('bUCI') === true || getFieldValue('bUCI') === false) && (
            <Alert
              message="Provisional passports issued by Venezuela are not valid for travel to Canada."
              description="If the printed expiry date on your passport has passed, you cannot use our online form to apply for an eTA."
              type="warning"
              showIcon
            />
          )}

          {(getFieldValue('bPassportFranceOrVenezuela') === false || getFieldValue('bFrance') === true || getFieldValue('bVenezuelaPassportExpired') === false) && (
            <div className="visa-global-btn-group" style={{textAlign: 'center', margin: '40px 0px'}}>
              <Button type="primary" onClick={(e) => onStartApplication(e, form)}>
                {tr(resources.before.start_button)}
                <Icon type="right" />
              </Button>
            </div>
          )}
          
        </Form>
      </div>
      
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    resetState: (type, initValue) => {
      dispatch({ type, initValue })
    },
  }
}
const DS160_HOME = Form.create()(MyForm)
export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(DS160_HOME),
)
