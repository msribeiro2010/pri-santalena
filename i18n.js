// Sistema de Internacionalização
class I18n {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'nl';
        this.translations = {
            'pt-BR': {
                // Header
                'nav.home': 'Início',
                'nav.services': 'Serviços',
                'nav.courses': 'Cursos',
                'nav.products': 'Produtos',
                'nav.contact': 'Contato',
                
                // Hero Section
                'hero.title': 'Transforme Sua Vida com Santalena',
                'hero.description': 'Descubra o poder da transformação pessoal através de nossos cursos exclusivos, produtos inovadores e serviços personalizados. Sua jornada de crescimento começa aqui.',
                'hero.cta': 'Comece Sua Jornada',
                
                // Services Section
                'services.title': 'Serviços Oferecidos',
                'services.subtitle': 'O espaço Santalena.nl é dedicado ao cuidado integral. Oferecemos terapias reconhecidas como atividades paramédicas e holísticas.',
                'services.energy.title': 'Energetische Essentietherapie',
                'services.energy.description': 'Terapia com essências energéticas para harmonização e equilíbrio do campo energético, promovendo bem-estar integral.',
                'services.aromatherapy.title': 'Psicoaromaterapia',
                'services.aromatherapy.description': 'Combinação de aromaterapia com técnicas psicológicas para promover relaxamento e equilíbrio emocional.',
                'services.reiki.title': 'Reiki',
                'services.reiki.description': 'Níveis de atendimento e formação em Reiki, técnica japonesa de canalização de energia para cura e relaxamento.',
                'services.counseling.title': 'Counseling & Reading',
                'services.counseling.description': 'Sessões de aconselhamento e leitura energética para orientação e clareza em momentos de decisão.',
                'services.healing.title': 'Healing',
                'services.healing.description': 'Técnicas de cura energética para restauração do equilíbrio físico, mental e espiritual.',
                'services.massage.title': 'Massagem com Pedras Quentes',
                'services.massage.description': 'Massagem relaxante com pedras vulcânicas aquecidas para alívio de tensões e relaxamento profundo.',
                
                // Course Section
                'courses.title': 'Formação em Reiki',
                'courses.description': 'Aprenda a arte milenar do Reiki e torne-se um canal de energia curativa. Nossos cursos oferecem formação completa desde o nível iniciante até o mestrado.',
                'courses.cta': 'Saiba mais sobre os cursos',
                
                // Products Section
                'products.title': 'Produtos Especiais',
                'products.subtitle': 'Descubra nossa seleção de produtos cuidadosamente escolhidos para apoiar sua jornada de bem-estar.',
                'products.oils.title': 'Óleos Essenciais Premium',
                'products.oils.description': 'Coleção exclusiva de óleos essenciais puros e naturais, ideais para aromaterapia e bem-estar.',
                'products.crystals.title': 'Cristais Energéticos',
                'products.crystals.description': 'Cristais selecionados para harmonização energética, meditação e práticas de cura natural.',
                'products.kit.title': 'Kit Reiki Completo',
                'products.kit.description': 'Kit completo para iniciar sua prática de Reiki, inclui materiais de apoio e cristais energéticos.',
                'products.buy': 'Comprar',
                
                // Footer
                'footer.copyright': '© 2024 Santalena.nl - Todos os direitos reservados',
                'footer.developed': 'Desenvolvido com',
                'footer.purpose': 'para promover bem-estar e harmonia'
            },
            'en': {
                // Header
                'nav.home': 'Home',
                'nav.services': 'Services',
                'nav.courses': 'Courses',
                'nav.products': 'Products',
                'nav.contact': 'Contact',
                
                // Hero Section
                'hero.title': 'Transform Your Life with Santalena',
                'hero.description': 'Discover the power of personal transformation through our exclusive courses, innovative products, and personalized services. Your growth journey starts here.',
                'hero.cta': 'Start Your Journey',
                
                // Services Section
                'services.title': 'Services Offered',
                'services.subtitle': 'The Santalena.nl space is dedicated to integral care. We offer therapies recognized as paramedical and holistic activities.',
                'services.energy.title': 'Energetische Essentietherapie',
                'services.energy.description': 'Therapy with energetic essences for harmonization and balance of the energetic field, promoting integral well-being.',
                'services.aromatherapy.title': 'Psychoaromatherapy',
                'services.aromatherapy.description': 'Combination of aromatherapy with psychological techniques to promote relaxation and emotional balance.',
                'services.reiki.title': 'Reiki',
                'services.reiki.description': 'Levels of care and training in Reiki, Japanese technique of energy channeling for healing and relaxation.',
                'services.counseling.title': 'Counseling & Reading',
                'services.counseling.description': 'Counseling and energetic reading sessions for guidance and clarity in decision moments.',
                'services.healing.title': 'Healing',
                'services.healing.description': 'Energetic healing techniques for restoration of physical, mental and spiritual balance.',
                'services.massage.title': 'Hot Stone Massage',
                'services.massage.description': 'Relaxing massage with heated volcanic stones for tension relief and deep relaxation.',
                
                // Course Section
                'courses.title': 'Reiki Training',
                'courses.description': 'Learn the ancient art of Reiki and become a channel of healing energy. Our courses offer complete training from beginner level to mastery.',
                'courses.cta': 'Learn more about courses',
                
                // Products Section
                'products.title': 'Special Products',
                'products.subtitle': 'Discover our selection of carefully chosen products to support your wellness journey.',
                'products.oils.title': 'Premium Essential Oils',
                'products.oils.description': 'Exclusive collection of pure and natural essential oils, ideal for aromatherapy and wellness.',
                'products.crystals.title': 'Energy Crystals',
                'products.crystals.description': 'Selected crystals for energetic harmonization, meditation and natural healing practices.',
                'products.kit.title': 'Complete Reiki Kit',
                'products.kit.description': 'Complete kit to start your Reiki practice, includes support materials and energy crystals.',
                'products.buy': 'Buy',
                
                // Footer
                'footer.copyright': '© 2024 Santalena.nl - All rights reserved',
                'footer.developed': 'Developed with',
                'footer.purpose': 'to promote well-being and harmony'
            },
            'de': {
                // Header
                'nav.home': 'Startseite',
                'nav.services': 'Dienstleistungen',
                'nav.courses': 'Kurse',
                'nav.products': 'Produkte',
                'nav.contact': 'Kontakt',
                
                // Hero Section
                'hero.title': 'Verwandeln Sie Ihr Leben mit Santalena',
                'hero.description': 'Entdecken Sie die Kraft der persönlichen Transformation durch unsere exklusiven Kurse, innovativen Produkte und personalisierten Dienstleistungen. Ihre Wachstumsreise beginnt hier.',
                'hero.cta': 'Starten Sie Ihre Reise',
                
                // Services Section
                'services.title': 'Angebotene Dienstleistungen',
                'services.subtitle': 'Der Santalena.nl-Raum ist der ganzheitlichen Betreuung gewidmet. Wir bieten Therapien an, die als paramedizinische und ganzheitliche Aktivitäten anerkannt sind.',
                'services.energy.title': 'Energetische Essentietherapie',
                'services.energy.description': 'Therapie mit energetischen Essenzen zur Harmonisierung und Balance des Energiefeldes, die ganzheitliches Wohlbefinden fördert.',
                'services.aromatherapy.title': 'Psychoaromatherapie',
                'services.aromatherapy.description': 'Kombination aus Aromatherapie mit psychologischen Techniken zur Förderung von Entspannung und emotionalem Gleichgewicht.',
                'services.reiki.title': 'Reiki',
                'services.reiki.description': 'Betreuungs- und Ausbildungsebenen in Reiki, japanische Technik der Energiekanalisierung für Heilung und Entspannung.',
                'services.counseling.title': 'Beratung & Reading',
                'services.counseling.description': 'Beratungs- und energetische Reading-Sitzungen für Orientierung und Klarheit in Entscheidungsmomenten.',
                'services.healing.title': 'Healing',
                'services.healing.description': 'Energetische Heilungstechniken zur Wiederherstellung des körperlichen, geistigen und spirituellen Gleichgewichts.',
                'services.massage.title': 'Hot Stone Massage',
                'services.massage.description': 'Entspannende Massage mit erhitzten Vulkansteinen zur Spannungslinderung und tiefen Entspannung.',
                
                // Course Section
                'courses.title': 'Reiki-Ausbildung',
                'courses.description': 'Lernen Sie die uralte Kunst des Reiki und werden Sie ein Kanal heilender Energie. Unsere Kurse bieten vollständige Ausbildung vom Anfängerniveau bis zur Meisterschaft.',
                'courses.cta': 'Mehr über Kurse erfahren',
                
                // Products Section
                'products.title': 'Besondere Produkte',
                'products.subtitle': 'Entdecken Sie unsere Auswahl sorgfältig ausgewählter Produkte zur Unterstützung Ihrer Wellness-Reise.',
                'products.oils.title': 'Premium Ätherische Öle',
                'products.oils.description': 'Exklusive Sammlung reiner und natürlicher ätherischer Öle, ideal für Aromatherapie und Wohlbefinden.',
                'products.crystals.title': 'Energiekristalle',
                'products.crystals.description': 'Ausgewählte Kristalle für energetische Harmonisierung, Meditation und natürliche Heilpraktiken.',
                'products.kit.title': 'Komplettes Reiki-Set',
                'products.kit.description': 'Komplettes Set zum Beginn Ihrer Reiki-Praxis, enthält Unterstützungsmaterialien und Energiekristalle.',
                'products.buy': 'Kaufen',
                
                // Footer
                'footer.copyright': '© 2024 Santalena.nl - Alle Rechte vorbehalten',
                'footer.developed': 'Entwickelt mit',
                'footer.purpose': 'zur Förderung von Wohlbefinden und Harmonie'
            },
            'nl': {
                // Header
                'nav.home': 'Home',
                'nav.services': 'Diensten',
                'nav.courses': 'Cursussen',
                'nav.products': 'Producten',
                'nav.contact': 'Contact',
                
                // Hero Section
                'hero.title': 'Transformeer Je Leven met Santalena',
                'hero.description': 'Ontdek de kracht van persoonlijke transformatie door onze exclusieve cursussen, innovatieve producten en gepersonaliseerde diensten. Je groeireis begint hier.',
                'hero.cta': 'Begin Je Reis',
                
                // Services Section
                'services.title': 'Aangeboden Diensten',
                'services.subtitle': 'De Santalena.nl ruimte is gewijd aan integrale zorg. Wij bieden therapieën aan die erkend zijn als paramedische en holistische activiteiten.',
                'services.energy.title': 'Energetische Essentietherapie',
                'services.energy.description': 'Therapie met energetische essences voor harmonisatie en balans van het energetische veld, ter bevordering van integraal welzijn.',
                'services.aromatherapy.title': 'Psychoaromatherapie',
                'services.aromatherapy.description': 'Combinatie van aromatherapie met psychologische technieken om ontspanning en emotionele balans te bevorderen.',
                'services.reiki.title': 'Reiki',
                'services.reiki.description': 'Niveaus van zorg en training in Reiki, Japanse techniek van energiekanalisatie voor genezing en ontspanning.',
                'services.counseling.title': 'Counseling & Reading',
                'services.counseling.description': 'Counseling en energetische reading sessies voor begeleiding en helderheid in beslissingsmomenten.',
                'services.healing.title': 'Healing',
                'services.healing.description': 'Energetische genezingstechnieken voor herstel van fysieke, mentale en spirituele balans.',
                'services.massage.title': 'Hot Stone Massage',
                'services.massage.description': 'Ontspannende massage met verwarmde vulkanische stenen voor spanningsverlichting en diepe ontspanning.',
                
                // Course Section
                'courses.title': 'Reiki Training',
                'courses.description': 'Leer de oude kunst van Reiki en word een kanaal van genezende energie. Onze cursussen bieden complete training van beginnerniveau tot meesterschap.',
                'courses.cta': 'Meer weten over cursussen',
                
                // Products Section
                'products.title': 'Speciale Producten',
                'products.subtitle': 'Ontdek onze selectie van zorgvuldig gekozen producten om je wellness reis te ondersteunen.',
                'products.oils.title': 'Premium Essentiële Oliën',
                'products.oils.description': 'Exclusieve collectie van zuivere en natuurlijke essentiële oliën, ideaal voor aromatherapie en welzijn.',
                'products.crystals.title': 'Energiekristallen',
                'products.crystals.description': 'Geselecteerde kristallen voor energetische harmonisatie, meditatie en natuurlijke genezingspraktijken.',
                'products.kit.title': 'Complete Reiki Kit',
                'products.kit.description': 'Complete kit om je Reiki praktijk te beginnen, inclusief ondersteunende materialen en energiekristallen.',
                'products.buy': 'Kopen',
                
                // Footer
                'footer.copyright': '© 2024 Santalena.nl - Alle rechten voorbehouden',
                'footer.developed': 'Ontwikkeld met',
                'footer.purpose': 'om welzijn en harmonie te bevorderen'
            }
        };
        
