import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Check, ShieldCheck, Leaf, Truck, Sprout, Facebook, MessageCircle, Plus, Minus, ArrowRight,
  Star, Flame, Clock, Users, ThumbsUp, Phone, MapPin, Award, Zap, AlertTriangle, BadgeCheck,
  PackageCheck, X,
} from "lucide-react";
import heroMango from "@/assets/hero-mango.jpg";
import m1 from "@/assets/mango-1.jpg";
import m2 from "@/assets/mango-2.jpg";
import m3 from "@/assets/mango-3.jpg";
import m4 from "@/assets/mango-4.jpg";
import logoBadge from "@/assets/logo-badge.jpg";
import mangoCover from "@/assets/mango-cover.jpg";
import promoOrchard from "@/assets/promo-orchard.mp4";
import promoHarvest from "@/assets/promo-harvest.mp4";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ফ্লেভার মার্কেট (Flavor Market) — সাতক্ষীরার বিখ্যাত হিমসাগর আম | ৩০% ছাড়" },
      { name: "description", content: "সরাসরি সাতক্ষীরার বাগান থেকে কেমিক্যালমুক্ত ও গাছপাকা হিমসাগর আম। ফ্লেভার মার্কেটে পাচ্ছেন ৩০% ছাড় ও ফ্রি হোম ডেলিভারি! আজই অর্ডার করুন।" },
      { property: "og:title", content: "ফ্লেভার মার্কেট (Flavor Market) — সাতক্ষীরার বিখ্যাত হিমসাগর আম | ৩০% ছাড়" },
      { property: "og:description", content: "সরাসরি সাতক্ষীরার বাগান থেকে কেমিক্যালমুক্ত ও গাছপাকা হিমসাগর আম। ফ্লেভার মার্কেটে পাচ্ছেন ৩০% ছাড় ও ফ্রি হোম ডেলিভারি!" },
      { property: "og:image", content: "/assets/mango-cover.jpg" },
    ],
  }),
});

const products = [
  { id: 1, weight: "১২ কেজি", weightEn: 12, price: 1560, oldPrice: 2200, img: m1, badge: "জনপ্রিয়" },
  { id: 2, weight: "২৪ কেজি", weightEn: 24, price: 3120, oldPrice: 4400, img: m2, badge: "বেস্ট সেলার", best: true },
  { id: 3, weight: "৩৬ কেজি", weightEn: 36, price: 4680, oldPrice: 6600, img: m3, badge: "সেরা ভ্যালু" },
];

const features = [
  { icon: Sprout, title: "সরাসরি বাগান থেকে", desc: "মধ্যস্বত্বভোগী নেই — দামে সাশ্রয়, স্বাদে এক নম্বর।" },
  { icon: Leaf, title: "১০০% কেমিক্যালমুক্ত", desc: "ফরমালিন/কার্বাইড ছাড়া। পরিবারের জন্য নিরাপদ।" },
  { icon: Award, title: "হাতে বাছাইকৃত প্রিমিয়াম", desc: "আকার-রং-স্বাদ যাচাই করে প্যাকেজিং।" },
  { icon: Truck, title: "২৪–৪৮ ঘণ্টায় ডেলিভারি", desc: "নিরাপদ প্যাকেজিং, দ্রুত হোম ডেলিভারি।" },
];

const reviews = [
  { name: "নুসরাত জাহান", loc: "ঢাকা, ধানমন্ডি", text: "এত মিষ্টি আম অনেকদিন পর খেলাম! পুরো পরিবার মুগ্ধ। দ্বিতীয়বার অর্ডার দিয়ে দিয়েছি।", rating: 5, qty: "২৪ কেজি" },
  { name: "রাকিবুল হাসান", loc: "চট্টগ্রাম", text: "প্যাকেজিং দারুণ। একটাও নষ্ট পাইনি। গাছপাকা সত্যিকারের হিমসাগর।", rating: 5, qty: "১২ কেজি" },
  { name: "ফারজানা আক্তার", loc: "সিলেট", text: "বাচ্চারা বাজারের আম খেতে চায় না আর। ফ্রেশ আর সুগন্ধে ভরপুর।", rating: 5, qty: "৩৬ কেজি" },
  { name: "তানভীর আহমেদ", loc: "রাজশাহী", text: "দাম, কোয়ালিটি, ডেলিভারি — সবকিছুতেই ১০ এ ১০। হাইলি রিকমেন্ডেড।", rating: 5, qty: "২৪ কেজি" },
];

