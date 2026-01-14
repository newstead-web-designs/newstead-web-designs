// Contact Form GA4 Submit Script
console.log("contactFormGA4Submit.js loaded");

const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop immediate form submit

    // Send GA4 event and wait for callback before submitting
    gtag('event', 'conversion_event_submit_lead_form', {
      'event_category': 'Contact Form',
      'event_label': 'Contact Page Submission',
      'send_to': 'G-087M3ZRWZ4',
      'event_callback': function() {
        console.log("GA4 Event confirmed, submitting form...");
        form.submit(); // now submit the form
      },
      'event_timeout': 2000 // fallback: submit after 2s if GA4 doesn’t respond
    });

    console.log("GA4 Event triggered, waiting for confirmation...");
  });
}
