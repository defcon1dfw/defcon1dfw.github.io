---
---

window.addEventListener("load", function () {
    const boostrapMinJs = document.createElement("script");
    const cookieConsentJs = document.createElement("script");
    const fadein = document.createElement("script");
    const reviews = document.createElement("script");

    boostrapMinJs.src = "{{ site.urlPrefix }}assets/js/bootstrap/bootstrap.min.js";
    boostrapMinJs.crossorigin = "anonymous";
    boostrapMinJs.type = "text/javascript"

    cookieConsentJs.src = "{{ site.urlPrefix }}assets/js/cookie-consent.js";
    cookieConsentJs.type = "text/javascript"

    fadein.src = "{{ site.urlPrefix }}assets/js/scroll-events.js";
    fadein.type = "text/javascript"

    reviews.src = "{{ site.urlPrefix }}assets/js/google-reviews.js";
    reviews.type = "text/javascript"

    document.body.appendChild(boostrapMinJs);
    document.body.appendChild(cookieConsentJs);
    document.body.appendChild(fadein);
    document.body.appendChild(reviews);
});