import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Interest Calculator": "Interest Calculator",
      "EMI Calculator": "EMI Calculator",
      "Principal": "Principal",
      "Rate": "Rate",
      "Time": "Time",
      "Calculate": "Calculate",
      "Reset": "Reset",
      "Result": "Result",
      "Dark Mode": "Dark Mode",
      "Light Mode": "Light Mode",
      "Language": "Language",
      "Frequency": "Frequency",
      "Simple": "Simple",
      "Compound": "Compound",
      "Monthly": "Monthly",
      "Quarterly": "Quarterly",
      "Yearly": "Yearly",
      "Daily": "Daily"
    }
  },
  hi: {
    translation: {
      "Interest Calculator": "ब्याज कैलकुलेटर",
      "EMI Calculator": "ईएमआई कैलकुलेटर",
      "Principal": "मूलधन",
      "Rate": "दर",
      "Time": "समय",
      "Calculate": "गणना करें",
      "Reset": "रीसेट",
      "Result": "परिणाम",
      "Dark Mode": "डार्क मोड",
      "Light Mode": "लाइट मोड",
      "Language": "भाषा",
      "Frequency": "आवृत्ति",
      "Simple": "सरल",
      "Compound": "चक्रवृद्धि",
      "Monthly": "मासिक",
      "Quarterly": "त्रैमासिक",
      "Yearly": "वार्षिक",
      "Daily": "दैनिक"
    }
  },
  te: {
    translation: {
      "Interest Calculator": "వడ్డీ లెక్కకట్టు",
      "EMI Calculator": "EMI లెక్కకట్టు",
      "Principal": "ప్రధాన",
      "Rate": "రేటు",
      "Time": "సమయం",
      "Calculate": "లెక్కించు",
      "Reset": "రిసెట్",
      "Result": "ఫలితం",
      "Dark Mode": "డార్క్ మోడ్",
      "Light Mode": "లైట్ మోడ్",
      "Language": "భాష",
      "Frequency": "తరచుదనం",
      "Simple": "సాధారణం",
      "Compound": "సంక్లిష్టం",
      "Monthly": "నెలవారీ",
      "Quarterly": "త్రైమాసికం",
      "Yearly": "వార్షికం",
      "Daily": "ప్రతి రోజు"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
