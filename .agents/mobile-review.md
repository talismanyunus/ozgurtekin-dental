# Mobile Responsiveness Review

> Breakpoints: `sm:` = max-width 767px (mobile), `md:` = 768-991px (tablet), `lg:` = 992px+ (desktop)

---

## ISSUES

### HIGH PRIORITY

#### Navbar.jsx — Top info bar stacks poorly on mobile
- The first navbar uses `lg:flex-row` and `md:grid md:grid-cols-2` but has no `sm:` layout override for the contact info block. On small screens the phone, email, and hours paragraph sit in a plain div with no explicit column/row guidance, likely overflowing or colliding with the social icons row.
- The desktop "Book Appointment" CTA button uses `w-[14%]` — a fixed percentage of the full viewport. On mobile it is hidden (`sm:hidden`) which is correct, but the mobile menu drawer has no `pb-10` or safe-area bottom padding, so the last menu item may be clipped on phones with a home bar.

#### ServiceTypes.jsx — Swiper container breaks on mobile
- Line ~55: `<div className='flex flex-row justify-center sm:w-screen lg:w-2/3 my-10'>` — `sm:w-screen` forces the swiper wrapper to be exactly 100vw. Because this div is a child of a padded parent (`sm:px-5`), the 100vw width causes a **horizontal overflow / scroll** on every mobile device.
- Swiper images inside each slide use only `className='h-40'` with no `w-full object-cover`, so they will render at their natural width and either overflow or leave gaps.

#### Home.jsx — Carousel slide height may clip content on very small screens
- Slides are `sm:h-[415px]`. On screens narrower than ~375px the overlay text (title + description + button) can overflow the fixed height. The description paragraph has no `line-clamp` or `sm:text-sm` fallback.
- The About Us section image stack uses `absolute`/`relative` positioning with hardcoded negative offsets (`sm:-top-20`). On narrow phones (<375px) the absolutely-positioned `About2` image can overlap the text block below.

#### Contact.jsx — Map section lacks mobile width constraint
- The `<div>` wrapping `<Maps/>` has no `w-full` or `sm:w-full` class. When the flex container switches to column (`sm:flex-col`) the map div may collapse to its content width or overflow if the iframe/map has a fixed internal width.
- `form` element is `lg:w-[38%]` but falls back to `sm:w-full` — that part is fine. However there is no `sm:px-3` on the outer container (only `md:px-16`), so on mobile the form hugs the very edge of the screen with only `sm:px-3` from the parent. Double-check rendered padding is adequate.

#### Blog.jsx — FAQ accordion collapsed heights are hardcoded per-breakpoint and may clip
- Questions 1 & 2 use `sm:h-28` as collapsed height. If translated text for those question titles is longer than ~2 lines (common in Italian/Albanian), the title will be clipped rather than wrapping. Consider `sm:h-auto` with `line-clamp` on the title text instead.
- The `BlogInfoImage` in the third section uses `sm:h-[300px]` with no `w-full object-cover`, so image aspect ratio and left-right overflow depend on the image's natural width.

---

### MEDIUM PRIORITY

#### DentalTourism.jsx — Second section image missing on mobile without fallback text/spacing
- `<img src={BlogImage1} className=" lg:w-2/5">` — no `sm:w-full` or `sm:hidden`. On mobile the image renders at its natural width and may overflow. Add `sm:w-full` or `sm:hidden` depending on desired behaviour.
- Country gallery: `grid md:grid-cols-2 lg:grid-cols-3` — no `sm:grid-cols-1` class. The grid defaults to a single column in CSS when no `sm:` override is present, but only because the Tailwind default is `grid-cols-1`. This is technically fine but should be made explicit to prevent regressions.

#### About.jsx — "More Info" grid missing `md:` column
- `grid sm:grid-cols-1 lg:grid-cols-2` jumps directly from 1-col (mobile) to 2-col (desktop). On tablet (md) it renders 1-col, which is acceptable but the gap `lg:gap-20` only activates at desktop — on tablet the default `gap-5` applies, which may look cramped given the tablet viewport size. Add `md:grid-cols-2` for consistency.
- First section heading `text-4xl` has no `sm:` size reduction. On phones the "Dental Tourism" heading can be too large and potentially wrap awkwardly.

