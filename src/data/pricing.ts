export interface PricingItem {
  type: string;
  price: number;
  description?: string;
}

export const pricing: PricingItem[] = [
  {
    type: 'Initial Consultation',
    price: 180,
    description: 'Comprehensive assessment and treatment plan',
  },
  {
    type: 'Follow-up Consultation',
    price: 140,
    description: 'Ongoing treatment session',
  },
  {
    type: 'Extended Consultation',
    price: 180,
    description: 'Longer session for complex cases',
  },
  {
    type: '10-20mins one way from Leura',
    price: 20,
    description: 'Additional fee for travel time',
  },
  {
    type: '20-30mins one way from Leura',
    price: 40,
    description: 'Additional fee for extended travel time',
  },
];
