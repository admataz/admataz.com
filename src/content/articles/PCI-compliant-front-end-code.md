---
author: "Adam Davis"
date: 2017-05-02
description: ""
keywords: ""
title: "Understanding PCI Compliance for Front End development"
published: false
---

# Understanding PCI Compliance for Front End development


- PCI compliance is not a straightforward checklist. 
- There are different levels of PCI compliance:
	- **SAQ A**  - “*All elements of all payment pages delivered to the consumer’s browser originate only and directly from a PCI DSS validated third-party service provider(s*)”
	- **SAQ A-EP** - “*Each element of the payment page(s) delivered to the consumer’s browser originates from either the merchant’s website or a PCI DSS compliant service provider(s)*”
---

> This has implications for my proposed ideas of a silent post via an iFrame and JavaScript like Stripe.com. It means **we cannot host the relevant form input fields anywhere but from a SAQ A-EP compliant server**. I am assuming the High Level Design has the website server as SAQ A compliant and the PCI compliant server as SAQ A-EP? 

> I don’t know how the Stripe.com model works internally to get around this - but they claim it does. (see [What about PCI DSS 3.1? : Stripe: Help & Support](https://support.stripe.com/questions/what-about-pci-dss-3-1)) 


---------

> I think with the above approach we can improve on the `iframe-per-field` suggestion with something that is a better UX, more streamlined and easier to manage as code - and less prone to maintenance problems and potential error in the future. It is also possible, with the Same Origin Policy, and wise implementation of the javascript, we could maintain much of the UX as has been designed. (Subject to investigation)

-----------



### useful reading
- [How are Stripe merchants able to avoid PCI compliance requirements even though they capture the card details on their own checkout page? - Quora](https://www.quora.com/How-are-Stripe-merchants-able-to-avoid-PCI-compliance-requirements-even-though-they-capture-the-card-details-on-their-own-checkout-page)
- [PCI SCC: Ten common myths (pdf)](https://www.pcisecuritystandards.org/pdfs/pciscc_ten_common_myths.pdf)
- [cryptography - Using a Public-Key-Encryption browser side to avoid PCI compliance - Information Security Stack Exchange](http://security.stackexchange.com/questions/64432/using-a-public-key-encryption-browser-side-to-avoid-pci-compliance)
- [Why is SAQ A-EP used for Direct Post while SAQ A is used for iFrame or URL redirect?](https://pcissc.secure.force.com/faq/articles/Frequently_Asked_Question/Why-is-SAQ-A-EP-used-for-Direct-Post-while-SAQ-A-is-used-for-iFrame-or-URL-redirect/?l=en_US&fs=Search&pn=1)
- [Why is there a different approach for Direct Post implementations than for iFrame and URL redirect – what are the technical differences and how do they impact the security of e-commerce transactions?](https://pcissc.secure.force.com/faq/articles/Frequently_Asked_Question/Why-is-there-a-different-approach-for-Direct-Post-implementations-than-for-iFrame-and-URL-redirect-what-are-the-technical-differences-and-how-do-they-impact-the-security-of-e-commerce-transactions/?q=A-EP&l=en_US&fs=Search&pn=1)


[SAQ A And SAQ A-EP Clarification | PCI Guru](https://pciguru.wordpress.com/2015/01/07/saq-a-and-saq-a-ep-clarification/) - 
[SAQ A-EP | Spreedly Blog](https://blog.spreedly.com/tag/saq-a-ep/#.VzuJ1mMzBVo) - https://www.pcisecuritystandards.org/documents/Understanding_SAQs_PCI_DSS_v3.pdf

[What types of e-commerce implementations are eligible for SAQ A-EP vs. SAQ A? (PDF)](https://www.pcisecuritystandards.org/documents/Understanding_SAQs_PCI_DSS_v3.pdf) - 

[SAQ A vs. A-EP: What E-Commerce Merchants, Service Providers Need to Know Now | PCI Compliance Guide](https://www.pcicomplianceguide.org/saq-a-vs-a-ep-what-e-commerce-merchants-service-providers-need-to-know-now/) - 



### PostMessage Security
- [Window.postMessage() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#Security_concerns)
  - [HTML5 Security Cheat Sheet - OWASP](https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet#Web_Messaging)
  - [HTML5 Web Messaging](http://www.w3.org/TR/webmessaging/#authors)
  - [postMessage() security review checklist](https://gist.github.com/jedp/3005816)
  - [Web security | MDN](https://developer.mozilla.org/en-US/docs/Web/Security)