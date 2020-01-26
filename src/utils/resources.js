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
        }
    },
    step_2: {
        disclaimer: {
            agency: {
    
            },
            customer: {
                en: `DISCLAIMER: Before you begin this application, please read carefully this disclaimer and make sure that you have a valid passport. This application will only accept the following credit cards: MasterCard, VISA and Discover (JCB, Diners Club). Our agency charges $59 for this premium processing service that offers 100% Refund Guarantee if your visa is denied. This charge is NON-REFUNDABLE except if your visa is denied. All information provided by you, or on your behalf by a designated third party, must be true and correct.`,
                fr: `AVERTISSEMENT: Avant de commencer cette application, veuillez lire attentivement cet avis de non-responsabilité et assurez-vous que vous avez un passeport valide. Cette application accepte uniquement les cartes de crédit suivantes: MasterCard, VISA et Discover (JCB, Diners Club). Notre agence facture 59$ pour ce service de traitement Premium qui offre une garantie de remboursement à 100% si votre visa est refusé. Ces frais sont NON REMBOURSABLES sauf si votre visa est refusé. Toutes les informations fournies par vous ou en votre nom par un tiers désigné doivent être véridiques et correctes.`,
                it: `NOTA BENE: Prima di iniziare questa domanda, si prega di leggere attentamente questo disclaimer e assicurarsi di avere un passaporto valido. Questa applicazione accetta solo le seguenti carte di credito: MasterCard, VISA e Discover (JCB, Diners Club). La nostra agenzia addebita $ 59 per questo servizio di elaborazione Premium che offre una garanzia di rimborso del 100% in caso di rifiuto del visto. Questo addebito NON È RIMBORSABILE, tranne se il visto viene negato. Tutte le informazioni fornite da te o per tuo conto da una terza parte designata devono essere vere e corrette.`,
                es: `DESCARGO DE RESPONSABILIDAD: Antes de comenzar esta solicitud, lea detenidamente este descargo de responsabilidad y asegúrese de tener un pasaporte válido. Esta aplicación solo aceptará las siguientes tarjetas de crédito: MasterCard, VISA y Discover (JCB, Diners Club). Nuestra agencia cobra $ 59 por este servicio de procesamiento Premium que ofrece una garantía de reembolso del 100% si se le niega su visa. Este cargo NO ES REEMBOLSABLE, excepto si su visa es denegada. Toda la información proporcionada por usted, o en su nombre por un tercero designado, debe ser verdadera y correcta.`,
                de: `HAFTUNGSAUSSCHLUSS: Bevor Sie mit der Beantragung beginnen, lesen Sie bitte diesen Haftungsausschluss sorgfältig durch und stellen Sie sicher, dass Sie einen gültigen Reisepass haben. Diese Anwendung akzeptiert nur die folgenden Kreditkarten: MasterCard, VISA und Discover (JCB, Diners Club). Unsere Agentur berechnet 59 USD für diesen Premium-Bearbeitungsservice, der eine 100% ige Rückerstattungsgarantie bietet, wenn Ihr Visum abgelehnt wird. Diese Gebühr ist NICHT RÜCKERSTATTBAR, es sei denn, Ihr Visum wird verweigert. Alle von Ihnen oder in Ihrem Namen von einem bestimmten Dritten bereitgestellten Informationen müssen wahr und richtig sein.`
            },
            check: {
                en: `I understand that I may be subject to administrative or criminal penalties if I knowingly and willfully make a materially false, fictitious, or fraudulent statement or representation in a visa application submitted by me or on my behalf.`,
                fr: `Je comprends que je peux être passible de sanctions administratives ou pénales si je fais sciemment et volontairement une déclaration ou une déclaration matériellement fausse, fictive ou frauduleuse dans une demande de visa présentée par moi-même ou en mon nom.`,
                it: `Comprendo che potrei essere soggetto a sanzioni amministrative o penali se faccio consapevolmente e intenzionalmente una dichiarazione o rappresentazione materialmente falsa, fittizia o fraudolenta in una domanda di visto presentata da me o per mio conto.`,
                es: `Entiendo que puedo estar sujeto a sanciones administrativas o penales si hago una declaración o representación materialmente falsa, ficticia o fraudulenta en una solicitud de visa presentada por mí o en mi nombre.`,
                de: `Ich verstehe, dass ich verwaltungs- oder strafrechtlich verfolgt werden kann, wenn ich in einem von mir oder in meinem Namen eingereichten Visumantrag wissentlich und vorsätzlich eine sachlich falsche, fiktive oder betrügerische Erklärung oder Darstellung abgebe.`
            }
        },
        confirm: {
            label: {
                en: `Please confirm that you have read and understand the Disclaimer above.`,
                fr: `Veuillez confirmer que vous avez lu et compris la clause de non-responsabilité ci-dessus.`,
                it: `Conferma di aver letto e compreso il Disclaimer sopra.`,
                es: `Confirme que ha leído y comprende el descargo de responsabilidad anterior.`,
                de: `Bitte bestätigen Sie, dass Sie den obigen Haftungsausschluss gelesen und verstanden haben.`,
            },
            check: {
                en: `I have read and understand the Disclaimer above and agree with these terms.`,
                fr: `J'ai lu et compris la clause de non-responsabilité ci-dessus et accepte ces conditions.`,
                it: `He leído y entiendo el descargo de responsabilidad anterior y estoy de acuerdo con estos términos.`,
                es: `Ich habe den obigen Haftungsausschluss gelesen und verstanden und bin mit diesen Bedingungen einverstanden.`,
                de: `Ho letto e compreso il Disclaimer sopra e sono d'accordo con questi termini.`,
            }
        }
    },
    register: {
        section_title: {
            en: 'Create your Password',
            fr: 'Créez votre Mot de Passe',
            es: 'Crea tu Contraseña',
            de: 'Erstelle dein Passwort',
            it: 'Crea la tua Password',
        }
    },
    citizenCode: {
        label: {
            en: `Nationality`,
            fr: `Nationalité`,
            it: `Nazionalità`,
            es: `Nacionalidad`,
            de: `Nationalität`,
        },
        extra: {
            en: `Please specify the issuing country of the passport that will be used to enter the Russian Federation.`,
            fr: `Veuillez préciser le pays du passeport qui sera utilisé pour entrer en Fédération de Russie.`,
            es: `Por favor, especifique el país de expedición del pasaporte que se utiliza para entrar en la Federación de rusia.`,
            it: `Si prega di specificare il paese di emissione del passaporto che verrà utilizzato per entrare nella Federazione russa.`,
            de: `Bitte geben Sie dem ausstellenden Land des Reisepasses verwendet wird zur Eingabe der Russischen Föderation.`,
        },
    },
    visitArea: {
        label: {
            en: `Visit area`,
            fr: `Zone de visite`,
            de: `Gegend zu besuchen`,
            es: `Visita de la zona`,
            it: `Zona da visitare`,
        },
        extra: {
            en: `Choose an area you are going to visit`,
            fr: `Choisissez une région que vous allez visiter`,
            de: `Wählen Sie einen Bereich, den Sie besuchen werden`,
            it: `Scegliere una zona che si sta per visitare`,
            es: `Elija un área que va a visitar`,
        },
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
    pwd: {
        label: {
            en: `Password`,
            fr: `Mot de passe`,
            it: `Password`,
            de: `Passwort`,
            es: `Contraseña`,
        },
        extra: {
            en: `If there are technical issues with the system, or you want to complete your application some other time, you can save your work and later, start where you left off. In order to access your application later, however, you will need: (1) your Application ID, and (2) the password that you will enter on this page.`,
            fr: `Entrez le mot de passe`,
            es: `Introduzca la contraseña`,
            de: `Geben Sie das Passwort`,
            it: `Immettere la password`,
        },
    },
    pwd_confirm: {
        label: {
            en: `Confirm password`,
            fr: `Confirmez le mot de passe`,
            de: `Kennwort bestätigen`,
            es: `Confirmar contraseña`,
            it: `Conferma password`,
        },
        extra: {
            en: `Enter the password confirmation`,
            fr: `Entrez le mot de passe de confirmation`,
            es: `Introduzca la contraseña de confirmación`,
            de: `Geben Sie das Passwort Bestätigung`,
            it: `Immettere la password di conferma`,
        },
    },
    email: {
        label: {
            en: `Your email`,
            fr: `Votre email`,
            es: `Su correo electrónico`,
            de: `Ihre E-Mail`,
            it: `La tua e-mail`,
        },
        extra: {
            en: `Please indicate your email address`,
            fr: `Merci d'indiquer votre adresse email`,
            it: `Si prega di indicare il vostro indirizzo e-mail`,
            es: `Por favor, indique su dirección de correo electrónico`,
            de: `Bitte geben Sie Ihre E-Mail-Adresse`,
        },
    },
    email_confirm: {
        label: {
            en: `Confirm your personal email`,
            fr: `Confirmez votre email personnel`,
            it: `Confermare la tua e-mail personale`,
            de: `Bestätigen Sie Ihre persönliche E-Mail`,
            es: `Confirme su correo electrónico personal`,
        },
    },
    visa: {
        section_title: {
            en: `Visa details`,
            fr: `L’information sur le visa demande`,
            es: `Los detalles de la visa solicitada`,
            de: `Angaben zum beantragten Visum`,
            it: `Informazioni sul visto richiesto`,
        },
        nationality: {
            label: {
                en: `Nationality`,
                fr: `Nationalité`,
                es: `Nacionalidad`,
                de: `Nationalität`,
                it: `Nazionalità`,
            },
            extra: {
                en: `Enter your citizenship, in accordance with the country or organisation whose passport you will be entering Russian Federation with.`,
                fr: `Indiquez le nom du pays ou de l’organisation dont vous allez utiliser le passeport pour entrer sur le territoire de la Fédération de Russie`,
                es: `Indique con pasaporte de que país u organización va a entrar en el territorio de la Federación de Rusia`,
                de: `Geben Sie bitte das Ausstellungsland oder die Ausstellungsinstitution Ihres Reisepasses an, mit dem Sie in Russland einreisen werden.`,
                it: `Indicare con il passaporto di quale Stato o di quale organizzazione, Lei intenda entrare nel territorio della Federazione Russa.`,
            },
        },
        b_ever_loss: {
            label: {
                en: `If you had USSR or Russian nationality at some time please select "yes" and indicate when and why you lost it`,
                fr: `Si vous avez eu la nationalité russe ou soviétique à un moment donné, veuillez sélectionner "oui" et indiquer quand et pourquoi vous l'avez perdu.`,
                es: `Si usted tuvo la URSS o de nacionalidad rusa en algún momento por favor, seleccione "sí" y se indican cuándo y por qué la has perdido`,
                de: `Wenn Sie hatte USSR oder der Russischen Nationalität in einer Zeit, wählen Sie bitte "ja" und zeigen, Wann und warum Sie es verloren`,
                it: `Se hai avuto URSS o nazionalità russa, a un certo momento si prega di selezionare "sì" e indicare quando e perché si è perso`,
            },
            extra: {
                en: `Enter "yes" in this field, if you formerly had USSR or Russian citizenship; if not enter “no”. If yes, please answer the specifying questions.`,
                fr: `Indiquez «Yes» dans cette case si vous avez eu la nationalité de l’URSS ou de Russie, sinon indiquez ‘non’. Si la réponse est positive il faut répondre à des questions supplémentaires.`,
                es: `Indique "Yes" en este campo, si antes tenía la ciudadanía de la URSS o de Rusia, en caso contrario indique “no”. Siendo la respuesta positiva hace falta responder a las preguntas especificativas.`,
                de: `Falls Sie zuvor im Besitz - Staatsangehörigkeit der UdSSR bzw. Russlands waren, antworten Sie bitte in diesem Datenfeld mit "Yes", andernfalls antworten Sie bitte mit "No". Bei „Yes“ beantworten Sie bitte einige Folgefragen.`,
                it: `Indicare “Sì” in questo campo, se Lei ha mai avuto la cittadinanza dell'Unione Sovietica o quella russa, altrimenti selezionare “No”. Se la risposta è positiva, è necessario rispondere alle domande specifiche.`,
            },
        },
        visa_type: {
            goalsect: {
                label: {
                    en: `Purpose of visit (section)`,
                    fr: `But de la visite (section)`,
                    es: `El propósito de la visita (sección)`,
                    de: `Zweck des Besuchs (Abschnitt)`,
                    it: `Scopo della visita (sezione)`,
                },
                extra: {
                    en: `Select your purpose of visit from the top drop menu list. Then from the lower drop menu list choose the specification of your purpose of visit`,
                    fr: `Dans la liste qui s’ouvre en haut choisissez le but du voyage. Ensuite dans la liste qui s’ouvre en bas précisez ce but de voyage.`,
                    es: `Primeramente elija de la lista superior el motivo de viaje. Después de la lista inferior elija la precisión del motivo.`,
                    de: `Wählen Sie bitte aus der oberen Vorschlagsliste den Reisezweck. Aus der unteren Vorschlagsliste wählen Sie eine Präzisierungsoption für den Zweck Ihrer Reise.`,
                    it: `Si prega di selezionare dalla lista del menu a tendina in alto lo scopo del viaggio. Poi dall'elenco del menu a tendina inferiore selezionare degli obiettivi specifici.`,
                },
            },
            goal: {
                label: {
                    en: `Purpose of visit`,
                    fr: `But de la visite`,
                    es: `El propósito de la visita`,
                    de: `Zweck des Besuchs`,
                    it: `Scopo della visita`,
                },
                extra: {
                    en: `Select your purpose of visit from the list`,
                    fr: `Choisissez le but de voyage de la liste`,
                    es: `Elija de la lista el motivo de viaje`,
                    de: `Wählen Sie bitte den Zweck Ihrer Reise aus der Liste`,
                    it: `Selezionare lo scopo del viaggio dall'elenco`,
                },
            },
            visakind: {
                label: {
                    en: `Visa category and type`,
                    fr: `Catégorie et type de visa`,
                    de: `Visa-Kategorie und-Typ`,
                    it: `Visti di categoria e tipo di`,
                    es: `La Visa de categoría y tipo de`,
                },
                extra: {
                    en: `Select the specification for your purpose of visit`,
                    fr: `Choisissez le but de voyage précisé de la liste`,
                    es: `Elija de la lista inferior precisión del motivo`,
                    de: `Wählen Sie bitte eine Präzisierungsoption für den Zweck Ihrer Reise aus der Liste`,
                    it: `Selezionare dalla lista lo scopo specifico del viaggio`,
                },
            },
        },
        n_entries: {
            label: {
                en: `Number of entries`,
                fr: `Nombre d'entrées`,
                it: `Numero di voci`,
                de: `Anzahl der Einträge`,
                es: `Número de entradas`,
            },
            extra: {
                en: `Enter the intended number of entries to Russian Federation`,
                fr: `Indiquez le nombre d’entrées demandées`,
                es: `Indique la cantidad prevista de visitas`,
                de: `Geben Sie bitte die voraussichtliche Anzahl der Einreisen an`,
                it: `Inserire il numero stimato delle visite`,
            },
        },
        entry_date: {
            label: {
                en: `Date of entry into Russia`,
                fr: `Date d'entrée en Russie`,
                it: `Data di entrata in Russia`,
                es: `Fecha de entrada en Rusia`,
                de: `Datum der Einreise in Russland`,
            },
            extra: {
                en: `Enter your intended date of entry to Russia in "dd/mm/yyyy" format`,
                fr: `Indiquez la date d’arrivée prévue en Russie au format ‘jj/mm/aaaa’`,
                es: `Indique la fecha presunta de entrada en Rusia en el formato “dd/mm/aaaa”`,
                de: `Geben Sie bitte das voraussichtliche Einreisedatum in Russland im Format "TT/MM/JJJJ" an`,
                it: `Mettere la data prevista d’ingresso in Russia nel formato “gg/mm/aaaa”`,
            },
        },
        issue_date: {
            label: {
                en: `Date of issue`,
                fr: `Date d'Emission`,
                it: `Data di emissione`,
                de: `Datum der Ausstellung`,
                es: `Fecha de emisión`,
            },
            extra: {
                de: `Geben Sie bitte das Ausstellungsdatum Ihres Reisepasses im Format "TT/MM/JJJJ" an`,
                it: `Inserire la data del rilascio del Suo passaporto nel formato “gg/mm/aaaa”`,
                en: ``,
                fr: ``,
                es: ``,
            },
        },
        departure_date: {
            label: {
                en: `Date of exit from Russia`,
                fr: `Date de sortie de Russie`,
                it: `Data di uscita dalla Russia`,
                de: `Datum der Ausreise aus Russland`,
                es: `Fecha de salida de Rusia`,
            },
            extra: {
                en: `Enter your intended date of entry to Russia in "dd/mm/yyyy" format`,
                fr: `Indiquez la date départ prévue de Russie au format ‘jj/mm/aaaa’`,
                es: `Indique la fecha presunta de salida de Rusia en el formato “dd/mm/aaaa”`,
                de: `Geben Sie bitte das voraussichtliche Ausreisedatum aus Russland im Format "TT/MM/JJJJ" an`,
                it: `Mettere la data prevista di partenza dalla Russia nel formato “gg/mm/aaaa”`,
            },
        },
    },
    personal: {
        section_title: {
            en: `Personal details`,
            fr: `L’information personnelle`,
            es: `Información personal`,
            de: `Personenbezogene Daten`,
            it: `Informazioni personali`,
        },
        citizenCode: {
            label: {
                en: `Nationality`,
                fr: `Nationalité`,
                it: `Nazionalità`,
                es: `Nacionalidad`,
                de: `Nationalität`,
            },
            extra: {
                en: `Please specify the issuing country of the passport that will be used to enter the Russian Federation.`,
                fr: `Veuillez préciser le pays du passeport qui sera utilisé pour entrer en Fédération de Russie.`,
                es: `Por favor, especifique el país de expedición del pasaporte que se utiliza para entrar en la Federación de rusia.`,
                de: `Bitte geben Sie dem ausstellenden Land des Reisepasses verwendet wird zur Eingabe der Russischen Föderation.`,
                it: `Si prega di specificare il paese di emissione del passaporto che verrà utilizzato per entrare nella Federazione russa.`,
            },
        },
        surname: {
            label: {
                en: `Surname (as in passport)`,
                fr: `Nom de famille (comme dans le passeport)`,
                de: `Familienname (wie im Reisepass)`,
                it: `Cognome (come da passaporto)`,
                es: `Apellido (como en el pasaporte)`,
            },
            extra: {
                en: `Enter your surname using letters of the English alphabet, as shown in your passport`,
                fr: `Indiquez votre nom en lettres latines tel qu’il est indiqué sur votre passeport`,
                es: `Inserte su apellido con letras inglesas como está indicado en el pasaporte`,
                de: `Geben Sie bitte Ihren Familiennamen in lateinischen Buchstaben wie im Reisepass bezeichnet an.`,
                it: `Inserire il/i Suo/i nome/i usando le lettere dell’alfabeto inglese come scritto nel passaporto.`,
            },
        },
        firstnames: {
            label: {
                en: `First name, middle names, patronymic names (as in passport)`,
                fr: `Prénom, prénoms, noms patronymiques (comme dans le passeport)`,
                it: `Primo nome, secondo nome, cognome nomi (come da passaporto)`,
                de: `Vorname, weitere Vornamen, Vatersnamen Namen (wie im Reisepass)`,
                es: `Nombre, apellido nombres, nombres patronímicos (como en el pasaporte)`,
            },
            extra: {
                en: `Enter your first name(s), middle name(s) and/or patronym, using letters of the English alphabet, as shown in your passport`,
                fr: `Veuillez Introduire votre/vos prénom(s) en caractères de l’alphabet latin anglais tel(s) que dans votre passeport.`,
                es: `Inserte su nombre (nombres) con letras inglesas como está indicado en el pasaporte`,
                de: `Geben Sie bitte Ihren Vornamen in lateinischen Buchstaben wie im Reisepass bezeichnet an.`,
                it: `Inserire il Suo nome/i usando le lettere dell’alfabeto inglese come scritto nel passaporto.`,
            },
        },
        b_other_names: {
            label: {
                en: `Have you ever had other names (maiden name, pseudonym, holy order etc.)?`,
                fr: `Avez-vous déjà eu d'autres noms (nom de jeune fille, pseudonyme, ordre sacré, etc.)?`,
                de: `Haben oder hatten Sie je andere Namen (Geburtsname, Vornamen, pseudonym, Heiligen Ordnung etc.)?`,
                es: `¿Alguna vez has tenido otros nombres (nombre de soltera, el seudónimo, el santo orden, etc.)?`,
                it: `Hai mai avuto altri nomi (nome da nubile, pseudonimo, santo ordine, etc.)?`,
            },
            extra: {
                en: `Have you ever had other names (maiden name, pseudonym, holy order etc.)? If you ever used other names (maiden name, pseudonym, holy order etc.) you must enter them. You should only enter one name in each field. To enter other names please use the option “Add”`,
                fr: `Veuillez préciser si vous possédez ou utilisez un autre nom (d’avant mariage, pseudonymes, titres religieux etc.)? En cas de réponse affirmative à cette question, veuillez indiquer tous les noms (noms de famille, pseudonymes, titres religieux - 8 noms maximum), à raison d’un seul nom par champ de saisie. Pour ajouter un champ de saisie, cliquez sur le bouton "Ajouter".`,
                es: `Tiene usted otros nombres con los que se haya identificado (antes de matrimonio, seudónimo, orden religioso, etc.)? Siendo la respuesta afirmativa hace falta indicar todos los nombres (apellidos, seudónimos, ordenes, etc.,)(ocho como máximo). En cada campo se puede indicar sólo un nombre. Para indicar más nombres pulse el botón AGREGAR.`,
                de: `Falls vorhanden, geben Sie bitte alle weiteren jemals benutzten Namen, Pseudonyme, religiösen Amtstitel oder auch Ihren Geburtsnamen vor der Heirat an. Für jeden Namen ist nur ein Datenfeld vorgesehen. Um weitere Namen anzugeben, wählen Sie die Option „Hinzufügen“.`,
                it: `Lei ha mai avuto altri nomi (prima del matrimonio, pseudonimi, titoli religiosi, ecc.)? Se la risposta è positiva, è necessario specificare tutti i nomi (cognomi, pseudonimi, titoli religiosi, ecc.) (massimo otto). Per ogni campo è possibile specificare un solo nome. Per inserire altri nomi, cliccare “Aggiungere”.`,
            },
        },
        sex: {
            label: {
                en: `Sex`,
                fr: `Sexe`,
                it: `Sesso`,
                de: `Sex`,
                es: `Sexo`,
            },
        },
        birth_date: {
            label: {
                en: `Date of birth`,
                fr: `Date de naissance`,
                es: `Fecha de nacimiento`,
                it: `Data di nascita`,
                de: `Geburtsdatum`,
            },
        },
        birth_place: {
            label: {
                en: `Your place of birth`,
                fr: `Votre lieu de naissance`,
                de: `Ihr Geburtsort`,
                es: `Su lugar de nacimiento`,
                it: `Il tuo luogo di nascita`,
            },
            extra: {
                en: `Enter your place of birth, as shown in your passport`,
                fr: `Indiquez le lieu de naissance conformément au passeport`,
                es: `Inserte lugar de su nacimiento como está indicado en el pasaporte`,
                de: `Geben Sie bitte Ihren Geburtsort wie in Ihrem Pass bezeichnet an.`,
                it: `Inserire il luogo di Sua nascita, come indicato nel passaporto.`,
            },
        },
        b_born_in_Russia: {
            label: {
                en: `If you were born in Russia, select "yes" and specify when and which country you have immigrated to`,
                fr: `Si vous êtes né en Russie, sélectionnez "oui" et précisez quand et dans quel pays vous avez immigré`,
                es: `Si usted nació en Rusia, seleccione "sí" y especificar cuándo y en qué país han emigrado a`,
                it: `Se fossi nato in Russia, selezionare "sì" e specificare quando e in quale paese si sono trasferiti a`,
                de: `Wenn Sie wurden geboren in Russland, wählen Sie "ja" und geben Sie an, Wann und in welchem Land Sie haben eingewandert`,
            },
            extra: {
                en: `If you were born in Russia, answer “yes” and enter the name of the country which you immigrated to and when`,
                fr: `Si vous êtes nés en Russie, cochez ‘Yes’ et indiquer quand et dans quel pays vous avez émigré`,
                es: `Si nació en Rusia responde “Sí” e indique cuando y a que país emigró`,
                de: `Antworten Sie bitte mit „Yes“, wenn Sie in Russland geboren sind. Geben Sie bitte an, wann und in welches Land Sie ausgewandert sind.`,
                it: `Lei è nato in Russia? Se la risposta è “Sì”, specificare quando e in quale paese Lei è stato emigrato.`,
            },
        },
    },
    passport: {
        section_title: {
            en: `Passport details`,
            fr: `L’information sur le passeport`,
            es: `Información del pasaporte`,
            de: `Angaben zum Pass`,
            it: `Informazioni sul passaporto`,
        },
        type: {
            label: {
                en: `Type of passport`,
                fr: `Type de passeport`,
                es: `Tipo de pasaporte`,
                de: `Typ des Reisepasses`,
                it: `Tipo di passaporto`,
            },
            extra: {
                en: `Enter your passport type`,
                fr: `Entrez votre type de passeport`,
                es: `Ingrese su tipo de pasaporte`,
                de: `Geben Sie Ihre passport-Typ`,
                it: `Inserisci il tuo tipo di passaporto`,
            },
        },
        number: {
            label: {
                en: `Passport Number`,
                fr: `Numéro de passeport`,
                es: `Número De Pasaporte`,
                de: `Pass-Nummer`,
                it: `Il Numero Di Passaporto`,
            },
            extra: {
                en: `Enter your passport number (including the series number)`,
                fr: `Indiquez le numéro de votre passeport (y compris la série)`,
                es: `Indique el número de su pasaporte con la serie`,
                de: `Geben Sie bitte die Serie und die Nummer Ihres Reisepasses an`,
                it: `Inserire il numero del Suo passaporto (compresa la serie)`,
            },
        },
        issue_date: {
            label: {
                en: `Date of issue`,
                fr: `Date d'Emission`,
                it: `Data di emissione`,
                de: `Datum der Ausstellung`,
                es: `Fecha de emisión`,
            },
        },
        expiration_date: {
            label: {
                en: `Date of expiry`,
                fr: `Date d'expiration`,
                es: `Fecha de caducidad`,
                it: `Data di scadenza`,
                de: `Ablauf`,
            },
            extra: {
                de: `Geben Sie bitte das Gültigkeitsdatum Ihres Reisepasses im Format "TT/MM/JJJJ" an`,
                it: `Inserire la data della scadenza del Suo passaporto nel formato “gg/mm/aaaa”`,
                en: ``,
                fr: ``,
                es: ``,
            },
        },
    },
    visit: {
        section_title: {
            en: `Visit details`,
            fr: `L’information de votre séjour`,
            es: `Información sobre la visita`,
            de: `Angaben zum Besuch`,
            it: `Informazioni sulla visita`,
        },
        visakind: {
            label: {
                en: `Purpose of visit`,
                fr: `But de la visite`,
                it: `Scopo della visita`,
                de: `Zweck des Besuchs`,
                es: `El propósito de la visita`,
            },
            extra: {
                en: `Select your purpose of visit from the list`,
                fr: `Sélectionnez votre but de visite dans la liste`,
                de: `Wählen Sie Ihr Zweck des Besuchs aus der Liste aus`,
                it: `Selezionare il vostro scopo di visitare dalla lista`,
                es: `Seleccione su propósito de la visita de la lista`,
            },
        },
        visitArea: {
            label: {
                en: `Visit area`,
                fr: `Zone de visite`,
                es: `Visita de la zona`,
                de: `Gegend zu besuchen`,
                it: `Zona da visitare`,
            },
            extra: {
                en: `Choose an area you are going to visit`,
                fr: `Choisissez une région que vous allez visiter`,
                es: `Elija un área que va a visitar`,
                de: `Wählen Sie einen Bereich, den Sie besuchen werden`,
                it: `Scegliere una zona che si sta per visitare`,
            },
        },
        entry_date: {
            label: {
                en: `Date of entry into Russia`,
                fr: `Date d'entrée en Russie`,
                it: `Data di entrata in Russia`,
                de: `Datum der Einreise in Russland`,
                es: `Fecha de entrada en Rusia`,
            },
            extra: {
                en: `Enter your intended date of entry to Russia in "dd/mm/yyyy" format`,
                fr: `Indiquez la date d’arrivée prévue en Russie au format ‘jj/mm/aaaa’`,
                es: `Indique la fecha presunta de entrada en Rusia en el formato “dd/mm/aaaa”`,
                de: `Geben Sie bitte das voraussichtliche Einreisedatum in Russland im Format "TT/MM/JJJJ" an`,
                it: `Mettere la data prevista d’ingresso in Russia nel formato “gg/mm/aaaa”`,
            },
        },
        stays: {
            0: {
                name: {
                    en: `Name of the hotel/organization`,
                    es: `Nombre del hotel o de la organización`,
                    fr: `Nom de l'hôtel ou de l'organisation`,
                    it: `Nome della struttura/organizzazione`,
                    de: `Name des Hotels/Organisation`,
                },
                address: {
                    en: `Address of the hotel/organization`,
                    it: `Indirizzo dell'hotel/organizzazione`,
                    es: `La dirección del hotel o de la organización`,
                    de: `Adresse von hotel/in der Organisation`,
                    fr: `Adresse de l'hôtel ou de l'organisation`,
                },
                phone: {
                    en: `Telephone number of the hotel/organization`,
                    es: `El número de teléfono del hotel o de la organización`,
                    fr: `Le numéro de téléphone de l'hôtel ou de l'organisation`,
                    it: `Il numero di telefono del hotel/organizzazione`,
                    de: `Telefonnummer von hotel/in der Organisation`,
                },
                fax: {
                    en: `Fax number of the hotel/organization (if available)`,
                    de: `Fax-Nummer des Hotels/der Organisation (sofern verfügbar)`,
                    fr: `Numéro de Fax de l'hôtel ou de l'organisation (si disponible)`,
                    it: `Fax numero di hotel/azienda (se disponibile)`,
                    es: `Número de Fax del hotel/organización (si está disponible)`,
                },
                email: {
                    en: `E-mail address of the hotel/organization (if available)`,
                    de: `E-mail-Adresse des Hotels/der Organisation (sofern verfügbar)`,
                    es: `E-mail del hotel/organización (si está disponible)`,
                    it: `E-mail indirizzo dell'hotel/azienda (se disponibile)`,
                    fr: `E-mail adresse de l'hôtel ou de l'organisation (si disponible)`,
                },
            },
            1: {
                name: {
                    en: `Family name, first name(s) of the individual`,
                    fr: `Nom de famille, prénom(s) de la personne`,
                    es: `Apellido, nombre(s) de la persona`,
                    de: `Family name, first name(s) der einzelnen`,
                    it: `Cognome, nome(s) del singolo`,
                },
                address: {
                    en: `Address of the individual`,
                    es: `La dirección de la persona`,
                    fr: `L'adresse de la personne`,
                    it: `L'indirizzo della persona`,
                    de: `Adresse der einzelnen`,
                },
                phone: {
                    en: `Telephone number of the individual`,
                    fr: `Numéro de téléphone de la personne`,
                    it: `Il numero di telefono del singolo`,
                    es: `Número de teléfono de la persona`,
                    de: `Telefon-Nummer der einzelnen`,
                },
                fax: {
                    en: `Fax number of the individual (if available)`,
                    es: `Número de Fax de la persona (si está disponible)`,
                    de: `Fax-Nummer der Person (falls vorhanden)`,
                    fr: `Numéro de Fax de la personne (si disponible)`,
                    it: `Numero di Fax della persona (se disponibile)`,
                },
                email: {
                    en: `E-mail address of the individual (if available)`,
                    de: `E-mail-Adresse der Person (falls vorhanden)`,
                    fr: `E-mail de la personne (si disponible)`,
                    it: `Indirizzo di posta elettronica della singola (se disponibile)`,
                    es: `La dirección de correo electrónico de la persona (si está disponible)`,
                },
            },
            label: {
                en: `Intended places of stay in the Russian Federation`,
                fr: `Lieux de séjour prévus en Fédération de Russie`,
                es: `La intención de los lugares de estancia en la Federación de rusia`,
                it: `Inteso luoghi di soggiorno nella Federazione russa`,
                de: `Bestimmte Orte des Aufenthalts in der Russischen Föderation`,
            },
            extra: {
                en: `List the intended places of stay in the Russian Federation and relevant contact information. You may list up to 10 places you plan to stay at`,
                fr: `Indiquez les lieux de séjour prévus dans la Fédération de Russie et les informations de contact pertinentes. Vous pouvez lister jusqu'à 10 endroits dans lesquels vous prévoyez de rester`,
                es: `Lista de la intención de los lugares de estancia en la Federación de rusia y la información de contacto pertinente. Se pueden incluir hasta 10 lugares que usted planea permanecer en`,
                de: `Liste der vorgesehenen Orten, der Aufenthalt in der Russischen Föderation und die entsprechenden Kontakt-Informationen. Sie können bis zu 10 Orte, die Sie planen, um zu bleiben`,
                it: `Elenco previsto luoghi di soggiorno nella Federazione russa e pertinenti informazioni di contatto. Si possono inserire fino a 10 posti dove avete intenzione di rimanere in`,
            },
            code: {
                en: `Type of accommodation`,
                fr: `Type d'hébergement`,
                de: `Art der Unterkunft`,
                es: `Tipo de alojamiento`,
                it: `Tipo di alloggio`,
            },
        },
        b_visited_russia: {
            label: {
                en: `Have you ever visited Russia?`,
                es: `¿Alguna vez has visitado Rusia?`,
                it: `Hai mai visitato la Russia?`,
                de: `Haben Sie jemals Russland besucht?`,
                fr: `Avez-vous déjà visité la Russie?`,
            },
            extra: {
                en: `Indicate whether you have been in Russia before. If the answer is yes, you will need to indicate how many times you were in Russia and the date of your last trip.`,
                fr: `Indiquez si vous avez déjà été en Russie. Si la réponse est positive, indiquez le nombre de voyages et les dates de votre dernier séjour`,
                es: `Indique si ya estuviera usted en Rusia. En el caso de la respuesta positiva tiene que poner cuantas veces estuve en Rusia y las fechas de su ultimo viaje.`,
                de: `Geben Sie bitte an, ob Sie die Russische Föderation bereits besucht haben. Wenn „Yes“ , geben Sie bitte die Anzahl Ihrer bisherigen Russland-Aufenthalte und das Datum Ihrer letzten Reise nach Russland an`,
                it: `Indicare se Lei è mai stato in Russia. Se la risposta è positiva, è necessario indicare quante volte Lei è stato in Russia e la data del Suo ultimo viaggio.`,
            },
            options: {
                never: {
                    en: `I never visited Russia`,
                    fr: `Je n'ai jamais visité la Russie`,
                    es: `Nunca visité Rusia`,
                    de: `Ich habe Russland nie besucht`,
                    it: `Non ho mai visitato la Russia`
                }
            }
        },
        visite_russia_info: {
            amount: {
                en: `How many times have you been to Russia?`,
                fr: `Combien de fois êtes-vous allé en Russie?`,
                es: `¿Cuántas veces has estado en Rusia?`,
                de: `Wie oft waren Sie schon in Russland?`,
                it: `Quante volte sei stato in Russia?`
            },
            date_from: {
                en: `Date of last trip to Russia`,
                fr: `Date du dernier voyage en Russie`,
                es: `Fecha del último viaje a Rusia`,
                de: `Datum der letzten Reise nach Russland`,
                it: `Data dell'ultimo viaggio in Russia`
            },
            date_to: {
                en: `Till`,
                fr: `Jusqu'au`,
                es: `Hasta`,
                de: `Bis`,
                it: `A`
            }
        }
    },
    contacts_occupations: {
        section_title: {
            en: `Contacts and occupation`,
            de: `Kontakte und Beruf`,
            es: `Los contactos y la ocupación`,
            it: `Contatti e occupazione`,
            fr: `Les Contacts et la profession`,
        },
        b_resident: {
            label: {
                en: `Do you have a permanent residential address?`,
                es: `¿Tiene una dirección residencial permanente?`,
                it: `Hai un indirizzo di residenza permanente?`,
                fr: `Avez-vous une adresse résidentielle permanente?`,
                de: `Haben Sie eine feste Wohnadresse?`,
            },
            extra: {
                en: `If the answer is yes you will have to indicate the address of residence, telelphone number, fax number, email address.`,
                fr: `Avez-vous une adresse où vous résidez de façon permanente? En cas de réponse affirmative à cette question, veuillez indiquer votre adresse de résidence, le numéro de téléphone, le numéro de fax et l’adresse email.`,
                es: `Tiene usted un domicilio permanente? Siendo la respuesta positiva hace falta indicar la dirección de su domicilio, número de teléfono, fax, E-mail.`,
                de: `Haben Sie die Adresse des ständigen Wohnsitzes? Wenn ja, geben Sie bitte Adresse, Telefonnummer, Faxnummer und E-mail Adresse an`,
                it: `Lei ha l’indirizzo di residenza permanente? Se la risposta è positiva, è necessario specificare l'indirizzo,il numero di telefono, numero di fax e indirizzo e-mail.`,
            },
            options: {
                not: {
                    en: `I do not have a permanent residential address`,
                    fr: `Je n'ai pas d'adresse résidentielle permanente`,
                    es: `No tengo una dirección residencial permanente`,
                    de: `Ich habe keine feste Wohnadresse`,
                    it: `Non ho un indirizzo di residenza permanente`
                }
            }
        },
        resident: {
            address: {
                en: `Your permanent address`,
                fr: `Votre adresse permanente`,
                es: `Su dirección permanente`,
                de: `Ihre ständige Adresse`,
                it: `Il tuo indirizzo permanente`
            },
            phone: {
                en: `Your phone number`,
                fr: `Votre numéro de téléphone`,
                es: `Su número de teléfono`,
                de: `Deine Telefonnummer`,
                it: `Il tuo numero di telefono`
            },
            fax: {
                en: `Votre fax`,
                fr: `Su fax`,
                es: `Ihr Fax`,
                de: `Ihre ständige Adresse`,
                it: `Il tuo fax`
            },
        },
        b_occupation: {
            label: {
                en: `Do you work (study) in the present time?`,
                it: `Lavori (studi) al momento?`,
                es: `¿Trabajas (estudias) en la actualidad?`,
                de: `Arbeiten Sie in der Gegenwart?`,
                fr: `Travaillez-vous (étudiez) à l'heure actuelle?`,
            },
            extra: {
                en: `If the answer is yes you will have to indicate the work address or place of study, position, address, telephone number, number of fax and email.`,
                fr: `Travaillez-vous où faites-vous des études actuellement? En cas de réponse affirmative à cette question, veuillez indiquer votre lieu actuel de travail ou d’études, la fonction, l’adresse, le numéro de téléphone, le numéro de fax et l’adresse email.`,
                es: `Trabaja (estudia) usted actualmente? En caso afirmativo, hace falta indicar su lugar actual de trabajo o de estudios, puesto, dirección, número de teléfono, fax, E-mail.`,
                de: `Arbeiten (studieren) Sie? Wenn ja, geben Sie bitte aktuelle Arbeits- bzw. Studienstelle, Adresse, Telefonnummer, Faxnummer und E-mail Adresse an`,
                it: `Lei lavora (studia) attualmente? Se la risposta è positiva, è necessario indicare l'attuale luogo di lavoro o di studio, posizione, indirizzo, numero di telefono, numero di fax ed e-mail.`,
            },
            options: {
                not: {
                    en: `I do not work and I do not study in the present time`,
                    fr: `Je ne travaille pas et je n'étudie pas dans le temps présent`,
                    es: `No trabajo y no estudio en la actualidad`,
                    de: `Ich arbeite nicht und studiere derzeit nicht`,
                    it: `Non lavoro e non studio al momento attuale`
                }
            }
        },
        occupation: {
            name: {
                en: `Name of employer`,
                fr: `Nom de l'Employeur`,
                es: `Nombre del empleador`,
                de: `Name des Angestellten`,
                it: `Nome del datore di lavoro`
            },
            position: {
                en: `Work position`,
                fr: `Position de travail`,
                es: `Posición de trabajo`,
                de: `Arbeitsposition`,
                it: `Posizione di lavoro`
            },
            address: {
                en: `Employer address`,
                fr: `Adresse de l'employeur`,
                es: `Dirección del empleado`,
                de: `Arbeitgeber Adresse`,
                it: `Datore di lavoro Indirizzo`
            },
            phone: {
                en: `Work telephone`,
                fr: `Téléphone au travail`,
                es: `Teléfono de trabajo`,
                de: `Arbeitstelefon`,
                it: `Telefono di lavoro`
            },
            fax: {
                en: `Work fax`,
                fr: `Fax professionnel`,
                es: `Fax de trabajo`,
                de: `Arbeitsfax`,
                it: `Fax di lavoro`
            },
            email: {
                en: `Work email`,
                fr: `Email de travail`,
                es: `Correo electrónico del trabajo`,
                de: `Arbeits Email`,
                it: `Email di lavoro`
            },
        },
        b_children: {
            label: {
                en: `Children under 16 years and other relatives written in your passport and travelling with you:`,
                fr: `Les enfants de moins de 16 ans et d'autres parents écrite dans votre passeport et voyager avec vous:`,
                es: `Los niños menores de 16 años y otros familiares escrito en su pasaporte y viajar con usted:`,
                de: `Kinder unter 16 Jahren und anderen verwandten im Pass geschrieben und das Reisen mit Ihnen:`,
                it: `I bambini sotto i 16 anni e gli altri parenti scritto il tuo passaporto e viaggiare con voi:`,
            },
            extra: {
                en: `Indicate "yes" in this field if you travel with children under the age of 16, and other relatives, otherwise select "no". If the answer is yes, you must provide specifying information`,
                fr: `Veuillez sélectionner « Yes » si vous êtes accompagné des enfants de moins de 16 ans, soit d’autres parents; dans le cas contraire veuillez sélectionner «No». En cas de réponse affirmative à cette question, veuillez fournir des précisions.`,
                es: `Ponga "Sí" en esta casilla si Usted tiene menores de 16 años y otros familiares que le acompañan, en caso contrario ponga “No”. En caso afirmativo, hay que detallarlo.`,
                de: `Geben Sie bitte „Yes“ in diesem Feld an, wenn Sie von Kindern unter 16 Jahren und anderen Verwandten begleitet werden, anderenfalls geben Sie „No“ an. Wenn „Yes“, geben Sie bitte präzisierende Informationen an.`,
                it: `Indicare “Si” in questo campo se si viaggia con bambini al di sotto di 16 anni e altri parenti, altrimenti selezionare “No”. Se la risposta è positiva, è necessario specificare tutti i dettagli.`,
            },
        },
        b_relatives: {
            label: {
                en: `Do you currently have relatives in Russia?`,
                it: `Attualmente hanno parenti in Russia?`,
                es: `Actualmente tiene parientes en Rusia?`,
                fr: `Avez-vous actuellement ont de la famille en Russie?`,
                de: `Tun Sie derzeit haben Verwandte in Russland?`,
            },
            extra: {
                en: `Answer "yes", if you currently have relatives in Russia. If the answer is yes, you must indicate them. You must only enter the information regarding one relative per field. In order to add information regarding other relatives, please use the option "Add"`,
                fr: `Sélectionnez « Yes » si vous avez actuellement les liens familiaux sur le territoire de la Russie. En cas de réponse affirmative à cette question, veuillez les indiquer, en fournissant l’information dans un champ de saisie séparé pour chaque personne. Pour ajouter un champ de saisie, veuillez cliquer sur le bouton "Ajouter".`,
                es: `Ponga "Sí" en esta casilla si Usted tiene menores de 16 años y otros familiares que le acompañan, en caso contrario ponga “No”. En caso afirmativo, hay que detallarlo.`,
                de: `Antworten Sie in diesem Datenfeld mit „Yes“, wenn Sie derzeit auf dem Territorium der Russischen Föderation Verwandte haben. Wenn „Yes“, benennen Sie. In einem Datenfeld sind jeweils nur Informationen zu einer verwandten Person anzugeben. Um die Informationen zu weiteren Verwandten einzugeben, benutzen Sie die Option „Add“.`,
                it: `Indicare “Sì” in questo campo, se attualmente Lei ha parenti sul territorio della Federazione Russa. Se la risposta è positiva, è necessario indicarli. Per ogni campo è possibile inserire informazioni su un solo parente. Per inserire le informazioni relative ad altri parenti, cliccare “Aggiungere”`,
            },
        },
    },
    relatives: {
        section_title: {
            en: `Relatives details`,
            fr: `Les parents de détails`,
            it: `Parenti dettagli`,
            es: `Los parientes más detalles`,
            de: `Verwandten details`,
        },
        b_relatives: {
            label: {
                en: `Do you currently have relatives in Russia?`,
                it: `Attualmente hanno parenti in Russia?`,
                es: `Actualmente tiene parientes en Rusia?`,
                fr: `Avez-vous actuellement ont de la famille en Russie?`,
                de: `Tun Sie derzeit haben Verwandte in Russland?`,
            },
            extra: {
                en: `Answer "yes", if you currently have relatives in Russia. If the answer is yes, you must indicate them. You must only enter the information regarding one relative per field. In order to add information regarding other relatives, please use the option "Add"`,
                fr: `Sélectionnez « Yes » si vous avez actuellement les liens familiaux sur le territoire de la Russie. En cas de réponse affirmative à cette question, veuillez les indiquer, en fournissant l’information dans un champ de saisie séparé pour chaque personne. Pour ajouter un champ de saisie, veuillez cliquer sur le bouton "Ajouter".`,
                es: `Ponga "Sí" en esta casilla si Usted tiene menores de 16 años y otros familiares que le acompañan, en caso contrario ponga “No”. En caso afirmativo, hay que detallarlo.`,
                de: `Antworten Sie in diesem Datenfeld mit „Yes“, wenn Sie derzeit auf dem Territorium der Russischen Föderation Verwandte haben. Wenn „Yes“, benennen Sie. In einem Datenfeld sind jeweils nur Informationen zu einer verwandten Person anzugeben. Um die Informationen zu weiteren Verwandten einzugeben, benutzen Sie die Option „Add“.`,
                it: `Indicare “Sì” in questo campo, se attualmente Lei ha parenti sul territorio della Federazione Russa. Se la risposta è positiva, è necessario indicarli. Per ogni campo è possibile inserire informazioni su un solo parente. Per inserire le informazioni relative ad altri parenti, cliccare “Aggiungere”`,
            },
        },
        relatives: {
            list: {
                en: `List of Relatives in Russia`,
                fr: `Liste des proches en Russie`,
                es: `Lista de parientes en Rusia`,
                de: `Liste der Verwandten in Russland`,
                it: `Elenco dei parenti in Russia`,
            },
            degree: {
                en: `Relation degree`,
                fr: `Degré de relation`,
                es: `Grado de relacion`,
                de: `Beziehungsgrad`,
                it: `Grado di relazione`,
            },
            surname: {
                en: `Surname`,
                fr: `Nom de famille`,
                es: `Apellido`,
                de: `Nachname`,
                it: `Cognome`,
            },
            firstname: {
                en: `First name`,
                fr: `Prénom`,
                es: `Nombre de Pila`,
                de: `Vorname`,
                it: `Nome di Battesimo`,
            },
            birth_date: {
                en: `Date of birth`,
                fr: `Date de naissance`,
                es: `Fecha de nacimiento`,
                de: `Geburtsdatum`,
                it: `Data di nascita`,
            },
            address: {
                en: `Address`,
                fr: `Adresse`,
                es: `Dirección`,
                de: `Adresse`,
                it: `Indirizzo`,
            },
        }
    },
    appointment: {
        section_title: {
            en: `Appointment details`,
            fr: `Date et lieu de dépôt de ma demande`,
            es: `Fecha y lugar de aplicación`,
            de: `Datum und Ort der Abgabe des Visumantrags`,
            it: `Data e luogo di presentazione della domanda`,
        },
        destination: {
            label: {
                en: `Select the location where you will be applying for your visa`,
                it: `Selezionare la posizione in cui si applica per il visto`,
                fr: `Sélectionnez l'emplacement où vous allez faire votre demande de visa`,
                de: `Wählen Sie den Speicherort, wo werden Sie Ihre Anwendung für Ihr Visum`,
                es: `Seleccione la ubicación donde se va a aplicar para su visa`,
            },
            extra: {
                en: `Indicate which Russian Embassy or Consulate where you intend to apply for your visa. Your application will be sent to the selected authority, for a decision to be made regarding your application.`,
                fr: `Veuillez indiquez dans quelle ambassade ou consulat russe vous souhaiteriez solliciter votre visa. Votre questionnaire informatique du visa sera transféré dans l’établissement de votre choix, celui-ci étant maître de la prise de décision pour la délivrance du visa.`,
                es: `Indique en que Embajada de Rusia u Oficina Consular usted planea solicitar el visado. Su cuestionario lo mandarán a la institución elegida para la toma de decisión sobre el visado.`,
                de: `Geben Sie bitte an, in welcher Botschaft, in welchem Generalkonsulat der Russischen Föderation oder in welchem Visazentrum Sie das Visum beantragen wollen. Ihr Antrag wird an die gewählte Vergabestelle zwecks Entscheidung über die Visumerteilung weitergeleitet.`,
                it: `Indicare in quale ambasciata o consolato russo Lei ha l’intenzione di ottenere il visto. Il modulo elettronico della richiesta del visto sarà inviato all'ufficio selezionato, per la decisione del rilascio del visto.`,
            },
        },
    },
    photo: {
        section_title: {
            en: `Upload your digital color photo in the JPEG format. The photo must meet the following requirements.`,
            fr: `Téléchargez votre photo couleur numérique au format JPEG. La photo doit répondre aux critères suivantes.`,
            es: `Cargue su fotografía digital en color en formato JPEG. La foto debe cumplir los siguientes requisitos.`,
            de: `Laden Sie Ihr digitales Farbfoto im JPEG-Format hoch. Das Foto muss die folgenden Anforderungen erfüllen.`,
            it: `Carica la tua foto digitale a colori in formato JPEG. La foto deve soddisfare i seguenti requisiti.`,
        },
        descriptions: [
            {
                en: `The photo must be no more than six months old as of the date of the application and reflect your current appearance. The photo must show you alone. No foreign objects (chair back, pictures on the walls, etc.) or other people must be visible in the photo.`,
                fr: `La photo ne peut pas etre de plus de six mois et doit refléter votre apparence actuelle. La photo doit vous montrer seule. Aucun objet étranger (dossier de chaise, photos sur les murs, etc.) ou autre personne ne doit être visible sur la photo.`,
                es: `La foto no debe tener más de seis meses a partir de la fecha de la solicitud y debe reflejar su apariencia actual. La foto debe mostrarte solo. No deben verse objetos extraños (respaldo de la silla, cuadros en las paredes, etc.) u otras personas en la foto.`,
                de: `Das Foto darf zum Zeitpunkt der Antragstellung nicht älter als sechs Monate sein und Ihr aktuelles Erscheinungsbild widerspiegeln. Das Foto muss Sie alleine zeigen. Auf dem Foto dürfen keine Fremdkörper (Rückenlehne, Bilder an den Wänden usw.) oder andere Personen sichtbar sein.`,
                it: `La foto non deve avere più di sei mesi alla data della domanda e riflettere il tuo aspetto attuale. La foto deve mostrarti da sola. Nessun oggetto estraneo (schienale della sedia, quadri alle pareti, ecc.) O altre persone devono essere visibili nella foto.`,
            },
            {
                en: `The photo must be taken in full-face view. The head must not be tilted or turned. You must look directly at the camera with a neutral expression, your mouth closed, eyes open and clearly visible. No hair across your eyes.`,
                fr: `La photo doit être prise en plein écran. La tête ne doit pas être inclinée ou tournée. Vous devez regarder directement la caméra avec une expression neutre, la bouche fermée, les yeux ouverts et clairement visibles. Pas de cheveux sur les yeux.`,
                es: `La foto debe tomarse en vista completa. La cabeza no debe inclinarse ni girarse. Debe mirar directamente a la cámara con una expresión neutral, con la boca cerrada, los ojos abiertos y claramente visibles. Sin pelo en los ojos.`,
                de: `Das Foto muss in der Vollansicht aufgenommen werden. Der Kopf darf nicht gekippt oder gedreht werden. Sie müssen mit neutralem Ausdruck direkt in die Kamera schauen, den Mund geschlossen, die Augen offen und deutlich sichtbar. Keine Haare über deinen Augen.`,
                it: `La foto deve essere scattata con la visualizzazione integrale. La testa non deve essere inclinata o ruotata. Devi guardare direttamente la telecamera con un&#39;espressione neutra, la bocca chiusa, gli occhi aperti e chiaramente visibili. Nessun capello sugli occhi.`,
            },
            {
                en: `The photo must be taken with uniform lighting and not show shadows, flash reflections on your face and no red eyes.`,
                fr: `La photo doit être prise avec un éclairage uniforme et ne pas montrer d'ombres, de reflets flash sur votre visage et pas de yeux rouges.`,
                es: `La foto debe tomarse con una iluminación uniforme y no mostrar sombras, reflejos de flash en la cara y sin ojos rojos.`,
                de: `Das Foto muss mit gleichmäßiger Beleuchtung aufgenommen werden und darf keine Schatten, Blitzreflexionen im Gesicht und keine roten Augen aufweisen.`,
                it: `La foto deve essere scattata con un'illuminazione uniforme e non mostrare ombre, riflessi flash sul viso e senza occhi rossi.`,
            },
            {
                en: `The photo must be taken with a plain light-colored background with no shadows.`,
                fr: `La photo doit être prise avec un arrière-plan uni de couleur claire sans ombres.`,
                es: `La foto debe tomarse con un fondo claro de color claro sin sombras.`,
                de: `Das Foto muss mit einem hellen Hintergrund ohne Schatten aufgenommen werden.`,
                it: `La foto deve essere scattata con un semplice sfondo chiaro senza ombre.`,
            },
            {
                en: `Applicants whose religious beliefs prohibit them to be seen with their heads uncovered are allowed to wear a head covering that does not conceal facial features in the photo. In this case, please make sure that your face is clearly visible from the bottom of the chin to the top of the forehead.`,
                fr: `Les candidats dont les croyances religieuses interdisent de les voir la tête découverte sont autorisés à porter un couvre-chef qui ne cache pas les traits du visage sur la photo. Dans ce cas, assurez-vous que votre visage est clairement visible du bas du menton au haut du front.`,
                es: `Los solicitantes cuyas creencias religiosas les prohíban ser vistos con la cabeza descubierta pueden usar una cubierta para la cabeza que no oculte los rasgos faciales en la foto. En este caso, asegúrese de que su cara sea claramente visible desde la parte inferior de la barbilla hasta la parte superior de la frente.`,
                de: `Bewerber, deren religiöser Glaube es verbietet, mit unbedeckten Köpfen gesehen zu werden, dürfen eine Kopfbedeckung tragen, die keine Gesichtszüge auf dem Foto verdeckt. Stellen Sie in diesem Fall sicher, dass Ihr Gesicht vom unteren Ende des Kinns bis zum oberen Ende der Stirn gut sichtbar ist.`,
                it: `I candidati le cui credenze religiose vietano loro di essere visti con la testa scoperta possono indossare un copricapo che non nasconde i lineamenti del viso nella foto. In questo caso, assicurati che il tuo viso sia chiaramente visibile dalla parte inferiore del mento alla parte superiore della fronte.`,
            },
            {
                en: `If you wear glasses, your eyes must be clearly visible in the photo. Flash reflection off the lenses, as well as tinted lenses are not allowed (if possible, avoid heavy frames – wear lighter framed glasses, if you have them). Make sure that the frames do not cover your eyes (even partly).`,
                fr: `Si vous portez des lunettes, vos yeux doivent être clairement visibles sur la photo. La réflexion du flash sur les lentilles, ainsi que les lentilles teintées ne sont pas autorisées (si possible, évitez les montures lourdes - portez des lunettes à monture plus claire, si vous en avez). Assurez-vous que les montures ne couvrent pas vos yeux (même partiellement).`,
                es: `Si usa anteojos, sus ojos deben ser claramente visibles en la foto. No se permite la reflexión del flash de los lentes, así como los lentes tintados (si es posible, evite los marcos pesados; use anteojos con montura más claros, si los tiene). Asegúrese de que los marcos no cubran sus ojos (ni siquiera parcialmente).`,
                de: `Wenn Sie eine Brille tragen, müssen Ihre Augen auf dem Foto gut sichtbar sein. Blitzreflexionen an den Gläsern sowie getönte Gläser sind nicht zulässig (wenn möglich, vermeiden Sie schwere Brillen - tragen Sie eine hellere Brille, falls vorhanden). Stellen Sie sicher, dass die Rahmen Ihre Augen nicht (auch nicht teilweise) verdecken.`,
                it: `Se indossi gli occhiali, i tuoi occhi devono essere chiaramente visibili nella foto. Non è consentito il riflesso del flash dalle lenti, così come le lenti colorate (se possibile, evitare cornici pesanti - indossare occhiali con cornice più chiara, se presenti). Assicurati che le cornici non coprano gli occhi (anche parzialmente).`,
            },
            {
                en: `The photo must show the top of your head and the top of your shoulders. Your head must be in the center of the photo and be fully shown from the top of the hairline or the crown of the head to the tip of the chin. The nose must be on the symmetry line. The face must take up 70-80 percent of the photo.`,
                fr: `La photo doit montrer le haut de votre tête et le haut de vos épaules. Votre tête doit être au centre de la photo et être entièrement visible du haut de la racine des cheveux ou de la couronne de la tête jusqu'à la pointe du menton. Le nez doit être sur la ligne de symétrie. Le visage doit occuper 70 à 80% de la photo.`,
                es: `La foto debe mostrar la parte superior de la cabeza y la parte superior de los hombros. Su cabeza debe estar en el centro de la foto y debe mostrarse completamente desde la parte superior de la línea del cabello o la coronilla hasta la punta de la barbilla. La nariz debe estar en la línea de simetría. La cara debe ocupar el 70-80 por ciento de la foto.`,
                de: `Das Foto muss die Oberseite Ihres Kopfes und die Oberseite Ihrer Schultern zeigen. Ihr Kopf muss sich in der Mitte des Fotos befinden und von der Spitze des Haaransatzes oder der Krone des Kopfes bis zur Spitze des Kinns vollständig sichtbar sein. Die Nase muss auf der Symmetrielinie liegen. Das Gesicht muss 70-80 Prozent des Fotos einnehmen.`,
                it: `La foto deve mostrare la parte superiore della testa e la parte superiore delle spalle. La tua testa deve essere al centro della foto ed essere completamente mostrata dalla parte superiore dell&#39;attaccatura dei capelli o dalla corona della testa fino alla punta del mento. Il naso deve essere sulla linea di simmetria. Il viso deve occupare il 70-80 percento della foto.`,
            },
            {
                en: `The photo must have no frames.`,
                fr: `La photo ne doit avoir aucun cadre.`,
                es: `La foto no debe tener marcos.`,
                de: `Das Foto darf keine Rahmen haben.`,
                it: `La foto non deve avere cornici.`,
            },
            {
                en: `The photo must be rectangular (with the 35x45 aspect ratio).`,
                fr: `La photo doit être rectangulaire (au format 35x45).`,
                es: `La foto debe ser rectangular (con la relación de aspecto de 35x45).`,
                de: `Das Foto muss rechteckig sein (mit dem Seitenverhältnis 35x45).`,
                it: `La foto deve essere rettangolare (con proporzioni 35x45).`,
            },
            {
                en: `The JPEG file size must be 20-35 kilobytes.`,
                fr: `La taille du fichier JPEG doit être de 20 à 35 kilo-octets.`,
                es: `El tamaño del archivo JPEG debe ser de 20-35 kilobytes.`,
                de: `Die JPEG-Dateigröße muss 20-35 Kilobyte betragen.`,
                it: `La dimensione del file JPEG deve essere compresa tra 20 e 35 kilobyte.`,
            },
            {
                en: `The color scheme must be neutral. The colors must show the natural skin tone. The image must be clear, well defined and in focus.`,
                fr: `La palette de couleurs doit être neutre. Les couleurs doivent montrer le teint naturel de la peau. L'image doit être claire, bien définie et nette.`,
                es: `El esquema de color debe ser neutral. Los colores deben mostrar el tono natural de la piel. La imagen debe ser clara, bien definida y enfocada.`,
                de: `Das Farbschema muss neutral sein. Die Farben müssen den natürlichen Hautton zeigen. Das Bild muss klar, klar und scharf sein.`,
                it: `La combinazione di colori deve essere neutra. I colori devono mostrare il tono naturale della pelle. L'immagine deve essere chiara, ben definita e messa a fuoco.`,
            },
        ],
        applicant_photo: {
            en: `Applicant Photo`,
            fr: `Photo du demandeur`,
            es: `Foto del solicitante`,
            de: `Foto des Antragstellers`,
            it: `Foto del candidato`,
        }
    },
    payment: {
        section_title: {
            en: `Payment Information`,
            fr: `Informations de paiement`,
            es: `Información del pago`,
            de: `Zahlungsinformationen`,
            it: `Informazioni sul pagamento`,
        },
        payer_name: {
            label: {
                en: `Payer's Name`,
                fr: `Nom du payeur`,
                es: `Nombre del pagador`,
                de: `Name des Zahlers`,
                it: `Nome del pagatore`,
            },
            extra: {
                en: `Please enter the first and last name of the person who makes the payment.`,
                fr: `Veuillez saisir le prénom et le nom de la personne qui effectue le paiement.`,
                es: `Ingrese el nombre y apellido de la persona que realiza el pago.`,
                de: `Bitte geben Sie den Vor- und Nachnamen der Person an, die die Zahlung getätigt hat.`,
                it: `Inserisci il nome e il cognome della persona che effettua il pagamento.`,
            },
        }
    },
    submit_your_application: {
        en: `Submit your application`,
        fr: `Soumettez votre candidature`,
        es: `Envía tu solicitud`,
        de: `Reichen Sie Ihre Bewerbung ein`,
        it: `Invia la tua domanda`,
    }
}

export default resources