"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { content as cookiePolicy } from "../data/cookie-policy";
import LegalLayout from "../components/LegalLayout";

const CookiePolicy = () => {
  return (
    <LegalLayout title="Cookie Policy">
      <ReactMarkdown>{cookiePolicy.content}</ReactMarkdown>
    </LegalLayout>
  );
};

export default CookiePolicy;
