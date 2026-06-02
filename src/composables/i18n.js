import { computed, ref, watch } from 'vue'

const STORAGE_KEY = 'tembera-language'
const defaultLang = 'en'
const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
export const language = ref(savedLanguage || defaultLang)

watch(language, (value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, value)
  }
})

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      gallery: 'Gallery',
      photos: 'Photos',
      videos: 'Videos',
      destinations: 'Destinations',
      contact: 'Contact Us',
      translation: 'Translation'
    },
    home: {
      title: 'Welcome to Rwanda',
      subtitle: 'The Land of A Thousand Hills',
      button: 'Explore Now'
    },
    about: {
      title: 'About Rwanda',
      description: 'Rwanda is a country located in East Africa, known for its stunning landscapes, mountain gorillas, and rich cultural heritage. It is called the Land of A Thousand Hills because of its beautiful hills and valleys. Kigali, the capital city, is known as one of the cleanest cities in Africa.',
      cards: [
        {
          title: 'Culture',
          desc: 'Rwanda has beautiful traditional dances, music, and cultural values that attract tourists from around the world.'
        },
        {
          title: 'Tourism',
          desc: 'Rwanda is famous for Volcanoes National Park, Akagera National Park, and Nyungwe Forest.'
        },
        {
          title: 'Kigali City',
          desc: 'Kigali is the capital city of Rwanda and is known for its cleanliness, safety, and modern development.'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      email: 'Email: tembera@gmail.com',
      phone: 'Phone: +250 788 262 287'
    },
    services: {
      title: 'Our Services',
      features: [
        {
          title: 'Tour Guiding',
          desc: 'Professional guides help visitors explore Rwanda\'s beautiful attractions.'
        },
        {
          title: 'Hotel Booking',
          desc: 'Find and reserve comfortable hotels across Rwanda.'
        },
        {
          title: 'Travel Assistance',
          desc: 'Get support with transportation, travel plans, and local information.'
        },
        {
          title: 'National Park Visits',
          desc: 'Visit Akagera, Nyungwe, and Volcanoes National Parks with ease.'
        }
      ],
      whyTitle: 'Why Choose Us?',
      whyText: 'Tembera U\'Rwanda helps tourists discover the beauty of Rwanda through reliable travel services, experienced guides, and unforgettable adventures.'
    },
    provinces: {
      north: {
        title: 'Northern Province',
        intro: 'Northern Province is famous for Volcanoes National Park, mountain gorillas, breathtaking mountains, and rich cultural experiences.',
        feature1: 'Volcanoes National Park',
        feature2: 'Mountain Gorillas',
        feature3: 'Beautiful Mountains',
        whyTitle: 'Why Visit Northern Province?',
        whyText: 'Northern Province is home to Rwanda\'s famous mountain gorillas, volcanic mountains, and unique cultural attractions.'
      },
      east: {
        title: 'Eastern Province',
        intro: 'Eastern Province is famous for Akagera National Park, wildlife tourism, beautiful lakes, and vast landscapes that attract visitors from around the world.',
        feature1: 'Akagera National Park',
        feature2: 'Wildlife Tourism',
        feature3: 'Beautiful Landscapes',
        whyTitle: 'Why Visit Eastern Province?',
        whyText: 'Eastern Province offers amazing wildlife experiences, scenic views, and opportunities to explore Rwanda\'s natural beauty.'
      },
      south: {
        title: 'Southern Province',
        intro: 'Southern Province is known for Nyungwe National Park, tea plantations, forests, waterfalls, and beautiful landscapes.',
        feature1: 'Nyungwe Forest',
        feature2: 'Tea Plantations',
        feature3: 'Scenic Landscapes',
        whyTitle: 'Why Visit Southern Province?',
        whyText: 'Southern Province offers stunning forests, wildlife, tea plantations, waterfalls, and unforgettable eco-tourism experiences.'
      },
      west: {
        title: 'Western Province',
        intro: 'Western Province is known for Lake Kivu, beautiful beaches, rolling hills, islands, and breathtaking views that attract many tourists every year.',
        feature1: 'Lake Kivu',
        feature2: 'Beautiful Beaches',
        feature3: 'Scenic Hills',
        whyTitle: 'Why Visit Western Province?',
        whyText: 'Western Province offers relaxing lakeside experiences, water activities, beautiful landscapes, and some of the most spectacular views in Rwanda.'
      },
      kigali: {
        title: 'Kigali City',
        intro: 'Kigali is the capital city of Rwanda and is known for its cleanliness, modern infrastructure, security, and vibrant culture.',
        feature1: 'Kigali Convention Centre',
        feature2: 'Modern City Views',
        feature3: 'Tourism & Culture',
        whyTitle: 'Why Visit Kigali?',
        whyText: 'Kigali offers modern attractions, museums, shopping centers, restaurants, cultural experiences, and beautiful city landscapes.'
      }
    },
    photos: {
      title: 'Photo Gallery',
      description: 'Explore beautiful photos from different tourist attractions in Rwanda.'
    },
    videos: {
      title: 'Rwanda Tourism Videos',
      description: 'Watch videos showcasing Rwanda\'s beauty, wildlife, culture, and tourist attractions.'
    },
    translation: {
      title: 'Translation Services',
      description: 'Explore our translation support for travelers and visitors to Rwanda.',
      subtitle1: 'Local Language Help',
      body1: 'Get assistance with Kinyarwanda, English, French and more while you plan your trip, book tours, and enjoy local culture.',
      subtitle2: 'Practical Phrases',
      body2: 'Translate common travel phrases for directions, dining, shopping, and safety so you feel confident while exploring Rwanda.',
      supportedTitle: 'Supported Languages',
      languages: ['English', 'French', 'Kinyarwanda', 'German'],
      sampleTitle: 'Sample Travel Phrases',
      phrases: {
        greeting: 'Hello, how can I help you?',
        directions: 'Where is the nearest restaurant?',
        booking: 'I would like to book a tour.',
        safety: 'Is it safe to visit this area at night?'
      }
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      gallery: 'Galerie',
      photos: 'Photos',
      videos: 'Vidéos',
      destinations: 'Destinations',
      contact: 'Contact',
      translation: 'Traduction'
    },
    home: {
      title: 'Bienvenue au Rwanda',
      subtitle: 'Le pays des Mille Collines',
      button: 'Explorer maintenant'
    },
    about: {
      title: 'À propos du Rwanda',
      description: 'Le Rwanda est un pays d\'Afrique de l\'Est, connu pour ses paysages magnifiques, ses gorilles des montagnes et son riche patrimoine culturel. Il est appelé le pays des Mille Collines en raison de ses belles collines et vallées. Kigali, la capitale, est connue comme l\'une des villes les plus propres d\'Afrique.',
      cards: [
        {
          title: 'Culture',
          desc: 'Le Rwanda possède de belles danses traditionnelles, de la musique et des valeurs culturelles qui attirent des touristes du monde entier.'
        },
        {
          title: 'Tourisme',
          desc: 'Le Rwanda est célèbre pour le parc national des Volcans, le parc national d\'Akagera et la forêt de Nyungwe.'
        },
        {
          title: 'Ville de Kigali',
          desc: 'Kigali est la capitale du Rwanda et est connue pour sa propreté, sa sécurité et son développement moderne.'
        }
      ]
    },
    contact: {
      title: 'Contactez-nous',
      email: 'Email: tembera@gmail.com',
      phone: 'Téléphone: +250 788 262 287'
    },
    services: {
      title: 'Nos Services',
      features: [
        {
          title: 'Guidage touristique',
          desc: 'Des guides professionnels aident les visiteurs à explorer les belles attractions du Rwanda.'
        },
        {
          title: 'Réservation d\'hôtel',
          desc: 'Trouvez et réservez des hôtels confortables à travers le Rwanda.'
        },
        {
          title: 'Assistance voyage',
          desc: 'Obtenez du soutien pour le transport, les plans de voyage et les informations locales.'
        },
        {
          title: 'Visites de parcs nationaux',
          desc: 'Visitez Akagera, Nyungwe et le parc des Volcans en toute simplicité.'
        }
      ],
      whyTitle: 'Pourquoi nous choisir?',
      whyText: 'Tembera U\'Rwanda aide les touristes à découvrir la beauté du Rwanda grâce à des services de voyage fiables, des guides expérimentés et des aventures inoubliables.'
    },
    provinces: {
      north: {
        title: 'Province du Nord',
        intro: 'La province du Nord est célèbre pour le parc national des Volcans, les gorilles de montagne, les montagnes à couper le souffle et les riches expériences culturelles.',
        feature1: 'Parc national des Volcans',
        feature2: 'Gorilles de montagne',
        feature3: 'Magnifiques montagnes',
        whyTitle: 'Pourquoi visiter la province du Nord?',
        whyText: 'La province du Nord abrite les célèbres gorilles de montagne du Rwanda, des montagnes volcaniques et des attractions culturelles uniques.'
      },
      east: {
        title: 'Province de l\'Est',
        intro: 'La province de l\'Est est célèbre pour le parc national d\'Akagera, le tourisme de la faune, les beaux lacs et les vastes paysages qui attirent des visiteurs du monde entier.',
        feature1: 'Parc national d\'Akagera',
        feature2: 'Tourisme de la faune',
        feature3: 'Beaux paysages',
        whyTitle: 'Pourquoi visiter la province de l\'Est?',
        whyText: 'La province de l\'Est offre des expériences animalières incroyables, des vues pittoresques et des opportunités d\'explorer la beauté naturelle du Rwanda.'
      },
      south: {
        title: 'Province du Sud',
        intro: 'La province du Sud est connue pour le parc national de Nyungwe, les plantations de thé, les forêts, les cascades et les beaux paysages.',
        feature1: 'Forêt de Nyungwe',
        feature2: 'Plantations de thé',
        feature3: 'Paysages pittoresques',
        whyTitle: 'Pourquoi visiter la province du Sud?',
        whyText: 'La province du Sud offre des forêts magnifiques, une faune, des plantations de thé, des cascades et des expériences éco-touristiques inoubliables.'
      },
      west: {
        title: 'Province de l\'Ouest',
        intro: 'La province de l\'Ouest est connue pour le lac Kivu, de belles plages, des collines ondulantes, des îles et des vues à couper le souffle qui attirent de nombreux touristes chaque année.',
        feature1: 'Lac Kivu',
        feature2: 'Belles plages',
        feature3: 'Collines pittoresques',
        whyTitle: 'Pourquoi visiter la province de l\'Ouest?',
        whyText: 'La province de l\'Ouest offre des expériences relaxantes au bord du lac, des activités nautiques, de beaux paysages et certaines des vues les plus spectaculaires du Rwanda.'
      },
      kigali: {
        title: 'Ville de Kigali',
        intro: 'Kigali est la capitale du Rwanda et est connue pour sa propreté, ses infrastructures modernes, sa sécurité et sa culture vibrante.',
        feature1: 'Kigali Convention Centre',
        feature2: 'Vues modernes de la ville',
        feature3: 'Tourisme et culture',
        whyTitle: 'Pourquoi visiter Kigali?',
        whyText: 'Kigali offre des attractions modernes, des musées, des centres commerciaux, des restaurants, des expériences culturelles et de beaux paysages urbains.'
      }
    },
    photos: {
      title: 'Galerie de photos',
      description: 'Explorez de belles photos des différentes attractions touristiques du Rwanda.'
    },
    videos: {
      title: 'Vidéos touristiques du Rwanda',
      description: 'Regardez des vidéos présentant la beauté, la faune, la culture et les attractions touristiques du Rwanda.'
    },
    translation: {
      title: 'Services de traduction',
      description: 'Découvrez notre support de traduction pour les voyageurs et les visiteurs au Rwanda.',
      subtitle1: 'Aide en langues locales',
      body1: 'Obtenez de l\'aide en kinyarwanda, anglais, français et plus encore pendant que vous planifiez votre voyage, réservez des tours et profitez de la culture locale.',
      subtitle2: 'Phrases pratiques',
      body2: 'Traduisez des phrases de voyage courantes pour les directions, les repas, le shopping et la sécurité afin de vous sentir en confiance lors de l\'exploration du Rwanda.',
      supportedTitle: 'Langues prises en charge',
      languages: ['Anglais', 'Français', 'Kinyarwanda', 'Allemand'],
      sampleTitle: 'Phrases de voyage exemples',
      phrases: {
        greeting: 'Bonjour, comment puis-je vous aider ?',
        directions: 'Où se trouve le restaurant le plus proche ?',
        booking: 'Je voudrais réserver une visite.',
        safety: 'Est-il sûr de visiter cette zone la nuit ?'
      }
    }
  },
  rw: {
    nav: {
      home: 'Ahabanza',
      about: 'Ibyerekeye',
      services: 'Serivisi',
      gallery: 'Ishusho',
      photos: 'Amafoto',
      videos: 'Video',
      destinations: 'Ahantu',
      contact: 'Twandikire',
      translation: 'Guhindura ururimi'
    },
    home: {
      title: 'Murakaza neza mu Rwanda',
      subtitle: 'Igihugu cy\'Imisozi Igihumbi',
      button: 'Tangira Gusura'
    },
    about: {
      title: 'Ibyerekeye u Rwanda',
      description: 'U Rwanda ni igihugu giherereye muri Afurika y\'Uburasirazuba, kizwi ku misozi myiza, ingagi zo mu misozi, n\'umuco ukize. Gikunze kwitwa Igihugu cy\'Imisozi Igihumbi kubera imisozi n\'ibibaya byacyo byiza. Kigali, umurwa mukuru, uzwi nka umwe mu mijyi isukuye muri Afurika.',
      cards: [
        {
          title: 'Umuco',
          desc: 'U Rwanda rufite imbyino gakondo nziza, umuziki, n\'indangagaciro byakira ba mukerarugendo baturuka impande zose z\'isi.'
        },
        {
          title: 'Ubukerarugendo',
          desc: 'U Rwanda ruzwi cyane ku busitani bwa Volcanoes, Akagera, na Nyungwe.'
        },
        {
          title: 'Umujyi wa Kigali',
          desc: 'Kigali ni umurwa mukuru w\'u Rwanda ukaba uzwiho isuku, umutekano, n\'iterambere rigezweho.'
        }
      ]
    },
    contact: {
      title: 'Twandikire',
      email: 'Email: tembera@gmail.com',
      phone: 'Telefone: +250 788 262 287'
    },
    services: {
      title: 'Serivisi zacu',
      features: [
        {
          title: 'Kuyobora abagenzi',
          desc: 'Abayobozi babigize umwuga bafasha abashyitsi gusura neza ibyiza by\'u Rwanda.'
        },
        {
          title: 'Guhahira amahoteli',
          desc: 'Shaka kandi ubike amahoteri akwiye mu Rwanda hose.'
        },
        {
          title: 'Ubufasha mu ngendo',
          desc: 'Fata ubufasha mu bijyanye n\'ubwikorezi, gahunda z\'ingendo, n\'amakuru y\'aho.'
        },
        {
          title: 'Gusura parike z\'igihugu',
          desc: 'Sura Akagera, Nyungwe na Volcanoes byoroshye.'
        }
      ],
      whyTitle: 'Kuki wahitamo twe?',
      whyText: 'Tembera U\'Rwanda ifasha ba mukerarugendo gusura ubwiza bw\'u Rwanda binyuze mu serivisi z\'ingendo zizewe, abayobozi bafite uburambe, n\'uburambe budasanzwe.'
    },
    provinces: {
      north: {
        title: 'Amajyaruguru',
        intro: 'Amajyaruguru azwiho Parike y\'Igihugu ya Volcanoes, ingagi zo mu misozi, imisozi itangaje, na gahunda z\'umuco zikungahaye.',
        feature1: 'Parike y\'Igihugu ya Volcanoes',
        feature2: 'Ingangagi zo mu misozi',
        feature3: 'Imisozi myiza',
        whyTitle: 'Kuki wasura Amajyaruguru?',
        whyText: 'Amajyaruguru ni ho ingagi z\'umusozi z\'u Rwanda ziba, imisozi ya kirunga, n\'ibikorwa by\'umuco byihariye.'
      },
      east: {
        title: 'Iburasirazuba',
        intro: 'Iburasirazuba rizwi na Parike y\'Igihugu ya Akagera, ubukerarugendo bw\'inyamaswa, ibiyaga byiza, n\'ahantu hanini byakira ba mukerarugendo baturutse impande z\'isi zose.',
        feature1: 'Parike y\'Igihugu ya Akagera',
        feature2: 'Ubukerarugendo bw\'inyamaswa',
        feature3: 'Imisozi myiza',
        whyTitle: 'Kuki wasura Iburasirazuba?',
        whyText: 'Iburasirazuba ritanga uburambe bw\'inyamaswa budasanzwe, ibyiza by\'ubwiza, n\'amahirwe yo gusura ubwiza karemano bw\'u Rwanda.'
      },
      south: {
        title: 'Amajepfo',
        intro: 'Amajepfo azwi na Parike y\'Igihugu ya Nyungwe, ubutaka bw\'icyayi, amashyamba, uruzi rwa mazi, n\'ibibanza by\'ibirunga byiza.',
        feature1: 'Isumo rya Nyungwe',
        feature2: 'Ubutaka bw\'icyayi',
        feature3: 'Imisozi itangaje',
        whyTitle: 'Kuki wasura Amajepfo?',
        whyText: 'Amajepfo atanga amashyamba meza, inyamaswa, ibyayi, amazi, n\'uburambe butazibagirana mu bukerarugendo bw\'ibidukikije.'
      },
      west: {
        title: 'Uburengerazuba',
        intro: 'Uburengerazuba buzwi na Kivu, imigezi myiza, imisozi ihagaze, insengero n\'ahantu nyaburanga byiza byakira ba mukerarugendo buri mwaka.',
        feature1: 'Ikiyaga cya Kivu',
        feature2: 'Ibyiza by\'inyanja',
        feature3: 'Imisozi nziza',
        whyTitle: 'Kuki wasura Uburengerazuba?',
        whyText: 'Uburengerazuba butanga uburambe bw\'ikirere cyo ku kiyaga, ibikorwa byo ku mazi, ibyiza by\'ubutaka, n\'ibice by\'i Rwanda byiza cyane.'
      },
      kigali: {
        title: 'Umujyi wa Kigali',
        intro: 'Kigali ni umujyi mukuru w\'u Rwanda uzwiho isuku, ibikorwa remezo bitunganye, umutekano n\'umuco utoshye.',
        feature1: 'Kigali Convention Centre',
        feature2: 'Ibyiza by\'umujyi bigezweho',
        feature3: 'Ubukerarugendo n\'umuco',
        whyTitle: 'Kuki wasura Kigali?',
        whyText: 'Kigali itanga ahantu hagezweho, inzu ndangamurage, amaduka, resitora, uburambe bw\'umuco, n\'ibyiza by\'umujyi.'
      }
    },
    photos: {
      title: 'Inyandiko z\'amafoto',
      description: 'Sura amafoto meza y\'ahantu hatandukanye mu Rwanda.'
    },
    videos: {
      title: 'Video z\'ubukerarugendo bwa Rwanda',
      description: 'Reba video zigaragaza ubwiza, inyamaswa, umuco n\'ahantu nyaburanga by\'u Rwanda.'
    },
    translation: {
      title: 'Serivisi zo guhindura ururimi',
      description: 'Menya uburyo bwo gufasha mu guhindura indimi ku bashyitsi basura u Rwanda.',
      subtitle1: 'Ubufasha mu ndimi kavukire',
      body1: 'Fata ubufasha mu Kinyarwanda, Icyongereza, Igifaransa n\'izindi mugihe utegura urugendo, ubika ingendo kandi wishimira umuco kavukire.',
      subtitle2: 'Imvugo z\'ingirakamaro',
      body2: 'Hindura imvugo z\'urugendo zisanzwe ku bijyanye n\'inzira, kurya, kugura no kubungabunga umutekano kugira ngo wiyumve neza ucengera u Rwanda.',
      supportedTitle: 'Indimi zishyigikiwe',
      languages: ['Icyongereza', 'Igifaransa', 'Kinyarwanda', 'Igikeri'],
      sampleTitle: 'Imvugo z\'urugendo',
      phrases: {
        greeting: 'Muraho, nakoraho nte ngo ngutere inkunga ?',
        directions: 'Hageze he resitora iri hafi hano ?',
        booking: 'Ndashaka kugura uruzinduko.',
        safety: 'Ese ni amahoro gusura aka gace nijoro ?'
      }
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Services',
      gallery: 'Galerie',
      photos: 'Fotos',
      videos: 'Videos',
      destinations: 'Reiseziele',
      contact: 'Kontakt',
      translation: 'Übersetzung'
    },
    home: {
      title: 'Willkommen in Ruanda',
      subtitle: 'Das Land der Tausend Hügel',
      button: 'Jetzt entdecken'
    },
    about: {
      title: 'Über Ruanda',
      description: 'Ruanda ist ein Land in Ostafrika, bekannt für seine atemberaubenden Landschaften, Berggorillas und sein reiches kulturelles Erbe. Es wird das Land der Tausend Hügel genannt wegen seiner schönen Hügel und Täler. Kigali, die Hauptstadt, gilt als eine der saubersten Städte Afrikas.',
      cards: [
        {
          title: 'Kultur',
          desc: 'Ruanda hat schöne traditionelle Tänze, Musik und kulturelle Werte, die Touristen aus aller Welt anziehen.'
        },
        {
          title: 'Tourismus',
          desc: 'Ruanda ist berühmt für den Volcanoes Nationalpark, den Akagera Nationalpark und den Nyungwe-Wald.'
        },
        {
          title: 'Kigali Stadt',
          desc: 'Kigali ist die Hauptstadt Ruandas und ist bekannt für Sauberkeit, Sicherheit und moderne Entwicklung.'
        }
      ]
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      email: 'Email: tembera@gmail.com',
      phone: 'Telefon: +250 788 262 287'
    },
    services: {
      title: 'Unsere Services',
      features: [
        {
          title: 'Tourführung',
          desc: 'Professionelle Guides helfen Besuchern, die schönen Attraktionen Ruandas zu erkunden.'
        },
        {
          title: 'Hotelbuchung',
          desc: 'Finden und reservieren Sie komfortable Hotels in ganz Ruanda.'
        },
        {
          title: 'Reiseunterstützung',
          desc: 'Erhalten Sie Unterstützung bei Transport, Reiseplanung und lokalen Informationen.'
        },
        {
          title: 'Nationalparkbesuche',
          desc: 'Besuchen Sie Akagera, Nyungwe und den Volcanoes Nationalpark ganz einfach.'
        }
      ],
      whyTitle: 'Warum uns wählen?',
      whyText: 'Tembera U\'Rwanda hilft Touristen, die Schönheit Ruandas durch zuverlässige Reisedienste, erfahrene Guides und unvergessliche Erlebnisse zu entdecken.'
    },
    provinces: {
      north: {
        title: 'Nördliche Provinz',
        intro: 'Die nördliche Provinz ist bekannt für den Volcanoes Nationalpark, Berggorillas, atemberaubende Berge und reiche kulturelle Erlebnisse.',
        feature1: 'Volcanoes Nationalpark',
        feature2: 'Berggorillas',
        feature3: 'Schöne Berge',
        whyTitle: 'Warum die nördliche Provinz besuchen?',
        whyText: 'Die nördliche Provinz beherbergt die berühmten Berggorillas Ruandas, vulkanische Berge und einzigartige kulturelle Attraktionen.'
      },
      east: {
        title: 'Östliche Provinz',
        intro: 'Die östliche Provinz ist bekannt für den Akagera Nationalpark, Wildlife-Tourismus, schöne Seen und weite Landschaften, die Besucher aus der ganzen Welt anziehen.',
        feature1: 'Akagera Nationalpark',
        feature2: 'Wildlife-Tourismus',
        feature3: 'Schöne Landschaften',
        whyTitle: 'Warum die östliche Provinz besuchen?',
        whyText: 'Die östliche Provinz bietet erstaunliche Tierbegegnungen, malerische Ausblicke und Möglichkeiten, die natürliche Schönheit Ruandas zu entdecken.'
      },
      south: {
        title: 'Südliche Provinz',
        intro: 'Die südliche Provinz ist bekannt für den Nyungwe Nationalpark, Teeplantagen, Wälder, Wasserfälle und schöne Landschaften.',
        feature1: 'Nyungwe Wald',
        feature2: 'Teeplantagen',
        feature3: 'Malerische Landschaften',
        whyTitle: 'Warum die südliche Provinz besuchen?',
        whyText: 'Die südliche Provinz bietet atemberaubende Wälder, Tierwelt, Teeplantagen, Wasserfälle und unvergessliche Öko-Tourismus-Erlebnisse.'
      },
      west: {
        title: 'Westliche Provinz',
        intro: 'Die westliche Provinz ist bekannt für den Kivu-See, schöne Strände, sanfte Hügel, Inseln und atemberaubende Ausblicke, die jedes Jahr viele Touristen anziehen.',
        feature1: 'Kivu-See',
        feature2: 'Schöne Strände',
        feature3: 'Malerische Hügel',
        whyTitle: 'Warum die westliche Provinz besuchen?',
        whyText: 'Die westliche Provinz bietet entspannende Erlebnisse am Seeufer, Wassersport, schöne Landschaften und einige der spektakulärsten Ausblicke in Ruanda.'
      },
      kigali: {
        title: 'Stadt Kigali',
        intro: 'Kigali ist die Hauptstadt Ruandas und bekannt für seine Sauberkeit, moderne Infrastruktur, Sicherheit und lebendige Kultur.',
        feature1: 'Kigali Convention Centre',
        feature2: 'Moderne Stadtansichten',
        feature3: 'Tourismus & Kultur',
        whyTitle: 'Warum Kigali besuchen?',
        whyText: 'Kigali bietet moderne Attraktionen, Museen, Einkaufszentren, Restaurants, kulturelle Erlebnisse und schöne Stadtlandschaften.'
      }
    },
    photos: {
      title: 'Fotogalerie',
      description: 'Entdecken Sie schöne Fotos verschiedener Touristenattraktionen in Ruanda.'
    },
    videos: {
      title: 'Ruanda Tourismus-Videos',
      description: 'Sehen Sie sich Videos an, die die Schönheit, Tierwelt, Kultur und touristischen Attraktionen Ruandas zeigen.'
    },
    translation: {
      title: 'Übersetzungsdienste',
      description: 'Entdecken Sie unsere Übersetzungsunterstützung für Reisende und Besucher in Ruanda.',
      subtitle1: 'Hilfe in lokalen Sprachen',
      body1: 'Erhalten Sie Unterstützung in Kinyarwanda, Englisch, Französisch und mehr, während Sie Ihre Reise planen, Touren buchen und die lokale Kultur genießen.',
      subtitle2: 'Praktische Sätze',
      body2: 'Übersetzen Sie häufige Reisesätze für Wegbeschreibungen, Essen, Einkaufen und Sicherheit, damit Sie sich beim Erkunden Ruandas sicher fühlen.',
      supportedTitle: 'Unterstützte Sprachen',
      languages: ['Englisch', 'Französisch', 'Kinyarwanda', 'Deutsch'],
      sampleTitle: 'Beispielsätze',
      phrases: {
        greeting: 'Hallo, wie kann ich Ihnen helfen?',
        directions: 'Wo ist das nächste Restaurant?',
        booking: 'Ich möchte eine Tour buchen.',
        safety: 'Ist es sicher, dieses Gebiet nachts zu besuchen?'
      }
    }
  }
}

export const t = computed(() => translations[language.value] || translations[defaultLang])

export function useI18n() {
  return {
    language,
    t
  }
}
