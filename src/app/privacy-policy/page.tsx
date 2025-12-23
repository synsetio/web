"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { content as privacyPolicy } from "../data/privacy-policy";
import LegalLayout from "../components/LegalLayout";

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <ReactMarkdown>{privacyPolicy.content}</ReactMarkdown>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
