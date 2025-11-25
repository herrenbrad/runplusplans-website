# Marketing Site Improvement Plan

**Date:** January 2025  
**Purpose:** Comprehensive review and improvement recommendations for runplusplans.com

---

## 🎯 Executive Summary

The current marketing site is solid but **missing several key differentiators** that make Run+ Plans unique. Based on the app's features and competitive analysis, here are prioritized improvements to better communicate value and convert visitors.

**Key Finding:** The site focuses heavily on cross-training equipment but underplays:
- Injured runner support (major differentiator)
- AI coaching (huge competitive advantage)
- "Something Else" flexibility (vs. Runna's rigidity)
- Safety-first progressive pace system
- Competitive positioning vs. Runna

---

## 📊 Current State Analysis

### ✅ What's Working Well

1. **Clear value proposition** - "Train Anywhere, Plan Anywhere"
2. **Problem/solution format** - Good structure
3. **RunEQ feature highlight** - Unique technology
4. **Mobile-responsive design** - Clean, modern
5. **Beta signup form** - Clear CTA
6. **Cross-training focus** - Appeals to target audience

### ❌ What's Missing

1. **Injured Runner Support** - Not mentioned (major differentiator!)
2. **AI Coaching** - Not highlighted as key feature
3. **"Something Else" Flexibility** - Not mentioned (huge vs. Runna)
4. **Progressive Pace System** - Safety-first approach not communicated
5. **Competitive Positioning** - "Anti-Runna" angle not leveraged
6. **Strava Integration** - Mentioned but could be more prominent
7. **Upcoming Features** - Race course analysis, dynamic race calendar not teased
8. **Testimonials** - Section exists but empty
9. **Social Proof** - No user count, beta tester count, etc.

---

## 🚀 Priority 1: Critical Content Additions

### 1. Add "Injured Runner Support" Section

**Why:** This is a **major differentiator** that Runna doesn't have. Many runners deal with injuries.

**Location:** Add new section between "Features" and "RunEQ" (or integrate into Features)

**Content:**
```html
<section id="injury-support" class="injury-section">
    <div class="container">
        <h2>Training Through Injury? We've Got You Covered</h2>
        <p class="section-intro">Unlike other apps, Run+ Plans includes specialized support for injured runners with sports physiologist AI guidance.</p>
        
        <div class="injury-features">
            <div class="injury-feature">
                <span class="icon">🏥</span>
                <h3>Sports Physiologist AI</h3>
                <p>Get biomechanical analysis and evidence-based recovery protocols tailored to your specific injury.</p>
            </div>
            <div class="injury-feature">
                <span class="icon">⚠️</span>
                <h3>Equipment Safety Analysis</h3>
                <p>AI warns you if certain equipment could aggravate your injury - before you start training.</p>
            </div>
            <div class="injury-feature">
                <span class="icon">🔄</span>
                <h3>Smart Equipment Rotation</h3>
                <p>Automatically rotates through all your available cross-training equipment to prevent overuse.</p>
            </div>
            <div class="injury-feature">
                <span class="icon">📈</span>
                <h3>Return-to-Running Protocol</h3>
                <p>Evidence-based progression from cross-training back to running when you're ready.</p>
            </div>
        </div>
        
        <p class="injury-note"><strong>Medical Disclaimer:</strong> Run+ Plans provides training guidance, not medical advice. Always consult with a healthcare provider for injury diagnosis and treatment.</p>
    </div>
</section>
```

### 2. Add "AI Coaching" Feature Highlight

**Why:** This is a huge competitive advantage - personalized, honest, data-driven coaching.

**Location:** Add to Features section or create dedicated section

**Content:**
```html
<div class="feature-card">
    <span class="feature-icon">🤖</span>
    <h3>AI Coaching That Actually Helps</h3>
    <p>Get honest, personalized coaching analysis from day one. Our AI coach (inspired by Jason Fitzgerald) gives you real talk about your goals, specific paces, and checkpoints - not generic advice.</p>
</div>
```

### 3. Add "Something Else" Flexibility Feature

**Why:** This directly addresses Runna's rigidity complaint. It's a unique feature.

**Location:** Add to Features section

**Content:**
```html
<div class="feature-card">
    <span class="feature-icon">🔄</span>
    <h3>"Something Else" Flexibility</h3>
    <p>Scheduled hill run but it's pouring? Out of town? Can't do that workout today? Every workout has a "Something Else" button with intelligent alternatives that keep you on track.</p>
</div>
```

### 4. Add "Safety-First" Messaging

**Why:** Progressive pace system prevents injuries - major differentiator vs. Runna.

**Location:** Add to Hero or Features section

**Content:**
```html
<div class="feature-card">
    <span class="feature-icon">🛡️</span>
    <h3>Safe Progression, Not Injury Risk</h3>
    <p>Unlike other apps that start you at goal pace from Week 1, Run+ Plans starts at your current fitness level and gradually progresses. Prevents overtraining injuries.</p>
</div>
```

---

## 🎯 Priority 2: Competitive Positioning

### 5. Add "Why Run+ Plans vs. Runna" Section (Optional but Powerful)

**Why:** Directly address the "Anti-Runna" positioning. Some visitors will be comparing.

**Location:** Add before Beta Signup section

**Content:**
```html
<section id="vs-competitors" class="comparison-section">
    <div class="container">
        <h2>Built by Listening to What Runners Actually Complain About</h2>
        <p class="section-intro">We analyzed every major complaint about existing training apps and built solutions.</p>
        
        <div class="comparison-grid">
            <div class="comparison-item">
                <h3>❌ Other Apps</h3>
                <ul>
                    <li>Static plans that don't adapt</li>
                    <li>Goal paces from Week 1 (injury risk)</li>
                    <li>Rigid workouts, no flexibility</li>
                    <li>Generic cross-training advice</li>
                    <li>No injury recovery support</li>
                </ul>
            </div>
            <div class="comparison-item">
                <h3>✅ Run+ Plans</h3>
                <ul>
                    <li>Plans adapt to your life</li>
                    <li>Starts safe, progresses gradually</li>
                    <li>"Something Else" flexibility</li>
                    <li>50+ structured cross-training workouts</li>
                    <li>Sports physiologist AI for injuries</li>
                </ul>
            </div>
        </div>
    </div>
</section>
```

**Note:** This is optional - some prefer not to name competitors. But it's powerful if done tastefully.

---

## 🚀 Priority 3: Enhanced Features Section

### 6. Update Features Grid

**Current features are good but missing key differentiators. Add:**

1. **AI Coaching** (as mentioned above)
2. **"Something Else" Flexibility** (as mentioned above)
3. **Safety-First Progression** (as mentioned above)
4. **Injured Runner Support** (as mentioned above)
5. **Strava Integration** - Make more prominent:
   ```html
   <div class="feature-card">
       <span class="feature-icon">🔗</span>
       <h3>Strava Integration</h3>
       <p>Syncs with any device that connects to Strava. No proprietary sync issues - just works.</p>
   </div>
   ```

### 7. Add "Coming Soon" Section for Upcoming Features

**Why:** Build excitement and show roadmap.

**Location:** After RunEQ section, before Beta Signup

**Content:**
```html
<section id="coming-soon" class="coming-soon-section">
    <div class="container">
        <h2>Coming Soon</h2>
        <p class="section-intro">We're constantly adding features based on what runners actually need.</p>
        
        <div class="coming-features">
            <div class="coming-feature">
                <span class="icon">🗺️</span>
                <h3>Train for YOUR Race</h3>
                <p>Upload your race course (TCX/GPX) and get course-specific training. Know the elevation profile, key segments, and pacing strategy for your actual race.</p>
            </div>
            <div class="coming-feature">
                <span class="icon">📅</span>
                <h3>Dynamic Race Calendar</h3>
                <p>Planning multiple B-races leading to your A-race? We'll intelligently integrate them into your plan without breaking progression.</p>
            </div>
        </div>
    </div>
</section>
```

---

## 🎨 Priority 4: Hero Section Improvements

### 8. Enhance Hero Headline

**Current:** "Train Anywhere, Plan Anywhere"

**Options to test:**
- "Training Plans That Adapt to Your Life"
- "The Training App Built for Real Runners"
- "Finally, Flexible Training Plans That Actually Work"
- "Training Plans That Don't Break When Life Happens"

**Recommendation:** Keep current but add subheadline that emphasizes flexibility:
```html
<h2 class="headline">Train Anywhere, Plan Anywhere</h2>
<p class="subheadline">Training plans that adapt to your life - not the other way around. Scheduled hill run but it's pouring? Swap it. Injured? We've got you covered. Cross-training with stand-up bikes? We speak your language. <strong class="brand-plus">Plus</strong> AI coaching that actually helps.</p>
```

### 9. Add Social Proof to Hero

**If you have beta tester count:**
```html
<p class="beta-count">Join 10+ beta testers already training with Run+ Plans</p>
```

---

## 📝 Priority 5: Content Refinements

### 10. Update Problem Section

**Add injury-related problem:**
```html
<div class="problem-item">
    <span class="icon">❌</span>
    <p>Injured? Apps have no idea how to help you recover</p>
</div>
```

### 11. Update Solution Section Intro

**Current:** "Purpose-built for equipment owners."

**Better:** "Purpose-built for real runners who need flexibility, safety, and support - especially when things don't go as planned."

### 12. Add Testimonials (Even Placeholders)

**Why:** Social proof increases conversions.

**Location:** After Features, before RunEQ

**Content:**
```html
<section id="testimonials" class="testimonials-section">
    <div class="container">
        <h2>What Beta Testers Are Saying</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="quote">"Finally, a training plan that understands cross-training isn't just 'do some biking.'"</div>
                <div class="attribution">— Beta Tester, ElliptiGO Owner</div>
            </div>
            <div class="testimonial-card">
                <div class="quote">"The 'Something Else' feature saved me when I was traveling. Other apps would have just marked me as 'missed workout.'"</div>
                <div class="attribution">— Beta Tester, Marathon Runner</div>
            </div>
            <div class="testimonial-card">
                <div class="quote">"The injured runner support is incredible. Finally, an app that helps you recover, not just tells you to rest."</div>
                <div class="attribution">— Beta Tester, Recovering Runner</div>
            </div>
        </div>
    </div>
</section>
```

**Note:** Replace with real testimonials when available.

---

## 🔧 Priority 6: Technical Improvements

### 13. SEO Enhancements

**Update meta description:**
```html
<meta name="description" content="Training plans that adapt to your life. AI coaching, injured runner support, cross-training for ElliptiGO/Cyclete, and flexible workouts. The training app built for real runners.">
```

**Add structured data (JSON-LD) for better search results:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Run+ Plans",
  "applicationCategory": "HealthApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "10"
  }
}
</script>
```

### 14. Form Integration

**Current:** Formspree placeholder

**Action:** Set up Formspree and update `script.js` line 86 with actual form ID.

**Alternative:** Use EmailJS (free tier) or Netlify Forms if deploying to Netlify.

### 15. Add Analytics

**Google Analytics 4:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Track key events:**
- Form submissions
- CTA button clicks
- Section scroll depth

### 16. Add Favicon

**Create:** `favicon.ico` in root directory  
**Add to HTML:**
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

---

## 🎯 Priority 7: Conversion Optimization

### 17. Multiple CTAs Throughout Page

**Current:** CTAs only in Hero and Beta section

**Add CTAs:**
- After Features section: "Ready to get started?"
- After RunEQ section: "Get RunEQ as a Beta Tester"
- After Testimonials: "Join the Beta"

### 18. A/B Test Headlines

**Test variations:**
- "Training Plans That Adapt to Your Life"
- "Finally, Flexible Training Plans"
- "The Training App Built for Real Runners"

### 19. Add Urgency/Scarcity (If Appropriate)

**If beta spots are limited:**
```html
<p class="beta-urgency">Limited beta spots available. Join now to secure your free first year.</p>
```

### 20. Improve Form UX

**Add:**
- Progress indicator (if multi-step)
- Clearer field labels
- Inline validation feedback
- Success animation

---

## 📱 Priority 8: Mobile Optimizations

### 21. Test Mobile Experience

**Check:**
- Form usability on mobile
- Button sizes (should be 44x44px minimum)
- Text readability
- Image loading speed
- Navigation menu functionality

### 22. Add Mobile-Specific CTAs

**Consider:** Sticky CTA button on mobile that follows scroll.

---

## 🚀 Implementation Priority

### Phase 1: Critical (Do First)
1. ✅ Add Injured Runner Support section
2. ✅ Add AI Coaching feature highlight
3. ✅ Add "Something Else" flexibility feature
4. ✅ Add Safety-First messaging
5. ✅ Update Features grid with missing features
6. ✅ Set up Formspree integration

### Phase 2: Important (Do Next)
7. ✅ Add Coming Soon section
8. ✅ Add Testimonials section (even placeholders)
9. ✅ Enhance Hero section
10. ✅ Add SEO improvements
11. ✅ Add Analytics

### Phase 3: Nice to Have (Do Later)
12. ⚠️ Add Competitive Comparison section (optional)
13. ⚠️ A/B test headlines
14. ⚠️ Add structured data
15. ⚠️ Mobile-specific optimizations

---

## 📋 Quick Wins (Easy, High Impact)

1. **Update Hero subheadline** - Add flexibility/injury messaging (5 min)
2. **Add AI Coaching to Features** - One feature card (5 min)
3. **Add "Something Else" to Features** - One feature card (5 min)
4. **Add Safety-First to Features** - One feature card (5 min)
5. **Update meta description** - Better SEO (2 min)
6. **Set up Formspree** - Connect form (10 min)

**Total time: ~30 minutes for significant improvements**

---

## 🎨 Design Considerations

### New Sections Need CSS

**Add to `styles.css`:**
- `.injury-section` - Similar to `.solution-section`
- `.injury-features` - Grid layout like `.features-grid`
- `.comparison-section` - Two-column comparison
- `.coming-soon-section` - Similar to `.runeq-section`

**Recommendation:** Reuse existing styles where possible for consistency.

---

## 📊 Success Metrics

**Track these after improvements:**
- Conversion rate (visitors → beta signups)
- Time on page
- Scroll depth (how far users scroll)
- Bounce rate
- Form completion rate

**Targets:**
- Conversion rate: 10-20% (industry standard: 2-5%)
- Time on page: >2 minutes
- Bounce rate: <50%

---

## 🎯 Next Steps

1. **Review this document** - Prioritize what matters most
2. **Implement Phase 1** - Critical content additions
3. **Test locally** - Make sure everything looks good
4. **Deploy to GitHub Pages** - Push updates
5. **Monitor analytics** - Track improvements

---

## 💡 Key Insight

The marketing site is **good but incomplete**. It focuses on cross-training (which is great) but misses several major differentiators that make Run+ Plans unique:

1. **Injured runner support** - This is huge and not mentioned
2. **AI coaching** - Major competitive advantage
3. **Flexibility** - "Something Else" feature directly addresses Runna complaints
4. **Safety-first** - Progressive pace system prevents injuries

**Adding these will significantly improve the value proposition and conversion rate.**

---

**Questions?** brad@runplusplans.com

**Last Updated:** January 2025

