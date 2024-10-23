import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';
import { setCookiePreference, setAnalyticsCookie } from '../utils/cookieManager';

const CookieConsentBanner: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="synsetio-cookie-consent"
      style={{ background: "#0A2463" }}
      buttonStyle={{ background: "#21CE99", color: "#fff", fontSize: "13px" }}
      declineButtonStyle={{ background: "#718096", color: "#fff", fontSize: "13px" }}
      expires={150}
      onAccept={() => {
        setCookiePreference(true);
        setAnalyticsCookie(true);
      }}
      onDecline={() => {
        setCookiePreference(false);
        setAnalyticsCookie(false);
      }}
    >
      This website uses cookies to enhance the user experience. See our{" "}
      <Link href="/cookie-policy" className="text-[#21CE99] hover:underline">
        Cookie Policy
      </Link>{" "}
      for more details.
    </CookieConsent>
  );
};

export default CookieConsentBanner;