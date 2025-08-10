import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'ur' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.enquiry': 'Enquiry',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.news': 'News',
    'nav.chat': 'Chat',
    'nav.enroll': 'Enroll Now',
    'nav.excellence': 'Excellence in Education',
    
    // Hero Section
    'hero.excellence': 'Excellence',
    'hero.education': 'Education',
    'hero.subtitle': 'Empowering students from Class 6-12 with comprehensive academic support and specialized JNV entrance coaching at Gayatri Foundation.',
    'hero.start': 'Start Your Journey',
    'hero.explore': 'Explore Courses',
    'hero.courses': 'Courses',
    'hero.students': 'Students',
    'hero.success': 'Success Rate',
    
    // Courses
    'courses.title': 'Our Courses',
    'courses.subtitle': 'Comprehensive educational programs designed to excel in academics and competitive examinations',
    'courses.foundation': 'Foundation Classes',
    'courses.board': 'Board Focused',
    'courses.career': 'Career Streams',
    'courses.jnv': 'JNV Entrance',
    'courses.learn': 'Learn More',
    'courses.viewall': 'View All Courses',
    
    // Achievements
    'achievements.title': 'Our Achievements',
    'achievements.subtitle': 'Celebrating milestones of excellence and student success stories that inspire us every day',
    'achievements.excellence': 'Excellence Awards',
    'achievements.jnvsuccess': 'JNV Success Rate',
    'achievements.toppers': 'Board Toppers',
    'achievements.alumni': 'Alumni Network',
    'achievements.ready': 'Ready to be Part of Our Success Story?',
    'achievements.join': 'Join thousands of successful students who have achieved their dreams with Gayatri Foundation. Start your journey towards academic excellence today.',
    'achievements.enroll': 'Enroll Now',
    'achievements.stories': 'View Success Stories',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Dedicated to providing excellent education and shaping future leaders',
    'about.mission': 'Our Mission',
    'about.missionText': 'To provide quality education and comprehensive academic support that empowers students to achieve their fullest potential and become responsible global citizens.',
    'about.vision': 'Our Vision',
    'about.visionText': 'To be the leading educational foundation that transforms lives through innovative teaching methods, personalized attention, and unwavering commitment to student success.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us for any queries or admissions',
    'contact.sendMessage': 'Send us a Message',
    'contact.getInTouch': 'Get in Touch',
    'contact.description': 'Have questions about our courses or admission process? We are here to help you.',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.phoneTitle': 'Phone Numbers',
    'contact.emailTitle': 'Email Addresses',
    'contact.addressTitle': 'Our Address',
    'contact.hoursTitle': 'Office Hours',
    'contact.hours': 'Monday - Saturday: 9:00 AM - 6:00 PM',
    
    // News
    'news.title': 'Latest News',
    'news.subtitle': 'Stay updated with our latest achievements, events, and educational insights',
    'news.readMore': 'Read More',
    'news.categories.achievement': 'Achievement',
    'news.categories.announcement': 'Announcement',
    'news.categories.event': 'Event',
    'news.article1.title': 'Gayatri Foundation Students Excel in Board Exams 2024',
    'news.article1.excerpt': 'Our students achieved outstanding results with 95% pass rate and multiple toppers across different subjects.',
    'news.article2.title': 'New JNV Entrance Coaching Batch Starting Soon',
    'news.article2.excerpt': 'Limited seats available for our specialized Jawahar Navodaya Vidyalaya entrance coaching program.',
    'news.article3.title': 'Annual Educational Excellence Awards Ceremony',
    'news.article3.excerpt': 'Join us for our annual ceremony recognizing outstanding student achievements and academic excellence.',
    
    // Enrollment
    'enrollment.title': 'Student Enrollment Form',
    'enrollment.success': 'Enrollment Successful!',
    'enrollment.successMessage': 'Thank you for enrolling. Our team will contact you soon.',
    'enrollment.studentInfo': 'Student Information',
    'enrollment.parentInfo': 'Parent/Guardian Information',
    'enrollment.additionalInfo': 'Additional Information',
    'enrollment.studentName': 'Student Name',
    'enrollment.class': 'Class',
    'enrollment.course': 'Course',
    'enrollment.previousSchool': 'Previous School',
    'enrollment.parentName': 'Parent/Guardian Name',
    'enrollment.phone': 'Phone Number',
    'enrollment.email': 'Email Address',
    'enrollment.address': 'Address',
    'enrollment.remarks': 'Additional Remarks',
    'enrollment.remarksPlaceholder': 'Any special requirements or additional information...',
    'enrollment.selectClass': 'Select Class',
    'enrollment.selectCourse': 'Select Course',
    'enrollment.cancel': 'Cancel',
    'enrollment.submit': 'Submit Enrollment',
    
    // Footer
    'footer.support': '24/7 Support Available',
  },
  hi: {
    // Navigation - Hindi
    'nav.home': 'होम',
    'nav.courses': 'कोर्स',
    'nav.enquiry': 'पूछताछ',
    'nav.about': 'हमारे बारे में',
    'nav.contact': 'संपर्क',
    'nav.news': 'समाचार',
    'nav.chat': 'चैट',
    'nav.enroll': 'अभी दाखिला लें',
    'nav.excellence': 'शिक्षा में उत्कृष्टता',
    
    // Hero Section - Hindi
    'hero.excellence': 'उत्कृष्टता',
    'hero.education': 'शिक्षा',
    'hero.subtitle': 'गायत्री फाउंडेशन में कक्षा 6-12 के छात्रों को व्यापक शैक्षणिक सहायता और विशेष जेएनवी प्रवेश कोचिंग के साथ सशक्त बनाना।',
    'hero.start': 'अपनी यात्रा शुरू करें',
    'hero.explore': 'कोर्स देखें',
    'hero.courses': 'कोर्स',
    'hero.students': 'छात्र',
    'hero.success': 'सफलता दर',
    
    // Courses - Hindi
    'courses.title': 'हमारे कोर्स',
    'courses.subtitle': 'शैक्षणिक और प्रतियोगी परीक्षाओं में उत्कृष्टता के लिए डिज़ाइन किए गए व्यापक शैक्षिक कार्यक्रम',
    'courses.foundation': 'आधारभूत कक्षाएं',
    'courses.board': 'बोर्ड केंद्रित',
    'courses.career': 'करियर स्ट्रीम',
    'courses.jnv': 'जेएनवी प्रवेश',
    'courses.learn': 'और जानें',
    'courses.viewall': 'सभी कोर्स देखें',
    
    // Achievements - Hindi
    'achievements.title': 'हमारी उपलब्धियां',
    'achievements.subtitle': 'उत्कृष्टता के मील के पत्थर और छात्र सफलता की कहानियों का जश्न मनाना जो हमें हर दिन प्रेरणा देती हैं',
    'achievements.excellence': 'उत्कृष्टता पुरस्कार',
    'achievements.jnvsuccess': 'जेएनवी सफलता दर',
    'achievements.toppers': 'बोर्ड टॉपर्स',
    'achievements.alumni': 'पूर्व छात्र नेटवर्क',
    'achievements.ready': 'हमारी सफलता की कहानी का हिस्सा बनने के लिए तैयार हैं?',
    'achievements.join': 'हजारों सफल छात्रों में शामिल हों जिन्होंने गायत्री फाउंडेशन के साथ अपने सपने पूरे किए हैं। आज ही शैक्षणिक उत्कृष्टता की अपनी यात्रा शुरू करें।',
    'achievements.enroll': 'अभी दाखिला लें',
    'achievements.stories': 'सफलता की कहानियां देखें',
    
    // About - Hindi
    'about.title': 'हमारे बारे में',
    'about.subtitle': 'उत्कृष्ट शिक्षा प्रदान करने और भविष्य के नेताओं को आकार देने के लिए समर्पित',
    'about.mission': 'हमारा मिशन',
    'about.missionText': 'गुणवत्तापूर्ण शिक्षा और व्यापक शैक्षणिक सहायता प्रदान करना जो छात्रों को अपनी पूर्ण क्षमता प्राप्त करने और जिम्मेदार वैश्विक नागरिक बनने के लिए सशक्त बनाता है।',
    'about.vision': 'हमारा दृष्टिकोण',
    'about.visionText': 'एक अग्रणी शैक्षणिक संस्थान बनना जो नवाचार शिक्षण विधियों, व्यक्तिगत ध्यान और छात्र सफलता के लिए अटूट प्रतिबद्धता के माध्यम से जीवन को बदलता है।',
    
    // Contact - Hindi
    'contact.title': 'संपर्क करें',
    'contact.subtitle': 'किसी भी प्रश्न या प्रवेश के लिए हमसे संपर्क करें',
    'contact.sendMessage': 'हमें संदेश भेजें',
    'contact.getInTouch': 'संपर्क में रहें',
    'contact.description': 'हमारे पाठ्यक्रमों या प्रवेश प्रक्रिया के बारे में प्रश्न हैं? हम आपकी सहायता के लिए यहाँ हैं।',
    'contact.firstName': 'प्रथम नाम',
    'contact.lastName': 'अंतिम नाम',
    'contact.email': 'ईमेल पता',
    'contact.phone': 'फोन नंबर',
    'contact.subject': 'विषय',
    'contact.message': 'आपका संदेश',
    'contact.send': 'संदेश भेजें',
    'contact.phoneTitle': 'फोन नंबर',
    'contact.emailTitle': 'ईमेल पते',
    'contact.addressTitle': 'हमारा पता',
    'contact.hoursTitle': 'कार्यालय समय',
    'contact.hours': 'सोमवार - शनिवार: सुबह 9:00 - शाम 6:00',
    
    // News - Hindi
    'news.title': 'नवीनतम समाचार',
    'news.subtitle': 'हमारी नवीनतम उपलब्धियों, घटनाओं और शैक्षणिक अंतर्दृष्टि के साथ अपडेट रहें',
    'news.readMore': 'और पढ़ें',
    'news.categories.achievement': 'उपलब्धि',
    'news.categories.announcement': 'घोषणा',
    'news.categories.event': 'कार्यक्रम',
    'news.article1.title': 'गायत्री फाउंडेशन के छात्रों ने बोर्ड परीक्षा 2024 में उत्कृष्टता दिखाई',
    'news.article1.excerpt': 'हमारे छात्रों ने 95% पास दर और विभिन्न विषयों में कई टॉपर्स के साथ उत्कृष्ट परिणाम प्राप्त किए।',
    'news.article2.title': 'नया जेएनवी प्रवेश कोचिंग बैच जल्द शुरू',
    'news.article2.excerpt': 'हमारे विशेष जवाहर नवोदय विद्यालय प्रवेश कोचिंग कार्यक्रम के लिए सीमित सीटें उपलब्ध।',
    'news.article3.title': 'वार्षिक शैक्षणिक उत्कृष्टता पुरस्कार समारोह',
    'news.article3.excerpt': 'उत्कृष्ट छात्र उपलब्धियों और शैक्षणिक उत्कृष्टता को पहचानने वाले हमारे वार्षिक समारोह में शामिल हों।',
    
    // Enrollment - Hindi
    'enrollment.title': 'छात्र पंजीकरण फॉर्म',
    'enrollment.success': 'पंजीकरण सफल!',
    'enrollment.successMessage': 'पंजीकरण के लिए धन्यवाद। हमारी टीम जल्द ही आपसे संपर्क करेगी।',
    'enrollment.studentInfo': 'छात्र की जानकारी',
    'enrollment.parentInfo': 'अभिभावक/संरक्षक की जानकारी',
    'enrollment.additionalInfo': 'अतिरिक्त जानकारी',
    'enrollment.studentName': 'छात्र का नाम',
    'enrollment.class': 'कक्षा',
    'enrollment.course': 'पाठ्यक्रम',
    'enrollment.previousSchool': 'पिछला स्कूल',
    'enrollment.parentName': 'अभिभावक/संरक्षक का नाम',
    'enrollment.phone': 'फोन नंबर',
    'enrollment.email': 'ईमेल पता',
    'enrollment.address': 'पता',
    'enrollment.remarks': 'अतिरिक्त टिप्पणी',
    'enrollment.remarksPlaceholder': 'कोई विशेष आवश्यकताएं या अतिरिक्त जानकारी...',
    'enrollment.selectClass': 'कक्षा चुनें',
    'enrollment.selectCourse': 'पाठ्यक्रम चुनें',
    'enrollment.cancel': 'रद्द करें',
    'enrollment.submit': 'पंजीकरण जमा करें',
    
    // Footer - Hindi
    'footer.support': '24/7 सहायता उपलब्ध',
  },
  ur: {
    // Navigation - Urdu
    'nav.home': 'ہوم',
    'nav.courses': 'کورسز',
    'nav.enquiry': 'انکوائری',
    'nav.about': 'ہمارے بارے میں',
    'nav.contact': 'رابطہ',
    'nav.news': 'خبریں',
    'nav.chat': 'چیٹ',
    'nav.enroll': 'ابھی داخلہ لیں',
    'nav.excellence': 'تعلیم میں عمدگی',
    
    // Hero Section - Urdu
    'hero.excellence': 'عمدگی',
    'hero.education': 'تعلیم',
    'hero.subtitle': 'گایتری فاؤنڈیشن میں کلاس 6-12 کے طلباء کو جامع تعلیمی مدد اور خصوصی JNV داخلہ کوچنگ کے ساتھ بااختیار بنانا۔',
    'hero.start': 'اپنا سفر شروع کریں',
    'hero.explore': 'کورسز دیکھیں',
    'hero.courses': 'کورسز',
    'hero.students': 'طلباء',
    'hero.success': 'کامیابی کی شرح',
    
    // Courses - Urdu
    'courses.title': 'ہمارے کورسز',
    'courses.subtitle': 'تعلیمی اور مسابقتی امتحانات میں عمدگی کے لیے ڈیزائن کیے گئے جامع تعلیمی پروگرام',
    'courses.foundation': 'بنیادی کلاسیں',
    'courses.board': 'بورڈ فوکسڈ',
    'courses.career': 'کیریئر سٹریمز',
    'courses.jnv': 'JNV داخلہ',
    'courses.learn': 'مزید جانیں',
    'courses.viewall': 'تمام کورسز دیکھیں',
    
    // Achievements - Urdu
    'achievements.title': 'ہماری کامیابیاں',
    'achievements.subtitle': 'عمدگی کے سنگ میل اور طلباء کی کامیابی کی کہانیوں کا جشن جو ہمیں ہر دن متاثر کرتی ہیں',
    'achievements.excellence': 'عمدگی کے ایوارڈز',
    'achievements.jnvsuccess': 'JNV کامیابی کی شرح',
    'achievements.toppers': 'بورڈ ٹاپرز',
    'achievements.alumni': 'سابق طلباء نیٹ ورک',
    'achievements.ready': 'ہماری کامیابی کی کہانی کا حصہ بننے کے لیے تیار ہیں؟',
    'achievements.join': 'ہزاروں کامیاب طلباء میں شامل ہوں جنہوں نے گایتری فاؤنڈیشن کے ساتھ اپنے خواب پورے کیے ہیں۔ آج ہی تعلیمی عمدگی کا اپنا سفر شروع کریں۔',
    'achievements.enroll': 'ابھی داخلہ لیں',
    'achievements.stories': 'کامیابی کی کہانیاں دیکھیں',
    
    // Footer - Urdu
    'footer.support': '24/7 سپورٹ دستیاب',
  },
  mr: {
    // Navigation - Marathi
    'nav.home': 'होम',
    'nav.courses': 'अभ्यासक्रम',
    'nav.enquiry': 'चौकशी',
    'nav.about': 'आमच्याबद्दल',
    'nav.contact': 'संपर्क',
    'nav.news': 'बातम्या',
    'nav.chat': 'चॅट',
    'nav.enroll': 'आत्ता प्रवेश घ्या',
    'nav.excellence': 'शिक्षणातील उत्कृष्टता',
    
    // Hero Section - Marathi
    'hero.excellence': 'उत्कृष्टता',
    'hero.education': 'शिक्षण',
    'hero.subtitle': 'गायत्री फाउंडेशनमध्ये इयत्ता 6-12 च्या विद्यार्थ्यांना सर्वसमावेशक शैक्षणिक सहाय्य आणि विशेष JNV प्रवेश प्रशिक्षणासह सक्षम करणे.',
    'hero.start': 'तुमचा प्रवास सुरू करा',
    'hero.explore': 'अभ्यासक्रम पहा',
    'hero.courses': 'अभ्यासक्रम',
    'hero.students': 'विद्यार्थी',
    'hero.success': 'यशाचा दर',
    
    // Courses - Marathi
    'courses.title': 'आमचे अभ्यासक्रम',
    'courses.subtitle': 'शैक्षणिक आणि स्पर्धा परीक्षांमध्ये उत्कृष्टता मिळवण्यासाठी डिझाइन केलेले सर्वसमावेशक शैक्षणिक कार्यक्रम',
    'courses.foundation': 'पायाभूत वर्ग',
    'courses.board': 'मंडळ केंद्रित',
    'courses.career': 'करिअर प्रवाह',
    'courses.jnv': 'JNV प्रवेश',
    'courses.learn': 'अधिक जाणून घ्या',
    'courses.viewall': 'सर्व अभ्यासक्रम पहा',
    
    // Achievements - Marathi
    'achievements.title': 'आमची यशस्वी कामगिरी',
    'achievements.subtitle': 'उत्कृष्टतेच्या टप्प्यांचा आणि विद्यार्थ्यांच्या यशोगाथांचा उत्सव जे आम्हाला दररोज प्रेरणा देतात',
    'achievements.excellence': 'उत्कृष्टता पुरस्कार',
    'achievements.jnvsuccess': 'JNV यशाचा दर',
    'achievements.toppers': 'मंडळ टॉपर्स',
    'achievements.alumni': 'माजी विद्यार्थी नेटवर्क',
    'achievements.ready': 'आमच्या यशोगाथेचा भाग होण्यासाठी तयार आहात?',
    'achievements.join': 'हजारो यशस्वी विद्यार्थ्यांमध्ये सामील व्हा ज्यांनी गायत्री फाउंडेशनसह त्यांची स्वप्ने पूर्ण केली आहेत. आजच शैक्षणिक उत्कृष्टतेचा तुमचा प्रवास सुरू करा.',
    'achievements.enroll': 'आत्ता प्रवेश घ्या',
    'achievements.stories': 'यशोगाथा पहा',
    
    // Footer - Marathi
    'footer.support': '24/7 सहाय्य उपलब्ध',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};