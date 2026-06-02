// ───────────────────────────────────────────────────────────────────────────
// Local SEO landing pages — one entry per target market. Content is written to
// be genuinely UNIQUE per location (passes the "swap test": you cannot just
// change the city name and have it still read correctly). Each page targets the
// query "pesticide company in <city>" and related crop-protection intents.
//
// `productCodes` reference entries in data/products.js so the featured-product
// grid stays in sync with the catalogue.
// ───────────────────────────────────────────────────────────────────────────

export const locations = [
  {
    slug: 'muzaffarnagar',
    city: 'Muzaffarnagar',
    region: 'Western Uttar Pradesh',
    isHome: true,
    metaTitle: 'Pesticide Company in Muzaffarnagar — Cropland Agritech',
    metaDescription:
      'Cropland Agritech is a CIB&RC-registered pesticide manufacturer based in Pinna, Muzaffarnagar. Insecticides, herbicides, fungicides & PGRs for sugarcane, wheat and paddy — dealer supply across Muzaffarnagar district. Call +91 97603 02690.',
    h1: 'Pesticide Company in Muzaffarnagar',
    lede: 'We are based right here. Cropland Agritech manufactures its full crop-protection range from Pinna, Muzaffarnagar — so growers and dealers across the district get genuine, CIB&RC-registered agrochemicals direct from the source.',
    intro: [
      'Muzaffarnagar sits in the heart of India’s sugarcane bowl, where the cane crop runs back-to-back with wheat, paddy and mustard through the year. That intensity puts relentless pressure on a farmer’s spray programme — top borer and root borer in cane, aphids and rusts in wheat, stem borer in paddy. As a manufacturer headquartered in the district, we build and stock products for exactly these problems.',
      'Buying from a local pesticide company means no long supply chains, fresh stock, and a technical team you can actually reach during the season. Our desk in Pinna handles product questions, dealership enquiries and bulk orders for the whole of Muzaffarnagar.',
    ],
    crops: ['Sugarcane', 'Wheat', 'Paddy', 'Mustard', 'Fodder & Berseem'],
    nearbyAreas: ['Khatauli', 'Budhana', 'Jansath', 'Charthawal', 'Shahpur', 'Purquazi', 'Khatauli', 'Sisauli'],
    problems: [
      { title: 'Sugarcane top & root borer', text: 'Soil and stem-boring pests that hollow out cane and cut tonnage. Controlled with granular and systemic chemistry placed at the root zone.' },
      { title: 'Wheat aphids & yellow rust', text: 'Late-season sucking pests and rust pressure that hit grain fill — managed with neonicotinoid sprays and triazole fungicides.' },
      { title: 'Paddy stem borer & sheath blight', text: 'The classic kharif paddy complex around the Kali and Hindon belts — handled with diamide insecticides and validamycin/hexaconazole fungicides.' },
    ],
    productCodes: ['CL-008', 'CL-013', 'CL-006', 'CL-023', 'CL-005', 'CL-055'],
    highlights: [
      { title: 'Made in Muzaffarnagar', text: 'Our manufacturing and dispatch run from Pinna — local dealers get fresh batches without freight delays.' },
      { title: 'Same-district support', text: 'Field and technical queries answered on WhatsApp and call, Mon–Sat, in Hindi.' },
      { title: 'Sugarcane-belt range', text: 'A product line tuned to the cane–wheat–paddy rotation that defines this district.' },
    ],
    faqs: [
      { q: 'Where is Cropland Agritech located in Muzaffarnagar?', a: 'Our office and works are at Pinna, Muzaffarnagar, Uttar Pradesh 251001. You can reach us on +91 97603 02690 or WhatsApp the same number.' },
      { q: 'Do you supply pesticides to dealers in Muzaffarnagar district?', a: 'Yes. We supply distributors and retail dealers across Muzaffarnagar, Khatauli, Budhana, Jansath and the surrounding tehsils. Contact us for dealership terms and the current price list.' },
      { q: 'Are your products registered and genuine?', a: 'Every product is registered with the Central Insecticides Board & Registration Committee (CIB&RC) and carries its CIR registration number on the label and on each product page.' },
      { q: 'Which pesticides do you recommend for sugarcane in Muzaffarnagar?', a: 'For the cane belt we commonly recommend soil-applied granules such as Terragard GR and Fipgard GR for borers, plus Tripleweed WDG for complex weed flora. Dosage depends on crop stage — ask our technical desk.' },
    ],
  },
  {
    slug: 'meerut',
    city: 'Meerut',
    region: 'Western Uttar Pradesh',
    metaTitle: 'Pesticide Company in Meerut — Cropland Agritech',
    metaDescription:
      'Looking for a pesticide company in Meerut? Cropland Agritech supplies CIB&RC-registered insecticides, herbicides and fungicides for sugarcane, wheat and vegetables across Meerut, Mawana, Sardhana and Hastinapur. Call +91 97603 02690.',
    h1: 'Pesticide Company Serving Meerut',
    lede: 'Cropland Agritech supplies its full crop-protection range to dealers and farmers across the Meerut division — manufactured nearby in Muzaffarnagar and delivered fresh into the Meerut market.',
    intro: [
      'Meerut’s farms run on a tight sugarcane–wheat rotation alongside a strong vegetable and fodder economy feeding the city and the wider NCR. Each of these crops carries its own pest and disease load, from cane borers in the Mawana and Sardhana cane belts to fruit and shoot borer in the vegetable plots around Modipuram and Daurala.',
      'Because we manufacture just up the road in Muzaffarnagar, dealers in Meerut get a short, reliable supply line and direct technical backup — not a number that goes to a far-away call centre. Our team helps build season programmes for the specific crops grown across the division.',
    ],
    crops: ['Sugarcane', 'Wheat', 'Vegetables', 'Fodder', 'Mango'],
    nearbyAreas: ['Mawana', 'Sardhana', 'Hastinapur', 'Modipuram', 'Daurala', 'Kithore', 'Parikshitgarh'],
    problems: [
      { title: 'Cane borers in the Mawana belt', text: 'Early-shoot and top borer in the heavy cane stretches north of Meerut — managed with soil granules and systemic combinations at tillering.' },
      { title: 'Vegetable fruit & shoot borer', text: 'Brinjal, okra and cucurbit growers around Daurala and Modipuram fight borers and whitefly — controlled with emamectin, diamides and selective anti-feedants.' },
      { title: 'Wheat weed flora & rust', text: 'Broadleaf weeds and rust in the rabi wheat crop — handled with 2,4-D based herbicides and strobilurin–triazole fungicides.' },
    ],
    productCodes: ['CL-008', 'CL-037', 'CL-009', 'CL-023', 'CL-011', 'CL-005'],
    highlights: [
      { title: 'Short supply line', text: 'Stock ships from our Muzaffarnagar works into Meerut without long-haul freight or ageing inventory.' },
      { title: 'Vegetable-belt expertise', text: 'Programmes for brinjal, okra, cucurbits and chilli grown for the Meerut and NCR markets.' },
      { title: 'Dealer partnership', text: 'Margins, point-of-sale support and technical literature for Meerut retailers and distributors.' },
    ],
    faqs: [
      { q: 'Does Cropland Agritech supply pesticides in Meerut?', a: 'Yes. We supply dealers and farmers across Meerut city, Mawana, Sardhana, Hastinapur and the surrounding blocks from our manufacturing base in nearby Muzaffarnagar. Call +91 97603 02690 for supply and dealership.' },
      { q: 'Can I become a Cropland dealer in Meerut?', a: 'We are expanding our dealer network across the Meerut division. Send your firm details and area through the contact form or WhatsApp and our sales team will share dealership terms.' },
      { q: 'Which products suit vegetable growers near Meerut?', a: 'For fruit and shoot borer and sucking pests we recommend Emaza (emamectin benzoate) and Hopperfin (pymetrozine), with copper and strobilurin fungicides for disease cover. Final dosage depends on crop and stage.' },
    ],
  },
  {
    slug: 'lucknow',
    city: 'Lucknow',
    region: 'Central Uttar Pradesh',
    metaTitle: 'Pesticide Company in Lucknow — Cropland Agritech',
    metaDescription:
      'Cropland Agritech supplies CIB&RC-registered pesticides, fungicides and PGRs to dealers and farmers across Lucknow — mango (Malihabad), mentha, vegetables and paddy. Dealership enquiries welcome. Call +91 97603 02690.',
    h1: 'Pesticide Company Serving Lucknow',
    lede: 'From the Malihabad mango belt to the mentha and vegetable farms ringing the capital, Cropland Agritech supplies dealers and growers across the Lucknow region with a complete, CIB&RC-registered crop-protection range.',
    intro: [
      'Lucknow’s agriculture is distinctly different from the western cane districts. The Malihabad and Kakori belt is famous for Dussehri mango, the region is one of India’s biggest mentha (menthol mint) producers, and there is a steady year-round vegetable and paddy economy feeding the city. Each of these needs a specialised programme — mango hopper and anthracnose control, mint pest management, and disease cover for vegetables.',
      'We carry the fungicides, plant growth regulators and selective insecticides these high-value crops demand, and back them with technical guidance for orchard and mentha growers. Dealers across the Lucknow district can stock the full range through our distribution team.',
    ],
    crops: ['Mango (Malihabad)', 'Mentha / Mint', 'Vegetables', 'Paddy', 'Wheat'],
    nearbyAreas: ['Malihabad', 'Kakori', 'Mohanlalganj', 'Bakshi Ka Talab', 'Chinhat', 'Gosainganj', 'Itaunja'],
    problems: [
      { title: 'Mango hopper, mealybug & anthracnose', text: 'The Malihabad orchard belt needs precise hopper and disease control at flowering and fruit set — managed with neonicotinoids and systemic + contact fungicides.' },
      { title: 'Mentha (mint) pest & weed load', text: 'Mint demands clean weed control and protection from leaf-eating and sucking pests without tainting oil quality — handled with selective herbicides and soft insecticides.' },
      { title: 'Vegetable & paddy disease', text: 'Blights, powdery and downy mildew in peri-urban vegetable plots, and sheath blight in paddy — covered by our azoxystrobin, copper and hexaconazole range.' },
    ],
    productCodes: ['CL-031', 'CL-021', 'CL-055', 'CL-053', 'CL-037', 'CL-045'],
    highlights: [
      { title: 'Horticulture-ready range', text: 'Fungicides and PGRs for the Malihabad mango belt and the region’s mentha and vegetable crops.' },
      { title: 'Capital-region distribution', text: 'Supply for dealers across Lucknow district and the surrounding central-UP markets.' },
      { title: 'Crop-specific advice', text: 'Spray-window and dosage guidance for orchard, mint and vegetable growers.' },
    ],
    faqs: [
      { q: 'Is Cropland Agritech available in Lucknow?', a: 'Yes. We supply pesticides, fungicides and growth regulators to dealers and farmers across the Lucknow district, including the Malihabad and Kakori belt, from our manufacturing base in Uttar Pradesh. Call +91 97603 02690.' },
      { q: 'Do you have products for mango orchards near Malihabad?', a: 'Yes. We recommend Thiagold (thiamethoxam) for mango hopper, Azodif Star (azoxystrobin + difenoconazole) and copper fungicides for anthracnose and powdery mildew, and Growmore GA for fruit set. Talk to our team for an orchard schedule.' },
      { q: 'Can dealers in Lucknow stock Cropland products?', a: 'We welcome dealership enquiries from Lucknow and central UP. Share your firm and location via the contact form or WhatsApp for terms and the price list.' },
    ],
  },
  {
    slug: 'west-up',
    city: 'Western Uttar Pradesh',
    shortCity: 'West UP',
    region: 'Uttar Pradesh',
    metaTitle: 'Pesticide Company in West UP — Cropland Agritech',
    metaDescription:
      'Cropland Agritech is a Western UP pesticide manufacturer based in Muzaffarnagar, supplying insecticides, herbicides and fungicides across Saharanpur, Shamli, Baghpat, Bijnor, Meerut and Bulandshahr. Dealer supply across the sugarcane belt. Call +91 97603 02690.',
    h1: 'Pesticide Company in Western Uttar Pradesh',
    lede: 'Cropland Agritech is a Western UP company through and through — we manufacture in Muzaffarnagar and supply the entire sugarcane-and-wheat heartland of the region with genuine, registered crop-protection products.',
    intro: [
      'Western Uttar Pradesh is the most intensively farmed sugarcane region in the country, a contiguous belt running through Saharanpur, Muzaffarnagar, Shamli, Baghpat, Meerut, Bijnor and Bulandshahr. Cane shares the calendar with wheat, paddy, mustard, fodder and a growing vegetable economy — a rotation that keeps pest and disease pressure high in every season.',
      'As a manufacturer rooted in this belt, we understand its crop calendar and its problems first-hand. We supply distributors and dealers across all the major West-UP districts with a full range built for the cane–wheat–paddy system, backed by a technical team that speaks the region’s agriculture.',
    ],
    crops: ['Sugarcane', 'Wheat', 'Paddy', 'Mustard', 'Vegetables', 'Fodder'],
    nearbyAreas: ['Saharanpur', 'Shamli', 'Baghpat', 'Bijnor', 'Meerut', 'Bulandshahr', 'Hapur', 'Moradabad'],
    problems: [
      { title: 'Sugarcane borer complex', text: 'Top, root and early-shoot borers across the entire cane belt — controlled with soil granules and systemic combinations placed at the root zone.' },
      { title: 'Wheat & mustard rabi pests', text: 'Aphids, rust and broadleaf weeds in the winter cereals and oilseeds — managed with neonicotinoids, triazoles and selective herbicides.' },
      { title: 'Kharif paddy complex', text: 'Stem borer, leaf folder, plant hopper and sheath blight across the paddy districts — handled with diamides, neonicotinoids and validamycin/hexaconazole.' },
    ],
    productCodes: ['CL-008', 'CL-013', 'CL-006', 'CL-005', 'CL-023', 'CL-010'],
    highlights: [
      { title: 'Regional manufacturer', text: 'Built and dispatched from Muzaffarnagar, at the centre of the West-UP cane belt.' },
      { title: 'Belt-wide distribution', text: 'Dealer and distributor supply across Saharanpur, Shamli, Baghpat, Bijnor, Meerut and beyond.' },
      { title: 'Calendar-matched range', text: 'A catalogue tuned to the sugarcane–wheat–paddy rotation that defines Western UP.' },
    ],
    faqs: [
      { q: 'Which districts in Western UP does Cropland Agritech serve?', a: 'We supply dealers and farmers across Muzaffarnagar, Saharanpur, Shamli, Baghpat, Meerut, Bijnor, Bulandshahr, Hapur and the surrounding West-UP districts from our base in Muzaffarnagar.' },
      { q: 'Are you a manufacturer or a reseller?', a: 'We are a manufacturer. Cropland Agritech produces its own CIB&RC-registered range, so dealers buy direct from the source with fresh stock and full technical support.' },
      { q: 'How do I get dealership for my district in West UP?', a: 'Send your firm name, district and area through the contact form or WhatsApp +91 97603 02690. Our sales team will share dealership terms and the current price list for your region.' },
    ],
  },
]

export const getLocationBySlug = (s) => locations.find((l) => l.slug === s)
