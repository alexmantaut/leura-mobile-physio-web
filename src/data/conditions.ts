export interface Condition {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const conditions: Condition[] = [
  {
    id: 'orthopaedic',
    name: 'Orthopaedic Injuries',
    description: 'Assessment and treatment of musculoskeletal injuries including back, neck, jaw, fractures, strains and joint pain.',
    icon: 'bone',
  },
  {
    id: 'older-persons',
    name: 'Older Person\'s Health',
    description: 'Specialized care to improve function, mobility, strength and balance in older adults.',
    icon: 'heart',
  },
  {
    id: 'post-surgical',
    name: 'Post-Surgical Rehabilitation',
    description: 'Tailored rehabilitation to support a safe return to everyday activities and achieve optimal outcomes.',
    icon: 'heart',
  },
  {
    id: 'cardiovascular',
    name: 'Cardiovascular Conditions',
    description: 'Rehabilitation and management for heart and circulatory health conditions.',
    icon: 'heart-pulse',
  },
  {
    id: 'disability',
    name: 'Disability Support',
    description: 'NDIS-eligible services for clients with various disabilities and support needs.',
    icon: 'accessibility',
  },
  {
    id: 'falls-prevention',
    name: 'Falls Prevention',
    description: 'Programs to reduce fall risk and improve confidence with walking.',
    icon: 'shield-check',
  },
  {
    id: 'neurological',
    name: 'Neurological Conditions',
    description: 'Treatment for stroke, Parkinson\'s disease, multiple sclerosis and other neurological conditions.',
    icon: 'brain',
  },
    {
    id: 'hydrotherapy',
    name: 'Hydrotherapy',
    description: 'Support with exercising in water to help build strength, mobility and confidence when exercising on land is painful or challenging.',
    icon: 'water',
  },
];
