---
title: GGxx
layout: base.njk
---

Thanks for reading — hope you’re excited to try Eleventy!

## The Pages

 The following are Pages of site

 {% for page in collections.pages %}
 - [{{ page.data.title }}]({{ page.url }})
 {% endfor %}

 ## The Cat Pic

 ![the cat]({{ catPic }})