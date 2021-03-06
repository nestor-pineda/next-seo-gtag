export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
// export const GA_TRACKING_ID = "G-3Z3C3C8BBY";

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// log the pageview with their URL
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// log specific events happening.
/* export const event = ({ action, params }) => {
  window.gtag("event", action, params);
}; */