const liveOrders = [
  { name: "সাজ্জাদ", loc: "মিরপুর", qty: "১২ কেজি", time: "২ মিনিট আগে" },
  { name: "মাহমুদা", loc: "উত্তরা", qty: "২৪ কেজি", time: "৫ মিনিট আগে" },
  { name: "রিফাত", loc: "বনানী", qty: "৩৬ কেজি", time: "৮ মিনিট আগে" },
  { name: "সুমাইয়া", loc: "ঢাকা", qty: "১২ কেজি", time: "১২ মিনিট আগে" },
  { name: "ইমরান", loc: "নারায়ণগঞ্জ", qty: "২৪ কেজি", time: "১৫ মিনিট আগে" },
];

const faqs = [
  { q: "ডেলিভারি কত দিনে পাবো?", a: "ঢাকায় ২৪–৪৮ ঘণ্টা, ঢাকার বাইরে ২–৪ কর্মদিবসে কুরিয়ারে পৌঁছে যাবে।" },
  { q: "আম কেমন পাকা থাকবে?", a: "কাঁচা-পাকা অবস্থায় পাঠানো হয় যাতে পরিবহনে নষ্ট না হয়। ঘরে ১–২ দিনে পেকে যাবে।" },
  { q: "পেমেন্ট কীভাবে করব?", a: "Cash on Delivery সাপোর্টেড। বিকাশ/নগদ/ব্যাংকেও অগ্রিম পেমেন্ট দেওয়া যাবে।" },
  { q: "আম খারাপ এলে কী হবে?", a: "১০০% রিপ্লেসমেন্ট গ্যারান্টি। নষ্ট আম পেলে ছবি পাঠালেই নতুন আম পাঠানো হবে।" },
  { q: "মিনিমাম অর্ডার কত?", a: "১২ কেজি থেকে অর্ডার নেওয়া হয়। যেকোনো পরিমাণে ফ্রি ডেলিভারি।" },
];

const compare = [
  { feat: "গাছপাকা হিমসাগর", us: true, them: false },
  { feat: "ফরমালিন/কার্বাইডমুক্ত", us: true, them: false },
  { feat: "ফ্রি হোম ডেলিভারি", us: true, them: false },
  { feat: "রিপ্লেসমেন্ট গ্যারান্টি", us: true, them: false },
  { feat: "ক্যাশ অন ডেলিভারি", us: true, them: true },
  { feat: "সরাসরি বাগান থেকে", us: true, them: false },
];

