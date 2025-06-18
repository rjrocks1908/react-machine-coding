import { useEffect, useRef, useState } from "react";

const CURRENCY_OPTIONS = ["USD", "EUR", "GBP", "CNY"];
const CRYPTO_API = "https://api.frontendeval.com/fake/crypto";

function Crypto() {
  const [currency, setCurrency] = useState(CURRENCY_OPTIONS[0]);
  const [amount, setAmount] = useState(0.0);
  const [conversionRate, setConversionRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [preConvertedAmount, setPreConvertedAmount] = useState(0);

  const fetchIntervalRef = useRef<null | number>(null);

  const priceChange = convertedAmount - preConvertedAmount;

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch(`${CRYPTO_API}/${currency}`);
        const { value } = await response.json();
        setConversionRate(value);
      } catch (error) {
        alert(`Error fetching rate: ${error}`);
      }
    };

    if (fetchIntervalRef.current) {
      clearInterval(fetchIntervalRef.current);
    }

    fetchRate();
    fetchIntervalRef.current = setInterval(fetchRate, 5000);

    return () => {
      if (fetchIntervalRef.current) clearInterval(fetchIntervalRef.current);
    };
  }, [currency]);

  useEffect(() => {
    setPreConvertedAmount(convertedAmount);
    setConvertedAmount(amount * conversionRate);
  }, [conversionRate]);

  return (
    <div className="flex flex-col gap-10">
      {/* Amount and Currency */}
      <div className="flex">
        <p>Amount to Convert: </p>
        <input
          type="number"
          className="px-2 bg-gray-600 border border-black"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <p>Currency</p>
        <select
          name="currency"
          id="currency"
          onChange={(e) => setCurrency(e.target.value)}
        >
          {CURRENCY_OPTIONS.map((option) => (
            <option key={option} value={option} className="text-black">
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Crypto Value */}
      <div>
        WUC Crypto Equivalent: <span>{convertedAmount.toFixed(2)}</span>
      </div>

      {/* Change */}
      <div style={{ color: priceChange > 0 ? "green" : "red" }}>
        Change: {priceChange > 0 ? "⬆️" : "🔻"} {priceChange.toFixed(2)}
      </div>
    </div>
  );
}
export default Crypto;
