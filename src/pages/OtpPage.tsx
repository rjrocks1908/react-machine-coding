import { useRef, useState } from "react";
import Box from "../components/otp/box";
import "../styles/otp.css";

function OtpPage() {
  const [_, setOtp] = useState(Array.from({ length: 6 }));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  return (
    <div className="container">
      {Array.from({ length: 6 }, (_, i) => (
        <Box key={i} id={i} setOtp={setOtp} inputRefs={inputRefs} />
      ))}
    </div>
  );
}
export default OtpPage;
