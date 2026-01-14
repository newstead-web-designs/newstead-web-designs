// contactFormGA4Submit.js
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

    // Wait 300ms then submit the form so GA4 has time to register the event
    setTimeout(() => {
      form.submit();
    }, 300);
  });
}
