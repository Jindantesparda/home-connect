import { TeamMember, Service } from './types';

export const COMPANY_NAME = "Home Connect";
export const TAGLINE_MAIN = "Connecting Children, Strengthening Families, Building Futures";
export const TAGLINE_SUB = "We bring home and family close to you.";
export const MISSION_STATEMENT = "A company of social workers dedicated to consulting for diaspora parents, ensuring the welfare, financial security, and living conditions of children left in the care of guardians.";

export const TEAM_DATA: TeamMember[] = [
  {
    name: "Mr. Felix Ngirazi",
    role: "Founder & Chairperson of the Board",
    tagline: "Guardian of the Vision",
    description: [
      "Lead the organization with integrity, ensuring every decision protects and advances Home Connect’s mission.",
      "Inspire board members and staff to uphold the highest standards of governance and accountability.",
      "Build strong relationships with partners, donors, and community leaders.",
      "Set the tone for innovation in addressing modern family and child welfare challenges.",
      "Serve as the public face of the organization."
    ],
    imageSeed: 101
  },
  {
    name: "Miss Betty Machaka",
    role: "Vice Chairperson",
    tagline: "Bridge between Vision and Action",
    description: [
      "Support the Chairperson in guiding the board’s work and stepping into leadership whenever required.",
      "Ensure board decisions are translated into practical, measurable actions.",
      "Mentor and motivate other board members to actively contribute their skills and networks.",
      "Lead initiatives that strengthen Home Connect’s visibility and credibility."
    ],
    imageSeed: 202
  },
  {
    name: "Mrs. Priscah Fisho",
    role: "Executive Director",
    tagline: "Driver of Impact",
    description: [
      "Translate the board’s vision into powerful, results-driven programs.",
      "Oversee all daily operations, ensuring every activity contributes to measurable change.",
      "Build and nurture a high-performing team aligned with Home Connect’s values.",
      "Secure funding through strategic partnerships and grants.",
      "Keep the board informed with accurate and transparent reports."
    ],
    imageSeed: 303
  },
  {
    name: "Mrs. Faith Rusike",
    role: "Deputy Executive Director",
    tagline: "Anchor of Operational Excellence",
    description: [
      "Work alongside the Executive Director to ensure smooth program delivery.",
      "Take leadership of priority projects, ensuring they meet deadlines.",
      "Act as the main link between teams to ensure collaboration.",
      "Step into leadership during the Executive Director’s absence."
    ],
    imageSeed: 404
  },
  {
    name: "Mr. Moses Fisho",
    role: "Treasurer of the Board",
    tagline: "Guardian of Financial Integrity",
    description: [
      "Safeguard Home Connect’s financial health through prudent planning.",
      "Ensure budgets reflect strategic priorities and are used efficiently.",
      "Work with accountants and auditors to ensure compliance.",
      "Guide the board on sustainable income generation."
    ],
    imageSeed: 505
  },
  {
    name: "Mr. Patrick Madyira",
    role: "Secretary",
    tagline: "Custodian of Organizational Memory",
    description: [
      "Keep precise, well-organized records of all board meetings and decisions.",
      "Ensure all governance documents are up-to-date and compliant.",
      "Manage board communications to ensure every member is informed.",
      "Preserve the history and progress of Home Connect."
    ],
    imageSeed: 606
  },
  {
    name: "Mr. Munyaradzi Mzite",
    role: "Administrator",
    tagline: "Engine of Daily Operations",
    description: [
      "Ensure the smooth running of the office and support staff.",
      "Take care of Website and email domains.",
      "Keep accurate databases of beneficiaries, partners, and resources.",
      "Manage logistics for meetings and events.",
      "Act as the first point of contact for enquiries."
    ],
    imageSeed: 707
  }
];

export const SERVICES_DATA: Service[] = [
  {
    title: "Welfare Monitoring",
    description: "Regular, professional home visits to ensure children left behind are being cared for properly, with detailed reports sent to diaspora parents.",
    icon: "HeartHandshake"
  },
  {
    title: "Financial Verification",
    description: "Auditing the use of remittances to ensure funds sent for school fees, medical bills, and daily upkeep are actually reaching the children.",
    icon: "ShieldCheck"
  },
  {
    title: "Living Conditions Assessment",
    description: "Comprehensive evaluation of the child's housing, nutrition, and emotional environment to ensure a safe and nurturing upbringing.",
    icon: "Home"
  },
  {
    title: "Guardian Liaison",
    description: "Acting as a professional mediator between diaspora parents and local guardians to resolve conflicts and set clear expectations.",
    icon: "Users"
  }
];
