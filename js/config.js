/*
   Nevada Fashion - ملف الإعدادات السريعة
   ======================================
   
   هذا الملف يحتوي على جميع البيانات القابلة للتعديل
   في مكان واحد لسهولة الصيانة والتحديث
   
   استخدامه اختياري - يمكنك تعديل البيانات مباشرة في ملفات HTML
*/

// ===== معلومات الموقع =====
const SITE_CONFIG = {
  // اسم الموقع
  siteName: "Nevada Fashion",
  
  // الشعار
  logo: "✨",
  
  // وصف الموقع
  siteDescription: "موقع عرض الملابس النسائية النسائية",
  
  // رابط صفحة Instagram الرئيسية
  instagramUrl: "https://www.instagram.com/nevvada.store/",
  instagramHandle: "@nevvada.store",
  
  // السنة الحالية
  year: 2026
};

// ===== المنتجات =====
const PRODUCTS = [
  {
    id: 1,
    name: "بنطلون بيجامة شتوي",
    description: "بنطلون بيجامة شتوي مصنوع من قماش الفرو (المخمل) الناعم جداً والدافئ. يتميز بخصر مطاطي مريح وقصة واسعة، ومزين بطباعة كبيرة لوجوه \"هالو كيتي\" وعبارة \"HELLO KITTY\" باللغة الإنجليزية.",
    image: "images/pink.jpeg",
    videoUrl: "https://www.instagram.com/nevvada.store/p/DUT-X0XDfwq/",
    buyUrl: "https://www.instagram.com/nevvada.store/"
  },
  {
    id: 2,
    name: "بنطلون بيجامة شتوي",
    description: "بنطلون بيجامة شتوي مصنوع من قماش الفرو (المخمل) الناعم جداً والدافئ. يتميز بخصر مطاطي مريح وقصة واسعة، ومزين بطباعة كبيرة لوجوه \"هالو كيتي\" وعبارة \"HELLO KITTY\" باللغة الإنجليزية.",
    image: "images/gree.jpeg",
    videoUrl: "https://www.instagram.com/nevvada.store/p/DUT-X0XDfwq/",
    buyUrl: "https://www.instagram.com/nevvada.store/"
  },
  {
    id: 3,
    name: "بنطلون بيجامة شتوي",
    description: "بنطلون بيجامة شتوي مصنوع من قماش الفرو (المخمل) الناعم جداً والدافئ. يتميز بخصر مطاطي مريح وقصة واسعة، ومزين بطباعة كبيرة لوجوه \"هالو كيتي\" وعبارة \"HELLO KITTY\" باللغة الإنجليزية.",
    image: "images/red.jpeg",
    videoUrl: "https://www.instagram.com/nevvada.store/p/DUT-X0XDfwq/",
    buyUrl: "https://www.instagram.com/nevvada.store/"
  },
  {
    id: 4,
    name: "تيشيرت بتصميم رياضي",
    description: "تيشيرت بتصميم رياضي (جيرسي) بياقة على شكل حرف V. يتميز بخطوط طولية عريضة باللونين الأبيض والوردي. التفاصيل: يحمل اسم \"HELLO KITTY\" بخط عريض في المنتصف، مع شعار وجه القطة على الجهة اليسرى وشعار يشبه شعارات الأندية الرياضية على الجهة اليمنى. تصميمه عصري ويجمع بين الطابع الرياضي واللطافة",
    image: "images/tchirt.jpeg",
    videoUrl: "https://www.instagram.com/nevvada.store/p/DQGAD7AiAVt/",
    buyUrl: "https://www.instagram.com/nevvada.store/"
  },
  {
    id: 5,
    name: "بنطلون مريح للاسترخاء",
    description: "بنطلون مريح للاسترخاء (Lounge pants)، يبدو قماشه أخف قليلاً من السراويل الشتوية (ربما قطن أو بوليستر ناعم). التصميم: يتميز بخلفية بيضاء ومغطى بالكامل بنقشة متكررة ومزدحمة لوجوه هالو كيتي بفيونكات وردية، مما يعطيه مظهراً مرحاً وحيوياً",
    image: "images/srwal.jpeg",
    videoUrl: "https://www.instagram.com/nevvada.store/reel/DTQtbTvDdnj/",
    buyUrl: "https://www.instagram.com/nevvada.store/"
  },
  {
    id: 6,
    name: "سلسلة فضية",
    description: "فستان جينز عصري مع قصة مريحة وأنيقة",
    image: "images/t1.jpeg",
    videoUrl: "https://www.instagram.com/nevvada.store/",
    buyUrl: "https://www.instagram.com/nevvada.store/"
  }
];

// ===== صفحات الموقع =====
const PAGES = {
  home: "index.html",
  products: "products.html",
  about: "about.html",
  contact: "contact.html"
};

// ===== الألوان =====
const COLORS = {
  light: {
    bgPrimary: "#faf8f6",
    bgSecondary: "#ffffff",
    textPrimary: "#2c2c2c",
    textSecondary: "#666666",
    accentColor: "#d4a5a5",
    accentHover: "#c08e8e",
    borderColor: "#e8e1dd"
  },
  dark: {
    bgPrimary: "#1a1a1a",
    bgSecondary: "#2d2d2d",
    textPrimary: "#f0f0f0",
    textSecondary: "#b0b0b0",
    accentColor: "#d4a5a5",
    accentHover: "#e8b8b8",
    borderColor: "#3d3d3d"
  }
};

// ===== النصوص الثابتة =====
const TEXTS = {
  hero: {
    title: "مرحباً بكِ في Nevada Fashion",
    subtitle: "أحدث تصاميم الملابس النسائية براقة وأنيقة",
    button: "استكشفي المنتجات"
  },
  
  products: {
    title: "المنتجات",
    subtitle: "اكتشفي مجموعتنا الحصرية"
  },
  
  about: {
    title: "من نحن",
    subtitle: "تعرفي على قصة Nevada Fashion",
    content: "نحن Nevada Fashion، متخصصون في تقديم أحدث تصاميم الملابس النسائية بجودة عالية وتصاميم أنيقة وراقية."
  },
  
  contact: {
    title: "التواصل معنا",
    subtitle: "نحن هنا لخدمتك والإجابة على جميع استفساراتك",
    instagramMessage: "جميع عمليات الشراء والاستفسارات تتم عبر صفحة Instagram الخاصة بنا"
  },
  
  footer: {
    copyright: "© 2026 Nevada Fashion. جميع الحقوق محفوظة.",
    followUs: "تابعينا على Instagram"
  }
};

/*
   كيفية الاستخدام:
   
   1. غيري قيمة أي متغير أعلاه
   2. احفظي الملف
   3. أعد تحميل الصفحة
   
   أمثلة:
   - لتغيير اسم الموقع: SITE_CONFIG.siteName = "اسم جديد"
   - لتغيير لون التمييز: COLORS.light.accentColor = "#e91e63"
   - لتغيير نص البطل: TEXTS.hero.title = "مرحباً بك"
   
   ملاحظة: هذا الملف حالياً للمرجعية فقط
   لاستخدامه بفعالية، تحتاجين لربطه مع ملف JavaScript رئيسي
   أو استخدام القيم مباشرة في HTML
*/
