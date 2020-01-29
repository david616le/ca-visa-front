export const translate = (r, lang) => {
    if(!lang) 
        return r.en ? r.en : ''
    const pre = lang.split('-')[0]; 
    return r[pre] ? r[pre] : (r.en ? r.en : '') 
}
const resources = {
    before: {
        section_title: {
            en: `Make sure you enter your passport information correctly`,
            fr: ``,
            it: ``,
            de: ``,
            es: ``
        },
        bPassportFranceOrVenezuela: {
            en: `Do you have a passport issued by France or Venezuela? `,
            fr: ``,
            it: ``,
            de: ``,
            es: ``
        },
        bFrance: {
            en: `Which country issued your passport? `,
            fr: ``,
            it: ``,
            de: ``,
            es: ``
        },
        bHasGreenCard: {
            en: `Are you a lawful permanent resident of the U.S. and have an alien registration card (Green Card)? `,
            fr: ``,
            it: ``,
            de: ``,
            es: ``
        },
        bVenezuelaPassportExpired: {
            en: `Has the printed expiry date on your Venezuelan passport already passed? `,
            fr: ``,
            it: ``,
            de: ``,
            es: ``
        },
        bUCI: {
            label: {
                en: `Has the printed expiry date on your Venezuelan passport already passed? `,
                fr: ``,
                it: ``,
                de: ``,
                es: ``
            },
            extra: {
                en: `This is an 8 or 10-digit number. You have this number if you applied to IRCC in the past. You can find it on an approval or refusal letter from IRCC.`,
                fr: ``,
                it: ``,
                de: ``,
                es: ``
            },
        },
        start_button: {
            en: `Start Your Application`,
            fr: `Compléter un nouveau formulaire`,
            es: `Rellenar nuevo cuestionario`,
            de: `Neuen Antragsformular ausfüllen`,
            it: `Compila un nuovo modulo`,
        },
    },
    validations: {
        required: {
            en: `This field is required`,
            fr: `Ce champ de saisie est obligatoire`,
            es: `Campo obligatorio para rellenar`,
            de: `Das ist ein Pflichtfeld.`,
            it: `E obbligatorio compilare questo campo`,
        },
        validateEmailConfirm: {
            notmatch: {
                en: `The confirmation e-mail must match your e-mail address.`,
                fr: `L'e-mail de confirmation doit correspondre à votre adresse e-mail.`,
                es: `El e-mail de confirmación debe coincidir con su dirección de correo electrónico.`,
                de: `Die Bestätigungs-e-mail müssen mit Ihrem e-mail-Adresse.`,
                it: `L'e-mail di conferma deve corrispondere il vostro indirizzo di posta elettronica.`,
            },
        },
    },
    yes: {
        en: `Yes`,
        fr: `Oui`,
        it: `Sì`,
        es: `Sí`,
        de: `Ja`,
    },
    no: {
        en: `No`,
        fr: `Non`,
        it: `No`,
        es: `No`,
        de: `No`,
    },
    add_another: {
        en: `Add another`,
        fr: `Ajouter un autre`,
        it: `Agrega otro`,
        es: `Neue hinzufügen`,
        de: `Aggiungi un altro`,
    },
    prev: {
        en: 'Prev',
        fr: 'Prec',
        es: 'Antes',
        de: 'Bis',
        it: 'Prec',
    },
    next: {
        en: 'Next',
        fr: 'Suiv',
        es: 'Próximo',
        de: 'Folgende',
        it: 'Seguente',
    },
    save_and_continue_later: {
        en: 'Save an Continue Later',
        fr: 'Enregistrer un continuer plus tard',
        es: 'Guardar y continuar más tarde',
        de: 'Speichern und später fortsetzen',
        it: 'Salva e continua più tardi',
    },
    submit_with_payment: {
        en: 'SUBMIT AND MAKE YOUR PAYMENT',
        fr: 'SOUMETTRE ET EFFECTUER VOTRE PAIEMENT',
        es: 'ENVÍE Y HAGA SU PAGO',
        de: 'Übermitteln Sie und machen Sie Ihre Zahlung',
        it: 'INVIA E EFFETTUA IL TUO PAGAMENTO',
    },
    language: {
        label: {
            en: `Hints and help language`,
            fr: `Astuces et langage d'aide`,
            de: `Tipps und Hilfe-Sprache`,
            it: `Aiuto e suggerimenti lingua`,
            es: `Consejos y ayuda de idioma`,
        },
        extra: {
            en: `Select language in which you would like the hints, regarding completion of the application form, to be displayed`,
            fr: `Indiquez la langue des conseils sur le remplissage de votre demande de visa`,
            es: `Indique el idioma de soplos de la lista “Hints and help language”.`,
            de: `Geben Sie bitte die Sprache der Ausfüllhilfen an.`,
            it: `Indicare la lingua delle spiegazioni`,
        },
    },
    submit_your_application: {
        en: `Submit your application`,
        fr: `Soumettez votre candidature`,
        es: `Envía tu solicitud`,
        de: `Reichen Sie Ihre Bewerbung ein`,
        it: `Invia la tua domanda`,
    },
    continue_to_appointment: {
        en: 'Continue to Your Appointment Information',
        fr: 'Continuez vers vos informations de rendez-vous',
        es: 'Continúe con la información de su cita',
        de: 'Fahren Sie mit Ihren Termininformationen fort',
        it: `Continua con le informazioni sull'appuntamento`,
    },
    step_welcome: {
        section_title: {
            en: `DISCLAIMER: On this website you can fill out the electronic version of the Russian visa application form and print the visa application form, required for applying for a visa to the Russian Federation. EACH TRAVELER MUST COMPLETE HIS/HER OWN FORM IN ORDER TO GET HIS/HER VISA. The estimated average time to complete this submission is 15 minutes per respondent. Before you begin this application, please read carefully this disclaimer and make sure that you have a valid passport. This application will only accept the following credit cards: MasterCard, VISA and Discover (JCB, Diners Club). Our agency charges $59 for this premium processing service that offers 100% Refund Guarantee if your visa is denied. This charge is NON-REFUNDABLE except if your visa is denied. All information provided by you, or on your behalf by a designated third party, must be true and correct.`,
            fr: `AVERTISSEMENT: Sur ce site, vous pouvez remplir la version électronique du formulaire de demande de visa russe et imprimer le formulaire de demande de visa, requis pour demander un visa pour la Fédération de Russie. CHAQUE VOYAGEUR DOIT REMPLIR SON PROPRE FORMULAIRE POUR OBTENIR SON VISA. Le temps moyen estimé pour terminer cette soumission est de 15 minutes par répondant. Avant de commencer cette demande, veuillez lire attentivement cette clause de non-responsabilité et assurez-vous d'avoir un passeport valide. Cette application n'acceptera que les cartes de crédit suivantes: MasterCard, VISA et Discover (JCB, Diners Club). Notre agence facture 59 $ pour ce service de traitement premium qui offre une garantie de remboursement à 100% si votre visa est refusé. Cette charge est NON REMBOURSABLE sauf si votre visa est refusé. Toutes les informations fournies par vous ou en votre nom par un tiers désigné doivent être véridiques et correctes.`,
            it: `DISCLAIMER: Su questo sito Web è possibile compilare la versione elettronica del modulo di domanda di visto russo e stampare il modulo di domanda di visto, necessario per richiedere un visto alla Federazione Russa. OGNI VIAGGIATORE DEVE COMPLETARE IL SUO PROPRIO MODULO PER OTTENERE IL SUO VISTO. Il tempo medio stimato per completare questo invio è di 15 minuti per rispondente. Prima di iniziare questa domanda, leggi attentamente questo disclaimer e assicurati di avere un passaporto valido. Questa applicazione accetta solo le seguenti carte di credito: MasterCard, VISA e Discover (JCB, Diners Club). La nostra agenzia addebita $ 59 per questo servizio di elaborazione premium che offre una garanzia di rimborso del 100% in caso di rifiuto del visto. Questo addebito NON È RIMBORSABILE, tranne se il visto viene negato. Tutte le informazioni fornite da te o per tuo conto da una terza parte designata devono essere vere e corrette.`,
            de: `HAFTUNGSAUSSCHLUSS: Auf dieser Website können Sie die elektronische Version des russischen Visumantragsformulars ausfüllen und das für die Beantragung eines Visums bei der Russischen Föderation erforderliche Visumantragsformular ausdrucken. Jeder Reisende muss sein eigenes Formular ausfüllen, um sein Visum zu erhalten. Die geschätzte durchschnittliche Zeit, um diese Einreichung abzuschließen, beträgt 15 Minuten pro Befragter. Lesen Sie diesen Haftungsausschluss sorgfältig durch, bevor Sie mit der Beantragung beginnen, und vergewissern Sie sich, dass Sie einen gültigen Reisepass besitzen. Diese Anwendung akzeptiert nur die folgenden Kreditkarten: MasterCard, VISA und Discover (JCB, Diners Club). Unsere Agentur berechnet 59 USD für diesen Premium-Bearbeitungsservice, der eine 100% ige Rückerstattungsgarantie bietet, wenn Ihr Visum abgelehnt wird. Diese Gebühr ist NICHT RÜCKERSTATTBAR, es sei denn, Ihr Visum wird verweigert. Alle von Ihnen oder in Ihrem Namen von einem bestimmten Dritten bereitgestellten Informationen müssen wahr und richtig sein.`,
            es: `DESCARGO DE RESPONSABILIDAD: en este sitio web puede completar la versión electrónica del formulario de solicitud de visa rusa e imprimir el formulario de solicitud de visa, requerido para solicitar una visa a la Federación Rusa. CADA VIAJERO DEBE COMPLETAR SU PROPIO FORMULARIO PARA OBTENER SU VISA. El tiempo promedio estimado para completar este envío es de 15 minutos por encuestado. Antes de comenzar esta solicitud, lea detenidamente este descargo de responsabilidad y asegúrese de tener un pasaporte válido. Esta aplicación solo aceptará las siguientes tarjetas de crédito: MasterCard, VISA y Discover (JCB, Diners Club). Nuestra agencia cobra $ 59 por este servicio de procesamiento premium que ofrece una garantía de reembolso del 100% si se le niega su visa. Este cargo NO ES REEMBOLSABLE, excepto si su visa es denegada. Toda la información proporcionada por usted, o en su nombre por un tercero designado, debe ser verdadera y correcta.`
        },
        isRepresentative: {
            en: 'Are you applying on behalf of someone?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        isApplyingOnBehalfOfMinorChild: {
            en: 'Are you applying on behalf of a minor child?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        }
    },
    step_representative: {
        section_title: {
            en: 'Parent/guardian or representative details',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        representativeRelationship: {
            en: 'I am',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        representativeCompensated: {
            en: 'Are you being paid to represent the applicant and complete the form on their behalf?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        familyName: {
            en: 'Surname(s) / last name(s)',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        firstName: {
            en: 'Given name(s) / first name(s)',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        membershipIdNumber: {
            en: 'Membership ID number',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        province: {
            en: 'Which province or territory?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        organizationName: {
            en: 'Name of firm, organization',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        mailingAddress: {
            en: 'Mailing address',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        phoneNumber: {
            en: 'Telephone number',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        faxNumber: {
            en: 'Fax number',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        emailAddress: {
            en: 'Email address',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        postalCodeZip: {
            en: 'Postal code',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        declareContactAndInformationIsTruthy: {
            label: {
                en: `Representative's declaration`,
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: 'I declare that my contact and personal information above is truthful, complete and correct.',
                fr: '',
                es: '',
                de: '',
                it: ``,
            }
        },
        understandAndAccept: {
            label: {
                en: `Representative's authorization`,
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: `I understand and accept that I am the person appointed by the applicant to conduct business on the applicant or sponsor's behalf with Immigration, Refugees and Citizenship Canada and the Canada Border Services Agency.`,
                fr: '',
                es: '',
                de: '',
                it: ``,
            }
        }
    },
    step_prerequisite: {
        section_title: {
            en: 'Complete the application form (Prerequisite)',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        travelDocumentType: {
            en: 'What travel document do you plan to use to travel to Canada?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        countryOfCitizenship: {
            label: {
                en: 'Select the code that matches the one on your passport.',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: 'Find this code on your passport information page - see the field named "Code", "Issuing country", "Authority" or "Country code".',
                fr: '',
                es: '',
                de: '',
                it: ``,
            }
        },
        hasIsraeliNationalPassport: {
            en: 'For this trip, will you use a national Israeli passport?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        passportNotedNationality: {
            label: {
                en: 'What is the nationality noted on this passport?',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: 'See "Nationality" on your passport information page',
                fr: '',
                es: '',
                de: '',
                it: ``,
            }
        },
        isPermanentResidentOfUSAndHaveProofOfPermResidence: {
            en: 'Are you a lawful permanent resident of the United States with a valid U.S. Citizenship and Immigration Services (USCIS) number?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        usaResidentCardNumber: {
            en: 'United States lawful permanent resident USCIS number',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        usaResidentCardNumberReEnter: {
            en: 'United States lawful permanent resident alien registration card (Green Card) number (re-enter)',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        usaResidentCardExpiryDate: {
            en: 'Date of expiry',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        hasPassportIssuedByMFA: {
            en: 'For this trip, will you use a passport issued by the Ministry of Foreign Affairs in Taiwan that includes your personal identification number?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        taiwanIDNumber: {
            en: 'Taiwan personal identification number',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        taiwanIDNumberReEnter: {
            en: 'Taiwan personal identification number (re-enter)',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        hasEPassport: {
            en: 'Will you use an electronic passport for this trip?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
    },
    step_passport: {
        section_title: {
            en: 'Passport details of applicant',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        passportNumber: {
            label: {
                en: 'Passport number',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: 'Enter the passport number exactly as it appears on the passport information page.',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
        },
        passportNumberReEnter: {
            label: {
                en: 'Passport number',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: 'You cannot copy and paste into this field.',
                fr: '',
                es: '',
                de: '',
                it: ``,
            }
        },
        lastName: {
            label: {
                en: 'Surname(s) / last name(s)',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: 'Please enter exactly as shown on your passport or identity document.',
                fr: '',
                es: '',
                de: '',
                it: ``,
            }
        },
        firstName: {
            label: {
                en: 'Given name(s) / first name(s)',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: 'Please enter exactly as shown on your passport or identity document.',
                fr: '',
                es: '',
                de: '',
                it: ``,
            }
        },
        dob: {
            en: 'Date of birth',
            fr: '',
            es: '',
            de: '',
            it: ``, 
        },
        gender: {
            en: 'Gender',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        maritalStatus: {
            en: 'Marital status',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        countryOfBirth: {
            en: 'Country/territory of birth',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        cityTownOfBirth: {
            en: 'City/town of birth',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        issueDate: {
            en: 'Date of issue of passport',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        expiryDate: {
            en: 'Date of expiry of passport',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
    },
    step_personal: {
        section_title: {
            en: 'Personal details of applicant',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        additionalCitizenships: {
            en: 'Indicate which countries/territories you are a citizen of.',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        hasPreviouslyAppliedToCanada: {
            en: 'Have you ever applied for or obtained a visa, an eTA or a permit to visit, live, work or study in Canada?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        uci: {
            en: 'Unique client identifier (UCI) / Previous Canadian visa, eTA or permit number (optional)',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        uciReEnter: {
            en: 'Unique client identifier (UCI) / Previous Canadian visa, eTA or permit number (re-enter)',
            fr: '',
            es: '',
            de: '',
            it: ``,
        }
    },
    step_employment: {
        section_title: {
            en: 'Employment information',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        occupation: {
            label: {
                en: 'Occupation',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: 'Select the option that best describes your current employment situation.',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
        },
        title: {
            label: {
                en: 'Job title',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: 'Select the option that best describes your job.',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
        },
        companyEmployerSchoolFacilityName: {
            en: 'Name of employer or school, as appropriate.',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        country: {
            en: 'Country/territory',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        province: {
            en: 'Province/state',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        city: {
            en: 'City/town',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        fromDateYear: {
            en: 'Since what year?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        }
    },
    step_contact: {
        section_title: {
            en: 'Contact information',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        languageOfPreference: {
            en: 'Preferred language to contact you ',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        emailAddress: {
            label: {
                en: 'Email address',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: 'Please enter a valid email address. It will be used to contact you about your application.',
                fr: '',
                es: '',
                de: '',
                it: ``,
            }
        },
        emailAddressReEnter: {
            label: {
                en: 'Email address (re-enter)',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: 'You cannot copy and paste into this field.',
                fr: '',
                es: '',
                de: '',
                it: ``,
            }
        }
    },
    step_residential: {
        section_title: {
            en: 'Residential address',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        section_description: {
            en: 'Enter your permanent home address. Do not enter an address where you live temporarily.',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        aptUnit: {
            en: 'Apartment/unit number (if applicable)',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        streetNo: {
            en: 'Street/civic number or house name',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        streetAddress: {
            en: 'Street address/name',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        streetAddressAlt: {
            en: 'Street address/name line 2 (if applicable)',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        city: {
            en: 'City/town',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        country: {
            en: 'Country/territory',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        district: {
            en: 'District/region',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        state: {
            en: 'Province/state',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        zipCode: {
            en: 'ZIP code',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
    },
    step_travel: {
        section_title: {
            en: 'Travel information',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        isTravelDateKnown: {
            label: {
                en: 'Do you know when you will travel to Canada?',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: 'This information may help us to process your application. If you do not know when you will travel to Canada, please select "no".',
                fr: '',
                es: '',
                de: '',
                it: ``,
            }
        },
        travelDate: {
            label: {
                en: 'Do you know when you will travel to Canada?',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: `If you don't know, you may enter an approximate date.`,
                fr: '',
                es: '',
                de: '',
                it: ``,
            }
        },
        travelTime: {
            en: 'Please enter the time your flight to Canada will depart',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        travelDateTimeHour: {
            en: 'Hour',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        travelDateTimeMinute: {
            en: 'Minute',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        travelDateTimeTimezone: {
            en: 'Timezone',
            fr: '',
            es: '',
            de: '',
            it: ``,
        }
    },
    step_background: {
        section_title: {
            en: 'Background Questions',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        refusedVisaOrPermitOrDeniedEntryToCanada: {
            en: 'Have you ever been refused a visa or permit, denied entry to, or ordered to leave Canada or any other country/territory?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        refusedVisaOrPermitOrDeniedEntryToCanadaDetails: {
            en: 'For each refusal, please indicate the country that refused you a visa or permit, or denied you entry, as well as the reasons provided to you by the country.',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhere: {
            en: 'Have you ever committed, been arrested for, been charged with or convicted of any criminal offence in any country/territory?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhereDetails: {
            en: 'For each arrest, charge, or conviction, please indicate where (city, country), when (month/year), the nature of the offence, and the sentence.',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        inThePastTwoYearsWereYouDiagnosedOrInCloseContactWithTuberculosis: {
            en: 'In the past two years, were you diagnosed with tuberculosis or have you been in close contact with a person with tuberculosis?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        isYourContactWithTuberculosisTheResultOfBeingAHeathCareWorker: {
            en: 'Is your contact with tuberculosis the result of being a health care worker?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        haveYouEverBeenDiagnosedWithTuberculosis: {
            en: 'Have you ever been diagnosed with tuberculosis?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        doYouHaveOneOfTheseConditions: {
            en: 'Have you ever been diagnosed with tuberculosis?',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        haveOrWillHaveHealthInsuranceValidInCanadaDuringStayDetails: {
            en: 'Please briefly indicate if there are additional details pertinent to your application. For example, an urgent need to travel to Canada. Provide relevant details to avoid delays in the processing of your application.',
            fr: '',
            es: '',
            de: '',
            it: ``,
        }
    },
    step_consent: {
        section_title: {
            en: 'Declaration of Applicant',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        // section_description_1: {
        //     en: 'I have read and understand the above declaration.',
        //     fr: '',
        //     es: '',
        //     de: '',
        //     it: ``,
        // },
        section_description_2: {
            en: 'I declare that the information I have given in this application is truthful, complete and correct.',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        section_description_3: {
            en: 'I understand that misrepresentation is an offence under section 127 of the Immigration and Refugee Protection Act and may result in a finding of inadmissibility to Canada or removal from Canada.',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        section_description_4: {
            en: 'I agree that by typing my name and clicking sign, I am electronically signing my application.',
            fr: '',
            es: '',
            de: '',
            it: ``,
        },
        inAggreance: {
            label: {
                en: 'I Agree',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: 'I Agree',
                fr: '',
                es: '',
                de: '',
                it: ``,
            }
        },
        fullName: {
            label: {
                en: 'Signature of applicant',
                fr: '',
                es: '',
                de: '',
                it: ``,
            },
            extra: {
                en: 'To sign, enter your name as it appears on your passport.',
                fr: '',
                es: '',
                de: '',
                it: ``,
            }
        }
    }
}

export default resources