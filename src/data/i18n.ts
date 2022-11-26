import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      welcome: {
        stageOne: {
          1: "welcome to the first meat delivery resturant in isael",
          2: "adjusted just for you",
        },
        stageTwo: {
          1: "You won't have to get out of the house or wait on the line to order your meat",
          2: "just a few clicks and the order is on the way",
        },
        stageThree: {
          1: "You can easily order your meat and get notified on new discounts",
          2: "order now 24/7",
        },
      },
    },
  },
  he: {
    translation: {
      welcome: {
        stageOne: {
          1: "ברוכים הבאים לאפליקציית הזמנות הבשר ה-1 בישראל",
          2: "המותאמת במיוחד עבורך",
        },
        stageTwo: {
          1: "לא תצטרכו לצאת מהבית או להמתין על הקו כדי להזמין בשר מהקצבייה שלכם",
          2: "כמה קליקים וההזמנה בדרך",
        },
        stageThree: {
          1: "תוכלו לבצע הזמנות בקלות, להיות מעודכנים במבצעים שווים",
          2: "בצע הזמנות 24/7",
        },
      },
      search: "מה אנחנו מזמינים היום?",
      homeText: "שר הבשר",
      share: "שתף",
      sales: "מבצעים",
      meat: "בשרים",
      chicken: "עופות",
      fish: "דגים",
      frozenMeat: "בשר קפוא",
      indian: "הודו",
      cost: "עלות משלוח",
      minimumOrder: "מינימום הזמנה",
      payNow: "מעבר לקופה",
      hole: "שלם",
      cut: "פרוסות",
      addToShoppingCart: "הוסף לסל",
      gram: "גרם",
      pricePerKG: '₪ לק"ג',
      
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "he",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
