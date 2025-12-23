"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { content as termsOfService } from "../../data/terms-of-service";
import LegalLayout from "../../components/LegalLayout";

const TermsOfService = () => {
  return (
    <LegalLayout title="Terms of Service">
      <ReactMarkdown>{termsOfService.content}</ReactMarkdown>
    </LegalLayout>
  );
};

export default TermsOfService;
