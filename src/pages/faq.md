---
layout: base.njk
title: Frequently Asked Questions
permalink: /faq/
---

<div class="max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold text-blue-600 mb-8">Frequently Asked Questions</h1>
  
  <div class="text-lg text-gray-700 leading-relaxed prose max-w-none">
    {{ pages[3].content | safe }}
  </div>
</div>

<style>
  .prose ul { list-style-type: none; padding-left: 0; }
  .prose li { margin-bottom: 2rem; border-bottom: 1px solid #e5e7eb; padding-bottom: 2rem; }
  .prose li:last-child { border-bottom: none; }
  .prose strong { color: #2563eb; display: block; font-size: 1.25rem; margin-bottom: 0.5rem; }
  .prose ol { list-style-type: decimal; padding-left: 1.5rem; margin-top: 1rem; }
  .prose ol li { margin-bottom: 0.5rem; border-bottom: none; padding-bottom: 0; }
</style>