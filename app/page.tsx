import Image from "next/image";
import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(661) 978-9196";
const TEL = "tel:+16619789196";
const SMS = "sms:+16619789196";
const MAPS = "https://www.google.com/maps/search/?api=1&query=R%26M%20Landscaping%20Gardening%20Hauling&query_place_id=ChIJ01Ynv6uqmaoR5tAN_KO0zvc";

const services = [
  { icon: "mower", name: "Weekly Lawn & Garden Care", text: "Mowing, edging and garden upkeep on the same day every week. Customers tell us the best part is that the crew never misses." },
  { icon: "truck", name: "Junk Hauling & Haul-Off", text: "Old furniture, yard debris, garage clean-outs. Call in the morning and we can often be there the same day, sometimes within the hour.", featured: true },
  { icon: "flame", name: "Fire Hazard Clearance", text: "We cut weeds and dry brush to meet clearance requirements, including steep, sloped mountain lots in Tehachapi of an acre or more." },
  { icon: "trash", name: "Yard & Property Cleanups", text: "Overgrown yard, move-out cleanup or a rental between tenants. We clear it, haul it off and leave the place clean." },
  { icon: "sprout", name: "Sod Installation", text: "Fresh sod for front and back lawns, laid tight and even so your yard is green the same day we finish." },
  { icon: "box", name: "Moving Help", text: "Need an extra truck and a couple of strong hands? We help load, haul and unload for local moves." },
];

const reviews = [
  { name: "Saul C.", job: "Junk hauling", text: "I called and they were hauling the junk away within the hour, at a great price." },
  { name: "Rhea Ann S.", job: "Fire hazard clearance, Tehachapi", text: "They cut our sloped 1.17-acre mountain property for the required fire clearance. Professional, dependable and reasonably priced." },
  { name: "Giovanny P.", job: "Weekly maintenance", text: "Our yard stays consistently clean and healthy, and the price is very reasonable for how reliable they are." },
  { name: "Ron M.", job: "Sod installation", text: "Our new front lawn sod came out fantastic, and they were always on time." },
  { name: "Sydney Y.", job: "Landscaping + haul-off", text: "Very satisfied with the yard, and they left everything clean when they were done." },
  { name: "Brittaney M.", job: "Weekly service", text: "They come every week and get the job done." },
];

const steps = [
  { title: "Call or text", text: "Tell us what you need. Hauling, a cleanup, weekly service or fire clearance. A photo helps." },
  { title: "Quick quote", text: "We give you a fair, upfront price. For hauling, that's often right on the phone." },
  { title: "We show up", text: "On time, with the truck and the tools. For junk removal, sometimes the same hour." },
  { title: "Clean finish", text: "We haul off every bit of debris and leave your property clean." },
];

const faqs = [
  { q: "How fast can you haul junk away?", a: "Often the same day. One customer called and had us hauling within the hour. Call (661) 978-9196 and we'll tell you the soonest time we can be there." },
  { q: "Do you work in Tehachapi and the mountains?", a: "Yes. We serve the Bakersfield area and Tehachapi, including large, steep mountain properties that need fire hazard clearance." },
  { q: "Can you handle fire clearance on a big or sloped lot?", a: "Yes. We've cleared sloped lots over an acre in Tehachapi. Tell us the size and terrain and we'll quote it." },
  { q: "Do you offer weekly service?", a: "Yes. Weekly gardening and mowing on a regular schedule. Customers say we come every week and never skip." },
  { q: "What days are you open?", a: "Seven days a week, 8 a.m. to 5:30 p.m., including weekends." },
  { q: "How much does it cost?", a: "It depends on the job. Our reviews keep mentioning fair, reasonable prices. Call or text a photo for a quick, honest quote." },
];

