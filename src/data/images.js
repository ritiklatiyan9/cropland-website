// Stable Unsplash photo IDs — direct CDN, no API key required.
const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`

export const img = {
  // Hero / wide field shots — Indian farmer in field
  heroFarmer: u('photo-1625246333195-78d9c38ad449', 1100),
  heroField:  u('photo-1500382017468-9049fed747ef', 1800),
  heroWide:   u('photo-1625246333195-78d9c38ad449', 2000),

  // Solutions category
  cropProtection: u('photo-1574943320219-553eb213f72d', 900),
  plantNutrition: u('photo-1530021232320-687d8e3dba54', 900),
  bioSolutions:   u('photo-1574323347407-f5e1ad6d020b', 900),
  specialtyAgro:  u('photo-1559563458-527698bf5295',  900),

  // Research
  labResearch: u('photo-1532187863486-abf9dbad1b69', 1200),
  labGloves:   u('photo-1576086213369-97a306d36557', 900),
  whyPortrait: u('photo-1593113598332-cd288d649433', 900),
  facility: u('photo-1542838132-92c53300491e', 1200),
  fields:   u('photo-1592982537447-7440770cbfc9', 1200),

  // Testimonial portraits
  farmer1: u('photo-1599566150163-29194dcaad36', 200),
  farmer2: u('photo-1573496359142-b8d87734a5a2', 200),
  farmer3: u('photo-1607746882042-944635dfe10e', 200),

  // CTA field
  ctaField: u('photo-1464226184884-fa280b87c399', 1400),

  // Product imagery — chosen per crop/application
  pCotton:    u('photo-1601000938259-9e92002320b2', 800),
  pWheat:     u('photo-1574323347407-f5e1ad6d020b', 800),
  pWeed:      u('photo-1599598425947-5f7b56e0adfc', 800),
  pSeedling:  u('photo-1530021232320-687d8e3dba54', 800),
  pSoilRoot:  u('photo-1416879595882-3373a0480b5b', 800),
  pGrapes:    u('photo-1518977676601-b53f82aba655', 800),
  pBollworm:  u('photo-1567306226416-28f0efdc88ce', 800),
  pVineyard:  u('photo-1543158266-0066955047b4', 800),
  pPaddy:     u('photo-1574323347407-f5e1ad6d020b', 800),
  pTomato:    u('photo-1592924357229-91ffdfa1cabc', 800),
  pSprayer:   u('photo-1574943320219-553eb213f72d', 800),
}
