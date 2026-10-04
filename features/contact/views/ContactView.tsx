"use client";

import ContactHeader from "../components/ContactHeader";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

import { useContactViewModel } from "../hooks/useContactViewModel";
import { FeedbackNotification } from "@/components/ui/state/FeedbackNotification";

export default function ContactView() {
  const {
    form,
    contactInfo,
    handleSubmit,
    notification,
    dismissNotification,
  } = useContactViewModel();

  return (
    <div className="min-h-screen w-full bg-background pb-20 font-sans text-black antialiased">
      <ContactHeader />

      <main className="mx-auto max-w-6xl space-y-16 px-4 pt-12 sm:px-8">
        {notification && (
          <FeedbackNotification
            {...notification}
            onDismiss={dismissNotification}
          />
        )}

        <ContactInfo items={contactInfo} />

        <ContactForm
          form={form}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}