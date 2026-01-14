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
    console.log("%cGA4 Event triggered!", "color: green; font-weight: bold; font-size: 14px;");

    // Show an alert to confirm the log appears (optional, for testing)
    // alert("GA4 Event triggered!");

    // Wait 1 second before submitting form so you have time to see the log
    setTimeout(() => {
      form.submit();
    }, 1000); // 1000ms = 1 second
  });
}
