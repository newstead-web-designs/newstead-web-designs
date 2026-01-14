// Contact Form GA4 Submit Script
console.log("contactFormGA4Submit.js loaded");

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop immediate form submit

    // Send GA4 event
    gtag('event', 'conversion_event_submit_lead_form', {
      'event_category': 'Contact Form',
      'event_label': 'Contact Page Submission',
      'send_to': 'G-087M3ZRWZ4'
    });

    // Log to console to confirm the event triggers
    console.log("GA4 Event triggered!");

    // TEMPORARILY COMMENT OUT the actual form submission for testing
    // setTimeout(() => {
    //   form.submit();
    // }, 300);
  });
}