#### Services.jsx — Page header title lacks sm: text size
- `<p className="font-bold text-4xl text-[#849661]">` — same issue as About.jsx: no `sm:text-2xl` fallback. Present across Services, Blog, ServiceTypes, DentalTourism page headers (copy-pasted pattern).
- Filter buttons use `flex sm:flex-col flex-row flex-wrap`. On tablet and up the buttons wrap horizontally — fine. On mobile they stack vertically — also fine. No overflow issue.

#### ServicesSwiper.jsx — No issues; Swiper images use `w-full h-full object-cover` — correct.

#### BlogNews.jsx — Blog card images have no explicit height/sizing classes
- `<img src={BlogImages1} className="group-hover:rotate-6 group-hover:scale-110 duration-1000"/>` — no `w-full`, no `h-[Xpx]`, no `object-cover`. The image renders at natural size. On mobile the image is likely fine (fills card width naturally), but on tablet at `slidesPerView: 2` the two images may render at different heights, breaking the visual row alignment.

---

### LOW PRIORITY

#### GallerySwiper.jsx — OK overall
- Uses `h-64`, `w-full`, `object-cover` on gallery images. Swiper breakpoints mirror the site standard (767/992). No overflow issues detected.

#### Home.jsx — Drop-down section button children use `child:` utility without sm: scoping
- `md:child:text-2xl` scales button text up on tablet but there is no `sm:child:text-base` safeguard. On mobile the inherited base text size applies, which is probably fine but inconsistent with the explicit `md:` scaling.

#### Footbar.jsx — Logo width is fixed at `w-72` (288px)
- On narrow mobile screens (320px) with `sm:px-3` padding the logo leaves ~26px of horizontal space, causing the logo to overflow its container. Add `sm:w-48` or `max-w-full` to the logo image.
- The `md:grid md:grid-cols-2` layout is good. The `sm:flex sm:flex-col` fallback is correct.

---

## OK

- **Navbar.jsx** — Mobile hamburger menu implemented correctly; desktop nav hidden on sm/md with `sm:hidden md:hidden`; mobile menu opens/closes with animation class toggling.
- **Home.jsx** — Hero carousel has `sm:h-[415px]` defined; carousel nav buttons have sm-specific positioning; overlay uses `sm:w-screen` to cover full width on mobile.
- **Home.jsx** — About section stacks to column on sm/md (`sm:flex-col md:flex-col`); image proportions use fractional widths.
- **Home.jsx** — Drop-down accordion section hides the desktop illustration on mobile (`sm:hidden md:hidden lg:flex`).
- **About.jsx** — Two-column info grid correctly collapses to single column on mobile.
- **Services.jsx** — Service cards grid uses `sm:grid-cols-1 grid-cols-2`; card images use `object-cover` with fixed height container.
- **Contact.jsx** — Form layout stacks correctly on mobile (`sm:flex-col`).
- **DentalTourism.jsx** — Dropdown section image hidden on mobile (`sm:hidden md:hidden`).
- **ServicesSwiper.jsx** — Service cards use `object-cover` within a fixed-height container; Swiper breakpoints are correct.
- **GallerySwiper.jsx** — Gallery images use `object-cover` in fixed-height containers; Swiper responsive breakpoints configured.
- **BlogNews.jsx** — Swiper breakpoints configured; all content uses relative sizing.
- **Footbar.jsx** — Grid layout adapts across all three breakpoints; bottom copyright bar switches to column on mobile.

---

## PRIORITY (fix order)

1. **ServiceTypes.jsx `sm:w-screen`** — Immediate horizontal scroll bug on every mobile visitor to a service detail page. Change to `w-full`.
2. **ServiceTypes.jsx slide images** — Add `w-full h-40 object-cover` to prevent layout collapse.
3. **Footbar.jsx logo** — `w-72` overflows on 320px screens. Add `sm:w-48` or `max-w-full`.
4. **DentalTourism.jsx second section image** — Add `sm:w-full` to prevent natural-width overflow.
5. **Blog.jsx FAQ accordion heights** — Replace hardcoded `sm:h-28` with overflow-safe approach for long translated strings.
6. **About.jsx / Services.jsx / Blog.jsx / DentalTourism.jsx page headers** — Add `sm:text-2xl` to all `text-4xl` page title headings.
7. **Contact.jsx Maps wrapper** — Add `w-full sm:w-full` to the Maps container div.
8. **BlogNews.jsx card images** — Add `w-full h-52 object-cover` for consistent card heights across breakpoints.

---

*Report generated by static code analysis. Runtime verification (browser DevTools device simulation) recommended for issues 1, 3, 5.*
