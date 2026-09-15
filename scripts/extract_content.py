#!/usr/bin/env python3
"""Extract clean content (text, images, structure) from the saved UpStep landing page HTML."""
import re
import json
from html.parser import HTMLParser

with open('/home/z/my-project/scripts/upstep_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove scripts and styles
clean = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
clean = re.sub(r'<style[^>]*>.*?</style>', '', clean, flags=re.DOTALL)
clean = re.sub(r'<!--.*?-->', '', clean, flags=re.DOTALL)

# Extract all image URLs
img_urls = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', clean)
img_urls = [u for u in img_urls if u and not u.startswith('data:')]
print("=== IMAGES ===")
for u in img_urls:
    print(u)

# Extract background images from inline styles
bg_imgs = re.findall(r'background-image[^:]*:\s*url\(["\']?([^"\')\s]+)', clean)
print("\n=== BACKGROUND IMAGES ===")
for u in bg_imgs:
    print(u)

# Extract all heading texts
print("\n=== HEADINGS ===")
for tag in ['h1', 'h2', 'h3', 'h4']:
    matches = re.findall(rf'<{tag}[^>]*>(.*?)</{tag}>', clean, flags=re.DOTALL | re.IGNORECASE)
    for m in matches:
        text = re.sub(r'<[^>]+>', '', m).strip()
        text = re.sub(r'\s+', ' ', text)
        if text:
            print(f"[{tag}] {text}")

# Extract paragraph texts
print("\n=== PARAGRAPHS (first 60) ===")
paras = re.findall(r'<p[^>]*>(.*?)</p>', clean, flags=re.DOTALL | re.IGNORECASE)
count = 0
for p in paras:
    text = re.sub(r'<[^>]+>', '', p).strip()
    text = re.sub(r'\s+', ' ', text)
    if text and len(text) > 2:
        print(f"- {text}")
        count += 1
        if count >= 60:
            break

# Extract button texts (Elementor button widgets)
print("\n=== BUTTONS ===")
btn_matches = re.findall(r'<a[^>]*class="[^"]*elementor-button[^"]*"[^>]*>(.*?)</a>', clean, flags=re.DOTALL)
for b in btn_matches:
    text = re.sub(r'<[^>]+>', '', b).strip()
    text = re.sub(r'\s+', ' ', text)
    if text:
        print(f"- {text}")

# Extract links
print("\n=== IMPORTANT LINKS ===")
links = re.findall(r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', clean, flags=re.DOTALL)
seen = set()
for href, text in links:
    text_clean = re.sub(r'<[^>]+>', '', text).strip()
    text_clean = re.sub(r'\s+', ' ', text_clean)
    if href and not href.startswith('#') and text_clean and href not in seen:
        if 'upstepacademy' in href or href.startswith('/'):
            print(f"{href}  ->  {text_clean[:60]}")
            seen.add(href)
