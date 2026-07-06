import { SITE } from '@/lib/constants'

export type LegalSection = {
  id: string
  title: string
  paragraphs: string[]
}

export const IMPRESSUM_SECTIONS: LegalSection[] = [
  {
    id: 'angaben',
    title: 'Impressum (gemäß § 5 TMG)',
    paragraphs: [
      `Restaurant Poseidon\nInhaber: Herrn Theodoros Papakyritsis und Sokrates Efthimiou\n${SITE.address.street}\n${SITE.address.city}\nTelefon: ${SITE.phone}\nE-Mail: ${SITE.email}`,
      'Umsatzsteuer-Identifikationsnummer: DE344842525',
    ],
  },
]

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: 'hinweis',
    title: 'Datenschutzerklärung',
    paragraphs: [
      'Allgemeiner Hinweis und Pflichtinformationen',
      'Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, Kontaktdaten o. Ä.).',
      `Verantwortliche Stelle:\nRestaurant Poseidon\nInhaber: Herrn Theodoros Papakyritsis und Sokrates Efthimiou\n${SITE.address.street}\n${SITE.address.city}\nTelefon: ${SITE.phone}\nE-Mail: ${SITE.email}`,
    ],
  },
  {
    id: 'widerruf',
    title: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
    paragraphs: [
      'Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
    ],
  },
  {
    id: 'beschwerde',
    title: 'Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde',
    paragraphs: [
      'Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten finden Sie unter: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html',
    ],
  },
  {
    id: 'datenuebertragbarkeit',
    title: 'Recht auf Datenübertragbarkeit',
    paragraphs: [
      'Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
    ],
  },
  {
    id: 'auskunft',
    title: 'Recht auf Auskunft, Berichtigung, Sperrung, Löschung',
    paragraphs: [
      'Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.',
    ],
  },
  {
    id: 'ssl',
    title: 'SSL- bzw. TLS-Verschlüsselung',
    paragraphs: [
      'Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL- bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“-Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies und Einwilligungsverwaltung',
    paragraphs: [
      'Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.',
      'Einige Cookies sind technisch notwendig, damit die Website ordnungsgemäß funktioniert (z. B. zur Speicherung Ihrer Cookie-Einstellungen). Diese Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gesetzt.',
      'Optionale Cookies und externe Dienste (z. B. eingebettete Karten) werden erst nach Ihrer Einwilligung aktiviert. Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen widerrufen.',
      'Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.',
    ],
  },
  {
    id: 'openstreetmap',
    title: 'OpenStreetMap (Kartendarstellung)',
    paragraphs: [
      'Auf unserer Website können Sie eine Karte laden, die von OpenStreetMap bereitgestellt wird. Die Karte wird erst nach Ihrem aktiven Klick auf „Karte laden" eingebunden. Dabei wird eine Verbindung zu Servern des Anbieters hergestellt und es können personenbezogene Daten (z. B. Ihre IP-Adresse) übermittelt werden.',
      'Anbieter ist die OpenStreetMap Foundation. Weitere Informationen finden Sie in der Datenschutzerklärung von OpenStreetMap: https://wiki.osmfoundation.org/wiki/Privacy_Policy',
      'Die Einbindung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, die Sie durch Klick auf „Karte laden" erteilen.',
    ],
  },
  {
    id: 'telefon-email',
    title: 'Kontakt per Telefon oder E-Mail',
    paragraphs: [
      'Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden die von Ihnen mitgeteilten Daten von uns gespeichert, um Ihre Anfrage zu bearbeiten. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
      'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).',
    ],
  },
  {
    id: 'streitschlichtung',
    title: 'EU-Streitschlichtung',
    paragraphs: [
      'Die EU-Kommission hat eine Internetseite zur Online-Streitbeilegung zwischen Unternehmern und Verbrauchern (OS-Plattform) eingerichtet, die Sie unter http://ec.europa.eu/consumers/odr/ erreichen.',
    ],
  },
  {
    id: 'quelle',
    title: 'Hinweis',
    paragraphs: [
      'Teile dieser Datenschutzerklärung basieren auf dem Datenschutz-Konfigurator von mein-datenschutzbeauftragter.de und wurden für diese Website angepasst.',
    ],
  },
]

export const COOKIE_CATEGORIES = [
  {
    id: 'necessary' as const,
    title: 'Notwendig',
    description:
      'Technisch erforderliche Cookies für den Betrieb der Website, z. B. zur Speicherung Ihrer Cookie-Einstellungen.',
    required: true,
  },
  {
    id: 'external' as const,
    title: 'Externe Medien',
    description:
      'Ermöglicht das Laden externer Karteninhalte (OpenStreetMap). Daten können an den Anbieter übermittelt werden.',
    required: false,
  },
] as const

export type CookieCategoryId = (typeof COOKIE_CATEGORIES)[number]['id']

export type CookieConsent = Record<CookieCategoryId, boolean>

export const DEFAULT_CONSENT: CookieConsent = {
  necessary: true,
  external: false,
}

export const CONSENT_STORAGE_KEY = 'poseidon-cookie-consent'
