import React, { useState } from 'react';
import './App.css';
import {
  FaSun, FaMoon, FaLanguage, FaCalculator, FaRupeeSign,
  FaPercentage, FaCalendarAlt, FaRegClock, FaSync, FaTrashAlt
} from 'react-icons/fa';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [calculatorType, setCalculatorType] = useState('interest');

  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [ratePeriod, setRatePeriod] = useState('per year');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [interestType, setInterestType] = useState('Simple Interest');
  const [result, setResult] = useState(null);

  const [loanAmount, setLoanAmount] = useState('');
  const [emiRate, setEmiRate] = useState('');
  const [tenureMonths, setTenureMonths] = useState('');
  const [emiResult, setEmiResult] = useState(null);

  const labels = {
    en: {
      interestCalculator: 'Interest Calculator',
      emiCalculator: 'EMI Calculator',
      selectCalculator: 'Select Calculator',
      principal: 'Principal Amount',
      rate: 'Interest Rate (%)',
      ratePeriod: 'Rate Period',
      startDate: 'Start Date',
      endDate: 'End Date',
      frequency: 'Interest Type',
      calculate: 'Calculate',
      clear: 'Clear',
      timePeriod: 'Time Period (years)',
      interestAmount: 'Interest Amount',
      finalAmount: 'Final Amount',
      loanAmount: 'Loan Amount',
      tenureMonths: 'Tenure (Months)',
      emiResult: 'Monthly EMI',
    },
    hi: {
      interestCalculator: 'ब्याज कैलकुलेटर',
      emiCalculator: 'ईएमआई कैलकुलेटर',
      selectCalculator: 'कैलकुलेटर चुनें',
      principal: 'मूलधन राशि',
      rate: 'ब्याज दर (%)',
      ratePeriod: 'ब्याज अवधि',
      startDate: 'प्रारंभ तिथि',
      endDate: 'समाप्ति तिथि',
      frequency: 'ब्याज प्रकार',
      calculate: 'गणना करें',
      clear: 'रीसेट',
      timePeriod: 'समय अवधि (वर्षों में)',
      interestAmount: 'ब्याज राशि',
      finalAmount: 'अंतिम राशि',
      loanAmount: 'ऋण राशि',
      tenureMonths: 'अवधि (महीने)',
      emiResult: 'मासिक ईएमआई',
    },
    te: {
      interestCalculator: 'వడ్డీ గణకం',
      emiCalculator: 'ఈఎంఐ గణకం',
      selectCalculator: 'క్యాల్కులేటర్ ఎంచుకోండి',
      principal: 'ప్రిన్సిపల్ మొత్తం',
      rate: 'వడ్డీ రేటు (%)',
      ratePeriod: 'రేట్ పీరియడ్',
      startDate: 'ప్రారంభ తేదీ',
      endDate: 'ముగింపు తేదీ',
      frequency: 'వడ్డీ రకం',
      calculate: 'లెక్కించండి',
      clear: 'రీసెట్',
      timePeriod: 'సమయం (సంవత్సరాలు)',
      interestAmount: 'వడ్డీ మొత్తం',
      finalAmount: 'చివరి మొత్తం',
      loanAmount: 'లోన్ మొత్తం',
      tenureMonths: 'కాలం (నెలలు)',
      emiResult: 'మాసపు ఈఎంఐ',
    }
  };

  const handleThemeToggle = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const calculateInterest = () => {
    if (!principal || !rate || !startDate || !endDate) {
      alert('Please fill all fields!');
      return;
    }

    const p = parseFloat(principal);
    let r = parseFloat(rate);
    const start = new Date(startDate);
    const end = new Date(endDate);
    const T = (end - start) / (1000 * 60 * 60 * 24 * 365);

    if (ratePeriod === 'per month') r *= 12;
    else if (ratePeriod === 'per day') r *= 365;

    let interestAmount = 0;
    let finalAmount = 0;

    if (interestType === 'Simple Interest') {
      interestAmount = (p * r * T) / 100;
      finalAmount = p + interestAmount;
    } else {
      finalAmount = p * Math.pow(1 + r / 100, T);
      interestAmount = finalAmount - p;
    }

    setResult({
      timePeriod: T.toFixed(2),
      interestAmount: interestAmount.toFixed(2),
      finalAmount: finalAmount.toFixed(2)
    });
  };

  const clearInterest = () => {
    setPrincipal('');
    setRate('');
    setRatePeriod('per year');
    setStartDate('');
    setEndDate('');
    setInterestType('Simple Interest');
    setResult(null);
  };

  const calculateEMI = () => {
    if (!loanAmount || !emiRate || !tenureMonths) {
      alert('Fill all fields!');
      return;
    }

    const P = parseFloat(loanAmount);
    const R = parseFloat(emiRate) / (12 * 100);
    const N = parseInt(tenureMonths);

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmiResult(emi.toFixed(2));
  };

  const clearEMI = () => {
    setLoanAmount('');
    setEmiRate('');
    setTenureMonths('');
    setEmiResult(null);
  };

  const L = labels[language];

  return (
    <div className={`app ${theme}`}>
      <div className="header">
        <h1><FaCalculator /> {L[calculatorType === 'interest' ? 'interestCalculator' : 'emiCalculator']}</h1>
        <div className="header-controls">
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">🌐 English</option>
            <option value="hi">🇮🇳 हिंदी</option>
            <option value="te">🇮🇳 తెలుగు</option>
          </select>
          <button onClick={handleThemeToggle}>
            {theme === 'light' ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>

      <div className="calculator-selector">
        <label><FaCalculator /> {L.selectCalculator}:</label>
        <select value={calculatorType} onChange={(e) => setCalculatorType(e.target.value)}>
          <option value="interest">{L.interestCalculator}</option>
          <option value="emi">{L.emiCalculator}</option>
        </select>
      </div>

      {calculatorType === 'interest' && (
        <>
          <div className="form-column">
            <label className="label-icon"><FaRupeeSign /> {L.principal}
              <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
            </label>
            <label className="label-icon"><FaPercentage /> {L.rate}
              <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
            </label>
            <label className="label-icon">{L.ratePeriod}
              <select value={ratePeriod} onChange={(e) => setRatePeriod(e.target.value)}>
                <option value="per year">per year</option>
                <option value="per month">per month</option>
                <option value="per day">per day</option>
              </select>
            </label>
            <label className="label-icon"><FaCalendarAlt /> {L.startDate}
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </label>
            <label className="label-icon"><FaCalendarAlt /> {L.endDate}
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </label>
            <label className="label-icon"><FaRegClock /> {L.frequency}
              <select value={interestType} onChange={(e) => setInterestType(e.target.value)}>
                <option value="Simple Interest">Simple Interest</option>
                <option value="Compound Interest">Compound Interest</option>
              </select>
            </label>
            <button onClick={calculateInterest}><FaSync /> {L.calculate}</button>
            <button onClick={clearInterest}><FaTrashAlt /> {L.clear}</button>
          </div>
          {result && (
            <div className="result">
              <div>{L.timePeriod}: {result.timePeriod}</div>
              <div>{L.interestAmount}: {result.interestAmount}</div>
              <div>{L.finalAmount}: {result.finalAmount}</div>
            </div>
          )}
        </>
      )}

      {calculatorType === 'emi' && (
        <>
          <div className="form-column">
            <label className="label-icon"><FaRupeeSign /> {L.loanAmount}
              <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
            </label>
            <label className="label-icon"><FaPercentage /> {L.rate}
              <input type="number" value={emiRate} onChange={(e) => setEmiRate(e.target.value)} />
            </label>
            <label className="label-icon"><FaRegClock /> {L.tenureMonths}
              <input type="number" value={tenureMonths} onChange={(e) => setTenureMonths(e.target.value)} />
            </label>
            <button onClick={calculateEMI}><FaSync /> {L.calculate}</button>
            <button onClick={clearEMI}><FaTrashAlt /> {L.clear}</button>
          </div>
          {emiResult && (
            <div className="result">
              <div>{L.emiResult}: {emiResult}</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
