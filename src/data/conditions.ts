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
    description: 'Treatment for musculoskeletal injuries including fractures, sprains, and joint pain.',
    icon: 'bone',
  },
  {
    id: 'older-persons',
    name: 'Older Person\'s Health',
    description: 'Specialized care to improve mobility, strength, and balance in older adults.',
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
    description: 'Programs to reduce fall risk and improve balance and confidence.',
    icon: 'shield-check',
  },
  {
    id: 'neurological',
    name: 'Neurological Conditions',
    description: 'Treatment for stroke, Parkinson\'s disease, MS, and other neurological conditions.',
    icon: 'brain',
  },
];
