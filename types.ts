
export interface ContactInfo {
  name: string;
  address: string;
  phone: string;
  postalCode?: string;
  city: string;
}

export interface Symptom {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