const gallery = [
  { src: "/images/p2.jpg", alt: "Freshly mowed lawn with shade trees" },
  { src: "/images/p7.jpg", alt: "Green lawn with boulders and white rail fence" },
  { src: "/images/p4.jpg", alt: "Backyard with new sod around a children's play set" },
  { src: "/images/p6.jpg", alt: "Rolls of sod being installed in a backyard" },
  { src: "/images/p3.jpg", alt: "Hillside cut down for fire hazard clearance" },
  { src: "/images/p11.jpg", alt: "Cleared mountain property in Tehachapi with oak trees" },
  { src: "/images/p13.jpg", alt: "Dry brush cleared on a sloped lot under oak trees" },
  { src: "/images/p10.jpg", alt: "Large sloped lot after weed and brush clearance" },
  { src: "/images/p9.jpg", alt: "Weed clearance under a large oak tree" },
  { src: "/images/p12.jpg", alt: "Open lot mowed down for fire clearance" },
  { src: "/images/p5.jpg", alt: "Side yard with new sod along a house" },
  { src: "/images/p8.jpg", alt: "Front lawn kept trimmed with weekly service" },
  { src: "/images/p14.jpg", alt: "Front yard cleanup in progress" },
];

const area = ["Bakersfield", "Tehachapi", "Kern County"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "R&M Landscaping Gardening Hauling",
  telephone: "+1-661-978-9196",
  url: "https://r-m-landscaping-gardening-hauling.growlocalvisibility.com",
  image: "/images/p1.jpg",
  areaServed: area,
  address: { "@type": "PostalAddress", addressLocality: "Bakersfield", addressRegion: "CA", addressCountry: "US" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: 5, reviewCount: 11 },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "08:00", closes: "17:30" }],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <div className="bg-brand text-sm font-semibold text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-5 py-2 md:justify-between md:px-6">
          <span className="inline-flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Open 7 days · 8 a.m. – 5:30 p.m.</span>
          <span className="hidden items-center gap-2 md:inline-flex"><Icon name="pin" className="h-4 w-4" /> Bakersfield · Tehachapi · Kern County</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="R&M Landscaping Gardening Hauling home">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-soft text-brand"><Icon name="leaf" className="h-6 w-6" /></span>
            <span className="leading-tight">
              <span className="block font-heading text-xl font-black text-brand-deep">R&amp;M Landscaping</span>
              <span className="block text-xs font-bold text-muted">Gardening · Hauling</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 font-bold lg:flex" aria-label="Main">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#work" className="hover:text-brand">Our Work</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden items-center gap-2 font-extrabold text-brand-deep md:inline-flex"><Icon name="phone" className="h-5 w-5" />{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden sm:inline-flex"><span className="wave"><Icon name="phone" className="h-5 w-5" /></span>Call Now</a>
            <a href={TEL} className="grid h-11 w-11 place-items-center rounded-2xl bg-cta text-ink sm:hidden" aria-label={`Call ${PHONE}`}><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="bg-tint">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-2">
            <div>
              <h1 className="font-black text-[clamp(2.25rem,5vw,3.6rem)] text-brand-deep">Lawn Care, Junk Hauling &amp; Fire Clearance in Bakersfield and Tehachapi</h1>
              <p className="mt-5 max-w-[58ch] text-lg text-muted md:text-xl">Weekly gardening that never misses, yard cleanups, sod and same-day haul-off. Fast, reliable and fairly priced across Kern County, seven days a week.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn btn-cta text-lg"><span className="wave"><Icon name="phone" className="h-5 w-5" /></span>Call {PHONE}</a>
                <a href={SMS} className="btn btn-ghost text-lg"><Icon name="text" className="h-5 w-5" />Text us a photo</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] font-bold">
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brand"><Stars className="h-5 w-5" /> 5.0 · 11 Google reviews</a>
                <span className="inline-flex items-center gap-1.5"><Icon name="bolt" className="h-5 w-5 text-brand" /> Same-day hauling</span>
                <span className="inline-flex items-center gap-1.5"><Icon name="calendar" className="h-5 w-5 text-brand" /> Open 7 days</span>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-3">
              <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-3xl">
                <Image src="/images/p1.jpg" alt="Neatly mowed front lawn and trimmed shrubs at a Bakersfield home" fill priority sizes="(min-width: 1024px) 30vw, 60vw" className="object-cover" />
              </div>
              <div className="col-span-2 flex flex-col gap-3">
                <div className="relative flex-1 overflow-hidden rounded-3xl">
                  <Image src="/images/p6.jpg" alt="Sod rolls being laid for a new lawn" fill sizes="(min-width: 1024px) 20vw, 40vw" className="object-cover" />
                </div>
                <figure className="rounded-3xl bg-white p-4 shadow-sm">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-2 text-[15px] font-semibold leading-snug">&ldquo;Hauling the junk away within the hour.&rdquo;</blockquote>
                  <figcaption className="mt-1 text-sm text-muted">Saul C.</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-b border-line bg-white" aria-label="Why customers choose us">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "thumb", t: "5.0 stars", d: "11 Google reviews" },
              { icon: "bolt", t: "Same-day haul-off", d: "Sometimes within the hour" },
              { icon: "repeat", t: "Never misses a week", d: "Reliable weekly crews" },
              { icon: "tag", t: "Fair prices", d: "Quoted up front" },
            ].map((x) => (
              <li key={x.t} className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand"><Icon name={x.icon} className="h-6 w-6" /></span>
                <span><span className="block font-extrabold leading-tight">{x.t}</span><span className="text-sm text-muted">{x.d}</span></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 className="max-w-2xl text-3xl font-black text-brand-deep md:text-5xl">Yard care and hauling, all from one crew</h2>
            <p className="mt-4 max-w-2xl text-muted">From a weekly mow to clearing a whole hillside, here&apos;s what we do around Bakersfield and Tehachapi.</p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`reveal lift relative flex flex-col rounded-3xl p-7 ${s.featured ? "bg-brand text-white" : "border border-line bg-white"}`}>
                  {s.featured && <span className="absolute right-5 top-5 rounded-full bg-cta px-3 py-0.5 text-xs font-extrabold text-ink">Same day</span>}
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${s.featured ? "bg-white/15 text-white" : "bg-brand-soft text-brand"}`}><Icon name={s.icon} className="h-6 w-6" /></span>
                  <h3 className={`mt-4 text-xl font-extrabold ${s.featured ? "text-white" : "text-brand-deep"}`}>{s.name}</h3>
                  <p className={`mt-2 flex-1 text-[17px] ${s.featured ? "text-white/90" : "text-muted"}`}>{s.text}</p>
                  <a href={TEL} className={`mt-5 inline-flex items-center gap-1.5 font-extrabold ${s.featured ? "text-white" : "text-brand"}`}>Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-black text-brand-deep md:text-5xl">Rated 5.0 from 11 Google reviews</h2>
                <p className="mt-3 max-w-xl text-muted">Fast, dependable and affordable. That&apos;s what neighbors keep saying, whether the job was a single haul-off or a whole acre of brush.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost shrink-0">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-3xl bg-white p-7">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 flex-1 text-[17px]">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm"><span className="font-extrabold">{r.name}</span> <span className="text-muted">· {r.job}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src="/images/p11.jpg" alt="Mountain property in Tehachapi after fire hazard clearance by R&M" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-brand-deep md:text-5xl">A local crew that shows up</h2>
              <p className="mt-5">R&amp;M Landscaping Gardening Hauling is a Kern County yard care and hauling crew. We keep lawns in Bakersfield looking sharp every week, haul away what you don&apos;t want, and take on the big, dusty jobs too, like cutting fire clearance on steep mountain lots up in Tehachapi.</p>
              <p className="mt-4">We keep it simple: answer the phone, give a fair price, show up when we said we would, and clean up before we leave.</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: "clock", t: "Always on time", d: "Mentioned in review after review." },
                  { icon: "bolt", t: "Fast response", d: "Haul-offs often the same day." },
                  { icon: "trash", t: "Leaves it clean", d: "Every scrap hauled off." },
                  { icon: "tree", t: "Big jobs welcome", d: "Acre-plus slopes, no problem." },
                ].map((d) => (
                  <li key={d.t} className="flex gap-3">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={d.icon} className="h-5 w-5" /></span>
                    <span><span className="block font-extrabold">{d.t}</span><span className="text-[16px] text-muted">{d.d}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 className="text-3xl font-black text-brand-deep md:text-5xl">How it works</h2>
            <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal rounded-3xl bg-white p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-heading text-lg font-black text-white">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-extrabold text-brand-deep">{s.title}</h3>
                  <p className="mt-2 text-[16px] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 className="text-3xl font-black text-brand-deep md:text-5xl">Lawns, sod and cleared lots</h2>
            <p className="mt-3 text-muted">Real jobs from around Bakersfield and up in Tehachapi.</p>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {gallery.map((g, i) => (
                <div key={g.src} className={`reveal relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}>
                  <Image src={g.src} alt={g.alt} fill sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"} className="object-cover transition-transform duration-300 hover:scale-[1.04]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black text-brand-deep md:text-5xl">Where we work</h2>
              <p className="mt-4 text-muted">From Bakersfield neighborhoods up the hill to Tehachapi&apos;s mountain properties. Elsewhere in Kern County? Give us a call.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {area.map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[15px] font-bold"><Icon name="pin" className="h-4 w-4 text-brand" />{a}</li>
                ))}
              </ul>
              <div className="mt-8 rounded-3xl bg-white p-6">
                <p className="font-extrabold">Hours</p>
                <p className="mt-1 text-muted">Every day, Monday through Sunday, 8 a.m. – 5:30 p.m.</p>
              </div>
            </div>
            <div className="min-h-[340px] overflow-hidden rounded-3xl border border-line">
              <iframe title="Map of Bakersfield and Tehachapi" src="https://maps.google.com/maps?q=Bakersfield%2C%20CA&z=9&output=embed" className="h-full min-h-[340px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <h2 className="text-3xl font-black text-brand-deep md:text-5xl">Questions we hear a lot</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border border-line bg-white px-6 py-5">
                  <summary className="flex items-center justify-between gap-4 text-lg font-extrabold">{f.q}<span className="plus text-brand"><Icon name="plus" className="h-5 w-5" /></span></summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="text-3xl font-black text-white md:text-5xl">Got a yard to tame or junk to haul? Call us.</h2>
              <p className="mt-3 text-white/85">Open 7 days, 8 a.m. – 5:30 p.m. · Texts and photos welcome</p>
            </div>
            <a href={TEL} className="btn btn-cta text-lg"><span className="wave"><Icon name="phone" className="h-5 w-5" /></span>Call {PHONE}</a>
          </div>
        </section>
      </main>

      <footer className="pb-28 pt-14 md:pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <p className="font-heading text-xl font-black text-brand-deep">R&amp;M Landscaping Gardening Hauling</p>
            <p className="mt-2 max-w-sm text-[16px] text-muted">Kern County yard care and hauling. Fast, reliable and fairly priced.</p>
          </div>
          <div className="text-[16px]">
            <p className="font-extrabold">Contact</p>
            <p className="mt-2"><a href={TEL} className="font-bold text-brand">{PHONE}</a></p>
            <p className="mt-1 text-muted">Bakersfield, CA</p>
            <p className="mt-1 text-muted">Open 7 days · 8–5:30</p>
            <p className="mt-1"><a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-brand underline">Google listing</a></p>
          </div>
          <div className="text-[16px]">
            <p className="font-extrabold">Services</p>
            <ul className="mt-2 space-y-1 text-muted">{services.map((s) => <li key={s.name}>{s.name}</li>)}</ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-5 text-sm text-muted md:px-6">© {new Date().getFullYear()} R&amp;M Landscaping Gardening Hauling · Serving {area.join(", ")}.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-2.5 md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={SMS} className="btn btn-ghost"><Icon name="text" className="h-5 w-5" />Text</a>
      </div>
    </>
  );
}
