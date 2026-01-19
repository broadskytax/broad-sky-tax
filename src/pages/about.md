---
layout: base.njk
title: About Us
permalink: /about/
---

<div class="max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold text-blue-600 mb-8">About Us</h1>
  
  <div class="text-xl text-gray-700 leading-relaxed space-y-6">
    {{ pages[1].content | safe }}
  </div>

  <div class="mt-12">
    <img src="{{ '/assets/images/about_image.svg' | url }}" alt="About Broad Sky Tax" class="rounded-lg shadow-xl w-full">
  </div>
</div>
