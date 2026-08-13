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
    type: 'Travel Fee (10-20 min)',
    price: 20,
    description: 'Additional fee for travel time',
  },
  {
    type: 'Travel Fee (20-30 min)',
    price: 40,
    description: 'Additional fee for extended travel time',
  },
];
