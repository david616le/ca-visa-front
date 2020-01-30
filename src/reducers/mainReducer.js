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
      bPassportFranceOrVenezuela: undefined,
      bFrance: undefined,
      bVenezuela: undefined,
      bHasGreenCard: undefined,
      bVenezuelaPassportExpired: undefined,
      bUCI: undefined,
    },
  
    welcome: {
      language: 'en-US',
      isRepresentative: undefined,
      isApplyingOnBehalfOfMinorChild: undefined,
    },
  
    prerequisite: {
      countryOfCitizenship: undefined,
      hasPassportIssuedByMFA: undefined,
      hasIsraeliNationalPassport: undefined,
      hasEPassport: undefined,
      isPermanentResidentOfUSAndHaveProofOfPermResidence: undefined,
      isTravellingByAir: undefined,
      travelDocumentType: undefined,
      taiwanIDNumber: undefined,
      taiwanIDNumberReEnter: undefined,
      usaResidentCardNumber: undefined,
      usaResidentCardNumberReEnter: undefined,
      usaResidentCardExpiryDate: undefined,
      passportNotedNationality: undefined,
    },
    personalDetails: {
      lastName: undefined,
      firstName: undefined,
      dob: undefined,
      countryOfBirth: undefined,
      cityTownOfBirth: undefined,
      additionalCitizenships: [undefined],
      additionalCountriesOfCitizenship: undefined,
      taiwanIDNumber: undefined,
      taiwanIDNumberReEnter: undefined,
      usaResidentCardNumber: undefined,
      usaResidentCardNumberReEnter: undefined,
      gender: undefined,
      maritalStatus: undefined,
      hasPreviouslyAppliedToCanada: undefined,
      uci: undefined,
      uciReEnter: undefined,
      availableFunds: undefined,
      passportNumber: undefined,
      passportNumberReEnter: undefined,
      issueDate: undefined,
      expiryDate: undefined,
    },
    employmentDetails: {
      occupation: undefined,
      title: undefined,
      companyEmployerSchoolFacilityName: undefined,
      country: undefined,
      province: undefined,
      state: undefined,
      city: undefined,
      fromDateYear: undefined,
    },
    contactDetails: {
      languageOfPreference: undefined,
      emailAddress: undefined,
      emailAddressReEnter: undefined,
      aptUnit: undefined,
      streetNo: undefined,
      streetAddress: undefined,
      streetAddressAlt: undefined,
      city: undefined,
      country: undefined,
      province: undefined,
      state: undefined,
      district: undefined,
      postalCode: undefined,
      zipCode: undefined,
    },
    travelDetails: {
      isTravelDateKnown: undefined,
      travelDate: undefined,
      travelDateTimeHour: undefined,
      travelDateTimeMinute: undefined,
      travelDateTimeTimezone: undefined,
    },
    backgroundQuestions: {
      refusedVisaOrPermitOrDeniedEntryToCanada: undefined,
      refusedVisaOrPermitOrDeniedEntryToCanadaDetails: undefined,
      committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhere: undefined,
      committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhereDetails: undefined,
      inThePastTwoYearsWereYouDiagnosedOrInCloseContactWithTuberculosis: undefined,
      isYourContactWithTuberculosisTheResultOfBeingAHeathCareWorker: undefined,
      haveYouEverBeenDiagnosedWithTuberculosis: undefined,
      doYouHaveOneOfTheseConditions: undefined,
      haveOrWillHaveHealthInsuranceValidInCanadaDuringStayDetails: undefined,
    },
    consentAndDeclaration: {
      inAggreance: undefined,
      fullName: undefined,
      dateSignedYear: undefined,
      dateSignedMonth: undefined,
      dateSignedDay: undefined,
    },
    representative: {
      representativeRelationship: undefined,
      representativeCompensated: undefined,
      membershipIdNumber: undefined,
      province: undefined,
      familyName: undefined,
      firstName: undefined,
      organizationName: undefined,
      mailingAddress: undefined,
      postalCodeZip: undefined,
      phoneNumber: undefined,
      faxNumber: undefined,
      emailAddress: undefined,
      declareContactAndInformationIsTruthy: undefined,
      understandAndAccept: undefined,
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
          before: {
            ...initialState.ds160.before,
            ...action.initValue.ds160.before,
          }
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
