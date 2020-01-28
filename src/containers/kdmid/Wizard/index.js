import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import VisaBanner from '@bit/jasonhendricksdev.visa.visa-banner'
import VisaHeader from '@bit/jasonhendricksdev.visa.visa-header'
import { DS160 } from '../../../actions/types'
import { Spin, notification, Progress } from 'antd'
import objectAssignDeep from 'object-assign-deep'
import { withCookies } from 'react-cookie'
import FormWelcome from './Step1_Welcome'
import FormRepresentative from './Step2_Representative'
import FormPrerequisite from './Step3_Prerequisite'
import FormPassport from './Step4_Passport'
import FormEmployment from './Step5_Employment'
import FormContact from './Step6_Contact'
import FormTravel from './Step7_Travel'

import FormConsent from './Step9_Consent'
import Form_Final from './Final'

import moment from 'moment'
import './index.scss'

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Submit without payment',
    description:
      type == 'success' ? 'Successfully submitted. It may take few minutes to process' : 'Failed to submit',
  });
};

class DS160_Wizard extends Component {
  static defaultProps = {
    token: null
  }
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { token } = this.props
    if( token )
      this.props.loadApplicationFromDB( DS160.DS160_GET_REQUEST, token )
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if( this.props.token != nextProps.token ) {
      if( nextProps.token )
        this.props.loadApplicationFromDB( DS160.DS160_GET_REQUEST, token )
    }
  }

  onPrev = (data, field) => {
    if(field != '')
      this.props.updateValues( DS160.DS160_UPDATE_VALUES, objectAssignDeep(this.props.ds160, {[field]: data}));
    else
      this.props.updateValues( DS160.DS160_UPDATE_VALUES, data );
    this.props.onPrevStep(DS160.DS160_PREV_STEP);

    const { agency } = this.props
    if(agency) {
      this.props.history.push({
        pathname: '/visa/application-form', 
        search: `?agency=${agency}`
      });  
    } else {
      this.props.history.push('/visa/application-form')
    }

    window.scrollTo(0, 0); 
  }

  onNext = (data, field) => {
    if(field != '')
      this.props.updateValues( DS160.DS160_UPDATE_VALUES, objectAssignDeep(this.props.ds160, {[field]: data}) );
    else
      this.props.updateValues( DS160.DS160_UPDATE_VALUES, data );
    this.props.onNextStep(DS160.DS160_NEXT_STEP);

    const { agency } = this.props
    if(agency) {
      this.props.history.push({
        pathname: '/visa/application-form', 
        search: `?agency=${agency}`
      });  
    } else {
      this.props.history.push('/visa/application-form')
    }

    window.scrollTo(0, 0); 
  }

  onSaveAndContinue = (data, field) => {
    const { agency } = this.props
    const payload = {
      email: '',
      completed: false,
      step_index: this.props.step_index,
      data: field != '' ? objectAssignDeep(this.props.ds160, {[field]: data }) : objectAssignDeep(this.props.ds160, data),
      agency: agency
    }
    this.props.onSaveAndContinueLater(DS160.DS160_SAVE_REQUEST, payload, this.props.applicationId, (result) => {
      if(agency) {
        this.props.history.push({
          pathname: '/visa/application-form-later', 
          search: `?agency=${agency}`
        });  
      } else {
        this.props.history.push('/visa/application-form-later')
      }
    })
  }

  onSubmit = (data, field) => {
    const { agency } = this.props
    const payload = {
      email: '',
      completed: true,
      step_index: this.props.step_index,
      data: field != '' ? objectAssignDeep(this.props.ds160, {[field]: data }) : objectAssignDeep(this.props.ds160, data),
      agency: agency
    }
    this.props.onSaveAndContinueLater(DS160.DS160_SAVE_REQUEST, payload, this.props.applicationId, (result) => {
      if(agency) {
        // window.location.href = `https://apply.usvisaappointments.com/us-visa-interview/`
      } else {
        window.location.href = `https://russia-evisa-application.com/checkout/?add-to-cart=16&application_number=${result.app_id}&token=${result._id}`
        // needs to implement correct order id
      }
    })
    
  }

  onSubmitWithoutPayment = (data, field) => {
    const { agency } = this.props
    const payload = {
      email: '',
      completed: true,
      step_index: this.props.step_index,
      withoutPayment: true,
      data: field != '' ? objectAssignDeep(this.props.ds160, {[field]: data }) : objectAssignDeep(this.props.ds160, data),
      agency: agency
    }
    this.props.onSaveAndContinueLater(DS160.DS160_SAVE_REQUEST, payload, this.props.applicationId, (result) => {
      openNotificationWithIcon('success')
    })
  }

  handleSubmitWithoutPayment = (e, form, handleDates, field) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if( handleDates )
          this.onSubmitWithoutPayment(handleDates(values), field)
        else 
          this.onSubmitWithoutPayment(values, field)
      }
    });
  }

  handleSubmit = (e, form, handleDates, field) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if( handleDates )
          this.onSubmit(handleDates(values), field)
        else 
          this.onSubmit(values, field)
      }
    });
  }

  handlePrev = (e, form, handleDates, field) => {
    e.preventDefault();
    const values = form.getFieldsValue();
    if(handleDates)
      this.onPrev(handleDates(values), field)
    else
      this.onPrev(values, field)
  }

  handleSave = (e, form, handleDates, field) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if( handleDates )
          this.onSaveAndContinue(handleDates(values), field)
        else 
          this.onSaveAndContinue(values, field)
      }
    });
  }

  handleNext = (e, form, handleDates, field) => {
    e.preventDefault();
    console.log(field, handleDates, form)
    form.validateFieldsAndScroll((err, values) => {
      console.log(err)
      if (!err) {
        console.log(values)
        if(handleDates)
          this.onNext(handleDates(values), field);
        else
          this.onNext(values, field);
      }
    });
  };

  onChangeCitizenCode = () => { 
    this.props.initVisitArea(DS160.DS160_INIT_VISIT_AREA)
  }

  render() {
    const { step_index, ds160, loading, token, agency } = this.props

    if(loading) {
      return <Spin tip="Please wait..." id="visa-ds160-save-and-continue-spin">
      </Spin>
    }

    let form_render = ''
    const dob = _.get(ds160, 'personalDetails.dob')
    let age = 0

    let fields_list = [
      null, 
      "welcome",
      "representative", 
      "prerequisite", 
      "personalDetails",
      "employmentDetails",
      "contactDetails",
      "travelDetails",
      "backgroundQuestions",
      "consentAndDeclaration",
      "final",
    ]

    if (step_index > 1) {
      if (_.get(ds160, 'welcome.isRepresentative') !== '0')
        fields_list.splice(2, 1)
    }

    if (dob) {
      age = moment().diff(moment(dob, 'DD.MM.YYYY'), 'years', true)
      console.log('age: ', age)
      if (age < 18)
        fields_list = fields_list.filter(item => item !== 'employmentDetails' && item !== 'backgroundQuestions')
    }

    let field = fields_list[step_index]

    console.log(field, step_index, _.get(ds160, 'welcome.isRepresentative'))

    let shared_params = {
      handlePrev: (e, form, handleDates) => this.handlePrev(e, form, handleDates, field),
      handleNext: (e, form, handleDates) => this.handleNext(e, form, handleDates, field),
      handleSave: (e, form, handleDates) => this.handleSave(e, form, handleDates, field),
      agency: agency,
      lang: _.get(ds160, 'welcome.language') || 'en',
      data: _.get(ds160, field),
      dob,
      age,
    }

    switch(field) {
      case 'welcome':
        form_render = <FormWelcome {...shared_params} showPrev={false} />
        break
      case 'representative':
        form_render = <FormRepresentative {...shared_params} />
        break
      case 'prerequisite':
        form_render = <FormPrerequisite {...shared_params} />
        break
      case 'personalDetails':
        form_render = <FormPassport {...shared_params} />
        break
      case 'employmentDetails':
        form_render = <FormEmployment {...shared_params} />
        break
      case 'contactDetails':
        form_render = <FormContact {...shared_params} />
        break
      case 'travelDetails':
        form_render = <FormTravel {...shared_params} />
        break
      case 'backgroundQuestions':
        break
      case 'consentAndDeclaration':
        form_render = <FormConsent {...shared_params} />
        break
      case 'final':
        form_render = <Form_Final {...shared_params} 
            handleSubmit={(e, form, handleDates) => this.handleSubmit(e, form, handleDates, field)} 
            handleSubmitWithoutPayment={(e, form, handleDates) => this.handleSubmitWithoutPayment(e, form, handleDates, field)}/>
        break;
    }  

    return (
      <div className="visa-ds160">
        <VisaHeader className={ step_index == 1 ? "visa-com-header-first" : "visa-com-header-not-first" }/>
        <VisaBanner backgroundColor="#428bca" className={ step_index == 1 ? "visa-com-banner-first" : "visa-com-banner-not-first" }>
          Application for an Electronic Travel Authorization (eTA)
        </VisaBanner>
        <Progress strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} percent={parseInt(step_index * 100.0 / (fields_list.length - 1))} status="active" style={{ width: '80%', left: '10%'}}/>
        <div className="visa-ds160__content container">
          {form_render}
        </div>
        
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onNextStep: (type) => {
      dispatch({ type })
    },
    onPrevStep: (type) => {
      dispatch({ type })
    },
    updateValues: (type, values) => {
      dispatch({ type, values })
    },
    onSaveAndContinueLater: (type, payload, applicationId, cb) => {
      dispatch({ type, payload, applicationId, cb })
    },
    loadApplicationFromDB: (type, applicationId) => {
      dispatch({ type, applicationId })
    },
    initVisitArea: (type) => {
      dispatch({ type })
    }
  }
}

const mapStateToProps = state => ({
  step_index: state.ca.step_index,
  ds160: state.ca.ds160,
  loading: state.ca.loading,
  applicationId: state.ca.applicationId,  
})


export default withCookies(withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DS160_Wizard),
))
