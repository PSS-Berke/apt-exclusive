export interface Size {
  name: string;
  dimensions: string;
  price: number;
  inStock: boolean;
}

export interface FirmnessOption {
  level: string;
  description: string;
  recommended: string[];
}

export interface ComponentDetail {
  name: string;
  description: string;
  materials: string;
}

export interface Material {
  name: string;
  source: string;
  certification: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  title: string;
  content: string;
  sleepPosition: string;
  verified: boolean;
  date: string;
  helpful: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: 'abt' | 'sleep6-home';
  type: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  images: string[];
  sizes: Size[];
  firmness: FirmnessOption[];
  selectedFirmness: string;
  features: string[];
  bestFor: string[];
  components: ComponentDetail[];
  materials: Material[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'luna',
    name: 'Luna',
    brand: 'abt',
    type: 'Foam',
    tagline: 'The essentials of comfort and support',
    description: 'The Luna delivers essential comfort at an accessible price point. With 3 carefully designed layers and a foam support core, this mattress provides the foundation for quality sleep without unnecessary complexity.',
    price: 898,
    originalPrice: 1296,
    rating: 4.8,
    reviewCount: 1200,
    images: [
      '/images/products/luna-1.png',
      '/images/products/luna/luna-2.png',
      '/images/products/luna/luna-3.png',
    ],
    sizes: [
      { name: 'Twin', dimensions: '38" x 75"', price: 748, inStock: true },
      { name: 'Twin XL', dimensions: '38" x 80"', price: 798, inStock: true },
      { name: 'Full', dimensions: '54" x 75"', price: 698, inStock: true },
      { name: 'Queen', dimensions: '60" x 80"', price: 898, inStock: true },
      { name: 'King', dimensions: '76" x 80"', price: 1048, inStock: true },    ],
    firmness: [
      { level: 'Soft', description: 'Plush, pressure-relieving comfort', recommended: ['Side sleepers', 'Lighter body types'] },
      { level: 'Medium', description: 'Balanced support and comfort', recommended: ['All sleep positions', 'Couples'] },
      { level: 'Firm', description: 'Maximum support, minimal sink', recommended: ['Back sleepers', 'Stomach sleepers'] },
    ],
    selectedFirmness: 'Medium',
    features: [
      '3-layer construction',
      'Foam support core',
      '100% Fiber Glass Free',
      'CertiPUR-US certified foams',
      'Breathable cover',
      'Made in the USA',
    ],
    bestFor: ['Value seekers', 'Guest rooms', 'First mattress buyers'],
    components: [
      { name: 'Stretch Knit Breathable Zippered Cover', description: 'Soft, breathable stretch knit cover allows airflow and easy removal for washing', materials: 'Stretch knit fabric' },
      { name: 'ResponseGel Technology', description: 'Gel-infused layer provides pressure relief and temperature regulation', materials: 'ResponseGel foam' },
      { name: 'CoolFlow Visco', description: 'Open-cell memory foam promotes airflow for cooler sleep', materials: 'CoolFlow memory foam' },
      { name: '7-inch High Density Body Support Core', description: 'Durable high-density foam core provides lasting support and stability', materials: 'HD polyurethane foam' },
    ],
    materials: [
      { name: 'Stretch Knit Cover', source: 'North Carolina, USA', certification: 'Breathable', description: 'Soft, breathable stretch knit fabric for comfort' },
      { name: 'Comfort Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Responsive foam for pressure relief' },
      { name: 'Support Foam', source: 'North Carolina, USA', certification: 'CertiPUR-US', description: 'High-density base for durability' },
    ],
  },
  {
    id: '2',
    slug: 'mystic',
    name: 'Mystic',
    brand: 'abt',
    type: 'Foam',
    tagline: 'Balances affordability and comfort',
    description: 'The Mystic strikes the perfect balance between value and performance. Its 3-layer design with a motion-isolating core ensures undisturbed sleep for you and your partner.',
    price: 1348,
    originalPrice: 1696,
    rating: 4.8,
    reviewCount: 1500,
    images: [
      '/images/products/mystic-1.png',
'/images/products/mystic/mystic-3.png',
    ],
    sizes: [
      { name: 'Twin', dimensions: '38" x 75"', price: 848, inStock: true },
      { name: 'Twin XL', dimensions: '38" x 80"', price: 898, inStock: true },
      { name: 'Full', dimensions: '54" x 75"', price: 1148, inStock: true },
      { name: 'Queen', dimensions: '60" x 80"', price: 1348, inStock: true },
      { name: 'King', dimensions: '76" x 80"', price: 1598, inStock: true },    ],
    firmness: [
      { level: 'Soft', description: 'Plush comfort with motion isolation', recommended: ['Side sleepers', 'Lighter body types'] },
      { level: 'Medium', description: 'Balanced support and comfort', recommended: ['All sleep positions', 'Couples'] },
      { level: 'Firm', description: 'Supportive feel with motion isolation', recommended: ['Back sleepers', 'Stomach sleepers'] },
    ],
    selectedFirmness: 'Medium',
    features: [
      '3-layer construction',
      'Motion-isolating core',
      '100% Fiber Glass Free',
      'Zero motion transfer',
      'CertiPUR-US certified foams',
      'Made in the USA',
    ],
    bestFor: ['Couples', 'Light sleepers', 'Budget-conscious'],
    components: [
      { name: 'Support Core', description: 'Motion-isolating core absorbs movement so partners sleep undisturbed', materials: 'Viscoelastic foam' },
      { name: 'Comfort Layer', description: 'Responsive comfort layer provides pressure relief and contouring', materials: 'Memory foam' },
      { name: 'Surface & Cover', description: 'Soft, breathable cover for temperature regulation', materials: 'Breathable fabric blend' },
    ],
    materials: [
      { name: 'Stretch Knit Cover', source: 'North Carolina, USA', certification: 'Breathable', description: 'Soft, breathable stretch knit fabric for comfort' },
      { name: 'Memory Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Motion-isolating comfort layer' },
      { name: 'Viscoelastic Foam', source: 'North Carolina, USA', certification: 'CertiPUR-US', description: 'Motion-absorbing support core' },
    ],
  },
  {
    id: '3',
    slug: 'fak-cosmos',
    name: 'FAK Cosmos',
    brand: 'abt',
    type: 'Luxury Foam',
    tagline: 'Maximum comfort with premium materials',
    description: 'The FAK Cosmos is a premium all-foam mattress engineered across five distinct layers. The Breathable Flow6 Protector, Bio Plus Cooling Gel, and Airflow Memory Foam work in concert to actively dissipate heat — while the Enduro Layer delivers hypo-allergenic pressure relief and the Sleep6 Adaptive HD Core locks in motion isolation from below.',
    price: 2148,
    originalPrice: 2696,
    rating: 4.9,
    reviewCount: 1800,
    images: [
      '/images/products/fak-cosmos-1.png',
      '/images/products/fak-cosmos/fak-cosmos-2.png',
      '/images/products/fak-cosmos/fak-cosmos-3.png',
    ],
    sizes: [
      { name: 'Twin', dimensions: '38" x 75"', price: 1348, inStock: true },
      { name: 'Twin XL', dimensions: '38" x 80"', price: 1528, inStock: true },
      { name: 'Full', dimensions: '54" x 75"', price: 1748, inStock: true },
      { name: 'Queen', dimensions: '60" x 80"', price: 2148, inStock: true },
      { name: 'King', dimensions: '76" x 80"', price: 2448, inStock: true },    ],
    firmness: [
      { level: 'Soft', description: 'Plush luxury comfort', recommended: ['Side sleepers', 'Lighter body types'] },
      { level: 'Medium', description: 'Balanced luxury comfort', recommended: ['All sleep positions', 'Couples'] },
      { level: 'Firm', description: 'Supportive luxury feel', recommended: ['Back sleepers', 'Stomach sleepers'] },
    ],
    selectedFirmness: 'Medium',
    features: [
      'Breathable Flow6 Mattress Protector',
      'Bio Plus Cooling Gel — high density, full responsiveness',
      'Enduro Layer — hypo-allergenic latex alternative',
      'Airflow Memory Foam — system-wide heat dissipation',
      'Sleep6 Adaptive HD Core — motion isolation',
      '100% Fiber Glass Free',
      'CertiPUR-US certified foams',
      'Made in the USA',
    ],
    bestFor: ['Hot sleepers', 'Motion-sensitive sleepers', 'Allergy-conscious sleepers', 'Luxury foam seekers'],
    components: [
      { name: 'Breathable Flow6 Mattress Protector', description: 'Flow6 fabric with recessed zipper and protective fire retardant sock — breathable outer shell that keeps the mattress hygienic without trapping heat.', materials: 'Flow6 fabric + fire retardant sock' },
      { name: 'Bio Plus Cooling Gel', description: 'High-density cooling gel layer provides full responsiveness while actively drawing heat away from the sleep surface.', materials: 'High-density Bio Plus gel foam' },
      { name: 'Enduro Layer', description: 'A hypo-allergenic latex alternative with less bounce and reduced compression — the pressure-relieving feel of latex with zero allergen risk.', materials: 'Enduro foam (latex alternative)' },
      { name: 'Airflow Memory Foam', description: 'Open-cell airflow memory foam allows all layers to work together in dissipating heat — preventing the warmth buildup that disrupts deep sleep.', materials: 'Airflow open-cell memory foam' },
      { name: 'Sleep6 Adaptive HD Core', description: 'High-density foundation specifically engineered for motion isolation — absorbing movement at the source so it never transfers across the mattress.', materials: 'HD polyurethane foam (CertiPUR-US)' },
    ],
    materials: [
      { name: 'Stretch Knit Cover', source: 'USA', certification: 'Breathable', description: 'Breathable Flow6 fabric with recessed zipper and fire retardant sock.' },
      { name: 'Bio Plus Cooling Gel', source: 'USA', certification: 'CertiPUR-US', description: 'High-density cooling gel for full responsiveness and heat dispersal.' },
      { name: 'Enduro Foam', source: 'USA', certification: 'CertiPUR-US', description: 'Hypo-allergenic latex alternative with reduced bounce and compression.' },
      { name: 'Airflow Memory Foam', source: 'USA', certification: 'CertiPUR-US', description: 'Open-cell memory foam enabling system-wide heat dissipation.' },
      { name: 'Adaptive HD Core', source: 'USA', certification: 'CertiPUR-US', description: 'High-density motion-isolating foundation foam.' },
    ],
  },
  {
    id: '4',
    slug: 'cosmos-hybrid',
    name: 'Cosmos Hybrid',
    brand: 'abt',
    type: 'Hybrid',
    tagline: 'Ultimate comfort with zero motion transfer',
    description: 'The Cosmos Hybrid is our flagship mattress with 7 precision-engineered layers. Combining premium foams with pocketed coils, it delivers ultimate comfort with zero motion transfer and complete pressure relief.',
    price: 2448,
    originalPrice: 2696,
    rating: 4.9,
    reviewCount: 2200,
    images: [
      '/images/products/cosmos-hybrid/CosmosHybrid-8.jpg',
      '/images/products/cosmos-hybrid/COSMOS_1.jpg',
      '/images/products/cosmos-hybrid/CosmosHybrid-12.jpg',
      '/images/products/cosmos-hybrid/CosmosHybrid-13.jpg',
    ],
    sizes: [
      { name: 'Twin', dimensions: '38" x 75"', price: 1348, inStock: true },
      { name: 'Twin XL', dimensions: '38" x 80"', price: 1828, inStock: true },
      { name: 'Full', dimensions: '54" x 75"', price: 1848, inStock: true },
      { name: 'Queen', dimensions: '60" x 80"', price: 2448, inStock: true },
      { name: 'King', dimensions: '76" x 80"', price: 2748, inStock: true },    ],
    firmness: [
      { level: 'Soft', description: 'Plush comfort with coil support', recommended: ['Side sleepers', 'Lighter body types'] },
      { level: 'Medium', description: 'Balanced hybrid comfort', recommended: ['All sleep positions', 'Couples'] },
      { level: 'Firm', description: 'Supportive hybrid feel', recommended: ['Back sleepers', 'Stomach sleepers'] },
    ],
    selectedFirmness: 'Medium',
    features: [
      '7-layer construction',
      'Zero motion transfer',
      'Pressure point relief',
      'Pocketed coil support system',
      '100% Fiber Glass Free',
      'Made in the USA',
    ],
    bestFor: ['Couples', 'Side sleepers', 'Back pain sufferers', 'Hot sleepers'],
    components: [
      { name: 'Base Layer', description: 'Foundation foam provides durability and stability', materials: 'High-density base foam' },
      { name: 'Support Core', description: 'Individually wrapped coils provide targeted support and motion isolation', materials: 'Pocketed coil system' },
      { name: 'Coil Encasement', description: 'Reinforced edge support for full-surface use', materials: 'HD foam perimeter' },
      { name: 'Transition Layer', description: 'Buffers coils from comfort layers for smooth feel', materials: 'Transition foam' },
      { name: 'Memory Foam Layer', description: 'Pressure-relieving memory foam contours to your body', materials: 'Viscoelastic memory foam' },
      { name: 'Comfort Layer', description: 'Responsive top comfort layer for cushioning', materials: 'Gel-infused foam' },
      { name: 'Surface & Cover', description: 'Premium quilted cover for luxurious feel', materials: 'Premium quilted fabric' },
    ],
    materials: [
      { name: 'Stretch Knit Cover', source: 'South Carolina, USA', certification: 'Breathable', description: 'Premium quilted stretch knit fabric for comfort' },
      { name: 'Gel Comfort Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Cooling gel-infused comfort layer' },
      { name: 'Memory Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Pressure-relieving viscoelastic foam' },
      { name: 'Pocketed Coils', source: 'Ohio, USA', certification: 'ISO 9001', description: 'Individually wrapped coils for support' },
      { name: 'HD Base Foam', source: 'North Carolina, USA', certification: 'CertiPUR-US', description: 'Durable foundation layer' },
    ],
  },
  {
    id: '5',
    slug: 'insatiable',
    name: 'Insatiable',
    brand: 'abt',
    type: 'Luxury Hybrid',
    tagline: 'The absolute premium sleep experience',
    description: 'The Insatiable is for those who refuse to compromise. Our most advanced construction — combining premium natural materials, a cooling gel system, and a precision pocketed coil core — delivers a sleep experience so complete, nothing else will do.',
    price: 1799,
    originalPrice: 3598,
    rating: 4.9,
    reviewCount: 0,
    images: [
      '/images/products/Insatiable/ChatGPT Image Feb 19, 2026, 11_05_05 PM.png',
      '/images/products/Insatiable/Insatiable_4 (1).jpg',
    ],
    sizes: [
      { name: 'Twin', dimensions: '38" x 75"', price: 1349, inStock: true },
      { name: 'Twin XL', dimensions: '38" x 80"', price: 1449, inStock: true },
      { name: 'Full', dimensions: '54" x 75"', price: 1649, inStock: true },
      { name: 'Queen', dimensions: '60" x 80"', price: 1799, inStock: true },
      { name: 'King', dimensions: '76" x 80"', price: 2199, inStock: true },    ],
    firmness: [
      { level: 'Soft', description: 'Ultimate plush luxury with full coil support', recommended: ['Side sleepers', 'Lighter body types'] },
      { level: 'Medium', description: 'The perfect balance of luxury and support', recommended: ['All sleep positions', 'Couples'] },
      { level: 'Firm', description: 'Maximum support with premium comfort', recommended: ['Back sleepers', 'Heavier body types'] },
    ],
    selectedFirmness: 'Medium',
    features: [
      'Natural latex comfort layer',
      'Gel-infused cooling system',
      'Pocketed coil support core',
      'Zero motion transfer',
      '100% Fiber Glass Free',
      'CertiPUR-US certified foams',
      'Made in the USA',
    ],
    bestFor: ['Luxury seekers', 'Hot sleepers', 'Couples', 'All sleep positions', 'Performance sleepers'],
    components: [
      { name: 'Luxury Cover', description: 'Hand-finished premium cover with ultra-soft quilting', materials: 'Premium quilted knit fabric' },
      { name: 'Natural Latex Layer', description: 'Responsive natural latex provides buoyant, pressure-relieving comfort', materials: 'Natural latex foam' },
      { name: 'Gel Cooling Layer', description: 'Advanced gel-infused foam actively dissipates heat for cool sleep', materials: 'Gel memory foam' },
      { name: 'Memory Foam Layer', description: 'Deep-contouring viscoelastic foam for complete pressure relief', materials: 'Viscoelastic memory foam' },
      { name: 'Pocketed Coil Core', description: 'Precision-engineered individually wrapped coils for targeted support', materials: 'Pocketed coil system' },
      { name: 'Base Layer', description: 'Ultra-durable foundation for lasting performance', materials: 'HD base foam' },
    ],
    materials: [
      { name: 'Stretch Knit Cover', source: 'South Carolina, USA', certification: 'Breathable', description: 'Hand-finished premium stretch knit fabric' },
      { name: 'Natural Latex', source: 'Arizona, USA', certification: 'GOLS Certified', description: 'Responsive natural comfort layer' },
      { name: 'Gel Memory Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Cooling gel-infused foam' },
      { name: 'Memory Foam', source: 'Georgia, USA', certification: 'CertiPUR-US', description: 'Deep-contouring viscoelastic foam' },
      { name: 'Pocketed Coils', source: 'Ohio, USA', certification: 'ISO 9001', description: 'Precision-engineered coil system' },
      { name: 'HD Base Foam', source: 'North Carolina, USA', certification: 'CertiPUR-US', description: 'Ultra-durable foundation' },
    ],
  },
];

export const allProducts: Product[] = [...products];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return allProducts.map((p) => p.slug);
}
