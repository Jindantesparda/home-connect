export interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  description: string[];
  imageSeed: number;
  imageUrl?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  text: string;
}

export interface TargetAudience {
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface UserRole {
    title: string;
    description: string;
    icon: string;
}

export interface Integration {
    name: string;
    icon: string;
}