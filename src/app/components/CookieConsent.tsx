import React from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import {
  setCookiePreference,
  setAnalyticsCookie,
} from "../utils/cookieManager";

const CookieConsentBanner: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="synsetio-cookie-consent"
      style={{
        background: "rgba(255, 255, 255, 0.95)",
        borderTop: "1px solid #f0f0f0",
        color: "#000",
        backdropFilter: "blur(10px)",
        boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.05)",
        alignItems: "center",
      }}
      buttonStyle={{
        background: "#000",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "9999px",
        padding: "8px 24px",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#666",
        fontSize: "14px",
        fontWeight: "500",
        border: "1px solid #e5e5e5",
        borderRadius: "9999px",
        padding: "8px 20px",
      }}
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
      <span className="text-sm font-medium">
        We use cookies to improve your experience. See our{" "}
        <Link
          href="/cookie-policy"
          className="text-black underline underline-offset-4 hover:text-neutral-600"
        >
          Cookie Policy
        </Link>
        .
      </span>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
