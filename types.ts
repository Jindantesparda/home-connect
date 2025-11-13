export interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  description: string[];
  imageSeed: number;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  text: string;
}