function useCountdown(hours: number) {
  const [time, setTime] = useState(hours * 3600);
  useEffect(() => {
    const t = setInterval(() => setTime((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;
  return { h, m, s };
}

function Index() {
  const [selected, setSelected] = useState(products[1]);
  const [qty, setQty] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", phone: "", address: "", note: "" });
  const [toastIdx, setToastIdx] = useState(0);
  const [showToast, setShowToast] = useState(true);
  const { h, m, s } = useCountdown(5);

  useEffect(() => {
    const t = setInterval(() => {
      setShowToast(false);
      setTimeout(() => {
        setToastIdx((i) => (i + 1) % liveOrders.length);
        setShowToast(true);
      }, 400);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const subtotal = selected.price * qty;
  const saved = (selected.oldPrice - selected.price) * qty;
  const stockLeft = 17;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* URGENCY BAR */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-[oklch(0.45_0.18_25)] via-[oklch(0.55_0.22_30)] to-[oklch(0.45_0.18_25)] text-white">
        <div className="container mx-auto flex flex-nowrap items-center justify-center gap-x-3 gap-y-1 overflow-hidden px-3 py-2 text-[11px] font-semibold sm:text-xs md:text-sm">
          <span className="flex items-center gap-1.5"><Flame className="h-3.5 w-3.5 shrink-0" /> <span className="truncate">৩০% ছাড় চলছে</span></span>
          <span className="hidden h-4 w-px bg-white/30 sm:block" />
          <span className="flex items-center gap-1.5 shrink-0">
            <Clock className="h-3.5 w-3.5" />
            <span className="inline-flex gap-1 font-mono">
              <span className="rounded bg-black/30 px-1.5 py-0.5">{pad(h)}</span>:
              <span className="rounded bg-black/30 px-1.5 py-0.5">{pad(m)}</span>:
              <span className="rounded bg-black/30 px-1.5 py-0.5">{pad(s)}</span>
            </span>
          </span>
        </div>
      </div>

      {/* TRUST MARQUEE */}
      <div className="border-b border-border bg-cream py-2.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap text-sm font-semibold text-primary">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-10 px-5">
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-[oklch(0.55_0.18_150)]" /> ১২,০০০+ সন্তুষ্ট গ্রাহক</span>
              <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-[oklch(0.78_0.18_70)] text-[oklch(0.78_0.18_70)]" /> ৪.৯/৫ গড় রেটিং</span>
              <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-[oklch(0.55_0.18_150)]" /> ৬৪ জেলায় ডেলিভারি</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[oklch(0.55_0.18_150)]" /> ১০০% রিপ্লেসমেন্ট গ্যারান্টি</span>
              <span className="flex items-center gap-2"><Leaf className="h-4 w-4 text-[oklch(0.55_0.18_150)]" /> ফরমালিনমুক্ত</span>
            </div>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(15,40,25,0.78), rgba(15,40,25,0.78)), url(${heroMango})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div className="animate-fade-up space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-cta/40 bg-cta/15 px-4 py-1.5 text-xs font-semibold text-cta backdrop-blur">
              <Flame className="h-3.5 w-3.5" /> সিজনের শেষ লট — মাত্র {stockLeft} টি প্যাকেজ বাকি
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              মিষ্টিতে ভরপুর <span className="shimmer-text">হিমসাগর আম</span><br />
              এখন আপনার দরজায়
            </h1>
            <p className="max-w-xl text-base text-white/85 md:text-lg">
              সাতক্ষীরার বিখ্যাত গাছপাকা হিমসাগর — রসালো, মিষ্টি, ফরমালিনমুক্ত। আজই অর্ডার করলে <strong className="text-cta">৩০% ছাড় + ফ্রি ডেলিভারি</strong>।
            </p>

            {/* Rating row */}
            <div className="flex items-center gap-3 text-sm">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-cta text-cta" />)}
              </div>
              <span className="font-semibold">৪.৯/৫</span>
              <span className="text-white/70">(২,৪১৮ রিভিউ)</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#order"
                className="group relative inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-base font-bold text-cta-foreground shadow-2xl shadow-black/30 transition hover:scale-105 hover:shadow-cta/30 animate-pulse-ring"
              >
                <Zap className="h-4 w-4" />
                এখনই অর্ডার করুন
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="tel:+8801921183293" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20 hover:scale-105">
                <Phone className="h-4 w-4" /> কল করুন
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { i: ShieldCheck, t: "১০০% নিরাপদ" },
                { i: Truck, t: "ফ্রি ডেলিভারি" },
                { i: PackageCheck, t: "ক্যাশ অন ডেলিভারি" },
                { i: ThumbsUp, t: "রিপ্লেসমেন্ট গ্যারান্টি" },
              ].map(({i: I, t}) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs backdrop-blur">
                  <I className="h-3.5 w-3.5 text-cta" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-float relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl">
              <img src={heroMango} alt="তাজা হিমসাগর আম" width={1024} height={1024} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -top-4 -left-4 rounded-2xl bg-white px-4 py-2 text-sm font-bold text-primary shadow-xl">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-cta text-cta" />)}
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">১২,০০০+ গ্রাহক</div>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-cta px-4 py-2 text-sm font-bold text-cta-foreground shadow-xl">
              🥭 ১০০% অর্গানিক
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="container mx-auto grid grid-cols-2 gap-2 px-4 py-6 md:grid-cols-4">
          {[
            { n: "১২,০০০+", l: "সন্তুষ্ট গ্রাহক" },
            { n: "৬৪", l: "জেলায় ডেলিভারি" },
            { n: "৪.৯★", l: "গড় রেটিং" },
            { n: "১০০%", l: "মানি ব্যাক" },
          ].map((x) => (
            <div key={x.l} className="text-center">
              <div className="text-2xl font-bold text-cta md:text-3xl">{x.n}</div>
              <div className="text-xs text-primary-foreground/75 md:text-sm">{x.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative bg-cream py-20">
        <div className="absolute right-8 top-12 text-5xl opacity-40">🥭</div>
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">আমাদের আম</p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-primary md:text-5xl">
            প্রতিটি আম পাকা, রসালো ও হাতে বাছাইকৃত
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            রং, ছাঁট আর মিষ্টি স্বাদেই বুঝবেন কেন গ্রাহকেরা বারবার অর্ডার করেন।
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[m1, m2, m3, m4].map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl">
                <img src={img} alt={`আম ${i + 1}`} width={768} height={768} loading="lazy" className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-left text-white opacity-0 transition group-hover:opacity-100">
                  <p className="text-xs font-semibold">গাছপাকা হিমসাগর</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="bg-gradient-to-b from-cream to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Zap className="h-3.5 w-3.5 text-cta animate-pulse" /> লাইভ ভিডিও
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-5xl">
              সরাসরি বাগান ও প্যাকেজিং ভিডিও
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              বাগান থেকে আম সংগ্রহের তাজা দৃশ্য এবং যত্নসহকারে প্যাকেজিংয়ের বাস্তব রূপ দেখুন।
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="group overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-lg transition hover:shadow-xl">
              <div className="relative overflow-hidden rounded-2xl bg-black">
                <video 
                  src={promoOrchard} 
                  controls 
                  preload="metadata" 
                  className="aspect-video w-full object-cover"
                  poster={mangoCover}
                />
                <div className="absolute top-4 left-4 rounded-lg bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  🌳 বাগান পরিদর্শন
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-primary px-2">সাতক্ষীরার আম বাগান</h3>
              <p className="mt-1 text-sm text-muted-foreground px-2">আমাদের নিজস্ব বাগান যেখানে কোনো কেমিক্যাল ছাড়া প্রাকৃতিকভাবে আম বড় হচ্ছে।</p>
            </div>
            <div className="group overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-lg transition hover:shadow-xl">
              <div className="relative overflow-hidden rounded-2xl bg-black">
                <video 
                  src={promoHarvest} 
                  controls 
                  preload="metadata" 
                  className="aspect-video w-full object-cover"
                  poster={heroMango}
                />
                <div className="absolute top-4 left-4 rounded-lg bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  📦 আম সংগ্রহ ও প্যাকেজিং
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-primary px-2">যত্নসহকারে প্যাকেজিং</h3>
              <p className="mt-1 text-sm text-muted-foreground px-2">হাতে বাছাই করে প্রিমিয়াম গ্রেডের আমগুলো প্যাকিং করে ডেলিভারি দেওয়া হচ্ছে।</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">কেন ফ্লেভার মার্কেট (Flavor Market)?</p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold text-primary md:text-5xl">
              বিশ্বাস, স্বাদ আর টাটকার নিশ্চয়তা একসাথে
            </h2>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img src={heroMango} alt="বাগানের আম" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                <div className="flex items-center gap-2 text-primary">
                  <Award className="h-5 w-5 text-cta" />
                  <span className="text-sm font-bold">প্রিমিয়াম গ্রেড A+</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {features.map((f, i) => (
                <div key={i} className="group rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:bg-accent/30 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-primary/10 p-3 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">{f.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-cream py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">তুলনা করুন</p>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              ফ্লেভার মার্কেট vs অন্য বিক্রেতা
            </h2>
          </div>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border-2 border-primary/20 bg-card shadow-lg">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground">
              <div className="p-4 font-semibold">ফিচার</div>
              <div className="p-4 text-center font-bold text-cta">Flavor Market</div>
              <div className="p-4 text-center text-primary-foreground/70">অন্যরা</div>
            </div>
            {compare.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-t border-border ${i % 2 ? "bg-muted/30" : ""}`}>
                <div className="p-4 text-sm font-medium text-foreground">{row.feat}</div>
                <div className="flex items-center justify-center p-4">
                  {row.us ? <Check className="h-5 w-5 text-[oklch(0.55_0.18_150)]" strokeWidth={3} /> : <X className="h-5 w-5 text-destructive" />}
                </div>
                <div className="flex items-center justify-center p-4">
                  {row.them ? <Check className="h-5 w-5 text-muted-foreground" /> : <X className="h-5 w-5 text-destructive/70" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">গ্রাহক রিভিউ</p>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">আমাদের গ্রাহকেরা যা বলেন</h2>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2">
              <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-cta text-cta" />)}</div>
              <span className="text-sm font-semibold text-primary">৪.৯ গড় (২,৪১৮ রিভিউ)</span>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex">{[1,2,3,4,5].slice(0, r.rating).map(j => <Star key={j} className="h-4 w-4 fill-cta text-cta" />)}</div>
                <p className="mt-3 text-sm text-foreground">"{r.text}"</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <div>
                    <p className="text-sm font-bold text-primary">{r.name}</p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {r.loc}</p>
                  </div>
                  <span className="rounded-full bg-accent/40 px-2 py-1 text-[10px] font-semibold text-primary">{r.qty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER */}
      <section id="order" className="relative bg-gradient-to-b from-cream to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-xs font-bold text-destructive">
              <AlertTriangle className="h-3.5 w-3.5" /> মাত্র {stockLeft} টি প্যাকেজ বাকি — দ্রুত অর্ডার করুন
            </span>
            <h2 className="mt-4 text-3xl font-bold text-primary md:text-5xl">এখনই অর্ডার করুন</h2>
            <p className="mt-2 text-muted-foreground">৩০% ছাড় + ফ্রি ডেলিভারি — শুধু আজকের জন্য</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product picker */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">১. প্যাকেজ বাছাই করুন</h3>
              <div className="space-y-3">
                {products.map((p) => {
                  const isSelected = selected.id === p.id;
                  const discount = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
                  return (
                    <button
                      key={p.id}
                      onClick={() => { setSelected(p); setQty(1); }}
                      className={`relative flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition ${
                        isSelected ? "border-primary bg-accent/40 shadow-md" : "border-border bg-card hover:border-primary/40"
                      } ${p.best ? "ring-2 ring-cta/40" : ""}`}
                    >
                      <img src={p.img} alt={p.weight} width={80} height={80} loading="lazy" className="h-20 w-20 rounded-xl object-cover" />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-bold text-primary">{p.weight}</p>
                          <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-bold text-destructive">-{discount}%</span>
                        </div>
                        <div className="mt-1 flex items-baseline gap-2">
                          <p className="text-lg font-bold text-foreground">৳{p.price.toLocaleString("bn-BD")}</p>
                          <p className="text-sm text-muted-foreground line-through">৳{p.oldPrice.toLocaleString("bn-BD")}</p>
                        </div>
                        <p className="mt-0.5 text-xs text-[oklch(0.5_0.15_150)]">✓ ফ্রি ডেলিভারি</p>
                      </div>
                      {isSelected && (
                        <div className="flex items-center gap-2 rounded-full border border-border bg-background px-2 py-1">
                          <button onClick={(e) => { e.stopPropagation(); setQty(Math.max(1, qty - 1)); }} className="rounded-full p-1 hover:bg-muted"><Minus className="h-3 w-3" /></button>
                          <span className="min-w-[20px] text-center text-sm font-bold">{qty}</span>
                          <button onClick={(e) => { e.stopPropagation(); setQty(qty + 1); }} className="rounded-full p-1 hover:bg-muted"><Plus className="h-3 w-3" /></button>
                        </div>
                      )}
                      <span className="absolute -top-2.5 right-3 rounded-full bg-cta px-2.5 py-0.5 text-[10px] font-bold text-cta-foreground shadow">
                        {p.badge}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Order summary */}
              <div className="rounded-2xl border-2 border-primary/20 bg-card p-5 shadow-sm">
                <div className="flex items-center gap-3 border-b border-border pb-3">
                  <img src={selected.img} alt={selected.weight} width={48} height={48} className="h-12 w-12 rounded-lg object-cover" />
                  <div className="flex-1 text-sm">
                    <p className="font-semibold text-primary">হিমসাগর – {selected.weight}</p>
                    <p className="text-xs text-muted-foreground">x{qty}</p>
                  </div>
                  <p className="font-bold">৳{subtotal.toLocaleString("bn-BD")}</p>
                </div>
                <div className="mt-3 space-y-1.5 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>৳{subtotal.toLocaleString("bn-BD")}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">ডেলিভারি</span><span className="font-semibold text-[oklch(0.5_0.15_150)]">ফ্রি</span></div>
                  <div className="flex justify-between text-destructive"><span>আপনি সেভ করছেন</span><span className="font-semibold">৳{saved.toLocaleString("bn-BD")}</span></div>
                  <div className="mt-2 flex justify-between border-t border-border pt-2 text-base font-bold text-primary">
                    <span>মোট</span><span>৳{subtotal.toLocaleString("bn-BD")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl border-2 border-primary/20 bg-card p-6 shadow-xl md:p-8">
              <h3 className="text-xl font-bold text-primary">২. ডেলিভারি তথ্য দিন</h3>
              <p className="mt-1 text-xs text-muted-foreground">অগ্রিম পেমেন্ট লাগবে না — পণ্য হাতে পেয়ে টাকা দিন</p>

              <div className="mt-5 space-y-4">
                {[
                  { label: "নাম *", key: "name", ph: "আপনার পূর্ণ নাম" },
                  { label: "মোবাইল *", key: "phone", ph: "১১ ডিজিটের মোবাইল নাম্বার" },
                  { label: "ঠিকানা *", key: "address", ph: "বাসা, রোড, এলাকা, থানা, জেলা", textarea: true },
                  { label: "নোট", key: "note", ph: "স্পেশাল কিছু বলতে চাইলে (অপশনাল)" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="mb-1.5 block text-sm font-semibold text-primary">{f.label}</label>
                    {f.textarea ? (
                      <textarea
                        rows={2}
                        value={(form as any)[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.ph}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    ) : (
                      <input
                        value={(form as any)[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.ph}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    )}
                  </div>
                ))}

                <div className="rounded-xl border border-cta/30 bg-cta/10 p-3 text-xs">
                  <p className="flex items-center gap-2 font-semibold text-primary">
                    <Clock className="h-4 w-4" /> অফার শেষ হবে: <span className="font-mono">{pad(h)}:{pad(m)}:{pad(s)}</span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
                      alert("দয়া করে নাম, মোবাইল ও ঠিকানা পূরণ করুন।");
                      return;
                    }
                    if (!/^01[3-9]\d{8}$/.test(form.phone.trim())) {
                      alert("সঠিক ১১ ডিজিটের মোবাইল নাম্বার দিন।");
                      return;
                    }
                    const msg =
                      `আসসালামু আলাইকুম, আমি অর্ডার করতে চাই:\n\n` +
                      `পণ্য: ${selected.weight} হিমসাগর আম\n` +
                      `পরিমাণ: ${qty} প্যাকেট\n` +
                      `মোট: ৳${subtotal.toLocaleString("bn-BD")}\n\n` +
                      `নাম: ${form.name}\n` +
                      `মোবাইল: ${form.phone}\n` +
                      `ঠিকানা: ${form.address}\n` +
                      (form.note ? `নোট: ${form.note}\n` : "");
                    window.open(
                      `https://wa.me/8801921183293?text=${encodeURIComponent(msg)}`,
                      "_blank",
                    );
                  }}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cta to-[oklch(0.72_0.2_60)] py-4 text-base font-bold text-cta-foreground shadow-lg transition hover:scale-[1.02] hover:shadow-cta/30"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Zap className="h-5 w-5 animate-bounce" />
                    অর্ডার কনফার্ম করুন — ৳{subtotal.toLocaleString("bn-BD")}
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </span>
                </button>

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-[oklch(0.55_0.18_150)]" /> SSL সুরক্ষিত</span>
                  <span className="flex items-center gap-1"><PackageCheck className="h-3.5 w-3.5 text-[oklch(0.55_0.18_150)]" /> ক্যাশ অন ডেলিভারি</span>
                  <span className="flex items-center gap-1"><ThumbsUp className="h-3.5 w-3.5 text-[oklch(0.55_0.18_150)]" /> রিপ্লেসমেন্ট গ্যারান্টি</span>
                </div>
                <p className="text-center text-xs text-muted-foreground">কাস্টমার প্রতিনিধি কল করে অর্ডার কনফার্ম করবেন</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20">
        <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">সাধারণ প্রশ্ন</p>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              অর্ডারের আগে যা জানা দরকার
            </h2>
            <p className="mt-4 text-muted-foreground">
              কোনো প্রশ্ন থাকলে এখনই WhatsApp এ মেসেজ করুন — দ্রুত উত্তর পাবেন।
            </p>
            <a href="#" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.18_150)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90">
              <MessageCircle className="h-4 w-4" /> WhatsApp এ মেসেজ করুন
            </a>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <button
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full rounded-xl border border-border bg-card p-5 text-left transition hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex items-center justify-between gap-4 font-semibold text-primary">
                  <span>{f.q}</span>
                  {openFaq === i ? <Minus className="h-4 w-4 shrink-0" /> : <Plus className="h-4 w-4 shrink-0" />}
                </div>
                {openFaq === i && (
                  <p className="mt-3 animate-fade-up text-sm text-muted-foreground">{f.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-primary py-12 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
            <img src={logoBadge} alt="Flavor Market" className="h-8 w-8 rounded-full border border-white/20" />
            Flavor Market (ফ্লেভার মার্কেট)
          </h3>
          <p className="mt-2 text-sm text-primary-foreground/80">
            বাগান থেকে সরাসরি নিরাপদ দেশি আম ও খাঁটি পণ্য আপনার ঘরে
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href="https://www.facebook.com/flavormarkets" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-2 text-sm transition hover:bg-primary-foreground/20 hover:scale-105">
              <Facebook className="h-4 w-4" /> Facebook Page
            </a>
            <a href="https://wa.me/8801921183293" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-2 text-sm transition hover:bg-primary-foreground/20 hover:scale-105">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href="tel:+8801921183293" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-2 text-sm transition hover:bg-primary-foreground/20 hover:scale-105">
              <Phone className="h-4 w-4" /> ০১৯২১-১৮৩২৯৩
            </a>
          </div>
          <p className="mt-2 text-xs text-primary-foreground/75">ইমেইল: flavormarket76@gmail.com | ঠিকানা: সাতক্ষীরা, বাংলাদেশ</p>
          <p className="mt-6 text-xs text-primary-foreground/60">© 2026 Flavor Market. All rights reserved.</p>
        </div>
      </section>

      {/* LIVE ORDER TOAST */}
      {showToast && (
        <div className="fixed bottom-24 left-4 z-50 hidden max-w-xs animate-slide-in-left rounded-2xl border border-border bg-card p-3 shadow-2xl md:flex md:items-center md:gap-3">
          <div className="rounded-full bg-[oklch(0.55_0.18_150)]/10 p-2 text-[oklch(0.55_0.18_150)]">
            <Users className="h-4 w-4" />
          </div>
          <div className="text-xs">
            <p className="font-semibold text-primary">{liveOrders[toastIdx].name} ({liveOrders[toastIdx].loc})</p>
            <p className="text-muted-foreground">অর্ডার করেছেন {liveOrders[toastIdx].qty} • {liveOrders[toastIdx].time}</p>
          </div>
        </div>
      )}

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <a href="#order" className="flex items-center justify-center gap-2 rounded-xl bg-cta py-3 font-bold text-cta-foreground">
          <Zap className="h-4 w-4 animate-pulse" /> এখনই অর্ডার করুন — ৩০% ছাড়
        </a>
      </div>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/8801921183293" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-24 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[oklch(0.62_0.18_150)] text-white shadow-2xl transition hover:scale-110 md:bottom-6 md:right-6 md:h-14 md:w-14">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
