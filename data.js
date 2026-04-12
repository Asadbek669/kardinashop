/* ==============================
   📌 DESCRIPTION
============================== */
const DETAIL_DESC = `Sifatli TO'QIMA qoplamalar quyidagi avtomobillar uchun buyurtma asosida tayyorlanadi:

🚗 COBALT
🚗 LACETTI, GENTRA (MEXANIKA)
🚗 LACETTI, GENTRA (AVTOMAT)
🚗 SPARK
🚐 DAMAS Kamplekt
🚐 DAMAS (2 QATOR – Oldi-o‘rta)
🚐 DAMAS (1 QATOR – Faqat oldi)
🚗 NEXIA 1
🚗 NEXIA 2
🚗 NEXIA 3
🚗 MATIZ
🚚 LABO

✔ Salonni to‘liq himoya qiladi  
✔ Estetik va zamonaviy ko‘rinish beradi  
✔ Bardoshli va sifatli material  
✔ Buyurtma asosida individual tayyorlanadi`;

/* ==============================
   📌 IMAGE BASE
============================== */
const BASE_IMAGE = "https://cdn.fastora.uz/kardina/";

/* ==============================
   📌 BASE PRICE
============================== */
const BASE_PRICE = {
  toqima: 640000,
  fantan: 320000,
  padushka: 335000,
  shatlanka: 510000,
};

/* ==============================
   📌 DAMAS PRICES (QO‘LDA)
============================== */
const DAMAS_PRICES = {
  toqima: {
    komplekt: 750000,
    qator_2: 700000,
    qator_1: 1,
  },
  fantan: {
    komplekt: 400000,
    qator_2: 360000,
    qator_1: 320000,
  },
  padushka: {
    komplekt: 420000,
    qator_2: 380000,
    qator_1: 330000,
  },
  shatlanka: {
    komplekt: 600000,
    qator_2: 560000,
    qator_1: 500000,
  },
};

/* ==============================
   📌 LABO PRICES (YANGI)
============================== */
const LABO_PRICES = {
  toqima: 350000,   // Labo uchun maxsus narx
  fantan: 200000,   // Labo uchun maxsus narx
  padushka: 220000, // Labo uchun maxsus narx
  shatlanka: 300000, // Labo uchun maxsus narx
};
/* ==============================
   📌 FORMAT
============================== */
function formatPrice(value) {
  return value.toLocaleString("uz-UZ") + " so'm";
}

/* ==============================
   📌 PRICE GETTER
============================== */
function getPrice(item, categoryKey, damasType, isLabo = false) {
  // ONIX / TRACKER uchun
  if (item.price) {
    return item.price;
  }

  // LABO uchun tekshiruv
  if (isLabo && LABO_PRICES[categoryKey]) {
    return formatPrice(LABO_PRICES[categoryKey]);
  }

  // DAMAS uchun tekshiruv
  if (damasType) {
    const damas = DAMAS_PRICES?.[categoryKey];
    if (damas) {
      return formatPrice(damas[damasType] || item.basePrice);
    }
  }

  // Oddiy holatda bazaviy narx
  return formatPrice(item.basePrice);
}

