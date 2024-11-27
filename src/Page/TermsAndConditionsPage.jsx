import React from "react";
import PolicyComponent from "../components/PolicyComponent/PolicyComponent";
import { logo } from "../data";

function TermsAndConditionPage() {
  return (
    <>
      <section className="relative mx-auto max-w-3xl px-4 py-20">
        <div className="mb-16 text-center">
          <h1 className="mb-3 text-sm text-[#ae7aff]">Terms and conditions</h1>
          <h2 className="mb-4 text-4xl font-bold">
            We care about your privacy
          </h2>
          <h3 className="text-gray-300">
            By accessing our website, you are agreeing to be bound by these
            terms of service, and agree that you are responsible for compliance
            with any applicable local laws.
          </h3>
        </div>
        <PolicyComponent />
      </section>
    </>
  );
}

export default TermsAndConditionPage;
