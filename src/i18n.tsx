import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'pt-BR' | 'en' | 'nl' | 'de';

type TranslationMap = Record<string, string>;

const translations: Record<Language, TranslationMap> = {
  'pt-BR': {
    'language.label': 'Idioma',
    'language.options.pt-BR': 'Português',
    'language.options.en': 'Inglês',
    'language.options.nl': 'Holandês',
    'language.options.de': 'Alemão',

    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.courses': 'Cursos',
    'nav.products': 'Produtos',
    'nav.contact': 'Contato',

    'hero.welcome': 'Bem-vindo(a) à Priscila.nl',
    'hero.subtitle': 'Terapias holísticas e Reiki para equilíbrio e bem-estar',
    'hero.description': 'Descubra o poder da cura natural através de terapias holísticas personalizadas. Encontre seu equilíbrio interior e desperte sua energia vital.',
    'hero.schedule': 'Agendar Consulta',
    'hero.learnMore': 'Saiba Mais',
    'hero.illustrationAlt': 'Ilustração animada de meditação representando equilíbrio e bem-estar',

    'services.title': 'Serviços Oferecidos',
    'services.subtitle': 'O espaço Priscila.nl é dedicado ao cuidado integral. Oferecemos terapias reconhecidas como atividades paramédicas e holísticas.',
    'services.reiki.title': 'Reiki',
    'services.reiki.description': 'Técnica japonesa de cura energética que promove relaxamento profundo e equilíbrio dos chakras através da imposição de mãos.',
    'services.aromatherapy.title': 'Aromaterapia',
    'services.aromatherapy.description': 'Terapia natural que utiliza óleos essenciais puros para harmonizar corpo, mente e espírito, promovendo bem-estar integral.',
    'services.holistic.title': 'Terapia Holística',
    'services.holistic.description': 'Abordagem integrativa que trata o ser humano como um todo, considerando aspectos físicos, emocionais e espirituais.',
    'services.energy.title': 'Cura Energética',
    'services.energy.description': 'Técnicas avançadas de limpeza e alinhamento energético para desbloquear padrões limitantes e restaurar o fluxo vital.',
    'services.flower.title': 'Florais de Bach',
    'services.flower.description': 'Essências florais que atuam nos estados emocionais, promovendo equilíbrio e harmonia interior de forma suave e natural.',
    'services.crystals.title': 'Terapia de Cristais',
    'services.crystals.description': 'Utilização de cristais e pedras preciosas para harmonizar a energia e amplificar o processo de cura natural.',

    'courses.title': 'Formação em Reiki',
    'courses.description': 'Desenvolva seu potencial de cura aprendendo Reiki. Oferecemos cursos em português e neerlandês, com certificação internacional e acompanhamento personalizado.',
    'courses.feature.certification': 'Certificação internacional reconhecida',
    'courses.feature.smallGroups': 'Turmas pequenas para atendimento personalizado',
    'courses.feature.materials': 'Prática supervisionada e material didático completo',
    'courses.cta': 'Saiba mais sobre os cursos',

    'booking.title': 'Agende seu Atendimento',
    'booking.description': 'Pronto para iniciar sua jornada de cura e bem-estar? Entre em contato e marque seu horário. Atendimento personalizado em um ambiente tranquilo e harmonioso.',
    'booking.address': '📍 Priscila.nl – Goudvinkstraat 114, 7132EA Lichtenvoorde, NL',
    'booking.whatsapp': 'Agendar via WhatsApp',
    'booking.email': 'Enviar E-mail',

    'products.title': 'Produtos',
    'products.subtitle': 'Descubra nossa seleção cuidadosa de produtos naturais e ferramentas terapêuticas para apoiar sua jornada de bem-estar.',
    'products.oils.title': 'Óleo Essencial Premium',
    'products.oils.description': 'Óleos essenciais puros e naturais, extraídos por destilação artesanal. Ideais para aromaterapia, massagens e difusão ambiental.',
    'products.supplement.title': 'Suplemento Natural Beyuna',
    'products.supplement.description': 'Fórmulas naturais de alta qualidade para fortalecer o sistema imunológico e promover vitalidade diária.',
    'products.kit.title': 'Kit Reiki Completo',
    'products.kit.description': 'Kit completo para iniciar sua prática de Reiki, com materiais de apoio, cristais energéticos e manual detalhado.',
    'products.buy': 'Comprar via WhatsApp',

    'footer.about.title': 'Terapias Holísticas & Reiki',
    'footer.about.description': 'Dedicados ao seu bem-estar integral através de terapias naturais e técnicas de cura energética.',
    'footer.contact.title': 'Contato',
    'footer.contact.address': 'Goudvinkstraat 114, 7132EA Lichtenvoorde, NL',
    'footer.contact.email': 'info@santalena.nl',
    'footer.contact.whatsapp': 'WhatsApp para agendamentos',
    'footer.services.title': 'Serviços',
    'footer.services.item.reiki': 'Reiki & Cura Energética',
    'footer.services.item.aroma': 'Aromaterapia',
    'footer.services.item.holistic': 'Terapia Holística',
    'footer.services.item.courses': 'Cursos de Reiki',
    'footer.legal': '© 2025 Priscila.nl - Todos os direitos reservados. Desenvolvido com ❤️ para o seu bem-estar.'
  },
  en: {
    'language.label': 'Language',
    'language.options.pt-BR': 'Portuguese',
    'language.options.en': 'English',
    'language.options.nl': 'Dutch',
    'language.options.de': 'German',

    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.courses': 'Courses',
    'nav.products': 'Products',
    'nav.contact': 'Contact',

    'hero.welcome': 'Welcome to Priscila.nl',
    'hero.subtitle': 'Holistic therapies and Reiki for balance and well-being',
    'hero.description': 'Discover the power of natural healing through personalised holistic therapies. Find your inner balance and awaken your vital energy.',
    'hero.schedule': 'Book a Consultation',
    'hero.learnMore': 'Learn More',
    'hero.illustrationAlt': 'Animated meditation illustration representing balance and well-being',

    'services.title': 'Services Offered',
    'services.subtitle': 'The Priscila.nl space is dedicated to integral care. We offer therapies recognised as paramedical and holistic activities.',
    'services.reiki.title': 'Reiki',
    'services.reiki.description': 'Japanese energy-healing technique that promotes deep relaxation and chakra balance through the laying on of hands.',
    'services.aromatherapy.title': 'Aromatherapy',
    'services.aromatherapy.description': 'Natural therapy that uses pure essential oils to harmonise body, mind, and spirit while encouraging overall well-being.',
    'services.holistic.title': 'Holistic Therapy',
    'services.holistic.description': 'Integrative approach that treats the human being as a whole, considering physical, emotional, and spiritual aspects.',
    'services.energy.title': 'Energy Healing',
    'services.energy.description': 'Advanced energy-clearing and alignment techniques that release limiting patterns and restore vital flow.',
    'services.flower.title': 'Bach Flower Remedies',
    'services.flower.description': 'Flower essences that support emotional balance and inner harmony in a gentle, natural way.',
    'services.crystals.title': 'Crystal Therapy',
    'services.crystals.description': 'Use of crystals and gemstones to harmonise energy and amplify the natural healing process.',

    'courses.title': 'Reiki Training',
    'courses.description': 'Develop your healing potential by learning Reiki. Courses available in Portuguese and Dutch with internationally recognised certification and personalised guidance.',
    'courses.feature.certification': 'Internationally recognised certification',
    'courses.feature.smallGroups': 'Small groups for personalised attention',
    'courses.feature.materials': 'Supervised practice and complete course materials',
    'courses.cta': 'Learn more about the courses',

    'booking.title': 'Book Your Session',
    'booking.description': 'Ready to begin your healing and wellness journey? Get in touch to schedule your appointment. Personalised care in a calm and welcoming environment.',
    'booking.address': '📍 Priscila.nl – Goudvinkstraat 114, 7132EA Lichtenvoorde, NL',
    'booking.whatsapp': 'Book via WhatsApp',
    'booking.email': 'Send E-mail',

    'products.title': 'Products',
    'products.subtitle': 'Discover our carefully curated selection of natural products and therapeutic tools to support your wellness journey.',
    'products.oils.title': 'Premium Essential Oil',
    'products.oils.description': 'Pure, natural essential oils produced through artisanal distillation. Ideal for aromatherapy, massage, and diffusers.',
    'products.supplement.title': 'Beyuna Natural Supplement',
    'products.supplement.description': 'High-quality natural formulas designed to strengthen the immune system and promote daily vitality.',
    'products.kit.title': 'Complete Reiki Kit',
    'products.kit.description': 'Everything you need to start your Reiki practice, including support materials, energy crystals, and a detailed manual.',
    'products.buy': 'Buy via WhatsApp',

    'footer.about.title': 'Holistic Therapies & Reiki',
    'footer.about.description': 'Committed to your holistic well-being through natural therapies and energy-healing techniques.',
    'footer.contact.title': 'Contact',
    'footer.contact.address': 'Goudvinkstraat 114, 7132EA Lichtenvoorde, NL',
    'footer.contact.email': 'info@santalena.nl',
    'footer.contact.whatsapp': 'WhatsApp for appointments',
    'footer.services.title': 'Services',
    'footer.services.item.reiki': 'Reiki & Energy Healing',
    'footer.services.item.aroma': 'Aromatherapy',
    'footer.services.item.holistic': 'Holistic Therapy',
    'footer.services.item.courses': 'Reiki Courses',
    'footer.legal': '© 2025 Priscila.nl - All rights reserved. Developed with ❤️ for your well-being.'
  },
  nl: {
    'language.label': 'Taal',
    'language.options.pt-BR': 'Portugees',
    'language.options.en': 'Engels',
    'language.options.nl': 'Nederlands',
    'language.options.de': 'Duits',

    'nav.home': 'Home',
    'nav.services': 'Diensten',
    'nav.courses': 'Cursussen',
    'nav.products': 'Producten',
    'nav.contact': 'Contact',

    'hero.welcome': 'Welkom bij Priscila.nl',
    'hero.subtitle': 'Holistische therapieën en Reiki voor balans en welzijn',
    'hero.description': 'Ontdek de kracht van natuurlijke heling met persoonlijke holistische therapieën. Vind je innerlijke balans en activeer je levensenergie.',
    'hero.schedule': 'Consult inplannen',
    'hero.learnMore': 'Meer weten',
    'hero.illustrationAlt': 'Geanimeerde meditatie-illustratie die balans en welzijn vertegenwoordigt',

    'services.title': 'Aangeboden Diensten',
    'services.subtitle': 'De ruimte van Priscila.nl is gewijd aan integrale zorg. Wij bieden therapieën aan die erkend zijn als paramedische en holistische activiteiten.',
    'services.reiki.title': 'Reiki',
    'services.reiki.description': 'Japanse energietherapie die diepe ontspanning en chakra-balans bevordert via handoplegging.',
    'services.aromatherapy.title': 'Aromatherapie',
    'services.aromatherapy.description': 'Natuurlijke therapie met pure essentiële oliën om lichaam, geest en ziel te harmoniseren en welzijn te stimuleren.',
    'services.holistic.title': 'Holistische Therapie',
    'services.holistic.description': 'Integratieve aanpak die de mens als geheel behandelt met aandacht voor fysieke, emotionele en spirituele aspecten.',
    'services.energy.title': 'Energiehealing',
    'services.energy.description': 'Geavanceerde technieken voor energetische reiniging en uitlijning die blokkades opheffen en de levensstroom herstellen.',
    'services.flower.title': 'Bachbloesems',
    'services.flower.description': 'Bloesemessences die emotionele balans en innerlijke harmonie zacht en natuurlijk ondersteunen.',
    'services.crystals.title': 'Kristaltherapie',
    'services.crystals.description': 'Gebruik van kristallen en edelstenen om energie te harmoniseren en het natuurlijke helingsproces te versterken.',

    'courses.title': 'Reiki Opleiding',
    'courses.description': 'Ontwikkel je helend potentieel met Reiki. Cursussen beschikbaar in het Portugees en Nederlands, met internationaal erkende certificering en persoonlijke begeleiding.',
    'courses.feature.certification': 'Internationaal erkende certificering',
    'courses.feature.smallGroups': 'Kleine groepen voor persoonlijke begeleiding',
    'courses.feature.materials': 'Begeleide praktijk en volledig lesmateriaal',
    'courses.cta': 'Lees meer over de cursussen',

    'booking.title': 'Plan je Afspraak',
    'booking.description': 'Klaar om je helings- en welzijnsreis te beginnen? Neem contact op om een afspraak te maken. Persoonlijke zorg in een rustgevende en hartelijke omgeving.',
    'booking.address': '📍 Priscila.nl – Goudvinkstraat 114, 7132EA Lichtenvoorde, NL',
    'booking.whatsapp': 'Plan via WhatsApp',
    'booking.email': 'Stuur een e-mail',

    'products.title': 'Producten',
    'products.subtitle': 'Ontdek onze zorgvuldig samengestelde selectie natuurlijke producten en therapeutische tools ter ondersteuning van je wellnessreis.',
    'products.oils.title': 'Premium Essentiële Olie',
    'products.oils.description': 'Pure, natuurlijke etherische oliën uit ambachtelijke destillatie. Ideaal voor aromatherapie, massage en diffusers.',
    'products.supplement.title': 'Beyuna Natuurlijk Supplement',
    'products.supplement.description': 'Natuurlijke formules van hoge kwaliteit ter ondersteuning van het immuunsysteem en dagelijkse vitaliteit.',
    'products.kit.title': 'Compleet Reiki Pakket',
    'products.kit.description': 'Alles wat je nodig hebt om met Reiki te starten, inclusief ondersteunend materiaal, energiekristallen en een gedetailleerde handleiding.',
    'products.buy': 'Kopen via WhatsApp',

    'footer.about.title': 'Holistische Therapieën & Reiki',
    'footer.about.description': 'Toegewijd aan jouw welzijn met natuurlijke therapieën en energiehealingstechnieken.',
    'footer.contact.title': 'Contact',
    'footer.contact.address': 'Goudvinkstraat 114, 7132EA Lichtenvoorde, NL',
    'footer.contact.email': 'info@santalena.nl',
    'footer.contact.whatsapp': 'WhatsApp voor afspraken',
    'footer.services.title': 'Diensten',
    'footer.services.item.reiki': 'Reiki & Energiehealing',
    'footer.services.item.aroma': 'Aromatherapie',
    'footer.services.item.holistic': 'Holistische Therapie',
    'footer.services.item.courses': 'Reiki Cursussen',
    'footer.legal': '© 2025 Priscila.nl - Alle rechten voorbehouden. Ontwikkeld met ❤️ voor jouw welzijn.'
  },
  de: {
    'language.label': 'Sprache',
    'language.options.pt-BR': 'Portugiesisch',
    'language.options.en': 'Englisch',
    'language.options.nl': 'Niederländisch',
    'language.options.de': 'Deutsch',

    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.courses': 'Kurse',
    'nav.products': 'Produkte',
    'nav.contact': 'Kontakt',

    'hero.welcome': 'Willkommen bei Priscila.nl',
    'hero.subtitle': 'Ganzheitliche Therapien und Reiki für Balance und Wohlbefinden',
    'hero.description': 'Entdecken Sie die Kraft natürlicher Heilung durch persönliche ganzheitliche Therapien. Finden Sie Ihr inneres Gleichgewicht und aktivieren Sie Ihre Lebensenergie.',
    'hero.schedule': 'Termin buchen',
    'hero.learnMore': 'Mehr erfahren',
    'hero.illustrationAlt': 'Animierte Meditationsillustration, die Balance und Wohlbefinden darstellt',

    'services.title': 'Angebotene Dienstleistungen',
    'services.subtitle': 'Der Raum von Priscila.nl ist der integralen Betreuung gewidmet. Wir bieten Therapien an, die als paramedizinische und ganzheitliche Aktivitäten anerkannt sind.',
    'services.reiki.title': 'Reiki',
    'services.reiki.description': 'Japanische Technik der Energieheilung, die tiefe Entspannung und Chakrenausgleich durch Handauflegen fördert.',
    'services.aromatherapy.title': 'Aromatherapie',
    'services.aromatherapy.description': 'Natürliche Therapie mit reinen ätherischen Ölen, um Körper, Geist und Seele zu harmonisieren und ganzheitliches Wohlbefinden zu unterstützen.',
    'services.holistic.title': 'Ganzheitliche Therapie',
    'services.holistic.description': 'Integrativer Ansatz, der den Menschen als Ganzes betrachtet und physische, emotionale und spirituelle Aspekte einbezieht.',
    'services.energy.title': 'Energieheilung',
    'services.energy.description': 'Fortgeschrittene Techniken zur energetischen Reinigung und Ausrichtung, die Blockaden lösen und den Lebensfluss wiederherstellen.',
    'services.flower.title': 'Bach-Blüten',
    'services.flower.description': 'Blütenessenzen, die emotionales Gleichgewicht und innere Harmonie sanft und auf natürliche Weise fördern.',
    'services.crystals.title': 'Kristalltherapie',
    'services.crystals.description': 'Einsatz von Kristallen und Edelsteinen, um Energie zu harmonisieren und den natürlichen Heilungsprozess zu verstärken.',

    'courses.title': 'Reiki-Ausbildung',
    'courses.description': 'Entwickeln Sie Ihr Heilpotenzial mit Reiki. Kurse auf Portugiesisch und Niederländisch mit international anerkannter Zertifizierung und persönlicher Begleitung.',
    'courses.feature.certification': 'International anerkannte Zertifizierung',
    'courses.feature.smallGroups': 'Kleine Gruppen für persönliche Betreuung',
    'courses.feature.materials': 'Supervidierte Praxis und vollständige Lehrmaterialien',
    'courses.cta': 'Mehr über die Kurse erfahren',

    'booking.title': 'Buchen Sie Ihre Sitzung',
    'booking.description': 'Bereit, Ihre Reise zu Heilung und Wohlbefinden zu beginnen? Kontaktieren Sie uns, um einen Termin zu vereinbaren. Persönliche Betreuung in einem ruhigen und herzlichen Umfeld.',
    'booking.address': '📍 Priscila.nl – Goudvinkstraat 114, 7132EA Lichtenvoorde, NL',
    'booking.whatsapp': 'Über WhatsApp buchen',
    'booking.email': 'E-Mail senden',

    'products.title': 'Produkte',
    'products.subtitle': 'Entdecken Sie unsere sorgfältig ausgewählte Kollektion natürlicher Produkte und therapeutischer Werkzeuge zur Unterstützung Ihres Wohlbefindens.',
    'products.oils.title': 'Premium Ätherisches Öl',
    'products.oils.description': 'Reine, natürliche ätherische Öle aus kunstvoller Destillation. Ideal für Aromatherapie, Massage und Diffusoren.',
    'products.supplement.title': 'Natürliches Beyuna Supplement',
    'products.supplement.description': 'Hochwertige natürliche Formeln zur Stärkung des Immunsystems und Förderung täglicher Vitalität.',
    'products.kit.title': 'Komplettes Reiki-Set',
    'products.kit.description': 'Alles, was Sie für Ihre Reiki-Praxis benötigen – mit Begleitmaterialien, Energiekristallen und detailliertem Handbuch.',
    'products.buy': 'Über WhatsApp kaufen',

    'footer.about.title': 'Ganzheitliche Therapien & Reiki',
    'footer.about.description': 'Engagiert für Ihr ganzheitliches Wohlbefinden durch natürliche Therapien und Energieheilung.',
    'footer.contact.title': 'Kontakt',
    'footer.contact.address': 'Goudvinkstraat 114, 7132EA Lichtenvoorde, NL',
    'footer.contact.email': 'info@santalena.nl',
    'footer.contact.whatsapp': 'WhatsApp für Termine',
    'footer.services.title': 'Leistungen',
    'footer.services.item.reiki': 'Reiki & Energieheilung',
    'footer.services.item.aroma': 'Aromatherapie',
    'footer.services.item.holistic': 'Ganzheitliche Therapie',
    'footer.services.item.courses': 'Reiki-Kurse',
    'footer.legal': '© 2025 Priscila.nl - Alle Rechte vorbehalten. Mit ❤️ für Ihr Wohlbefinden entwickelt.'
  }
};

interface I18nContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  language: 'pt-BR',
  setLanguage: () => undefined,
  t: (key: string) => key
});

const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem('language') as Language | null;
    if (stored && translations[stored]) {
      return stored;
    }
    const navigatorLang = window.navigator.language as Language;
    if (navigatorLang && translations[navigatorLang]) {
      return navigatorLang;
    }
  }
  return 'pt-BR';
};

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('language', language);
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    if (translations[lang]) {
      setLanguageState(lang);
    }
  };

  const value = useMemo<I18nContextValue>(() => ({
    language,
    setLanguage,
    t: (key: string) => translations[language][key] ?? key
  }), [language]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => useContext(I18nContext);

export const availableLanguages: Array<{ code: Language; labelKey: string }> = [
  { code: 'pt-BR', labelKey: 'language.options.pt-BR' },
  { code: 'en', labelKey: 'language.options.en' },
  { code: 'nl', labelKey: 'language.options.nl' },
  { code: 'de', labelKey: 'language.options.de' }
];