        this.init();
    }
    
    init() {
        this.createLanguageSelector();
        this.translatePage();
    }
    
    createLanguageSelector() {
        // Usar o seletor existente no HTML em vez de criar um novo
        const selector = document.querySelector('.language-selector');
        if (!selector) return;
        
        // Event listeners
        const currentLanguage = selector.querySelector('.current-language');
        if (currentLanguage) {
            currentLanguage.addEventListener('click', () => {
                selector.classList.toggle('open');
            });
        }
        
        selector.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = e.currentTarget.dataset.lang;
                this.changeLanguage(lang);
                selector.classList.remove('open');
            });
        });
        
        // Fechar dropdown ao clicar fora
        document.addEventListener('click', (e) => {
            if (!selector.contains(e.target)) {
                selector.classList.remove('open');
            }
        });
    }
    
    changeLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        this.translatePage();
        this.updateLanguageSelector();
    }
    
    updateLanguageSelector() {
        const languages = {
            'pt-BR': { name: 'PT', flag: '🇧🇷' },
            'en': { name: 'EN', flag: '🇺🇸' },
            'de': { name: 'DE', flag: '🇩🇪' },
            'nl': { name: 'NL', flag: '🇳🇱' }
        };
        
        const currentLang = document.querySelector('.current-language');
        if (currentLang) {
            const flag = currentLang.querySelector('.flag');
            const langText = currentLang.querySelector('.lang-text');
            
            if (flag) flag.textContent = languages[this.currentLanguage].flag;
            if (langText) langText.textContent = languages[this.currentLanguage].name;
        }
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.dataset.i18n;
            const translation = this.translations[this.currentLanguage][key];
            if (translation) {
                element.textContent = translation;
            }
        });
    }
    
    t(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});