import { API_GITHUB, DS160 } from '../actions/types'
import objectAssignDeep from 'object-assign-deep'

const initialState = {
  loading: false,

  applicationId: null,

  email: '',
  step_index: 1,
  loading_pay: false,
  paid: false,
  checkout_result: null,
  ds160: {
    before: {
      bPassportFranceOrVenezuela: true,
      bFrance: false,
      bVenezuela: true,
      bHasGreenCard: true,
      bVenezuelaPassportExpired: false,
      bUCI: null,
    },
  
    welcome: {
      language: 'en-US',
      isRepresentative: '0',
      isApplyingOnBehalfOfMinorChild: '1',
    },
  
    prerequisite: {
      countryOfCitizenship: '0',
      hasPassportIssuedByMFA: '0',
      hasIsraeliNationalPassport: '0',
      hasEPassport: '0',
      isPermanentResidentOfUSAndHaveProofOfPermResidence: '0',
      isTravellingByAir: undefined,
      travelDocumentType: '0',
      taiwanIDNumber: '123456789',
      taiwanIDNumberReEnter: '123456789',
      usaResidentCardNumber: '000001001',
      usaResidentCardNumberReEnter: '000001001',
      usaResidentCardExpiryDate: '04.03.2024',
      passportNotedNationality: '12',
    },
    personalDetails: {
      lastName: 'Surname',
      firstName: 'Given',
      dob: '11.02.1998',
      countryOfBirth: '2',
      cityTownOfBirth: 'asdf',
      additionalCitizenships: ['3', '5'],
      additionalCountriesOfCitizenship: undefined,
      taiwanIDNumber: undefined,
      taiwanIDNumberReEnter: undefined,
      usaResidentCardNumber: undefined,
      usaResidentCardNumberReEnter: undefined,
      gender: '1',
      maritalStatus: '0',
      hasPreviouslyAppliedToCanada: '0',
      uci: '123',
      uciReEnter: '123',
      availableFunds: undefined,
      passportNumber: 'M12345678',
      passportNumberReEnter: 'M12345678',
      issueDate: '04.01.2016',
      expiryDate: '06.04.2023',
    },
    employmentDetails: {
      occupation: '3',
      title: '4',
      companyEmployerSchoolFacilityName: 'Employer Name',
      country: '3',
      province: '3',
      state: undefined,
      city: 'city',
      fromDateYear: '2019',
    },
    contactDetails: {
      languageOfPreference: '0',
      emailAddress: 'a@a.com',
      emailAddressReEnter: 'a@a.com',
      aptUnit: '5',
      streetNo: 'streetNo',
      streetAddress: 'streetAddress',
      streetAddressAlt: 'streetAddressAlt',
      city: 'city',
      country: '3',
      province: undefined,
      state: undefined,
      district: 'district',
      postalCode: undefined,
      zipCode: undefined,
    },
    travelDetails: {
      isTravelDateKnown: '0',
      travelDate: '06.04.2021',
      travelDateTimeHour: '10',
      travelDateTimeMinute: '20',
      travelDateTimeTimezone: '4',
    },
    backgroundQuestions: {
      refusedVisaOrPermitOrDeniedEntryToCanada: '1',
      refusedVisaOrPermitOrDeniedEntryToCanadaDetails: null,
      committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhere: '1',
      committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhereDetails: null,
      inThePastTwoYearsWereYouDiagnosedOrInCloseContactWithTuberculosis: '1',
      isYourContactWithTuberculosisTheResultOfBeingAHeathCareWorker: undefined,
      haveYouEverBeenDiagnosedWithTuberculosis: undefined,
      doYouHaveOneOfTheseConditions: '3',
      haveOrWillHaveHealthInsuranceValidInCanadaDuringStayDetails: 'Hello',
    },
    consentAndDeclaration: {
      inAggreance: true,
      fullName: 'Given SurnameC',
      dateSignedYear: undefined,
      dateSignedMonth: undefined,
      dateSignedDay: undefined,
    },
    representative: {
      representativeRelationship: '2',
      representativeCompensated: '0',
      membershipIdNumber: '1111',
      province: 'Province',
      familyName: 'FamilyName',
      firstName: 'FirstName',
      organizationName: 'Organization',
      mailingAddress: 'Street, Alt, District',
      postalCodeZip: '123456',
      phoneNumber: '123456789',
      faxNumber: '123',
      emailAddress: 'a@a.com',
      declareContactAndInformationIsTruthy: true,
      understandAndAccept: true,
    },
    etaExpansion: {
      hasCanadianTemporaryVisa: undefined,
      hasNonImmigrantVisa: undefined,
      nonImmigrantVisaNumber: undefined,
      nonImmigrantVisaNumberReEnter: undefined,
      nonImmigrantVisaNumberExpiryDateYear: undefined,
      nonImmigrantVisaNumberExpiryDateMonth: undefined,
      nonImmigrantVisaNumberExpiryDateDay: undefined,
    }
  }
}
function mainReducer(state = initialState, action) {
  switch (action.type) {
    case DS160.DS160_INIT_VISIT_AREA: {
      return {
        ...state,
        ds160: {
          ...state.ds160,
          visit: {
            ...state.ds160.visit,
            visitArea: null
          }
        }
      }
    }
    case DS160.DS160_GET_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case DS160.DS160_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        step_index: action.data.step_index,
        applicationId: action.applicationId,
        ds160: action.data.data
      };
    }
    case DS160.DS160_GET_FAILURE: {
      return {
        ...initialState,
        loading: false
      };
    }
    case DS160.DS160_SAVE_REQUEST: {
      return {
        ...state,
        loading: true,
        completed: action.payload.completed
      };
    }
    case DS160.DS160_SAVE_SUCCESS: {
      return {
        ...state,
        loading: false,
        applicationId: action.data._id
      };
    }
    case DS160.DS160_SAVE_FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    case DS160.DS160_NEXT_STEP: {
      return {
        ...state,
        step_index: state.step_index + 1
      }
    }
    case DS160.DS160_PREV_STEP: {
      return {
        ...state,
        step_index: state.step_index - 1
      }
    }
    case DS160.DS160_UPDATE_VALUES: {
      return {
        ...state,
        ds160: objectAssignDeep(state.ds160, action.values)
      }
    }
    case DS160.DS160_INIT_STATE: {
      console.log(action.initValue)
      return {
        ...initialState,
        ...action.initValue,
        ds160: {
          ...initialState.ds160,
          ...action.initValue.ds160,
          welcome: {
            ...initialState.ds160.welcome,
            ...action.initValue.ds160.welcome,
          },
        }
      }
    }
    case DS160.DS160_CHECKOUT_REQUEST: {
      return {
        ...state,
        loading_pay: true
      }
    }
    case DS160.DS160_CHECKOUT_SUCCESS: {
      
      return {
        ...state,
        loading_pay: false,
        paid: action.data.response == 1 ? true : false,
        checkout_result: action.data.response == 1 ? true : false,
      }
    }
    case DS160.DS160_CHECKOUT_FAILURE: {
      return {
        ...state,
        loading_pay: false,
        paid: false,
        checkout_result: false
      }
    }

    case DS160.RESET_CHECKOUT_RESULT: {
      return {
        ...state,
        checkout_result: null
      }
    }
    default: {
      return state
    }
  }
}

export default mainReducer
