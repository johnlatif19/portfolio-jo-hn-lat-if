// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========== MOBILE MENU TOGGLE ==========
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuToggle.innerHTML = mobileMenu.classList.contains('hidden') 
        ? '<i class="fas fa-bars"></i>' 
        : '<i class="fas fa-times"></i>';
});

// Close mobile menu on link click
document.querySelectorAll('#mobileMenu a:not(.flex a)').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// ========== SMOOTH SCROLLING FOR NAV LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const navHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== FADE IN ON SCROLL ==========
const fadeElements = document.querySelectorAll('.glass-card, .project-card');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('fade-in-up');
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => {
    fadeObserver.observe(el);
});

// ========== LANGUAGE SWITCHING ==========
const translations = {
    en: {
        // Navigation
        navAbout: 'About',
        navWork: 'Work',
        navSkills: 'Skills',
        navContact: "Let's Talk",
        
        // Hero
        heroBadge: '✦ Available for Freelance',
        heroTitle1: 'CREATE',
        heroTitle2: '& DESIGN',
        heroSubtitle: 'John Latif · UI/UX Designer & Frontend Developer',
        heroDesc: 'I design interactive web experiences and real-world applications focused on performance and usability.',
        heroBtn1: 'View My Work',
        heroBtn2: "Let's Connect",
        badgeYears: '5+ Years',
        badgeProjects: '50+ Projects',
        
        // About
        aboutTitleHighlight: 'About',
        aboutTitle: 'Me',
        aboutDesc1: "I'm John Latif, a passionate UI/UX Designer and Frontend Developer with a knack for creating beautiful, user-centric digital experiences.",
        aboutDesc2: "I'm an ambitious person passionate about continuous learning and development, always seeking to acquire new skills and turn knowledge into practical application. I love to think differently, pay attention to detail, and develop ideas to achieve better results. I believe in the importance of continuous improvement, and I ensure that every project I work on has real value that reflects my skills and passion for what I do.",
        skillsTitle: 'Core Skills',
        creativeTitle: 'Creative Technologies',
        
        // Projects
        projectsTitleHighlight: 'My',
        projectsTitle: 'Projects',
        projectsDesc: 'A selection of my recent work showcasing design thinking, development skills, and creative problem-solving.',
        project1Title: 'Shulamith Gallery',
        project1Desc: 'An art platform for displaying and selling paintings, with the ability to execute any painting with different materials and sizes according to the client\'s request, and provide free art consultations.',
        project2Title: 'Points System for Dr. Mirna',
        project2Desc: 'An integrated loyalty points management system for Dr. Mirna Pharmacy customers, allowing points collection with each purchase and redemption for exclusive rewards and offers.',
        project3Title: 'Login System',
        project3Desc: 'A simple and secure demo login system with a clean user interface, allowing users to log in using username and password.',
        viewProject: 'View Project',
        
        // Skills Page
        skillsPageTitleHighlight: 'My',
        skillsPageTitle: 'Skills',
        skillsPageDesc: 'Technologies I work with to create exceptional digital experiences',
        coreSkillsTitle: 'Core Skills',
        coreSkillsDesc: 'Essential technologies I use daily',
        creativeSkillsTitle: 'Creative Technologies',
        creativeSkillsDesc: '3D and creative tools for immersive experiences',
        
        // Contact
        contactTitle: "Let's",
        contactTitleHighlight: 'Connect',
        contactDesc: 'Have a project in mind? Let\'s collaborate and create something amazing together.',
        contactName: 'John Latif',
        contactRole: 'Frontend Developer & Web Developer',
        contactLocation: 'Location',
        contactLocationValue: 'Egypt',
        contactPhone: 'Phone',
        contactEmail: 'Email',
        contactCard1Title: 'Email Me',
        contactCard2Title: 'Call Me',
        contactCard3Title: 'WhatsApp',
        contactCard3Sub: 'Chat with me',
        contactCard4Title: 'Schedule Call',
        contactCard4Sub: 'Book a meeting',
        footerText: 'All rights reserved. Crafted with',
    },
    ar: {
        // Navigation
        navAbout: 'ني ني',
        navWork: 'أعمالي',
        navSkills: 'مهاراتي',
        navContact: 'تواصل معي',
        
        // Hero
        heroBadge: '✦ متاح للعمل',
        heroTitle1: 'أصمم',
        heroTitle2: 'تجارب ممتعة',
        heroSubtitle: 'جون لطيف · مصمم UI/UX ومطور واجهات أمامية',
        heroDesc: 'أصمم تجارب ويب تفاعلية وتطبيقات واقعية تركز على الأداء وسهولة الاستخدام.',
        heroBtn1: 'شاهد أعمالي',
        heroBtn2: 'تواصل معي',
        badgeYears: '5+ سنوات',
        badgeProjects: '50+ مشروع',
        
        // About
        aboutTitleHighlight: 'ني',
        aboutTitle: 'ني',
        aboutDesc1: 'أنا جون لطيف، مصمم UI/UX ومطور واجهات أمامية شغوف بإنشاء تجارب رقمية جميلة تركز على المستخدم.',
        aboutDesc2: 'أنا شخص طموح وشغوف بالتعلّم والتطوير المستمر، وأسعى دائمًا إلى اكتساب مهارات جديدة وتحويل المعرفة إلى تطبيق عملي. أحب التفكير بطريقة مختلفة، الاهتمام بالتفاصيل، وتطوير الأفكار للوصول إلى نتائج أفضل. أؤمن بأهمية التطور المستمر، وأحرص على أن يكون لكل مشروع أعمل عليه قيمة حقيقية تعكس مهاراتي وشغفي بما أقدمه.',
        skillsTitle: 'المهارات الأساسية',
        creativeTitle: 'التقنيات الإبداعية',
        
        // Projects
        projectsTitleHighlight: 'أ',
        projectsTitle: 'عمالي',
        projectsDesc: 'مجموعة من المشاريع التي تعرض مهاراتي وأسلوبي في التطوير.',
        project1Title: 'شولميث جاليري',
        project1Desc: 'منصة فنية لعرض وبيع اللوحات الفنية، مع إمكانية تنفيذ أي تابلوه بخامات وأحجام مختلفة حسب طلب العميل، وتقديم استشارات فنية مجانية.',
        project2Title: 'نظام نقاط لصيدلية د. ميرنا',
        project2Desc: 'نظام متكامل لإدارة نقاط الولاء لعملاء صيدلية د. ميرنا، يتيح جمع النقاط مع كل عملية شراء واستبدالها بمكافآت وعروض حصرية.',
        project3Title: 'نظام تسجيل الدخول',
        project3Desc: 'نظام تسجيل دخول تجريبي بسيط وآمن مع واجهة مستخدم نظيفة، يتيح للمستخدمين تسجيل الدخول باستخدام اسم المستخدم وكلمة المرور.',
        viewProject: 'عرض المشروع',
        
        // Skills Page
        skillsPageTitleHighlight: 'م',
        skillsPageTitle: 'هاراتي',
        skillsPageDesc: 'التقنيات التي أعمل بها لإنشاء تجارب رقمية استثنائية',
        coreSkillsTitle: 'المهارات الأساسية',
        coreSkillsDesc: 'التقنيات الأساسية التي أعمل بها يومياً',
        creativeSkillsTitle: 'التقنيات الإبداعية',
        creativeSkillsDesc: 'أدوات ثلاثية الأبعاد وإبداعية لتجارب غامرة',
        
        // Contact
        contactTitle: 'تواصل',
        contactTitleHighlight: 'معي',
        contactDesc: 'يمكنك التواصل معي عبر أي من وسائل التواصل التالية',
        contactName: 'جون لطيف',
        contactRole: 'مطور واجهة امامية و مطور ويب و واجهة خلفية',
        contactLocation: 'الموقع',
        contactLocationValue: 'مصر',
        contactPhone: 'الهاتف',
        contactEmail: 'البريد الإلكتروني',
        contactCard1Title: 'راسلني',
        contactCard2Title: 'اتصل بي',
        contactCard3Title: 'واتساب',
        contactCard3Sub: 'تحدث معي',
        contactCard4Title: 'حدد موعد',
        contactCard4Sub: 'احجز اجتماع',
        footerText: 'جميع الحقوق محفوظة. صُنع بـ',
    }
};