/* ==============================
   📌 CATEGORIES
============================== */
const categories = [

  /* ================= TOQIMA ================= */
  {
    id: "toqima",
    name: "TO'QIMA",
    poster: "images/toqima.jpg",
    baseKey: "toqima",
    items: [
      {
        id: "toqima1",
        name: "To'qima 1",
        basePrice: BASE_PRICE.toqima,
        desc: DETAIL_DESC,
        poster: BASE_IMAGE + "toqima/1.jpg"
      },
      {
        id: "toqima2",
        name: "To'qima 2",
        basePrice: BASE_PRICE.toqima,
        desc: DETAIL_DESC,
        poster: BASE_IMAGE + "toqima/2.jpg"
      },
      {
        id: "toqima3",
        name: "To'qima 3",
        basePrice: BASE_PRICE.toqima,
        desc: DETAIL_DESC,
        poster: BASE_IMAGE + "toqima/3.jpg"
      },
      {
        id: "toqima4",
        name: "To'qima 4",
        basePrice: BASE_PRICE.toqima,
        desc: DETAIL_DESC,
        poster: BASE_IMAGE + "toqima/4.jpg"
      },
      {
        id: "toqima5",
        name: "To'qima 5",
        basePrice: BASE_PRICE.toqima,
        desc: DETAIL_DESC,
        poster: BASE_IMAGE + "toqima/5.jpg"
      }
    ]
  },

  /* ================= FANTAN ================= */
  {
    id: "fantan",
    name: "2020 Fantan HB",
    poster: "images/fantan.jpg",
    baseKey: "fantan",
    items: [
      {
        id: "fantan1",
        name: "Fantan 1",
        basePrice: BASE_PRICE.fantan,
        desc: DETAIL_DESC,
        poster: BASE_IMAGE + "fantan/1.jpg"
      },
      {
        id: "fantan2",
        name: "Fantan 2",
        basePrice: BASE_PRICE.fantan,
        desc: DETAIL_DESC,
        poster: BASE_IMAGE + "fantan/2.jpg"
      },
      {
        id: "fantan3",
        name: "Fantan 3",
        basePrice: BASE_PRICE.fantan,
        desc: DETAIL_DESC,
        poster: BASE_IMAGE + "fantan/3.jpg"
      },
      {
        id: "fantan4",
        name: "Fantan 4",
        basePrice: BASE_PRICE.fantan,
        desc: DETAIL_DESC,
        poster: BASE_IMAGE + "fantan/4.jpg"
      },
      {
        id: "fantan5",
        name: "Fantan 5",
        basePrice: BASE_PRICE.fantan,
        desc: DETAIL_DESC,
        poster: BASE_IMAGE + "fantan/5.jpg"
      }	    
    ]
  },

  /* ================= PADUSHKA ================= */
  {
    id: "padushka",
    name: "PADUSHKA",
    poster: "images/padushka.jpg",
    baseKey: "padushka",
	items: [
	  {
		id: "pad1",
		name: "1",
		basePrice: BASE_PRICE.padushka,
		desc: DETAIL_DESC,
		poster: BASE_IMAGE + "padushka/1.jpg"
	  },
	  {
		id: "pad2",
		name: "2",
		basePrice: BASE_PRICE.padushka,
		desc: DETAIL_DESC,
		poster: BASE_IMAGE + "padushka/2.jpg"
	  },
	  {
		id: "pad3",
		name: "3",
		basePrice: BASE_PRICE.padushka,
		desc: DETAIL_DESC,
		poster: BASE_IMAGE + "padushka/3.jpg"
	  },
	  {
		id: "pad4",
		name: "4",
		basePrice: BASE_PRICE.padushka,
		desc: DETAIL_DESC,
		poster: BASE_IMAGE + "padushka/4.jpg"
	  },
	  {
		id: "pad5",
		name: "5",
		basePrice: BASE_PRICE.padushka,
		desc: DETAIL_DESC,
		poster: BASE_IMAGE + "padushka/5.jpg"
	  },
	  {
		id: "pad6",
		name: "6",
		basePrice: BASE_PRICE.padushka,
		desc: DETAIL_DESC,
		poster: BASE_IMAGE + "padushka/6.jpg"
	  },
	  {
		id: "pad7",
		name: "7",
		basePrice: BASE_PRICE.padushka,
		desc: DETAIL_DESC,
		poster: BASE_IMAGE + "padushka/7.jpg"
	  },
	  {
		id: "pad8",
		name: "8",
		basePrice: BASE_PRICE.padushka,
		desc: DETAIL_DESC,
		poster: BASE_IMAGE + "padushka/8.jpg"
	  },
	  {
		id: "pad9",
		name: "9",
		basePrice: BASE_PRICE.padushka,
		desc: DETAIL_DESC,
		poster: BASE_IMAGE + "padushka/9.jpg"
	  }
	]
  },

  /* ================= SHATLANKA ================= */
  {
    id: "shatlanka",
    name: "SHATLANKA",
    poster: "images/shatlanka.jpg",
    baseKey: "shatlanka",
    items: [
      {
        id: "sha1",
        name: "Shatlanka 1",
        basePrice: BASE_PRICE.shatlanka,
        desc: DETAIL_DESC,
        poster: BASE_IMAGE + "shatlanka/1.jpg"
      },
      {
        id: "sha2",
        name: "Shatlanka 2",
        basePrice: BASE_PRICE.shatlanka,
        desc: DETAIL_DESC,
        poster: BASE_IMAGE + "shatlanka/2.jpg"
      }
    ]
  },

  /* ================= ONIX ================= */
  {
    id: "onix",
    name: "ONIX",
    poster: "images/onix.jpg",
    items: [
      {
        id: "onix1",
        name: "Onix 1",
        price: "750 000 so'm",
        desc: "Faqat Onix mashinalari uchun mavjud",
        poster: BASE_IMAGE + "onix/1.jpg"
      },
      {
        id: "onix2",
        name: "Onix 2",
        price: "700 000 so'm",
        desc: "Faqat Onix mashinalari uchun mavjud",
        poster: BASE_IMAGE + "onix/2.jpg"
      },
      {
        id: "onix3",
        name: "Onix 3",
        price: "380 000 so'm",
        desc: "Faqat Onix mashinalari uchun mavjud",
        poster: BASE_IMAGE + "onix/3.jpg"
      },
      {
        id: "onix4",
        name: "Onix 4",
        price: "700 000 so'm",
        desc: "Faqat Onix mashinalari uchun mavjud",
        poster: BASE_IMAGE + "onix/4.jpg"
      }
    ]
  },

  /* ================= TRACKER ================= */
  {
    id: "tracker",
    name: "TRACKER 2",
    poster: "images/track.jpg",
    items: [
      {
        id: "track1",
        name: "Tracker 2 (Premium)",
        price: "750 000 so'm",
        desc: "Faqat Tracker 2 mashinalari uchun mavjud",
        poster: BASE_IMAGE + "track/1.jpg"
      },
      {
        id: "track2",
        name: "Tracker 2 (Standart)",
        price: "680 000 so'm",
        desc: "Faqat Tracker 2 mashinalari uchun mavjud",
        poster: BASE_IMAGE + "track/2.jpg"
      },
      {
        id: "track3",
        name: "Tracker 2 (Classic)",
        price: "680 000 so'm",
        desc: "Faqat Tracker 2 mashinalari uchun mavjud",
        poster: BASE_IMAGE + "track/3.jpg"
      },
      {
        id: "track4",
        name: "Tracker 2 (Basic)",
        price: "380 000 so'm",
        desc: "Faqat Tracker 2 mashinalari uchun mavjud",
        poster: BASE_IMAGE + "track/4.jpg"
      },
      {
        id: "track5",
        name: "Tracker 2 (Comfort)",
        price: "680 000 so'm",
        desc: "Faqat Tracker 2 mashinalari uchun mavjud",
        poster: BASE_IMAGE + "track/5.jpg"
      }
    ]
  }

];

/* ==============================
   📌 GLOBAL EXPORT (MUHIM!)
============================== */
// Bularni global qilish uchun
if (typeof window !== 'undefined') {
  window.LABO_PRICES = LABO_PRICES; // Qo'shildi
  window.categories = categories;
  window.DAMAS_PRICES = DAMAS_PRICES;
  window.BASE_PRICE = BASE_PRICE;
  window.BASE_IMAGE = BASE_IMAGE;
  window.formatPrice = formatPrice;
  window.getPrice = getPrice;
  window.DETAIL_DESC = DETAIL_DESC;
}
