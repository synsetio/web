"use client";

import React from 'react';
import Layout from "../components/Layout";

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 text-white">
        <h1 className="text-3xl font-bold mb-4 text-[#21CE99]">Cookie Policy</h1>
        <p className="mb-4">
          This Cookie Policy explains how Synsetic (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website at synsetic.com (&quot;Website&quot;). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>
        <h2 className="text-2xl font-bold mb-2 text-[#21CE99]">What are cookies?</h2>
        <p className="mb-4">
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>
        <h2 className="text-2xl font-bold mb-2 text-[#21CE99]">Why do we use cookies?</h2>
        <p className="mb-4">
          We use first party and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for advertising, analytics and other purposes.
        </p>
        <h2 className="text-2xl font-bold mb-2 text-[#21CE99]">How can I control cookies?</h2>
        <p className="mb-4">
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
        </p>
        <p>
          If you have any questions about our use of cookies or other technologies, please email us at privacy@synsetic.com.
        </p>
      </div>
    </Layout>
  );
};

export default CookiePolicy;