let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            if (el.innerHTML.includes('<')) {
                if (key === 'heroBtn1') {
                    el.innerHTML = t[key] + ' <i class="fas fa-arrow-right"></i>';
                } else if (key === 'heroTitle1' || key === 'heroTitle2' || 
                           key === 'aboutTitleHighlight' || key === 'aboutTitle' ||
                           key === 'projectsTitleHighlight' || key === 'projectsTitle' ||
                           key === 'skillsPageTitleHighlight' || key === 'skillsPageTitle' ||
                           key === 'contactTitle' || key === 'contactTitleHighlight') {
                    el.textContent = t[key];
                } else {
                    el.textContent = t[key];
                }
            } else {
                el.textContent = t[key];
            }
        }
    });
    
    // Special handling for About title
    const aboutTitle = document.querySelector('#about h2');
    if (aboutTitle) {
        const span = aboutTitle.querySelector('.text-amber-400');
        if (span) {
            span.textContent = t.aboutTitleHighlight;
            const textNode = aboutTitle.childNodes[1];
            if (textNode) {
                textNode.textContent = ' ' + t.aboutTitle;
            }
        }
    }
    
    // Special handling for Projects title
    const projectsTitle = document.querySelector('#projects h2');
    if (projectsTitle) {
        const span = projectsTitle.querySelector('.text-amber-400');
        if (span) {
            span.textContent = t.projectsTitleHighlight;
            const textNode = projectsTitle.childNodes[1];
            if (textNode) {
                textNode.textContent = ' ' + t.projectsTitle;
            }
        }
    }
    
    // Special handling for Skills page title
    const skillsTitle = document.querySelector('#skills h2');
    if (skillsTitle) {
        const span = skillsTitle.querySelector('.text-amber-400');
        if (span) {
            span.textContent = t.skillsPageTitleHighlight;
            const textNode = skillsTitle.childNodes[1];
            if (textNode) {
                textNode.textContent = ' ' + t.skillsPageTitle;
            }
        }
    }
    
    // Special handling for Contact title
    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) {
        const span = contactTitle.querySelector('.text-amber-400');
        if (span) {
            span.textContent = t.contactTitleHighlight;
            const textNode = contactTitle.childNodes[0];
            if (textNode) {
                textNode.textContent = t.contactTitle + ' ';
            }
        }
    }
    
    // Update language toggle buttons - Desktop
    const desktopLangBtns = document.querySelectorAll('#navbar .hidden.md\\:flex .gap-2 a');
    if (desktopLangBtns.length >= 2) {
        if (lang === 'en') {
            desktopLangBtns[0].className = 'text-amber-400 font-bold text-sm border border-amber-400/30 px-3 py-1 rounded-full bg-amber-500/20 transition-all';
            desktopLangBtns[1].className = 'text-white/60 hover:text-white text-sm border border-white/10 px-3 py-1 rounded-full transition-all';
        } else {
            desktopLangBtns[0].className = 'text-white/60 hover:text-white text-sm border border-white/10 px-3 py-1 rounded-full transition-all';
            desktopLangBtns[1].className = 'text-amber-400 font-bold text-sm border border-amber-400/30 px-3 py-1 rounded-full bg-amber-500/20 transition-all';
        }
    }
    
    // Update language toggle buttons - Mobile
    const mobileLangBtns = document.querySelectorAll('#mobileMenu .flex a');
    if (mobileLangBtns.length >= 2) {
        if (lang === 'en') {
            mobileLangBtns[0].className = 'text-amber-400 font-bold';
            mobileLangBtns[1].className = 'text-white/60';
        } else {
            mobileLangBtns[0].className = 'text-white/60';
            mobileLangBtns[1].className = 'text-amber-400 font-bold';
        }
    }
    
    // Update direction for Arabic
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
    }
}

// ========== EVENT LISTENERS FOR LANGUAGE BUTTONS ==========
document.addEventListener('DOMContentLoaded', function() {
    const langEn = document.getElementById('langEn');
    const langAr = document.getElementById('langAr');
    const mobileLangEn = document.getElementById('mobileLangEn');
    const mobileLangAr = document.getElementById('mobileLangAr');
    
    if (langEn) {
        langEn.addEventListener('click', function(e) {
            e.preventDefault();
            switchLanguage('en');
        });
    }
    
    if (langAr) {
        langAr.addEventListener('click', function(e) {
            e.preventDefault();
            switchLanguage('ar');
        });
    }
    
    if (mobileLangEn) {
        mobileLangEn.addEventListener('click', function(e) {
            e.preventDefault();
            switchLanguage('en');
            mobileMenu.classList.add('hidden');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    }
    
    if (mobileLangAr) {
        mobileLangAr.addEventListener('click', function(e) {
            e.preventDefault();
            switchLanguage('ar');
            mobileMenu.classList.add('hidden');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    }
    
    switchLanguage('en');
});

// ========== DYNAMIC YEAR IN FOOTER ==========
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('footer p');
if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace('2026', currentYear);
}

console.log('🚀 John Latif Portfolio loaded successfully!');
