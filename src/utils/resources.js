import React from "react";
import { Alert } from "antd";
export const translate = (r, lang) => {
  if (!lang) return r.en ? r.en : "";
  const pre = lang.split("-")[0];
  return r[pre] ? r[pre] : r.en ? r.en : "";
};
const resources = {
  before: {
    section_title: {
      en: `Make sure you enter your passport information correctly`,
      fr: `Assurez-vous d'entrer correctement les informations de votre passeport`,
      it: `Assicurati di inserire il tuo passaporto informazioni correttamente`,
      de: `Stellen Sie sicher, dass Sie geben Sie Ihre passport-Informationen korrekt`,
      es: `Asegúrate de introducir la información del pasaporte correctamente`
    },
    section_french: {
      en: `Instructions for French passport holders`,
      fr: `Instructions pour les détenteurs d'un passeport français`,
      it: `Istruzioni per i titolari di passaporto francese`,
      de: `Anweisungen für französische Passinhaber`,
      es: `Instrucciones para los titulares de pasaportes franceses`
    },
    section_french_html: {
      en: (
        <>
          <h6>Passport Number</h6>
          <ul>
            <li>
              Enter the passport number that is at the top of the passport information page (the <strong>page with your photo</strong>).
              <ul>
                <li>Do not enter the number on the first page of your passport, or the number at the bottom of the page with your photo.</li>
              </ul>
            </li>
            <li>Most passport numbers are 9 characters long. If the number you plan to enter is much shorter or longer than this, check that you are using the right number. </li>
            <li>Passport numbers are made up of a combination of letters and numbers. Be extra careful with the letter O and the number 0, and the letter I and the number 1. </li>
            <li>Don’t enter any special characters (like a hyphen) or spaces. </li>
          </ul>
          <h6>Passport country of issue</h6>
          <ul>
            <li>
              Select the country code that matches the one on the passport information page (the <strong>page with your photo</strong>).{" "}
            </li>
            <li>To find this code see the field named “Code”, “Issuing country”, or “Authority”.</li>
            <li>
              <strong>Be careful</strong> when you select the <strong>code from the list</strong> in the application form. Some countries have multiple options and some codes are very similar.
            </li>
          </ul>
          <Alert
            message="If you enter the wrong passport number OR country code, you may not be able to board your flight to Canada."
            description={
              <ul>
                <li>You may only find out at the airport if you made a mistake. </li>
                <li>You’ll have to reapply for an eTA at the airport. </li>
                <li>Depending on your situation, it may not be possible to get an eTA at the last minute.</li>
              </ul>
            }
            type="warning"
            showIcon
          />
        </>
      ),
      fr: (
        <>
          <h6>Numéro de passeport</h6>
          <ul>
            <li>
              Entrez le numéro de passeport qui se trouve en haut de la page d'informations sur le passeport, (la <strong>page avec votre photo</strong>).
              <ul>
                <li>N'inscrivez pas le numéro sur la première page de votre passeport, ni le numéro en bas de page avec votre photo.</li>
              </ul>
            </li>
            <li>La plupart des numéros de passeport comportent 9 caractères. Si le nombre que vous prévoyez d'entrer est beaucoup plus court ou plus long, vérifiez que vous utilisez le bon nombre.</li>
            <li>Les numéros de passeport sont constitués d'une combinaison de lettres et de chiffres. Soyez très prudent avec la lettre O et le chiffre 0, et la lettre I et le chiffre 1.</li>
            <li>N'entrez aucun caractère spécial (comme un trait d'union) ni espace.</li>
          </ul>
          <h6>Pays de délivrance du passeport</h6>
          <ul>
            <li>
              Sélectionnez le code du pays qui correspond à celui sur la page d'informations sur le passeport, (la <strong>page avec votre photo</strong>).{" "}
            </li>
            <li>Pour trouver ce code, consultez le champ intitulé «Code», «Pays émetteur» ou «Autorité».</li>
            <li>
              <strong>Faites attention</strong> lorsque vous sélectionnez le <strong> code dans la liste </strong> du formulaire de demande. Certains pays ont plusieurs options et certains codes sont très similaires.
            </li>
          </ul>
          <Alert
            message="Si vous entrez un mauvais numéro de passeport OU un mauvais code de pays, vous ne pourrez peut-être pas embarquer sur votre vol pour le Canada."
            description={
              <ul>
                <li>Vous ne pourrez le savoir à l'aéroport que si vous avez fait une erreur.</li>
                <li>Vous devrez présenter une nouvelle demande pour une AVE à l'aéroport.</li>
                <li>Selon votre situation, il peut ne pas être possible d'obtenir une AVE à la dernière minute.</li>
              </ul>
            }
            type="warning"
            showIcon
          />
        </>
      ),
      it: (
        <>
          <h6>Numero di passaporto</h6>
          <ul>
            <li>
              Inserisci il numero del passaporto che si trova nella parte superiore della pagina delle informazioni sul passaporto (la <strong> pagina con la tua foto </strong>).
              <ul>
                <li>Non inserire il numero nella prima pagina del passaporto o il numero nella parte inferiore della pagina con la tua foto.</li>
              </ul>
            </li>
            <li>La maggior parte dei numeri di passaporto sono lunghi 9 caratteri. Se il numero che intendi inserire è molto più breve o più lungo di questo, verifica di utilizzare il numero giusto.</li>
            <li>I numeri del passaporto sono costituiti da una combinazione di lettere e numeri. Fai molta attenzione con la lettera O e il numero 0, la lettera I e il numero 1.</li>
            <li>Non inserire caratteri speciali (come un trattino) o spazi.</li>
          </ul>
          <h6>Paese di rilascio del passaporto</h6>
          <ul>
            <li>
              Seleziona il prefisso internazionale corrispondente a quello nella pagina delle informazioni sul passaporto (la <strong> pagina con la tua foto </strong>).{" "}
            </li>
            <li>Per trovare questo codice, vedere il campo "Codice", "Paese di emissione" o "Autorità".</li>
            <li>
              <strong> Fai attenzione </strong> quando selezioni il <strong> codice dall'elenco </strong> nel modulo di domanda. Alcuni paesi hanno più opzioni e alcuni codici sono molto simili.
            </li>
          </ul>
          <Alert
            message="Se inserisci un numero di passaporto o un codice paese errato, potresti non essere in grado di salire a bordo del tuo volo per il Canada."
            description={
              <ul>
                <li> Puoi scoprirlo all'aeroporto solo se hai commesso un errore. </li>
                <li> Dovrai presentare nuovamente domanda per un eTA in aeroporto. </li>
                <li> A seconda della situazione, potrebbe non essere possibile ottenere un eTA all'ultimo minuto. </li>
              </ul>
            }
            type="warning"
            showIcon
          />
        </>
      ),
      de: (
        <>
          <h6>Ausweisnummer</h6>
          <ul>
            <li>
              Geben Sie die Passnummer ein, die sich oben auf der Passinformationsseite befindet (die <strong> Seite mit Ihrem Foto </strong>).
              <ul>
                <li>Geben Sie nicht die Nummer auf der ersten Seite Ihres Reisepasses oder die Nummer unten auf der Seite mit Ihrem Foto ein.</li>
              </ul>
            </li>
            <li>Die meisten Passnummern sind 9 Zeichen lang. Wenn die Nummer, die Sie eingeben möchten, viel kürzer oder länger ist, überprüfen Sie, ob Sie die richtige Nummer verwenden.</li>
            <li>Passnummern bestehen aus einer Kombination von Buchstaben und Zahlen. Seien Sie besonders vorsichtig mit dem Buchstaben O und der Nummer 0 sowie dem Buchstaben I und der Nummer 1.</li>
            <li>Geben Sie keine Sonderzeichen (wie einen Bindestrich) oder Leerzeichen ein.</li>
          </ul>
          <h6>Ausstellungsland des Reisepasses</h6>
          <ul>
            <li>
              Wählen Sie den Ländercode aus, der mit dem auf der Passinformationsseite übereinstimmt (die <strong> Seite mit Ihrem Foto </strong>).{" "}
            </li>
            <li>Informationen zum Auffinden dieses Codes finden Sie im Feld "Code", "Ausstellungsland" oder "Behörde".</li>
            <li>
              <strong> Seien Sie vorsichtig </strong>, wenn Sie den <strong> Code aus der Liste </strong> im Antragsformular auswählen. Einige Länder haben mehrere Optionen und einige Codes sind sehr ähnlich.
            </li>
          </ul>
          <Alert
            message="Wenn Sie die falsche Passnummer oder den falschen Ländercode eingeben, können Sie Ihren Flug nach Kanada möglicherweise nicht antreten."
            description={
              <ul>
                <li> Sie können es am Flughafen nur herausfinden, wenn Sie einen Fehler gemacht haben. </li>
                <li> Sie müssen am Flughafen erneut eine eTA beantragen. </li>
                <li> Abhängig von Ihrer Situation ist es möglicherweise nicht möglich, in letzter Minute eine eTA zu erhalten. </li>
              </ul>
            }
            type="warning"
            showIcon
          />
        </>
      ),
      es: (
        <>
          <h6>Número de pasaporte</h6>
          <ul>
            <li>
              Ingrese el número de pasaporte que se encuentra en la parte superior de la página de información del pasaporte (la página <strong> con su foto </strong>).
              <ul>
                <li>No ingrese el número en la primera página de su pasaporte, o el número en la parte inferior de la página con su foto.</li>
              </ul>
            </li>
            <li>La mayoría de los números de pasaporte tienen 9 caracteres de longitud. Si el número que planea ingresar es mucho más corto o más largo que este, verifique que esté usando el número correcto.</li>
            <li>Los números de pasaporte están formados por una combinación de letras y números. Tenga mucho cuidado con la letra O y el número 0, y la letra I y el número 1.</li>
            <li>No ingrese caracteres especiales (como un guión) o espacios.</li>
          </ul>
          <h6>Pasaporte País de Emisión</h6>
          <ul>
            <li>
              Seleccione el código de país que coincida con el de la página de información del pasaporte (la página <strong> con su foto </strong>).{" "}
            </li>
            <li>Para encontrar este código, consulte el campo denominado "Código", "País emisor" o "Autoridad".</li>
            <li>
              <strong> Tenga cuidado </strong> cuando seleccione el código <strong> de la lista </strong> en el formulario de solicitud. Algunos países tienen múltiples opciones y algunos códigos son muy similares.
            </li>
          </ul>
          <Alert
            message="Si ingresa el número de pasaporte incorrecto O el código de país, es posible que no pueda abordar su vuelo a Canadá."
            description={
              <ul>
                <li> Solo puede averiguarlo en el aeropuerto si cometió un error. </li>
                <li> Tendrá que volver a solicitar una eTA en el aeropuerto. </li>
                <li> Dependiendo de su situación, puede que no sea posible obtener una eTA en el último minuto. </li>
              </ul>
            }
            type="warning"
            showIcon
          />
        </>
      )
    },
    alert_expired: {
      en: <Alert message="Provisional passports issued by Venezuela are not valid for travel to Canada." description="If the printed expiry date on your passport has passed, you cannot use our online form to apply for an eTA." type="warning" showIcon />,
      fr: <Alert message="Les passeports provisoires délivrés par le Venezuela ne sont pas valables pour voyager au Canada." description="Si la date d'expiration imprimée sur votre passeport est passée, vous ne pouvez pas utiliser notre formulaire en ligne pour demander une AVE." type="warning" showIcon />,
      it: <Alert message="I passaporti provvisori rilasciati dal Venezuela non sono validi per i viaggi in Canada." description="Se la data di scadenza stampata sul passaporto è scaduta, non è possibile utilizzare il nostro modulo online per richiedere un eTA." type="warning" showIcon />,
      de: <Alert message="Von Venezuela ausgestellte vorläufige Pässe gelten nicht für Reisen nach Kanada." description="Wenn das auf Ihrem Reisepass angegebene Ablaufdatum abgelaufen ist, können Sie unser Online-Formular nicht verwenden, um eine eTA zu beantragen." type="warning" showIcon />,
      es: <Alert message="Los pasaportes provisionales emitidos por Venezuela no son válidos para viajar a Canadá." description="Si la fecha de vencimiento impresa en su pasaporte ya pasó, no puede usar nuestro formulario en línea para solicitar una eTA." type="warning" showIcon />
    },
    alert_no_greencard: {
      en: (
        <Alert
          message="You may need a visa to travel to Canada"
          description={
            <div>
              <a style={{ textDecoration: "underline" }}>Find out what document you need</a> to travel to, or transit through Canada.
            </div>
          }
          type="warning"
          showIcon
        />
      ),
      fr: (
        <Alert
          message="Vous pourriez avoir besoin d'un visa pour voyager au Canada"
          description={
            <div>
              <a style={{ textDecoration: "underline" }}>Découvrez de quel document vous avez besoin </a> pour voyager ou transiter par le Canada.
            </div>
          }
          type="warning"
          showIcon
        />
      ),
      it: (
        <Alert
          message="Potrebbe essere necessario un visto per viaggiare in Canada"
          description={
            <div>
              <a style={{ textDecoration: "underline" }}>Scopri di quale documento hai bisogno </a> per viaggiare o transitare attraverso il Canada.
            </div>
          }
          type="warning"
          showIcon
        />
      ),
      de: (
        <Alert
          message="Möglicherweise benötigen Sie ein Visum, um nach Kanada zu reisen"
          description={
            <div>
              <a style={{ textDecoration: "underline" }}>Finden Sie heraus, welches Dokument Sie benötigen </a>, um nach Kanada zu reisen oder durch Kanada zu reisen.
            </div>
          }
          type="warning"
          showIcon
        />
      ),
      es: (
        <Alert
          message="Es posible que necesite una visa para viajar a Canadá"
          description={
            <div>
              <a style={{ textDecoration: "underline" }}>Averigüe qué documento necesita </a> para viajar o transitar por Canadá.
            </div>
          }
          type="warning"
          showIcon
        />
      )
    },
    disclaimer_1: {
      en: `DISCLAIMER: Before you begin this application, make sure that you have a valid passport and credit card available. This application will only accept the following credit cards: MasterCard, VISA, American Express, and Discover (JCB, Diners Club).`,
      fr: `AVERTISSEMENT: Avant de commencer cette demande, assurez-vous que vous avez un passeport valide et une carte de crédit disponible. Cette application accepte uniquement les cartes de crédit suivantes: MasterCard, VISA, American Express et Discover (JCB, Diners Club).`,
      it: `ESCLUSIONE DI RESPONSABILITÀ: prima di iniziare questa applicazione, assicurarsi di disporre di un passaporto e di una carta di credito validi. Questa applicazione accetta solo le seguenti carte di credito: MasterCard, VISA, American Express e Discover (JCB, Diners Club).`,
      de: `HAFTUNGSAUSSCHLUSS: Bevor Sie mit dieser Anwendung beginnen, stellen Sie sicher, dass Sie über einen gültigen Reisepass und eine gültige Kreditkarte verfügen. Diese Anwendung akzeptiert nur die folgenden Kreditkarten: MasterCard, VISA, American Express und Discover (JCB, Diners Club).`,
      es: `DESCARGO DE RESPONSABILIDAD: Antes de comenzar esta solicitud, asegúrese de tener un pasaporte válido y una tarjeta de crédito disponibles. Esta aplicación solo aceptará las siguientes tarjetas de crédito: MasterCard, VISA, American Express y Discover (JCB, Diners Club).`
    },
    disclaimer_2: {
      en: `All information provided by you, or on your behalf by a designated third party, must be true and correct. This application costs $79 and is not refundable except if your eTA is denied. You many be subject to administrative or criminal penalties if you knowingly and willfully make a materially false, fictitious, or fraudulent statement or representation in an electronic travel authorization application submitted by you or on your behalf.`,
      fr: `Toutes les informations fournies par vous ou en votre nom par un tiers désigné doivent être véridiques et correctes. Ce service est facturé 79 $ et n'est pas remboursable sauf si votre AVE est refusée. Vous pourriez être passible de sanctions administratives ou pénales si vous faites sciemment et volontairement une déclaration ou une représentation matériellement fausse, fictive ou frauduleuse dans une demande d'autorisation de voyage électronique soumise par vous ou en votre nom.`,
      it: `Tutte le informazioni fornite da te o per tuo conto da una terza parte designata devono essere vere e corrette. Questa applicazione costa $ 79 e non è rimborsabile, tranne se il tuo eTA viene negato. Molti sono soggetti a sanzioni amministrative o penali se si fa consapevolmente e intenzionalmente una dichiarazione o una rappresentazione materialmente falsa, fittizia o fraudolenta in una domanda di autorizzazione di viaggio elettronica inviata dall'utente o per suo conto.`,
      de: `Alle von Ihnen oder in Ihrem Namen von einem bestimmten Dritten bereitgestellten Informationen müssen wahr und richtig sein. Dieser Antrag kostet 79 US-Dollar und kann nur zurückerstattet werden, wenn Ihre eTA abgelehnt wird. Sie können verwaltungs- oder strafrechtlich verfolgt werden, wenn Sie in einem von Ihnen oder in Ihrem Namen eingereichten Antrag auf elektronische Reisegenehmigung wissentlich und vorsätzlich eine sachlich falsche, fiktive oder betrügerische Erklärung oder Darstellung abgeben.`,
      es: `Toda la información proporcionada por usted, o en su nombre por un tercero designado, debe ser verdadera y correcta. Esta aplicación cuesta $ 79 y no es reembolsable, excepto si se niega su eTA. Usted puede estar sujeto a sanciones administrativas o penales si realiza una declaración o representación materialmente falsa, ficticia o fraudulenta en una solicitud de autorización electrónica de viaje presentada por usted o en su nombre.`
    },
    disclaimer_3: {
      en: "Entering incorrect information could lead to a delay or even a refusal of an eTA application and/or prevent the applicant from boarding their flight.",
      fr: `La saisie d'informations incorrectes peut entraîner un retard, voire un refus d'une demande d'AVE et / ou empêcher le demandeur d'embarquer sur son vol.`,
      it: `L'immissione di informazioni errate può comportare un ritardo o addirittura il rifiuto di una domanda di eTA e / o impedire al richiedente di salire a bordo del proprio volo.`,
      de: `Die Eingabe falscher Informationen kann zu einer Verzögerung oder sogar Ablehnung eines eTA-Antrags führen und / oder den Antragsteller daran hindern, seinen Flug zu betreten.`,
      es: `Ingresar información incorrecta podría ocasionar una demora o incluso el rechazo de una solicitud de eTA y / o evitar que el solicitante aborde su vuelo.`
    },
    bPassportFranceOrVenezuela: {
      en: `Do you have a passport issued by France or Venezuela? `,
      fr: `Avez-vous un passeport délivré par la France ou le Venezuela? `,
      it: `Avete un passaporto rilasciato da Francia o in Venezuela? `,
      de: `Haben Sie einen Reisepass, ausgestellt von Frankreich oder Venezuela? `,
      es: `¿Usted tiene un pasaporte expedido por Francia o Venezuela? `
    },
    bFrance: {
      en: `Which country issued your passport? `,
      fr: `Quel est le pays qui vous a délivré votre passeport? `,
      it: `Che paese che ha rilasciato il passaporto? `,
      de: `Welches Land ausgestellten Pass? `,
      es: `País que expidió el pasaporte? `
    },
    bHasGreenCard: {
      en: `Are you a lawful permanent resident of the U.S. and have an alien registration card (Green Card)? `,
      fr: `Êtes-vous un résident permanent légal des Etats-Unis en possession de la Carte Verte? `,
      it: `Sei un residente permanente degli stati UNITI e hanno un alien registration card (Carta Verde)? `,
      de: `Sind Sie ein rechtmäßigen ständigen Wohnsitz in den USA und haben eine alien registration card (Green Card)? `,
      es: `¿Es usted un residente permanente legal de los estados UNIDOS y tiene una tarjeta de residencia (Green Card)? `
    },
    bVenezuelaPassportExpired: {
      en: `Has the printed expiry date on your Venezuelan passport already passed? `,
      fr: `La date d'expiration imprimée sur votre passeport Vénézuélien est elle déjà passée? `,
      it: `Ha stampata la data di scadenza sul vostro Bolivar passaporto già passato? `,
      de: `Hat das gedruckte Ablaufdatum auf dem Venezolanischen Pass bereits abgelaufen ist? `,
      es: `Tiene impresa la fecha de caducidad de su pasaporte Venezolano ya ha pasado? `
    },
    bUCI: {
      label: {
        en: `Has the printed expiry date on your Venezuelan passport already passed? `,
        fr: `La date d'expiration imprimée sur votre passeport Vénézuélien est elle déjà passée? `,
        it: `Ha stampata la data di scadenza sul vostro Bolivar passaporto già passato? `,
        de: `Hat das gedruckte Ablaufdatum auf dem Venezolanischen Pass bereits abgelaufen ist? `,
        es: `Tiene impresa la fecha de caducidad de su pasaporte Venezolano ya ha pasado? `
      },
      extra: {
        en: `This is an 8 or 10-digit number. You have this number if you applied to IRCC in the past. You can find it on an approval or refusal letter from IRCC.`,
        fr: `C'est un nombe à 8 ou 10 chiffres. Vous avez ce numéro si vous avez appliqué pour un IRCC dans le passé. Vous pouvez le trouver sur l'approbation ou le refus de la lettre de l'IRCC.`,
        it: `Questo è un 8 o un numero di 10 cifre. Si dispone di questo numero, se applicato all'IRCC in passato. Puoi trovare l'approvazione o la lettera di rifiuto da IRCC.`,
        de: `Dies ist ein 8-oder 10-stellige Nummer. Sie haben diese Nummer, wenn Sie angewendet IRCC in der Vergangenheit. Sie finden es auf eine Zulassung oder die Verweigerung der Brief vom IRCC.`,
        es: `Este es un 8 o 10 dígitos. Usted tiene este número, si se aplica a IRCC en el pasado. Usted puede encontrar en una aprobación o denegación de la carta de IRCC.`
      }
    },
    start_button: {
      en: `Start Your Application`,
      fr: `Commencez votre Application`,
      es: `Rellenar nuevo cuestionario`,
      de: `Neuen Antragsformular ausfüllen`,
      it: `Compila un nuovo modulo`
    }
  },
  validations: {
    required: {
      en: `This field is required`,
      fr: `Ce champ de saisie est obligatoire`,
      es: `Campo obligatorio para rellenar`,
      de: `Das ist ein Pflichtfeld.`,
      it: `E obbligatorio compilare questo campo`
    },
    validateEmailConfirm: {
      notmatch: {
        en: `The confirmation e-mail must match your e-mail address.`,
        fr: `L'e-mail de confirmation doit correspondre à votre adresse e-mail.`,
        es: `El e-mail de confirmación debe coincidir con su dirección de correo electrónico.`,
        de: `Die Bestätigungs-e-mail müssen mit Ihrem e-mail-Adresse.`,
        it: `L'e-mail di conferma deve corrispondere il vostro indirizzo di posta elettronica.`
      }
    },
    required_sign: {
      en: 'Please sign',
      fr: 'Veuillez signer',
      es: 'Por favor firme',
      de: 'Bitte melden',
      it: 'Si prega di firmare',
  },
  },
  yes: {
    en: `Yes`,
    fr: `Oui`,
    it: `Sì`,
    es: `Sí`,
    de: `Ja`
  },
  no: {
    en: `No`,
    fr: `Non`,
    it: `No`,
    es: `No`,
    de: `No`
  },
  add_another: {
    en: `Add another`,
    fr: `Ajouter un autre`,
    it: `Agrega otro`,
    es: `Neue hinzufügen`,
    de: `Aggiungi un altro`
  },
  prev: {
    en: "Prev",
    fr: "Prec",
    es: "Antes",
    de: "Bis",
    it: "Prec"
  },
  next: {
    en: "Next",
    fr: "Suiv",
    es: "Próximo",
    de: "Folgende",
    it: "Seguente"
  },
  save_and_continue_later: {
    en: "Save an Continue Later",
    fr: "Enregistrer un continuer plus tard",
    es: "Guardar y continuar más tarde",
    de: "Speichern und später fortsetzen",
    it: "Salva e continua più tardi"
  },
  submit_with_payment: {
    en: "SUBMIT AND MAKE YOUR PAYMENT",
    fr: "SOUMETTRE ET EFFECTUER VOTRE PAIEMENT",
    es: "ENVÍE Y HAGA SU PAGO",
    de: "Übermitteln Sie und machen Sie Ihre Zahlung",
    it: "INVIA E EFFETTUA IL TUO PAGAMENTO"
  },
  language: {
    label: {
      en: `Hints and help language`,
      fr: `Astuces et langage d'aide`,
      de: `Tipps und Hilfe-Sprache`,
      it: `Aiuto e suggerimenti lingua`,
      es: `Consejos y ayuda de idioma`
    },
    extra: {
      en: `Select language in which you would like the hints, regarding completion of the application form, to be displayed`,
      fr: `Indiquez la langue préférée pour le remplissage de votre demande de visa`,
      es: `Indique el idioma preferido para completar su solicitud de visa”.`,
      de: `Geben Sie bitte die Sprache der Ausfüllhilfen an.`,
      it: `Indicare la lingua delle spiegazioni`
    }
  },
  submit_your_application: {
    en: `Submit your application`,
    fr: `Soumettez votre application`,
    es: `Envía tu solicitud`,
    de: `Reichen Sie Ihre Bewerbung ein`,
    it: `Invia la tua domanda`
  },
  continue_to_appointment: {
    en: "Continue to Your Appointment Information",
    fr: "Continuez vers les informations de rendez-vous",
    es: "Continúe con la información de su cita",
    de: "Fahren Sie mit Ihren Termininformationen fort",
    it: `Continua con le informazioni sull'appuntamento`
  },
  step_welcome: {
    section_title: {
      en: `DISCLAIMER: On this website you can fill out the Application for an Electronic Travel Authorization (eTA) form and print the eTA application form, required for applying for a visa to the Canada. EACH TRAVELER MUST COMPLETE HIS/HER OWN FORM IN ORDER TO GET HIS/HER APPLICATION. The estimated average time to complete this submission is 15 minutes per respondent.`,
      fr: `AVERTISSEMENT: Sur ce site Web, vous pouvez remplir le formulaire de demande d'autorisation de voyage électronique (AVE/ETA) et imprimer le formulaire de demande d'AVE/ETA, requis pour demander un visa pour le Canada. CHAQUE VOYAGEUR DOIT REMPLIR SON PROPRE FORMULAIRE POUR OBTENIR SA DEMANDE. Le temps moyen estimé pour terminer cette soumission est de 15 minutes par répondant.`,
      it: `DESCARGO DE RESPONSABILIDAD: Su questo sito Web è possibile compilare il modulo di domanda di autorizzazione di viaggio elettronica (eTA) e stampare il modulo di domanda eTA, necessario per richiedere un visto per il Canada. OGNI VIAGGIATORE DEVE COMPLETARE IL SUO / IL SUO PROPRIO MODULO PER OTTENERE IL SUO / LA SUA DOMANDA. Il tempo medio stimato per completare questa presentazione è di 15 minuti per rispondente.`,
      de: `HAFTUNGSAUSSCHLUSS: Auf dieser Website können Sie das Formular zur Beantragung einer elektronischen Reisegenehmigung (eTA) ausfüllen und das für die Beantragung eines Visums für Kanada erforderliche eTA-Antragsformular ausdrucken. JEDER REISENDER MUSS SEIN EIGENES FORMULAR AUSFÜLLEN, UM SEINEN ANTRAG ZU ERHALTEN. Die geschätzte durchschnittliche Zeit, um diese Einreichung abzuschließen, beträgt 15 Minuten pro Befragter.`,
      es: `DESCARGO DE RESPONSABILIDAD: en este sitio web puede completar la Solicitud de un formulario de Autorización Electrónica de Viaje (eTA) e imprimir el formulario de solicitud de eTA, requerido para solicitar una visa para Canadá. CADA VIAJERO DEBE COMPLETAR SU PROPIO FORMULARIO PARA OBTENER SU SOLICITUD. El tiempo promedio estimado para completar este envío es de 15 minutos por encuestado.`
    },
    isRepresentative: {
      en: `Are you applying on behalf of someone?`,
      fr: `Faites vous une demande pour une autre personne?`,
      es: `Está usted solicitando en nombre de alguien?`,
      de: `Bewerben Sie sich im Auftrag von jemand?`,
      it: `Si candida per conto di qualcuno?`
    },
    isApplyingOnBehalfOfMinorChild: {
      en: `Are you applying on behalf of a minor child?`,
      fr: `Faites vous une demande au nom d'un enfant mineur?`,
      es: `Está usted solicitando en nombre de un menor de edad?`,
      de: `Bewerben Sie sich im Namen eines minderjährigen Kindes?`,
      it: `Si candida per conto di un minore?`
    }
  },
  step_representative: {
    section_title: {
      en: `Parent/guardian or representative details`,
      fr: `Informations personnelles du parent/tuteur ou représentant`,
      es: `Padre/madre / tutor o representante detalles`,
      de: `Elternteil/Vormund oder Vertreter details`,
      it: `Genitore/tutore o rappresentante dettagli`
    },
    representativeRelationship: {
      en: `I am`,
      fr: `Je suis`,
      es: `Estoy`,
      de: `Ich bin`,
      it: `Io sono`
    },
    representativeCompensated: {
      en: `Are you being paid to represent the applicant and complete the form on their behalf?`,
      fr: `Êtes-vous rémunéré pour représenter le demandeur et de remplir le formulaire en son nom?`,
      es: `Están siendo pagados para representar al solicitante y complete el formulario en su nombre?`,
      de: `Werden Sie dafür bezahlt, der den Antragsteller vertritt und füllen Sie das Formular auf Ihren Namen?`,
      it: `Sei stato pagato per rappresentare il richiedente e completare il form sul loro conto?`
    },
    familyName: {
      en: `Surname(s) / last name(s)`,
      fr: `Nom(s) / prénom(s)`,
      es: `Apellido(s) / apellido(s)`,
      de: `Nachname(N) / Nachname(N)`,
      it: `Cognome(i) / cognome(i)`
    },
    firstName: {
      en: `Given name(s) / first name(s)`,
      fr: `Prénom(s) / prénom(s)`,
      es: `Nombre(s) / nombre(s)`,
      de: `Vorname(N) / first name(s)`,
      it: `Nome(i) / nome(i)`
    },
    membershipIdNumber: {
      en: `Membership ID number`,
      fr: `L'adhésion numéro d'identification`,
      es: `Número de IDENTIFICACIÓN de membresía`,
      de: `Mitgliedschaft-ID-Nummer`,
      it: `Numero di matricola`
    },
    province: {
      en: `Which province or territory?`,
      fr: `La province ou le territoire?`,
      es: `Que provincia o territorio?`,
      de: `Die Provinz oder Territorium?`,
      it: `Che la provincia o il territorio?`
    },
    organizationName: {
      en: `Name of firm, organization`,
      fr: `Nom de l'entreprise ou de l'organisation`,
      es: `Nombre de la empresa, organización`,
      de: `Name der Firma, Organisation`,
      it: `Nome di azienda, organizzazione`
    },
    mailingAddress: {
      en: `Mailing address`,
      fr: `Adresse postale`,
      es: `Dirección de correo`,
      de: `Postanschrift`,
      it: `Indirizzo postale`
    },
    phoneNumber: {
      en: `Telephone number`,
      fr: `Le numéro de téléphone`,
      es: `Número de teléfono`,
      de: `Telefonnummer`,
      it: `Il numero di telefono`
    },
    faxNumber: {
      en: `Fax number`,
      fr: `Numéro de Fax`,
      es: `Número de Fax`,
      de: `Fax-Nummer`,
      it: `Numero di Fax`
    },
    emailAddress: {
      en: `Email address`,
      fr: `Adresse Email`,
      es: `Dirección de correo electrónico`,
      de: `E-Mail-Adresse`,
      it: `Indirizzo e-mail`
    },
    postalCodeZip: {
      en: `Postal code`,
      fr: `Code Postal`,
      es: `Código Postal`,
      de: `PLZ`,
      it: `Codice postale`
    },
    declareContactAndInformationIsTruthy: {
      label: {
        en: `Representative's declaration`,
        fr: `Représentant de la déclaration`,
        es: `Representante de la declaración`,
        de: `Vertreter in der Erklärung`,
        it: `Rappresentante dichiarazione del`
      },
      extra: {
        en: `I declare that my contact and personal information above is truthful, complete and correct.`,
        fr: `Je déclare que les coordonnées et les renseignements personnels que j'ai indiqués ci-dessus sont véridiques, complets et exacts.`,
        es: `Declaro que mi contacto personal y la información anterior es verdadera, completa y correcta.`,
        de: `Ich erkläre, dass meine Kontakt-und persönlichen Informationen über ist wahrheitsgemäß, vollständig und richtig sind.`,
        it: `Dichiaro che le mie informazioni personali e di contatto sopra sono veritiere, complete e corrette.`
      }
    },
    understandAndAccept: {
      label: {
        en: `Representative's authorization`,
        fr: `Représentant de l'autorisation`,
        es: `Representante de la autorización de`,
        de: `Vertreter Genehmigung`,
        it: `Rappresentante dell'autorizzazione`
      },
      extra: {
        en: `I understand and accept that I am the person appointed by the applicant to conduct business on the applicant or sponsor's behalf with Immigration, Refugees and Citizenship Canada and the Canada Border Services Agency.`,
        fr: `Je comprends et j'accepte que je suis la personne désignée par le demandeur pour gérer ses interactions ou celles d'un répondant avec Immigration, Réfugiés et Citoyenneté Canada et l'Agence des services frontaliers du Canada.`,
        es: `Entiendo y acepto que soy la persona designada por el solicitante para llevar a cabo negocios en el solicitante o del patrocinador nombre con la Inmigración, los Refugiados y Ciudadanía de Canadá y de la Agencia de Servicios Fronterizos de Canadá.`,
        de: `Ich verstehe und akzeptiere, dass ich bin die person, die ernannt durch die Klägerin die Geschäfte über den Antragsteller oder sponsor-Namen mit der Einwanderung, Flüchtlingen und Bürgerschaft Canada und der Canada Border Services Agency.`,
        it: `Capisco e accetto che io sono la persona nominata dal richiedente ad effettuare il richiedente o di sponsor conto, Immigrazione, Rifugiati e Cittadinanza Canada e il Canada Border Services Agency.`
      }
    }
  },
  step_prerequisite: {
    section_title: {
      en: `Complete the application form (Prerequisite)`,
      fr: `Remplir le formulaire de demande (Prérequis)`,
      es: `Completar el formulario de solicitud (Prerrequisito)`,
      de: `Füllen Sie das Antragsformular aus (Voraussetzung)`,
      it: `Completa il modulo di domanda (Prerequisito)`
    },
    travelDocumentType: {
      en: `What travel document do you plan to use to travel to Canada?`,
      fr: `Quel document de voyage avez-vous l'intention d'utiliser pour venir au Canada?`,
      es: `¿Qué documento de viaje ¿piensa utilizar para viajar a Canadá?`,
      de: `Was Reisedokument planen Sie Reisen nach Kanada?`,
      it: `Quale documento di viaggio si intende utilizzare per il viaggio in Canada?`
    },
    countryOfCitizenship: {
      label: {
        en: `Select the code that matches the one on your passport.`,
        fr: `Sélectionnez le code qui correspond à celui qui se trouve sur votre passeport.`,
        es: `Seleccione el código que coincide con el de su pasaporte.`,
        de: `Wählen Sie den code, der übereinstimmt, die auf Ihrem Reisepass.`,
        it: `Selezionare il codice che corrisponde a quello sul passaporto.`
      },
      extra: {
        en: `Find this code on your passport information page - see the field named "Code", "Issuing country", "Authority" or "Country code".`,
        fr: `Vous trouverez ce code sur la page de renseignements de votre passeport - voir le champ  « Code » , « Pays de délivrance » , « Autorité » ou  « Code de pays ».`,
        es: `Encontrar este código en tu pasaporte de la página de información - ver el campo denominado "Código", "país Emisor", la "Autoridad" o "código de País".`,
        de: `Finden diesen code in Ihrem Reisepass Informationen finden Sie unter dem Feld "Code", "Herkunftsland", "Autorität" oder "Country code".`,
        it: `Questo codice sul tuo passaporto, informazioni pagina - vedere il campo denominato "Codice", "paese di Emissione", "Autorità" o "codice Paese".`
      }
    },
    hasIsraeliNationalPassport: {
      en: `For this trip, will you use a national Israeli passport?`,
      fr: `Pour ce voyage, allez-vous utiliser un passeport Israélien?`,
      es: `Para este viaje, se utiliza un nacional Israelí pasaporte?`,
      de: `Für diese Reise, werden Sie eine nationale israelischen Pass?`,
      it: `Per questo viaggio, di utilizzare nazionale di passaporto Israeliano?`
    },
    passportNotedNationality: {
      label: {
        en: `What is the nationality noted on this passport?`,
        fr: `Quelle est la nationalité indiquée sur ce passeport?`,
        es: `¿Cuál es la nacionalidad observó en este pasaporte?`,
        de: `Was ist die Nationalität festgestellt, über diesen Pass?`,
        it: `Qual è la nazionalità notato in questo passaporto?`
      },
      extra: {
        en: `See "Nationality" on your passport information page`,
        fr: `Voir "Nationalité" sur la page de renseignements de votre passeport`,
        es: `Consulte la "Nacionalidad" en su página de información del pasaporte`,
        de: `Unter "Nationalität" auf Ihren Reisepass Informationen Seite`,
        it: `Vedere "Nazionalità" sul passaporto pagina di informazioni`
      }
    },
    isPermanentResidentOfUSAndHaveProofOfPermResidence: {
      en: `Are you a lawful permanent resident of the United States with a valid U.S. Citizenship and Immigration Services (USCIS) number?`,
      fr: `Êtes-vous un résident permanent légitime des États-Unis possédant un numéro de carte valide des Services de citoyenneté et d'immigration des États-Unis (USCIS)?`,
      es: `¿Es usted un residente permanente legal de los Estados unidos con una válida de los estados UNIDOS de Ciudadanía y Servicios de Inmigración (USCIS) número?`,
      de: `Sind Sie ein rechtmäßigen ständigen Wohnsitz in den Vereinigten Staaten mit einem gültigen US-Staatsbürgerschaft-und Immigration-Services (USCIS) Nummer???`,
      it: `Sei un residente permanente degli Stati Uniti, con un valido UNITI Cittadinanza e Servizi Immigrazione (USCIS) numero?`
    },
    usaResidentCardNumber: {
      en: `United States lawful permanent resident USCIS number`,
      fr: `Numéro de carte de l'USCIS à titre de résident permanent légitime des États-Unis`,
      es: `Estados unidos, residente permanente legal de USCIS número`,
      de: `Vereinigten Staaten rechtmäßigen ständigen Wohnsitz USCIS Nummer`,
      it: `Stati uniti di residente permanente, USCIS numero`
    },
    usaResidentCardNumberReEnter: {
      en: `United States lawful permanent resident alien registration card (Green Card) number (re-enter)`,
      fr: `Numéro de certificat d'inscription au registre des étrangers (carte verte) pour résident permanent en règle des États-Unis (inscrire à nouveau)`,
      es: `Estados unidos de residente legal permanente, tarjeta de registro de extranjero (Tarjeta Verde) número (volver a entrar)`,
      de: `Vereinigten Staaten rechtmäßiger permanent resident alien registration card (Green Card) Zahl (re-enter)`,
      it: `Stati uniti di residente permanente, alien registration card (Carta Verde) numero (re-invio)`
    },
    usaResidentCardExpiryDate: {
      en: `Date of expiry`,
      fr: `Date d'expiration`,
      es: `Fecha de caducidad`,
      de: `Ablauf`,
      it: `Data di scadenza`
    },
    hasPassportIssuedByMFA: {
      en: `For this trip, will you use a passport issued by the Ministry of Foreign Affairs in Taiwan that includes your personal identification number?`,
      fr: `Pour ce voyage, allez-vous utiliser un passeport délivré par le Ministère des Affaires Étrangères à Taïwan qui inclut votre numéro d'identification personnel?`,
      es: `Para este viaje, se puede usar un pasaporte expedido por el Ministerio de Asuntos Exteriores de Taiwán, que incluye su número de identificación personal?`,
      de: `Für diese Reise benötigen Sie einen Reisepass, ausgestellt durch das Ministerium für Auswärtige Angelegenheiten in Taiwan, die Ihre persönliche Identifikationsnummer?`,
      it: `Per questo viaggio, di utilizzare un passaporto rilasciato dal Ministero degli Affari Esteri di Taiwan che include il tuo numero di identificazione personale?`
    },
    taiwanIDNumber: {
      en: `Taiwan personal identification number`,
      fr: `Numéro d'identification personnel de Taiwan`,
      es: `Taiwan número de identificación personal`,
      de: `Taiwan-persönliche Identifikationsnummer`,
      it: `Taiwan numero di identificazione personale`
    },
    taiwanIDNumberReEnter: {
      en: `Taiwan personal identification number (re-enter)`,
      fr: `Numéro d'identification personnel (inscrire à nouveau)`,
      es: `Taiwan número de identificación personal (re-enter)`,
      de: `Taiwan persönlichen Identifikationsnummer (re-enter)`,
      it: `Taiwan numero di identificazione personale (re-invio)`
    },
    hasEPassport: {
      en: `Will you use an electronic passport for this trip?`,
      fr: `Allez-vous utiliser un passeport électronique pour ce voyage?`,
      es: `Se puede usar un pasaporte electrónico para este viaje?`,
      de: `Verwenden Sie einen elektronischen Reisepass für diese Reise?`,
      it: `Verrà utilizzato un passaporto elettronico per questo viaggio?`
    }
  },
  step_passport: {
    section_title: {
      en: `Passport details of applicant`,
      fr: `Les détails du passeport du demandeur`,
      es: `Los datos del pasaporte del solicitante`,
      de: `Reisepass des Antragstellers`,
      it: `Dettagli del passaporto del richiedente`
    },
    passportNumber: {
      label: {
        en: `Passport number`,
        fr: `Numéro de passeport`,
        es: `Número de pasaporte`,
        de: `Pass-Nummer`,
        it: `Il numero di passaporto`
      },
      extra: {
        en: `Enter the passport number exactly as it appears on the passport information page.`,
        fr: `Entrez le numéro du passeport, exactement comme il apparaît sur la page de renseignements du passeport.`,
        es: `Introducir el número de pasaporte, exactamente como aparece en el pasaporte de la página de información.`,
        de: `Geben Sie die Nummer des Reisepasses genau so, wie es scheint, auf die passport-Informationen Seite.`,
        it: `Immettere il numero di passaporto, esattamente come appare sul passaporto pagina di informazioni.`
      }
    },
    passportNumberReEnter: {
      label: {
        en: `Passport number`,
        fr: `Numéro de passeport`,
        es: `Número de pasaporte`,
        de: `Pass-Nummer`,
        it: `Il numero di passaporto`
      },
      extra: {
        en: `You cannot copy and paste into this field.`,
        fr: `Vous ne pouvez pas copier et coller dans ce champ.`,
        es: `Usted no puede copiar y pegar en este campo.`,
        de: `Sie können nicht kopieren und einfügen in das Feld.`,
        it: `Non è possibile copiare e incollare in questo campo.`
      }
    },
    lastName: {
      label: {
        en: `Surname(s) / last name(s)`,
        fr: `Nom(s) / prénom(s)`,
        es: `Apellido(s) / apellido(s)`,
        de: `Nachname(N) / Nachname(N)`,
        it: `Cognome(i) / cognome(i)`
      },
      extra: {
        en: `Please enter exactly as shown on your passport or identity document.`,
        fr: `Veuillez saisir exactement comme indiqué sur votre passeport ou document d'identité.`,
        es: `Por favor, introduzca exactamente como aparece en su pasaporte o documento de identidad.`,
        de: `Bitte geben Sie genau an, wie er auf Ihrem Reisepass oder Personalausweis.`,
        it: `Si prega di inserire esattamente come indicato sul passaporto o documento di identità.`
      }
    },
    firstName: {
      label: {
        en: `Given name(s) / first name(s)`,
        fr: `Prénom(s) / prénom(s)`,
        es: `Nombre(s) / nombre(s)`,
        de: `Vorname(N) / first name(s)`,
        it: `Nome(i) / nome(i)`
      },
      extra: {
        en: `Please enter exactly as shown on your passport or identity document.`,
        fr: `Veuillez saisir exactement comme indiqué sur votre passeport ou document d'identité.`,
        es: `Por favor, introduzca exactamente como aparece en su pasaporte o documento de identidad.`,
        de: `Bitte geben Sie genau an, wie er auf Ihrem Reisepass oder Personalausweis.`,
        it: `Si prega di inserire esattamente come indicato sul passaporto o documento di identità.`
      }
    },
    dob: {
      en: `Date of birth`,
      fr: `Date de naissance`,
      es: `Fecha de nacimiento`,
      de: `Geburtsdatum`,
      it: `Data di nascita`
    },
    gender: {
      en: `Gender`,
      fr: `Sexe`,
      es: `Género`,
      de: `Geschlecht`,
      it: `Genere`
    },
    maritalStatus: {
      en: `Marital status`,
      fr: `État matrimonial`,
      es: `Estado civil`,
      de: `Familienstand`,
      it: `Stato civile`
    },
    countryOfBirth: {
      en: `Country/territory of birth`,
      fr: `Pays/territoire de naissance`,
      es: `País/territorio de nacimiento`,
      de: `Land/Territorium der Geburt`,
      it: `Paese di nascita`
    },
    cityTownOfBirth: {
      en: `City/town of birth`,
      fr: `Ville de naissance`,
      es: `Ciudad/pueblo de nacimiento`,
      de: `Stadt/Ort der Geburt`,
      it: `Città/paese di nascita`
    },
    issueDate: {
      en: `Date of issue of passport`,
      fr: `Date de délivrance du passeport`,
      es: `Fecha de emisión de pasaporte`,
      de: `Ausstellungsdatum des Reisepasses`,
      it: `Data di rilascio del passaporto`
    },
    expiryDate: {
      en: `Date of expiry of passport`,
      fr: `Date d'expiration du passeport`,
      es: `La fecha de vencimiento de pasaporte`,
      de: `Datum des Ablaufs der Gültigkeit des Passes`,
      it: `Data di scadenza del passaporto`
    }
  },
  step_personal: {
    section_title: {
      en: `Personal details of applicant`,
      fr: `Coordonnées personnelles du demandeur`,
      es: `Datos personales del solicitante`,
      de: `Persönliche Angaben des Antragstellers`,
      it: `Dati personali del richiedente`
    },
    additionalCitizenships: {
      en: `Indicate which countries/territories you are a citizen of.`,
      fr: `Indiquez les pays ou les territoires dont vous êtes citoyen.`,
      es: `Indican que los países/territorios que usted es un ciudadano de.`,
      de: `Angeben, welche Länder/Gebiete sind Sie Bürger.`,
      it: `Indicare quali paesi/territori si sono un cittadino di.`
    },
    hasPreviouslyAppliedToCanada: {
      en: `Have you ever applied for or obtained a visa, an eTA or a permit to visit, live, work or study in Canada?`,
      fr: `Avez-vous déjà demandé un visa, une AVE ou un permis pour visiter, habiter, travailler ou étudier au Canada?`,
      es: `¿Alguna vez has solicitado u obtenido una visa, un eTA o un permiso para visitar, vivir, trabajar o estudiar en Canadá?`,
      de: `Haben Sie jemals beantragt oder erhalten ein Visum, das eTA-Visum oder eine Genehmigung zu besuchen, Leben, arbeiten oder studieren in Kanada?`,
      it: `Avete mai chiesto o ottenuto un visto, un eTA o di un permesso di visitare, vivere, lavorare o studiare in Canada?`
    },
    uci: {
      en: `Unique client identifier (UCI) / Previous Canadian visa, eTA or permit number (optional)`,
      fr: `Identificateur unique de client (IUC) / Numéro de permis, AVE ou de visa canadien précédent (facultatif)`,
      es: `Único identificador de cliente (UCI) Anterior / visa Canadiense, eTA o número de permiso (opcional)`,
      de: `Eindeutige client-id (UCI) / Vorherigen Kanadischen visa -, eTA-oder Zulassungsnummer (optional)`,
      it: `Unico identificatore client (UCI) / Precedente Canadese di visto, di eTA o di permesso di numero (opzionale)`
    },
    uciReEnter: {
      en: `Unique client identifier (UCI) / Previous Canadian visa, eTA or permit number (re-enter)`,
      fr: `Identificateur unique de client (IUC) / Numéro de permis, AVE ou de visa canadien précédent (inscrire à nouveau)`,
      es: `Único identificador de cliente (UCI) Anterior / visa Canadiense, eTA o número de permiso (volver a entrar)`,
      de: `Eindeutige client-id (UCI) / Vorherigen Kanadischen visa -, eTA-oder Zulassungsnummer (re-enter)`,
      it: `Unico identificatore client (UCI) / Precedente Canadese di visto, di eTA o di permesso di numero (re-invio)`
    }
  },
  step_employment: {
    section_title: {
      en: `Employment information`,
      fr: `Information sur l'emploi`,
      es: `Información de empleo`,
      de: `Beschäftigung Informationen`,
      it: `Informazioni di lavoro`
    },
    occupation: {
      label: {
        en: `Occupation`,
        fr: `Profession`,
        es: `Ocupación`,
        de: `Besetzung`,
        it: `Occupazione`
      },
      extra: {
        en: `Select the option that best describes your current employment situation.`,
        fr: `Sélectionnez l'option qui décrit le mieux votre situation d'emploi actuelle.`,
        es: `Seleccione la opción que mejor describe su situación laboral actual.`,
        de: `Wählen Sie die option, die am besten beschreibt Ihre derzeitige Beschäftigungssituation.`,
        it: `Selezionare l'opzione che meglio descrive la tua occupazione attuale situazione.`
      }
    },
    title: {
      label: {
        en: `Job title`,
        fr: `Titre de l'emploi`,
        es: `Título del trabajo`,
        de: `Job-Titel`,
        it: `Titolo di lavoro`
      },
      extra: {
        en: `Select the option that best describes your job.`,
        fr: `Sélectionnez l'option qui décrit le mieux votre travail.`,
        es: `Seleccione la opción que mejor describe su trabajo.`,
        de: `Wählen Sie die option, die am besten beschreibt, Ihren job.`,
        it: `Selezionare l'opzione che meglio descrive il vostro lavoro.`
      }
    },
    companyEmployerSchoolFacilityName: {
      en: `Name of employer or school, as appropriate.`,
      fr: `Nom de l'employeur ou de l'école, selon le cas.`,
      es: `Nombre de la empresa o de la escuela, según corresponda.`,
      de: `Name des Arbeitgebers oder der Schule, als angemessen.`,
      it: `Nome del datore di lavoro o la scuola, come appropriato.`
    },
    country: {
      en: `Country/territory`,
      fr: `Pays/territoire`,
      es: `País/territorio`,
      de: `Land/Gebiet`,
      it: `Paese/territorio`
    },
    province: {
      en: `Province/state`,
      fr: `Province/état`,
      es: `Provincia/estado`,
      de: `Provinz/Staat`,
      it: `Provincia/stato`
    },
    city: {
      en: `City/town`,
      fr: `Ville/village`,
      es: `Ciudad/pueblo`,
      de: `Stadt/Ort`,
      it: `Città/town`
    },
    fromDateYear: {
      en: `Since what year?`,
      fr: `Depuis quelle année?`,
      es: `Desde qué año?`,
      de: `Seit welchem Jahr?`,
      it: `Dal momento che anno?`
    }
  },
  step_contact: {
    section_title: {
      en: `Contact information`,
      fr: `Les informations de Contact`,
      es: `Información de contacto`,
      de: `Kontakt-Informationen`,
      it: `Informazioni di contatto`
    },
    languageOfPreference: {
      en: `Preferred language to contact you `,
      fr: `Langue préférée pour vous contacter `,
      es: `Idioma preferido en contacto con usted `,
      de: `Bevorzugte Sprache, um Sie zu Kontaktieren `,
      it: `Lingua preferita per contattare l'utente `
    },
    emailAddress: {
      label: {
        en: `Email address`,
        fr: `Adresse Email`,
        es: `Dirección de correo electrónico`,
        de: `E-Mail-Adresse`,
        it: `Indirizzo e-mail`
      },
      extra: {
        en: `Please enter a valid email address. It will be used to contact you about your application.`,
        fr: `Veuillez entrer une adresse email valide. Il sera utilisé pour vous contacter à propos de votre demande.`,
        es: `Por favor, introduzca una dirección válida de correo electrónico. Será utilizada para contactar con usted acerca de su aplicación.`,
        de: `Bitte geben Sie eine gültige E-Mail-Adresse. Es wird verwendet, um Kontakt mit Ihnen über Ihre Anwendung.`,
        it: `Si prega di inserire un indirizzo email valido. Saranno utilizzati per contattare l'utente circa la vostra applicazione.`
      }
    },
    emailAddressReEnter: {
      label: {
        en: `Email address (re-enter)`,
        fr: `Adresse e-mail (ré-entrée)`,
        es: `Dirección de correo electrónico (volver a entrar)`,
        de: `E-Mail-Adresse (re-enter)`,
        it: `Indirizzo e-mail (re-invio)`
      },
      extra: {
        en: `You cannot copy and paste into this field.`,
        fr: `Vous ne pouvez pas copier et coller dans ce champ.`,
        es: `Usted no puede copiar y pegar en este campo.`,
        de: `Sie können nicht kopieren und einfügen in das Feld.`,
        it: `Non è possibile copiare e incollare in questo campo.`
      }
    }
  },
  step_residential: {
    section_title: {
      en: `Residential address`,
      fr: `Adresse de résidence`,
      es: `Dirección residencial`,
      de: `Wohn-Adresse`,
      it: `Indirizzo di residenza`
    },
    section_description: {
      en: `Enter your permanent home address. Do not enter an address where you live temporarily.`,
      fr: `Entrez votre adresse de domicile permanent. Ne pas entrer une adresse où vous vivez temporairement.`,
      es: `Ingresa tu dirección permanente. No introduzca una dirección donde usted vive temporalmente.`,
      de: `Geben Sie Ihre Feste Adresse. Geben Sie nicht eine Adresse, wo Sie Leben vorübergehend.`,
      it: `Inserisci il tuo indirizzo di residenza permanente. Non inserire un indirizzo in cui si vive temporaneamente.`
    },
    aptUnit: {
      en: `Apartment/unit number (if applicable)`,
      fr: `Appartement/numéro d'unité (si applicable)`,
      es: `Apartamento/unidad (si aplica)`,
      de: `Apartment/unit-Nummer (falls zutreffend)`,
      it: `Appartamento/numero di unità (se applicabile)`
    },
    streetNo: {
      en: `Street/civic number or house name`,
      fr: `Rue/numéro ou nom de maison`,
      es: `Calle/cívica número o nombre de la casa`,
      de: `Street/civic Nummer oder Haus name`,
      it: `Via/numero civico di casa o del nome`
    },
    streetAddress: {
      en: `Street address/name`,
      fr: `Adresse/nom`,
      es: `Dirección/nombre de la`,
      de: `Adresse/name`,
      it: `Indirizzo/nome`
    },
    streetAddressAlt: {
      en: `Street address/name line 2 (if applicable)`,
      fr: `Adresse/nom de la ligne 2 (si applicable)`,
      es: `Dirección/nombre de la línea 2 (si es aplicable)`,
      de: `Anschrift/name Zeile 2 (falls zutreffend)`,
      it: `Indirizzo/nome linea 2 (se applicabile)`
    },
    city: {
      en: `City/town`,
      fr: `Ville/village`,
      es: `Ciudad/pueblo`,
      de: `Stadt/Ort`,
      it: `Città/town`
    },
    country: {
      en: `Country/territory`,
      fr: `Pays/territoire`,
      es: `País/territorio`,
      de: `Land/Gebiet`,
      it: `Paese/territorio`
    },
    district: {
      en: `District/region`,
      fr: `District/région`,
      es: `Distrito/región`,
      de: `Bezirk/region`,
      it: `Distretto/regione`
    },
    state: {
      en: `Province/state`,
      fr: `Province/état`,
      es: `Provincia/estado`,
      de: `Provinz/Staat`,
      it: `Provincia/stato`
    },
    zipCode: {
      en: `ZIP code`,
      fr: `Code POSTAL`,
      es: `El código POSTAL de`,
      de: `ZIP code`,
      it: `C.a.p.`
    }
  },
  step_travel: {
    section_title: {
      en: `Travel information`,
      fr: `IRenseignements sur le voyage`,
      es: `Información de viajes`,
      de: `Reise-Informationen`,
      it: `Informazioni di viaggio`
    },
    isTravelDateKnown: {
      label: {
        en: `Do you know when you will travel to Canada?`,
        fr: `Savez-vous quand vous allez voyager au Canada?`,
        es: `¿Sabe usted cuando usted va a viajar a Canadá?`,
        de: `Wissen Sie, wenn Sie Reisen nach Kanada?`,
        it: `Sapete quando si metterà in viaggio per il Canada?`
      },
      extra: {
        en: `This information may help us to process your application. If you do not know when you will travel to Canada, please select "no".`,
        fr: `Cette information peut nous aider à traiter votre demande. Si vous ne savez pas quand vous voyagez au Canada, veuillez sélectionner "non".`,
        es: `Esta información puede ayudarnos a procesar su solicitud. Si usted no sabe cuando va a viajar a Canadá, por favor seleccione "no".`,
        de: `Diese Informationen helfen uns, um Ihre Anwendung zu verarbeiten. Wenn Sie nicht wissen, Wann Sie Reisen nach Kanada, bitte wählen Sie "Nein".`,
        it: `Queste informazioni possono aiutare a elaborare la vostra applicazione. Se non si sa quando si farà un viaggio in Canada, si prega di selezionare "no".`
      }
    },
    travelDate: {
      label: {
        en: `Do you know when you will travel to Canada?`,
        fr: `Savez-vous quand vous allez voyager au Canada?`,
        es: `¿Sabe usted cuando usted va a viajar a Canadá?`,
        de: `Wissen Sie, wenn Sie Reisen nach Kanada?`,
        it: `Sapete quando si metterà in viaggio per il Canada?`
      },
      extra: {
        en: `If you don't know, you may enter an approximate date.`,
        fr: `Si vous ne savez pas, vous pouvez saisir une date approximative.`,
        es: `Si usted no sabe, usted puede ingresar una fecha aproximada.`,
        de: `Wenn Sie nicht wissen, können Sie ein Ungefähres Datum.`,
        it: `Se non si conosce, è possibile immettere una data approssimativa.`
      }
    },
    travelTime: {
      en: `Please enter the time your flight to Canada will depart`,
      fr: `Veuillez entrer l'heure de votre vol à destination du Canada partira`,
      es: `Por favor, introduzca el tiempo de tu vuelo a Canadá partirá`,
      de: `Bitte geben Sie die Uhrzeit Ihres Fluges nach Kanada fahren`,
      it: `Si prega di inserire il tempo di volo per il Canada partirà`
    },
    travelDateTimeHour: {
      en: `Hour`,
      fr: `Heure`,
      es: `Hora`,
      de: `Stunde`,
      it: `Ora`
    },
    travelDateTimeMinute: {
      en: `Minute`,
      fr: `Minutes`,
      es: `Minutos`,
      de: `Minute`,
      it: `Minuti`
    },
    travelDateTimeTimezone: {
      en: `Timezone`,
      fr: `Fuseau horaire`,
      es: `La zona horaria`,
      de: `Timezone`,
      it: `Fuso orario`
    }
  },
  step_background: {
    section_title: {
      en: `Background Questions`,
      fr: `Questions De Fond`,
      es: `Fondo Preguntas`,
      de: `Hintergrund Fragen`,
      it: `Sfondo Domande`
    },
    refusedVisaOrPermitOrDeniedEntryToCanada: {
      en: `Have you ever been refused a visa or permit, denied entry to, or ordered to leave Canada or any other country/territory?`,
      fr: `Avez-vous déjà refusé un visa ou d'un permis, refuser l'accès à, ou l'ordre de quitter le Canada ou tout autre pays/territoire?`,
      es: `¿Alguna vez has sido negado una visa o permiso denegado la entrada, o la orden de salir de Canadá o cualquier otro país o territorio?`,
      de: `Haben Sie schon einmal weigerte sich, ein Visum oder eine Aufenthaltserlaubnis, die Einreise verweigert wurde, oder bestellt zu verlassen, in Kanada oder jedem anderen Land/Gebiet?`,
      it: `Sei mai stato rifiutato un visto o di un permesso negato l'ingresso, o ordinato di lasciare il Canada o in qualsiasi altro paese/territorio?`
    },
    refusedVisaOrPermitOrDeniedEntryToCanadaDetails: {
      en: `For each refusal, please indicate the country that refused you a visa or permit, or denied you entry, as well as the reasons provided to you by the country.`,
      fr: `Pour chaque cas de refus, veuillez indiquer les pays qui ont refusé de vous un visa ou d'un permis, ou vous a refusé l'entrée, ainsi que les raisons fournies par le pays.`,
      es: `Para cada negativa, favor de indicar el país de que se negó una visa o permiso, o se les niega la entrada, así como las razones aducidas por el país.`,
      de: `Für jede Verweigerung, geben Sie bitte das Land, das sich weigerte, Ihnen ein Visum oder eine Arbeitserlaubnis oder verweigert Ihnen die Einreise, sowie die Gründe, die Sie von dem Land.`,
      it: `Per ogni rifiuto, siete pregati di indicare il paese che ha rifiutato un visto o di un permesso o negato l'ingresso, così come le ragioni fornite dal paese.`
    },
    committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhere: {
      en: `Have you ever committed, been arrested for, been charged with or convicted of any criminal offence in any country/territory?`,
      fr: `Avez-vous déjà commis, été arrêté pour, été accusé ou déclaré coupable d'une infraction pénale dans tous les pays/territoire?`,
      es: `Alguna vez ha cometido o ha sido arrestado sido acusado o condenado por cualquier delito en cualquier país o territorio?`,
      de: `Haben Sie jemals begangen, wurde verhaftet, angeklagt oder verurteilt jede straftat, in jedem Land/Gebiet?`,
      it: `Hai mai commesso, è stato arrestato, accusato o condannato per un reato in qualsiasi paese/territorio?`
    },
    committedOrArrestedOrChargedOrConvictedOfCriminalOffenceAnywhereDetails: {
      en: `For each arrest, charge, or conviction, please indicate where (city, country), when (month/year), the nature of the offence, and the sentence.`,
      fr: `Pour chaque arrestation, l'accusation ou condamnation, veuillez indiquer où (ville, pays), quand (mois/année), la nature de l'infraction et de la peine.`,
      es: `Para cada detención, cargo, o condena, por favor indicar dónde (ciudad, país), cuando (mes/año), la naturaleza de la infracción, y la frase.`,
      de: `Für jede Verhaftung, Anklage, oder Verurteilung, bitte geben Sie an, wo (Stadt, Land), wenn (Monat/Jahr), der Art der straftat und der Strafe.`,
      it: `Per ogni arresto, la carica, o convinzione, si prega di indicare dove (città, paese), quando (mese/anno), la natura del reato, e la sentenza.`
    },
    inThePastTwoYearsWereYouDiagnosedOrInCloseContactWithTuberculosis: {
      en: `In the past two years, were you diagnosed with tuberculosis or have you been in close contact with a person with tuberculosis?`,
      fr: `Dans les deux dernières années, avez-vous été diagnostiqué avec la tuberculose ou avez-vous été en contact étroit avec une personne souffrant de tuberculose?`,
      es: `En los últimos dos años, fueron diagnosticados con tuberculosis o ha estado en contacto cercano con una persona con tuberculosis?`,
      de: `In den vergangenen zwei Jahren, wurden Sie diagnostiziert mit Tuberkulose oder haben Sie in engen Kontakt mit einer person mit Tuberkulose?`,
      it: `Negli ultimi due anni, vi sono stati diagnosticati con la tubercolosi o è stato in stretto contatto con una persona con tubercolosi?`
    },
    isYourContactWithTuberculosisTheResultOfBeingAHeathCareWorker: {
      en: `Is your contact with tuberculosis the result of being a health care worker?`,
      fr: `Est votre contact avec la tuberculose du fait d'un travailleur de soins de santé?`,
      es: `Es su contacto con la tuberculosis el resultado de ser un trabajador de la salud?`,
      de: `Ist der Kontakt mit Tuberkulose das Ergebnis von einem Beschäftigten im Gesundheitswesen?`,
      it: `È il contatto con la tubercolosi causa di un operatore sanitario?`
    },
    haveYouEverBeenDiagnosedWithTuberculosis: {
      en: `Have you ever been diagnosed with tuberculosis?`,
      fr: `Avez-vous déjà reçu un diagnostic de tuberculose?`,
      es: `¿Alguna vez ha sido diagnosticado con tuberculosis?`,
      de: `Haben Sie schon einmal diagnostiziert mit Tuberkulose?`,
      it: `Sei mai stata diagnosticata la tubercolosi?`
    },
    doYouHaveOneOfTheseConditions: {
      en: `Have you ever been diagnosed with tuberculosis?`,
      fr: `Avez-vous déjà reçu un diagnostic de tuberculose?`,
      es: `¿Alguna vez ha sido diagnosticado con tuberculosis?`,
      de: `Haben Sie schon einmal diagnostiziert mit Tuberkulose?`,
      it: `Sei mai stata diagnosticata la tubercolosi?`
    },
    haveOrWillHaveHealthInsuranceValidInCanadaDuringStayDetails: {
      en: `Please briefly indicate if there are additional details pertinent to your application. For example, an urgent need to travel to Canada. Provide relevant details to avoid delays in the processing of your application.`,
      fr: `Veuillez indiquer brièvement si il y a d'autres détails pertinents à votre demande. Par exemple, un besoin urgent de se rendre au Canada. Fournir les détails pertinents afin d'éviter les retards dans le traitement de votre demande.`,
      es: `Por favor indicar brevemente si hay detalles adicionales pertinentes para su aplicación. Por ejemplo, una necesidad urgente para viajar a Canadá. Proporcionar información pertinente a fin de evitar demoras en el procesamiento de su solicitud.`,
      de: `Bitte kurz angeben, ob gibt es zusätzliche details, die relevant für Ihre Anwendung. Zum Beispiel, die dringende Notwendigkeit zu Reisen nach Kanada. Bieten Sie relevante Informationen zur Vermeidung von Verzögerungen bei der Bearbeitung Ihres Antrags.`,
      it: `Si prega di indicare brevemente se ci sono ulteriori dettagli pertinenti a la vostra applicazione. Per esempio, un bisogno urgente di viaggio per il Canada. Fornire informazioni rilevanti al fine di evitare ritardi nell'elaborazione della vostra applicazione.`
    }
  },
  step_consent: {
    section_title: {
      en: `Declaration of Applicant`,
      fr: `Déclaration du Demandeur`,
      es: `Declaración del Solicitante`,
      de: `Erklärung des Antragstellers`,
      it: `Dichiarazione del Richiedente`
    },
    section_description_2: {
      en: `I declare that the information I have given in this application is truthful, complete and correct.`,
      fr: `Je déclare que les renseignements que j'ai fournis dans cette demande sont véridiques, complets et exacts.`,
      es: `Declaro que la información que he proporcionado en esta solicitud es verdadera, completa y correcta.`,
      de: `Ich erkläre, dass die Informationen, die ich gegeben habe, in diesem Antrag ist wahrheitsgemäß, vollständig und richtig sind.`,
      it: `Dichiaro che le informazioni riportate nella presente domanda sono veritiere, complete e corrette.`
    },
    section_description_3: {
      en: `I understand that misrepresentation is an offence under section 127 of the Immigration and Refugee Protection Act and may result in a finding of inadmissibility to Canada or removal from Canada.`,
      fr: `Je comprends que toute fausse déclaration constitue une infraction en vertu de l'article 127 de la loi sur l'Immigration et la Protection des Réfugiés et peut déboucher sur un constat d'interdiction de territoire au Canada ou le retrait du Canada.`,
      es: `Entiendo que la falsedad es un delito en virtud del artículo 127 de la Inmigración y Protección de Refugiados de la Ley y puede resultar en una declaración de inadmisibilidad a Canadá, o la eliminación de Canadá.`,
      de: `Ich verstehe, dass Täuschung ist eine straftat nach § 127 des Immigration and Refugee Protection Act und kann in einer Feststellung der Unzulässigkeit nach Kanada oder entfernen von Kanada.`,
      it: `Capisco che false dichiarazioni è un reato in virtù dell'articolo 127 della Immigration and Refugee Protection Act, e può comportare una dichiarazione di irricevibilità per il Canada o la rimozione dal Canada.`
    },
    section_description_4: {
      en: `I agree that by typing my name and clicking sign, I am electronically signing my application.`,
      fr: `Je suis d'accord qu'en tapant mon nom et en cliquant sur le signe, je suis à la signature électronique de mon application.`,
      es: `Estoy de acuerdo en que escribiendo mi nombre y haciendo clic en el signo, yo soy la firma electrónica de la aplicación.`,
      de: `Ich willige ein, dass bei der Eingabe meines Namen und klicken auf anmelden, bin ich elektronisch signieren meiner Anwendung.`,
      it: `Sono d'accordo che digitando il mio nome e fare clic su firma, io la firma elettronica e la mia applicazione.`
    },
    section_title_payment: {
      en: "Payment Information",
      fr: "Les Informations De Paiement",
      es: "La Información De Pago",
      de: "Zahlungsinformationen",
      it: "Informazioni Di Pagamento"
    },
    section_descr_payment: {
      en: "Note: Please enter the first and last name of the person who makes the payment.",
      fr: "Remarque: Veuillez saisir le Prénom et le Nom de la personne qui effectue le paiement.",
      es: "Nota: por Favor, introduzca el nombre y apellido de la persona que realiza el pago.",
      de: "Hinweis: Bitte geben Sie den ersten und letzten Namen der person, die macht die Zahlung.",
      it: "Nota: si Prega di inserire il nome e il cognome della persona che effettua il pagamento."
    },
    payer: {
      label: {
        en: "Payer's Name",
        fr: "Nom du Payeur",
        es: "Del ordenante Nombre",
        de: "Zahlers Name",
        it: "Nome del pagatore"
      },
      surname: {
        en: "First Name",
        fr: "Prénom",
        es: "Primer Nombre",
        de: "Vorname",
        it: "Nome"
      },
      given_name: {
        en: "Last Name",
        fr: "Nom de Famille",
        es: "Apellido",
        de: "Nachname",
        it: "Cognome"
      },
      phone: {
        en: "Payer Phone Number",
        fr: "Numéro De Téléphone",
        es: "Ordenante Número De Teléfono",
        de: "Zahler Telefonnummer",
        it: "Pagatore Numero Di Telefono"
      },
      passport: {
        en: "Payer's Passport Number",
        fr: "Numéro de Passeport du payeur",
        es: "Del ordenante Número de Pasaporte",
        de: "Zahlers Pass-Nummer",
        it: "Pagatore Numero di Passaporto"
      },
      email: {
        en: "Payer's Email",
        fr: "E-Mail du payeur",
        es: "Pagador de Correo electrónico",
        de: "Zahlers E-Mail",
        it: "Del pagatore e-Mail"
      },
      address: {
        en: "Address",
        fr: "Adresse",
        es: "Dirección",
        de: "Adresse",
        it: "Indirizzo"
      }
    },
    b_info_confirm: {
      label: {
        en: "Information Confirmation",
        fr: "Confirmation Des Informations",
        es: "Información De Confirmación",
        de: "Informationen Bestätigung",
        it: "Informazioni Di Conferma"
      },
      check: {
        en:
          "I confirm that the information provided on this form is correct and accurate to the best of my knowledge. I have read and agreed with the Disclaimer, the Terms and Conditions and the Refund Policy. I understand that this transaction is Non-Refundable. This site is not a Canadian Government entity and is in no way associated with any Canadian Embassy or Consulate and if a cardholder attempts to falsely report that a transaction was fraudulent and requests a chargeback of an application fee, the Embassy will be informed and it may result in cancellation of any visas already scheduled. Your submission of credit card information, or any kind of payment card information, constitutes your authorization for our agency to charge your card for the services ordered and for any related fees or expenses. You further agree to abide by the terms of your card issuer’s agreement. This applies to any fee charged, incurred or paid by our agency for or in any way relating to publication requirements for any document we prepare and/or file at your request whether the filing is ultimately accepted or not.",
        fr:
          "Je confirme que les informations fournies sur ce formulaire sont correctes et exactes à ma connaissance. J'ai lu et accepté les mentions légales, les conditions générales et la politique de remboursement. Je comprends que cette transaction n'est pas remboursable. Ce site n'est pas une entité du gouvernement canadien et n'est en aucun cas associé à une ambassade ou un consulat du Canada et si un titulaire de carte tente de signaler faussement qu'une transaction a été frauduleuse et demande un rejet de frais de dossier, l'ambassade en sera informée et pourra entraîner l'annulation de tout visa déjà prévu. Votre soumission d'informations de carte de crédit, ou tout type d'informations de carte de paiement, constitue votre autorisation pour notre agence de facturer votre carte pour les services commandés et pour tous frais ou dépenses connexes. Vous vous engagez en outre à respecter les termes de l'accord de l'émetteur de votre carte. Cela s'applique à tous les frais facturés, engagés ou payés par notre agence pour ou de quelque manière que ce soit concernant les exigences de publication pour tout document que nous préparons et / ou déposons à votre demande, que le dépôt soit finalement accepté ou non.",
        es:
          "Confirmo que la información proporcionada en este formulario es correcta y precisa según mi leal saber y entender. He leído y acepto el Descargo de responsabilidad, los Términos y condiciones y la Política de reembolso. Entiendo que esta transacción no es reembolsable. Este sitio no es una entidad del Gobierno de Canadá y no está asociado de ninguna manera con ninguna Embajada o Consulado de Canadá y si un titular de tarjeta intenta informar falsamente que una transacción fue fraudulenta y solicita una devolución de cargo de una tarifa de solicitud, la Embajada será informada y puede resultará en la cancelación de cualquier visa ya programada. Su envío de información de tarjeta de crédito, o cualquier tipo de información de tarjeta de pago, constituye su autorización para que nuestra agencia le cobre a su tarjeta los servicios solicitados y cualquier tarifa o gasto relacionado. Además, acepta cumplir con los términos del acuerdo del emisor de su tarjeta. Esto se aplica a cualquier tarifa cobrada, incurrida o pagada por nuestra agencia por o de alguna manera relacionada con los requisitos de publicación de cualquier documento que preparemos y / o presentemos a su solicitud, ya sea que la presentación sea finalmente aceptada o no.",
        de:
          "Ich bestätige, dass die auf diesem Formular angegebenen Informationen nach bestem Wissen und Gewissen korrekt und korrekt sind. Ich habe den Haftungsausschluss, die Allgemeinen Geschäftsbedingungen und die Rückerstattungsrichtlinie gelesen und bin damit einverstanden. Ich verstehe, dass diese Transaktion nicht erstattungsfähig ist. Diese Website ist keine Einrichtung der kanadischen Regierung und in keiner Weise mit einer kanadischen Botschaft oder einem kanadischen Konsulat verbunden. Wenn ein Karteninhaber versucht, fälschlicherweise zu melden, dass eine Transaktion betrügerisch war, und eine Rückbuchung einer Antragsgebühr beantragt, wird die Botschaft darüber informiert führen zur Stornierung bereits geplanter Visa. Ihre Übermittlung von Kreditkarteninformationen oder jeglicher Art von Zahlungskarteninformationen stellt Ihre Berechtigung für unsere Agentur dar, Ihre Karte für die bestellten Dienstleistungen und die damit verbundenen Gebühren oder Kosten zu belasten. Sie erklären sich ferner damit einverstanden, die Bedingungen der Vereinbarung Ihres Kartenherausgebers einzuhalten. Dies gilt für alle Gebühren, die von unserer Agentur für oder in irgendeiner Weise im Zusammenhang mit Veröffentlichungsanforderungen für Dokumente erhoben werden, die wir auf Ihre Anfrage hin erstellen und / oder einreichen, unabhängig davon, ob die Einreichung letztendlich akzeptiert wird oder nicht.",
        it:
          "Confermo che le informazioni fornite in questo modulo sono corrette e accurate al meglio delle mie conoscenze. Ho letto e accettato il Disclaimer, i Termini e condizioni e la Politica di rimborso. Comprendo che questa transazione non è rimborsabile. Questo sito non è un ente governativo canadese e non è in alcun modo associato ad alcuna ambasciata o consolato canadese e se un titolare di carta tenta di segnalare erroneamente che una transazione è stata fraudolenta e richiede un riaddebito di una tassa di domanda, l'ambasciata verrà informata e potrebbe comportare la cancellazione di tutti i visti già programmati. L'invio dei dati della carta di credito, o qualsiasi tipo di informazione sulla carta di pagamento, costituisce l'autorizzazione per la nostra agenzia ad addebitare la carta per i servizi ordinati e per eventuali commissioni o spese correlate. Accetti inoltre di rispettare i termini dell'accordo dell'emittente della tua carta. Questo vale per qualsiasi commissione addebitata, sostenuta o pagata dalla nostra agenzia per o in qualsiasi modo relativa ai requisiti di pubblicazione per qualsiasi documento che prepariamo e / o archiviamo su vostra richiesta, indipendentemente dal fatto che il deposito sia accettato o meno."
      }
    },
    signature: {
      en: 'Signature',
      fr: 'Signature',
      es: 'Firma',
      de: 'Signatur',
      it: 'Firma',
  },
    inAggreance: {
      label: {
        en: `I Agree`,
        fr: `Je Suis D'Accord`,
        es: `Estoy De Acuerdo`,
        de: `Ich Stimme Zu`,
        it: `Sono D'Accordo`
      },
      extra: {
        en: `I Agree`,
        fr: `Je Suis D'Accord`,
        es: `Estoy De Acuerdo`,
        de: `Ich Stimme Zu`,
        it: `Sono D'Accordo`
      }
    },
    fullName: {
      label: {
        en: `Signature of applicant`,
        fr: `Signature du demandeur`,
        es: `Firma del solicitante`,
        de: `Unterschrift des Antragstellers`,
        it: `Firma del richiedente`
      },
      extra: {
        en: `To sign, enter your name as it appears on your passport.`,
        fr: `Pour signer, entrez votre nom tel qu'il apparaît sur votre passeport.`,
        es: `Para firmar, escriba su nombre tal como aparece en su pasaporte.`,
        de: `Anmelden, geben Sie Ihren Namen, wie es scheint in Ihrem Reisepass.`,
        it: `A segno, inserisci il tuo nome come appare sul passaporto.`
      }
    }
  }
};

export default resources;
