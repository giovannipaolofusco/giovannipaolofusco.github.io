// Importa lo script del cookie consent dal CDN
import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0/dist/cookieconsent.umd.js';

// Inizializza e configura il banner dei cookie
CookieConsent.run({
  // Impostazioni per l'interfaccia utente del banner (layout e posizione)
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom right',
      equalWeightButtons: true,
      flipButtons: false
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false
    }
  },
  // Definisce le categorie dei cookie (necessari, analitici, ecc.)
  categories: {
    necessary: {
      readOnly: true
    },
    analytics: {}
  },
  // Impostazioni per le lingue e le traduzioni del banner
  language: {
    default: 'it',
    autoDetect: 'document',
    translations: {
      it: {
        consentModal: {
          title: 'Noi usiamo i cookie 🍪',
          description: 'Questo sito utilizza cookie statistici e analitici anonimi (Google Analytics 4 con IP anonimizzato) per comprendere meglio come viene navigato il sito. I cookie verranno attivati solo dopo il tuo consenso.',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Rifiuta tutti',
          showPreferencesBtn: 'Gestisci preferenze',
          footer: '<a href="/privacy.html">Privacy Policy</a>'
        },
        preferencesModal: {
          title: 'Preferenze Consenso Cookie',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Rifiuta tutti',
          savePreferencesBtn: 'Salva preferenze',
          closeIconLabel: 'Chiudi',
          sections: [
            {
              title: 'Utilizzo dei Cookie',
              description: 'I cookie sono piccoli file di testo usati per migliorare l\'esperienza di navigazione e analizzare il traffico.'
            },
            {
              title: 'Cookie Necessari <span class="pm__badge">Sempre Attivi</span>',
              description: 'Questi cookie sono essenziali per il funzionamento del sito, incluso il salvataggio delle tue preferenze di consenso.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Cookie Analitici e Statistici',
              description: 'Utilizziamo Google Analytics 4 in modo anonimo per analizzare le visite. Nessun dato personale identificativo viene trasmesso a terze parti.',
              linkedCategory: 'analytics'
            }
          ]
        }
      },
      en: {
        consentModal: {
          title: 'We use cookies 🍪',
          description: 'This website uses anonymous statistical and analytical cookies (Google Analytics 4 with anonymized IP) to better understand how the site is navigated. Cookies will only be enabled after your consent.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          footer: '<a href="/en/privacy.html">Privacy Policy</a>'
        },
        preferencesModal: {
          title: 'Cookie Consent Preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'Cookie Usage',
              description: 'Cookies are small text files used to improve the browsing experience and analyze traffic.'
            },
            {
              title: 'Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description: 'These cookies are essential for the operation of the website, including saving your consent preferences.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analytical & Statistical Cookies',
              description: 'We use Google Analytics 4 anonymously to analyze site visits. No personally identifiable data is shared with third parties.',
              linkedCategory: 'analytics'
            }
          ]
        }
      }
    }
  }
});
