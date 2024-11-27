import React from "react";
import PolicyComponent from "../components/PolicyComponent/PolicyComponent";

function PrivacyPage() {
  return (
    <section className="relative mx-auto max-w-3xl px-4 py-20">
      <div className="mb-16 text-center">
        <h1 className="mb-3 text-sm text-[#ae7aff]">Privacy Policy</h1>
        <h2 className="mb-4 text-4xl font-bold">We care about your privacy</h2>
        <h3 className="text-gray-300">
          Your privacy is important to us at videoTube. We repect your privacy
          regarding any information we may collect from you across out website.
        </h3>
      </div>
      <PolicyComponent />
    </section>
  );
}

export default PrivacyPage;
