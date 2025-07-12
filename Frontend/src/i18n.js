import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
  en: { translation: { principal: "Principal", rate: "Rate", start: "Start Date", end: "End Date", type: "Interest Type", simple: "Simple", compound: "Compound", calculate: "Calculate", result: "Interest" }},
  hi: { translation: { principal: "मूलधन", rate: "ब्याज दर", start: "शुरू तिथि", end: "समाप्ति तिथि", type: "ब्याज प्रकार", simple: "सरल", compound: "चक्रवृद्धि", calculate: "गणना करें", result: "ब्याज" }},
  te: { translation: { principal: "ప్రిన్సిపల్", rate: "వడ్డీ రేటు", start: "ప్రారంభ తేదీ", end: "ముగింపు తేదీ", type: "వడ్డీ రకం", simple: "సరళి", compound: "సంబంధిత", calculate: "లెక్కించండి", result: "వడ్డీ" }}
};
i18n.use(initReactI18next).init({ resources, lng: 'en', interpolation: { escapeValue: false } });
export default i18n;
