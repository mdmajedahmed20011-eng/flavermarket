import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { F as Flame, C as Clock, B as BadgeCheck, S as Star, T as Truck, a as ShieldCheck, L as Leaf, Z as Zap, A as ArrowRight, P as Phone, b as PackageCheck, c as ThumbsUp, d as Award, e as Sprout, f as Check, X, M as MapPin, g as TriangleAlert, h as Minus, i as Plus, j as MessageCircle, k as Facebook, U as Users } from "../_libs/lucide-react.mjs";
const heroMango = "/assets/hero-mango-DGyKhOYc.jpg";
const m1 = "/assets/mango-1-DAhoDx3t.jpg";
const m2 = "/assets/mango-2-De_Obobr.jpg";
const m3 = "/assets/mango-3-Co5uWyas.jpg";
const m4 = "/assets/mango-4-Cy-22CL-.jpg";
const logoBadge = "/assets/logo-badge-Au2BWIRp.jpg";
const mangoCover = "/assets/mango-cover-DPmsGUqA.jpg";
const promoOrchard = "/assets/promo-orchard-WgQC_E8N.mp4";
const promoHarvest = "/assets/promo-harvest-CA4P9i7i.mp4";
const products = [{
  id: 1,
  weight: "১২ কেজি",
  weightEn: 12,
  price: 1560,
  oldPrice: 2200,
  img: m1,
  badge: "জনপ্রিয়"
}, {
  id: 2,
  weight: "২৪ কেজি",
  weightEn: 24,
  price: 3120,
  oldPrice: 4400,
  img: m2,
  badge: "বেস্ট সেলার",
  best: true
}, {
  id: 3,
  weight: "৩৬ কেজি",
  weightEn: 36,
  price: 4680,
  oldPrice: 6600,
  img: m3,
  badge: "সেরা ভ্যালু"
}];
const features = [{
  icon: Sprout,
  title: "সরাসরি বাগান থেকে",
  desc: "মধ্যস্বত্বভোগী নেই — দামে সাশ্রয়, স্বাদে এক নম্বর।"
}, {
  icon: Leaf,
  title: "১০০% কেমিক্যালমুক্ত",
  desc: "ফরমালিন/কার্বাইড ছাড়া। পরিবারের জন্য নিরাপদ।"
}, {
  icon: Award,
  title: "হাতে বাছাইকৃত প্রিমিয়াম",
  desc: "আকার-রং-স্বাদ যাচাই করে প্যাকেজিং।"
}, {
  icon: Truck,
  title: "২৪–৪৮ ঘণ্টায় ডেলিভারি",
  desc: "নিরাপদ প্যাকেজিং, দ্রুত হোম ডেলিভারি।"
}];
const reviews = [{
  name: "নুসরাত জাহান",
  loc: "ঢাকা, ধানমন্ডি",
  text: "এত মিষ্টি আম অনেকদিন পর খেলাম! পুরো পরিবার মুগ্ধ। দ্বিতীয়বার অর্ডার দিয়ে দিয়েছি।",
  rating: 5,
  qty: "২৪ কেজি"
}, {
  name: "রাকিবুল হাসান",
  loc: "চট্টগ্রাম",
  text: "প্যাকেজিং দারুণ। একটাও নষ্ট পাইনি। গাছপাকা সত্যিকারের হিমসাগর।",
  rating: 5,
  qty: "১২ কেজি"
}, {
  name: "ফারজানা আক্তার",
  loc: "সিলেট",
  text: "বাচ্চারা বাজারের আম খেতে চায় না আর। ফ্রেশ আর সুগন্ধে ভরপুর।",
  rating: 5,
  qty: "৩৬ কেজি"
}, {
  name: "তানভীর আহমেদ",
  loc: "রাজশাহী",
  text: "দাম, কোয়ালিটি, ডেলিভারি — সবকিছুতেই ১০ এ ১০। হাইলি রিকমেন্ডেড।",
  rating: 5,
  qty: "২৪ কেজি"
}];
const liveOrders = [{
  name: "সাজ্জাদ",
  loc: "মিরপুর",
  qty: "১২ কেজি",
  time: "২ মিনিট আগে"
}, {
  name: "মাহমুদা",
  loc: "উত্তরা",
  qty: "২৪ কেজি",
  time: "৫ মিনিট আগে"
}, {
  name: "রিফাত",
  loc: "বনানী",
  qty: "৩৬ কেজি",
  time: "৮ মিনিট আগে"
}, {
  name: "সুমাইয়া",
  loc: "ঢাকা",
  qty: "১২ কেজি",
  time: "১২ মিনিট আগে"
}, {
  name: "ইমরান",
  loc: "নারায়ণগঞ্জ",
  qty: "২৪ কেজি",
  time: "১৫ মিনিট আগে"
}];
const faqs = [{
  q: "ডেলিভারি কত দিনে পাবো?",
  a: "ঢাকায় ২৪–৪৮ ঘণ্টা, ঢাকার বাইরে ২–৪ কর্মদিবসে কুরিয়ারে পৌঁছে যাবে।"
}, {
  q: "আম কেমন পাকা থাকবে?",
  a: "কাঁচা-পাকা অবস্থায় পাঠানো হয় যাতে পরিবহনে নষ্ট না হয়। ঘরে ১–২ দিনে পেকে যাবে।"
}, {
  q: "পেমেন্ট কীভাবে করব?",
  a: "Cash on Delivery সাপোর্টেড। বিকাশ/নগদ/ব্যাংকেও অগ্রিম পেমেন্ট দেওয়া যাবে।"
}, {
  q: "আম খারাপ এলে কী হবে?",
  a: "১০০% রিপ্লেসমেন্ট গ্যারান্টি। নষ্ট আম পেলে ছবি পাঠালেই নতুন আম পাঠানো হবে।"
}, {
  q: "মিনিমাম অর্ডার কত?",
  a: "১২ কেজি থেকে অর্ডার নেওয়া হয়। যেকোনো পরিমাণে ফ্রি ডেলিভারি।"
}];
const compare = [{
  feat: "গাছপাকা হিমসাগর",
  us: true,
  them: false
}, {
  feat: "ফরমালিন/কার্বাইডমুক্ত",
  us: true,
  them: false
}, {
  feat: "ফ্রি হোম ডেলিভারি",
  us: true,
  them: false
}, {
  feat: "রিপ্লেসমেন্ট গ্যারান্টি",
  us: true,
  them: false
}, {
  feat: "ক্যাশ অন ডেলিভারি",
  us: true,
  them: true
}, {
  feat: "সরাসরি বাগান থেকে",
  us: true,
  them: false
}];
function useCountdown(hours) {
  const [time, setTime] = reactExports.useState(hours * 3600);
  reactExports.useEffect(() => {
    const t = setInterval(() => setTime((s2) => s2 > 0 ? s2 - 1 : 0), 1e3);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(time / 3600);
  const m = Math.floor(time % 3600 / 60);
  const s = time % 60;
  return {
    h,
    m,
    s
  };
}
function Index() {
  const [selected, setSelected] = reactExports.useState(products[1]);
  const [qty, setQty] = reactExports.useState(1);
  const [openFaq, setOpenFaq] = reactExports.useState(0);
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    address: "",
    note: ""
  });
  const [toastIdx, setToastIdx] = reactExports.useState(0);
  const [showToast, setShowToast] = reactExports.useState(true);
  const {
    h,
    m,
    s
  } = useCountdown(5);
  reactExports.useEffect(() => {
    const t = setInterval(() => {
      setShowToast(false);
      setTimeout(() => {
        setToastIdx((i) => (i + 1) % liveOrders.length);
        setShowToast(true);
      }, 400);
    }, 5e3);
    return () => clearInterval(t);
  }, []);
  const subtotal = selected.price * qty;
  const saved = (selected.oldPrice - selected.price) * qty;
  const stockLeft = 17;
  const pad = (n) => String(n).padStart(2, "0");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pb-20 md:pb-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-40 bg-gradient-to-r from-[oklch(0.45_0.18_25)] via-[oklch(0.55_0.22_30)] to-[oklch(0.45_0.18_25)] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex flex-nowrap items-center justify-center gap-x-3 gap-y-1 overflow-hidden px-3 py-2 text-[11px] font-semibold sm:text-xs md:text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3.5 w-3.5 shrink-0" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: "৩০% ছাড় চলছে" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden h-4 w-px bg-white/30 sm:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex gap-1 font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-black/30 px-1.5 py-0.5", children: pad(h) }),
          ":",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-black/30 px-1.5 py-0.5", children: pad(m) }),
          ":",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-black/30 px-1.5 py-0.5", children: pad(s) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border bg-cream py-2.5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap text-sm font-semibold text-primary", children: [...Array(2)].map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-10 px-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4 text-[oklch(0.55_0.18_150)]" }),
        " ১২,০০০+ সন্তুষ্ট গ্রাহক"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-[oklch(0.78_0.18_70)] text-[oklch(0.78_0.18_70)]" }),
        " ৪.৯/৫ গড় রেটিং"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4 w-4 text-[oklch(0.55_0.18_150)]" }),
        " ৬৪ জেলায় ডেলিভারি"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-[oklch(0.55_0.18_150)]" }),
        " ১০০% রিপ্লেসমেন্ট গ্যারান্টি"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-4 w-4 text-[oklch(0.55_0.18_150)]" }),
        " ফরমালিনমুক্ত"
      ] })
    ] }, k)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden text-white", style: {
      backgroundImage: `linear-gradient(rgba(15,40,25,0.78), rgba(15,40,25,0.78)), url(${heroMango})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-cta/40 bg-cta/15 px-4 py-1.5 text-xs font-semibold text-cta backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3.5 w-3.5" }),
          " সিজনের শেষ লট — মাত্র ",
          stockLeft,
          " টি প্যাকেজ বাকি"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-bold leading-tight md:text-5xl lg:text-6xl", children: [
          "মিষ্টিতে ভরপুর ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shimmer-text", children: "হিমসাগর আম" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "এখন আপনার দরজায়"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "max-w-xl text-base text-white/85 md:text-lg", children: [
          "সাতক্ষীরার বিখ্যাত গাছপাকা হিমসাগর — রসালো, মিষ্টি, ফরমালিনমুক্ত। আজই অর্ডার করলে ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-cta", children: "৩০% ছাড় + ফ্রি ডেলিভারি" }),
          "।"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-cta text-cta" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "৪.৯/৫" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70", children: "(২,৪১৮ রিভিউ)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#order", className: "group relative inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-base font-bold text-cta-foreground shadow-2xl shadow-black/30 transition hover:scale-105 hover:shadow-cta/30 animate-pulse-ring", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4" }),
            "এখনই অর্ডার করুন",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+8801921183293", className: "inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20 hover:scale-105", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
            " কল করুন"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-2", children: [{
          i: ShieldCheck,
          t: "১০০% নিরাপদ"
        }, {
          i: Truck,
          t: "ফ্রি ডেলিভারি"
        }, {
          i: PackageCheck,
          t: "ক্যাশ অন ডেলিভারি"
        }, {
          i: ThumbsUp,
          t: "রিপ্লেসমেন্ট গ্যারান্টি"
        }].map(({
          i: I,
          t
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-3.5 w-3.5 text-cta" }),
          " ",
          t
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-float relative mx-auto w-full max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroMango, alt: "তাজা হিমসাগর আম", width: 1024, height: 1024, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-4 -left-4 rounded-2xl bg-white px-4 py-2 text-sm font-bold text-primary shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-cta text-cta" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-xs text-muted-foreground", children: "১২,০০০+ গ্রাহক" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -right-4 rounded-2xl bg-cta px-4 py-2 text-sm font-bold text-cta-foreground shadow-xl", children: "🥭 ১০০% অর্গানিক" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto grid grid-cols-2 gap-2 px-4 py-6 md:grid-cols-4", children: [{
      n: "১২,০০০+",
      l: "সন্তুষ্ট গ্রাহক"
    }, {
      n: "৬৪",
      l: "জেলায় ডেলিভারি"
    }, {
      n: "৪.৯★",
      l: "গড় রেটিং"
    }, {
      n: "১০০%",
      l: "মানি ব্যাক"
    }].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-cta md:text-3xl", children: x.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-primary-foreground/75 md:text-sm", children: x.l })
    ] }, x.l)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-cream py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-8 top-12 text-5xl opacity-40", children: "🥭" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-sm font-semibold uppercase tracking-wider text-primary", children: "আমাদের আম" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mx-auto max-w-3xl text-3xl font-bold text-primary md:text-5xl", children: "প্রতিটি আম পাকা, রসালো ও হাতে বাছাইকৃত" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-muted-foreground", children: "রং, ছাঁট আর মিষ্টি স্বাদেই বুঝবেন কেন গ্রাহকেরা বারবার অর্ডার করেন।" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-4 md:grid-cols-4", children: [m1, m2, m3, m4].map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: `আম ${i + 1}`, width: 768, height: 768, loading: "lazy", className: "aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-left text-white opacity-0 transition group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: "গাছপাকা হিমসাগর" }) })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-b from-cream to-background py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5 text-cta animate-pulse" }),
          " লাইভ ভিডিও"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-bold text-primary md:text-5xl", children: "সরাসরি বাগান ও প্যাকেজিং ভিডিও" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-2xl text-muted-foreground", children: "বাগান থেকে আম সংগ্রহের তাজা দৃশ্য এবং যত্নসহকারে প্যাকেজিংয়ের বাস্তব রূপ দেখুন।" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-lg transition hover:shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-black", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: promoOrchard, controls: true, preload: "metadata", className: "aspect-video w-full object-cover", poster: mangoCover }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 rounded-lg bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur", children: "🌳 বাগান পরিদর্শন" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-bold text-primary px-2", children: "সাতক্ষীরার আম বাগান" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground px-2", children: "আমাদের নিজস্ব বাগান যেখানে কোনো কেমিক্যাল ছাড়া প্রাকৃতিকভাবে আম বড় হচ্ছে।" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-lg transition hover:shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-black", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: promoHarvest, controls: true, preload: "metadata", className: "aspect-video w-full object-cover", poster: heroMango }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 rounded-lg bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur", children: "📦 আম সংগ্রহ ও প্যাকেজিং" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-bold text-primary px-2", children: "যত্নসহকারে প্যাকেজিং" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground px-2", children: "হাতে বাছাই করে প্রিমিয়াম গ্রেডের আমগুলো প্যাকিং করে ডেলিভারি দেওয়া হচ্ছে।" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-sm font-semibold uppercase tracking-wider text-primary", children: "কেন ফ্লেভার মার্কেট (Flavor Market)?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mx-auto max-w-3xl text-3xl font-bold text-primary md:text-5xl", children: "বিশ্বাস, স্বাদ আর টাটকার নিশ্চয়তা একসাথে" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl shadow-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroMango, alt: "বাগানের আম", width: 1024, height: 1024, loading: "lazy", className: "h-full w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 text-cta" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold", children: "প্রিমিয়াম গ্রেড A+" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:bg-accent/30 hover:shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-primary/10 p-3 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-primary", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: f.desc })
          ] })
        ] }) }, i)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-sm font-semibold uppercase tracking-wider text-primary", children: "তুলনা করুন" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-primary md:text-4xl", children: "ফ্লেভার মার্কেট vs অন্য বিক্রেতা" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl overflow-hidden rounded-2xl border-2 border-primary/20 bg-card shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 bg-primary text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 font-semibold", children: "ফিচার" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-center font-bold text-cta", children: "Flavor Market" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-center text-primary-foreground/70", children: "অন্যরা" })
        ] }),
        compare.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid grid-cols-3 border-t border-border ${i % 2 ? "bg-muted/30" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-sm font-medium text-foreground", children: row.feat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-4", children: row.us ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 text-[oklch(0.55_0.18_150)]", strokeWidth: 3 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5 text-destructive" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-4", children: row.them ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5 text-destructive/70" }) })
        ] }, i))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-sm font-semibold uppercase tracking-wider text-primary", children: "গ্রাহক রিভিউ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-primary md:text-5xl", children: "আমাদের গ্রাহকেরা যা বলেন" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-cta text-cta" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: "৪.৯ গড় (২,৪১৮ রিভিউ)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: reviews.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: [1, 2, 3, 4, 5].slice(0, r.rating).map((j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-cta text-cta" }, j)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-foreground", children: [
          '"',
          r.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between border-t border-border pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-primary", children: r.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
              " ",
              r.loc
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-accent/40 px-2 py-1 text-[10px] font-semibold text-primary", children: r.qty })
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "order", className: "relative bg-gradient-to-b from-cream to-background py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-xs font-bold text-destructive", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5" }),
          " মাত্র ",
          stockLeft,
          " টি প্যাকেজ বাকি — দ্রুত অর্ডার করুন"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-bold text-primary md:text-5xl", children: "এখনই অর্ডার করুন" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "৩০% ছাড় + ফ্রি ডেলিভারি — শুধু আজকের জন্য" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-primary", children: "১. প্যাকেজ বাছাই করুন" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: products.map((p) => {
            const isSelected = selected.id === p.id;
            const discount = Math.round((p.oldPrice - p.price) / p.oldPrice * 100);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
              setSelected(p);
              setQty(1);
            }, className: `relative flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition ${isSelected ? "border-primary bg-accent/40 shadow-md" : "border-border bg-card hover:border-primary/40"} ${p.best ? "ring-2 ring-cta/40" : ""}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.weight, width: 80, height: 80, loading: "lazy", className: "h-20 w-20 rounded-xl object-cover" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-primary", children: p.weight }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-bold text-destructive", children: [
                    "-",
                    discount,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-baseline gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold text-foreground", children: [
                    "৳",
                    p.price.toLocaleString("bn-BD")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground line-through", children: [
                    "৳",
                    p.oldPrice.toLocaleString("bn-BD")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-[oklch(0.5_0.15_150)]", children: "✓ ফ্রি ডেলিভারি" })
              ] }),
              isSelected && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border bg-background px-2 py-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
                  e.stopPropagation();
                  setQty(Math.max(1, qty - 1));
                }, className: "rounded-full p-1 hover:bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3 w-3" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-[20px] text-center text-sm font-bold", children: qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
                  e.stopPropagation();
                  setQty(qty + 1);
                }, className: "rounded-full p-1 hover:bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2.5 right-3 rounded-full bg-cta px-2.5 py-0.5 text-[10px] font-bold text-cta-foreground shadow", children: p.badge })
            ] }, p.id);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-primary/20 bg-card p-5 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border pb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selected.img, alt: selected.weight, width: 48, height: 48, className: "h-12 w-12 rounded-lg object-cover" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-primary", children: [
                  "হিমসাগর – ",
                  selected.weight
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  "x",
                  qty
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold", children: [
                "৳",
                subtotal.toLocaleString("bn-BD")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-1.5 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "৳",
                  subtotal.toLocaleString("bn-BD")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "ডেলিভারি" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[oklch(0.5_0.15_150)]", children: "ফ্রি" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-destructive", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "আপনি সেভ করছেন" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                  "৳",
                  saved.toLocaleString("bn-BD")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex justify-between border-t border-border pt-2 text-base font-bold text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "মোট" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "৳",
                  subtotal.toLocaleString("bn-BD")
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border-2 border-primary/20 bg-card p-6 shadow-xl md:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-primary", children: "২. ডেলিভারি তথ্য দিন" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "অগ্রিম পেমেন্ট লাগবে না — পণ্য হাতে পেয়ে টাকা দিন" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-4", children: [
            [{
              label: "নাম *",
              key: "name",
              ph: "আপনার পূর্ণ নাম"
            }, {
              label: "মোবাইল *",
              key: "phone",
              ph: "১১ ডিজিটের মোবাইল নাম্বার"
            }, {
              label: "ঠিকানা *",
              key: "address",
              ph: "বাসা, রোড, এলাকা, থানা, জেলা",
              textarea: true
            }, {
              label: "নোট",
              key: "note",
              ph: "স্পেশাল কিছু বলতে চাইলে (অপশনাল)"
            }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-sm font-semibold text-primary", children: f.label }),
              f.textarea ? /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 2, value: form[f.key], onChange: (e) => setForm({
                ...form,
                [f.key]: e.target.value
              }), placeholder: f.ph, className: "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form[f.key], onChange: (e) => setForm({
                ...form,
                [f.key]: e.target.value
              }), placeholder: f.ph, className: "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" })
            ] }, f.key)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-cta/30 bg-cta/10 p-3 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 font-semibold text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
              " অফার শেষ হবে: ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                pad(h),
                ":",
                pad(m),
                ":",
                pad(s)
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
              if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
                alert("দয়া করে নাম, মোবাইল ও ঠিকানা পূরণ করুন।");
                return;
              }
              if (!/^01[3-9]\d{8}$/.test(form.phone.trim())) {
                alert("সঠিক ১১ ডিজিটের মোবাইল নাম্বার দিন।");
                return;
              }
              const msg = `আসসালামু আলাইকুম, আমি অর্ডার করতে চাই:

পণ্য: ${selected.weight} হিমসাগর আম
পরিমাণ: ${qty} প্যাকেট
মোট: ৳${subtotal.toLocaleString("bn-BD")}

নাম: ${form.name}
মোবাইল: ${form.phone}
ঠিকানা: ${form.address}
` + (form.note ? `নোট: ${form.note}
` : "");
              window.open(`https://wa.me/8801921183293?text=${encodeURIComponent(msg)}`, "_blank");
            }, className: "group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cta to-[oklch(0.72_0.2_60)] py-4 text-base font-bold text-cta-foreground shadow-lg transition hover:scale-[1.02] hover:shadow-cta/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10 flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 animate-bounce" }),
              "অর্ডার কনফার্ম করুন — ৳",
              subtotal.toLocaleString("bn-BD"),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 transition group-hover:translate-x-1" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-[oklch(0.55_0.18_150)]" }),
                " SSL সুরক্ষিত"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PackageCheck, { className: "h-3.5 w-3.5 text-[oklch(0.55_0.18_150)]" }),
                " ক্যাশ অন ডেলিভারি"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { className: "h-3.5 w-3.5 text-[oklch(0.55_0.18_150)]" }),
                " রিপ্লেসমেন্ট গ্যারান্টি"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "কাস্টমার প্রতিনিধি কল করে অর্ডার কনফার্ম করবেন" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid gap-12 px-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-sm font-semibold uppercase tracking-wider text-primary", children: "সাধারণ প্রশ্ন" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-primary md:text-5xl", children: "অর্ডারের আগে যা জানা দরকার" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "কোনো প্রশ্ন থাকলে এখনই WhatsApp এ মেসেজ করুন — দ্রুত উত্তর পাবেন।" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "mt-5 inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.18_150)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          " WhatsApp এ মেসেজ করুন"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(openFaq === i ? null : i), className: "w-full rounded-xl border border-border bg-card p-5 text-left transition hover:border-primary/40 hover:shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 font-semibold text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.q }),
          openFaq === i ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 shrink-0" })
        ] }),
        openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 animate-fade-up text-sm text-muted-foreground", children: f.a })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-12 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoBadge, alt: "Flavor Market", className: "h-8 w-8 rounded-full border border-white/20" }),
        "Flavor Market (ফ্লেভার মার্কেট)"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-primary-foreground/80", children: "বাগান থেকে সরাসরি নিরাপদ দেশি আম ও খাঁটি পণ্য আপনার ঘরে" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.facebook.com/flavormarkets", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-2 text-sm transition hover:bg-primary-foreground/20 hover:scale-105", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" }),
          " Facebook Page"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/8801921183293", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-2 text-sm transition hover:bg-primary-foreground/20 hover:scale-105", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          " WhatsApp"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+8801921183293", className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-2 text-sm transition hover:bg-primary-foreground/20 hover:scale-105", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
          " ০১৯২১-১৮৩২৯৩"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-primary-foreground/75", children: "ইমেইল: flavormarket76@gmail.com | ঠিকানা: সাতক্ষীরা, বাংলাদেশ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-primary-foreground/60", children: "© 2026 Flavor Market. All rights reserved." })
    ] }) }),
    showToast && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-24 left-4 z-50 hidden max-w-xs animate-slide-in-left rounded-2xl border border-border bg-card p-3 shadow-2xl md:flex md:items-center md:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-[oklch(0.55_0.18_150)]/10 p-2 text-[oklch(0.55_0.18_150)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-primary", children: [
          liveOrders[toastIdx].name,
          " (",
          liveOrders[toastIdx].loc,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
          "অর্ডার করেছেন ",
          liveOrders[toastIdx].qty,
          " • ",
          liveOrders[toastIdx].time
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 p-3 shadow-2xl backdrop-blur md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#order", className: "flex items-center justify-center gap-2 rounded-xl bg-cta py-3 font-bold text-cta-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 animate-pulse" }),
      " এখনই অর্ডার করুন — ৩০% ছাড়"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/8801921183293", target: "_blank", rel: "noopener noreferrer", "aria-label": "WhatsApp", className: "fixed bottom-24 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[oklch(0.62_0.18_150)] text-white shadow-2xl transition hover:scale-110 md:bottom-6 md:right-6 md:h-14 md:w-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" }) })
  ] });
}
export {
  Index as component
};
