<template>
  <main class="min-h-screen bg-slate-50 text-slate-900 p-6">
    <section class="mx-auto max-w-5xl rounded-3xl border border-green-200 bg-white p-8 shadow-lg">
      <header class="mb-6">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 class="text-4xl font-bold text-green-800">{{ current.title }}</h1>
            <p class="mt-3 text-lg text-slate-600">{{ current.description }}</p>
          </div>

          <div class="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
            <label for="language" class="text-sm font-semibold text-slate-800">Choose language</label>
            <select id="language" v-model="language" class="rounded-xl border border-green-200 bg-white px-4 py-2 text-slate-900 outline-none focus:border-green-500">
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="rw">Kinyarwanda</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </header>

      <div class="grid gap-6 md:grid-cols-2">
        <article class="rounded-2xl border border-green-100 bg-green-50 p-6">
          <h2 class="text-2xl font-semibold text-green-900">{{ current.subtitle1 }}</h2>
          <p class="mt-3 text-slate-700">{{ current.body1 }}</p>
        </article>

        <article class="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 class="text-2xl font-semibold text-slate-900">{{ current.subtitle2 }}</h2>
          <p class="mt-3 text-slate-700">{{ current.body2 }}</p>
        </article>
      </div>

      <section class="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 class="text-2xl font-semibold text-slate-900">{{ current.supportedTitle }}</h2>
        <ul class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="lang in current.languages" :key="lang" class="rounded-xl bg-white p-4 text-center shadow-sm">
            <strong>{{ lang }}</strong>
          </li>
        </ul>
      </section>

      <section class="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-2xl font-semibold text-slate-900">{{ current.sampleTitle }}</h2>
        <div class="mt-4 grid gap-4 md:grid-cols-2">
          <div v-for="(value, key) in current.phrases" :key="key" class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-slate-600 uppercase text-xs tracking-[.2em]">{{ key }}</p>
            <p class="mt-2 text-lg font-medium text-slate-900">{{ value }}</p>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from "vue"

const language = ref("en")

const translations = {
  en: {
    title: "Translation Services",
    description: "Explore our translation support for travelers and visitors to Rwanda.",
    subtitle1: "Local Language Help",
    body1: "Get assistance with Kinyarwanda, English, French and more while you plan your trip, book tours, and enjoy local culture.",
    subtitle2: "Practical Phrases",
    body2: "Translate common travel phrases for directions, dining, shopping, and safety so you feel confident while exploring Rwanda.",
    supportedTitle: "Supported Languages",
    languages: ["English", "French", "Kinyarwanda", "German"],
    sampleTitle: "Sample Travel Phrases",
    phrases: {
      greeting: "Hello, how can I help you?",
      directions: "Where is the nearest restaurant?",
      booking: "I would like to book a tour.",
      safety: "Is it safe to visit this area at night?"
    }
  },
  fr: {
    title: "Services de traduction",
    description: "Découvrez notre support de traduction pour les voyageurs et les visiteurs au Rwanda.",
    subtitle1: "Aide en langues locales",
    body1: "Obtenez de l'aide en kinyarwanda, anglais, français et plus encore pendant que vous planifiez votre voyage, réservez des tours et profitez de la culture locale.",
    subtitle2: "Phrases pratiques",
    body2: "Traduisez des phrases de voyage courantes pour les directions, les repas, le shopping et la sécurité afin de vous sentir en confiance lors de l'exploration du Rwanda.",
    supportedTitle: "Langues prises en charge",
    languages: ["Anglais", "Français", "Kinyarwanda", "Allemand"],
    sampleTitle: "Phrases de voyage exemples",
    phrases: {
      greeting: "Bonjour, comment puis-je vous aider ?",
      directions: "Où se trouve le restaurant le plus proche ?",
      booking: "Je voudrais réserver une visite.",
      safety: "Est-il sûr de visiter cette zone la nuit ?"
    }
  },
  rw: {
    title: "Serivisi zo guhindura ururimi",
    description: "Menya uburyo bwo gufasha mu guhindura indimi ku bashyitsi basura u Rwanda.",
    subtitle1: "Ubufasha mu ndimi kavukire",
    body1: "Fata ubufasha mu Kinyarwanda, Icyongereza, Igifaransa n'izindi mugihe utegura urugendo, ubika ingendo kandi wishimira umuco.",
    subtitle2: "Imvugo z'ingirakamaro",
    body2: "Hindura imvugo z'urugendo zisanzwe ku bijyanye n'inzira, kurya, kugura no kubungabunga umutekano kugira ngo wiyumve neza ucengera u Rwanda.",
    supportedTitle: "Indimi zishyigikiwe",
    languages: ["Icyongereza", "Igifaransa", "Kinyarwanda", "Igikeri"],
    sampleTitle: "Imvugo z'urugendo",
    phrases: {
      greeting: "Muraho, nakoraho nte ngo ngutere inkunga ?",
      directions: "Hageze he resitora iri hafi hano ?",
      booking: "Ndashaka kugura uruzinduko.",
      safety: "Ese ni amahoro gusura aka gace nijoro ?"
    }
  },
  de: {
    title: "Übersetzungsdienste",
    description: "Entdecken Sie unsere Übersetzungsunterstützung für Reisende und Besucher in Ruanda.",
    subtitle1: "Hilfe in lokalen Sprachen",
    body1: "Erhalten Sie Unterstützung in Kinyarwanda, Englisch, Französisch und mehr, während Sie Ihre Reise planen, Touren buchen und die lokale Kultur genießen.",
    subtitle2: "Praktische Sätze",
    body2: "Übersetzen Sie häufige Reisewörter für Wegbeschreibungen, Essen, Einkaufen und Sicherheit, damit Sie sich beim Erkunden Ruandas sicher fühlen.",
    supportedTitle: "Unterstützte Sprachen",
    languages: ["Englisch", "Französisch", "Kinyarwanda", "Deutsch"],
    sampleTitle: "Beispielsätze",
    phrases: {
      greeting: "Hallo, wie kann ich Ihnen helfen?",
      directions: "Wo ist das nächste Restaurant?",
      booking: "Ich möchte eine Tour buchen.",
      safety: "Ist es sicher, dieses Gebiet nachts zu besuchen?"
    }
  }
}

const current = computed(() => translations[language.value])
</script>
