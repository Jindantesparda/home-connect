import { TeamMember, Service, TargetAudience, FAQ, UserRole, Integration } from './types';

export const COMPANY_NAME = "Home Connect";
export const TAGLINE_MAIN = "Connecting Children, Strengthening Families, Building Futures";
export const TAGLINE_SUB = "We bring home and family close to you.";
export const MISSION_STATEMENT = "A company of social workers dedicated to consulting for diaspora parents, ensuring the welfare, financial security, and living conditions of children left in the care of guardians.";

export const FOUNDER_MESSAGE = "As the founder of Home Connect, my vision was born from a deep understanding of the sacrifices parents and guardians make. Every day, you work tirelessly thousands of miles away, driven by the dream of providing a better future for your children back home. We created Home Connect to be your trusted partner on the ground—your eyes, your ears, and your heart. We are here to ensure that your hard-earned resources translate into genuine well-being, that your children feel your love and support, and that you have the peace of mind you deserve. We are more than a service; we are an extension of your family. Our mission is to protect children, strengthen families, and rebuild connections.Home Connect works with both local and diaspora parents, helping them stay actively involved in their children’s emotional and educational journeys. We also support guardians, schools, and communities to uphold the highest standards of child safeguarding.";

export const TEAM_DATA: TeamMember[] = [
  {
    name: "Felix Ngirazi",
    role: "Founder & Chairperson of the Board",
    tagline: "Guardian of the Vision",
    description: [
      "Lead the organization with integrity, ensuring every decision protects and advances Home Connect’s mission.",
      "Inspire board members and staff to uphold the highest standards of governance and accountability.",
      "Build strong relationships with partners, donors, and community leaders.",
      "Set the tone for innovation in addressing modern family and child welfare challenges.",
      "Serve as the public face of the organization."
    ],
    imageSeed: 101,
    imageUrl: "/images/Felix.png"
  },
  {
    name: "Betty Machaka",
    role: "Vice Chairperson",
    tagline: "Bridge between Vision and Action",
    description: [
      "Support the Chairperson in guiding the board’s work and stepping into leadership whenever required.",
      "Ensure board decisions are translated into practical, measurable actions.",
      "Mentor and motivate other board members to actively contribute their skills and networks.",
      "Lead initiatives that strengthen Home Connect’s visibility and credibility."
    ],
    imageSeed: 202,
    imageUrl: "/images/Betty.png"
  },
  {
    name: "Priscah Fisho",
    role: "Executive Director",
    tagline: "Driver of Impact",
    description: [
      "Translate the board’s vision into powerful, results-driven programs.",
      "Oversee all daily operations, ensuring every activity contributes to measurable change.",
      "Build and nurture a high-performing team aligned with Home Connect’s values.",
      "Secure funding through strategic partnerships and grants.",
      "Keep the board informed with accurate and transparent reports."
    ],
    imageSeed: 303,
    imageUrl: "/images/Priscah.png"
  },
  {
    name: "Faith Rusike",
    role: "Deputy Executive Director",
    tagline: "Anchor of Operational Excellence",
    description: [
      "Work alongside the Executive Director to ensure smooth program delivery.",
      "Take leadership of priority projects, ensuring they meet deadlines.",
      "Act as the main link between teams to ensure collaboration.",
      "Step into leadership during the Executive Director’s absence."
    ],
    imageSeed: 404,
    imageUrl: "/images/Faith.jpeg"
  },
  {
    name: "Moses Fisho",
    role: "Treasurer of the Board",
    tagline: "Guardian of Financial Integrity",
    description: [
      "Safeguard Home Connect’s financial health through prudent planning.",
      "Ensure budgets reflect strategic priorities and are used efficiently.",
      "Work with accountants and auditors to ensure compliance.",
      "Guide the board on sustainable income generation."
    ],
    imageSeed: 505,
    imageUrl: "/images/Moses.png"
  },
  {
    name: "Patrick Madyira",
    role: "Secretary",
    tagline: "Custodian of Organizational Memory",
    description: [
      "Keep precise, well-organized records of all board meetings and decisions.",
      "Ensure all governance documents are up-to-date and compliant.",
      "Manage board communications to ensure every member is informed.",
      "Preserve the history and progress of Home Connect."
    ],
    imageSeed: 606,
    imageUrl: "/images/Madyira.png"
  },
  {
    name: "Munyaradzi Mzite",
    role: "Administrator",
    tagline: "Engine of Daily Operations",
    description: [
      "Ensure the smooth running of the office and support staff.",
      "Take care of Website and email domains.",
      "Keep accurate databases of beneficiaries, partners, and resources.",
      "Manage logistics for meetings and events.",
      "Act as the first point of contact for enquiries."
    ],
    imageSeed: 707,
    imageUrl: "/images/Munyaradzi Mzite.jpeg"
  }
];

export const SERVICES_DATA: Service[] = [
  {
    title: "Welfare Monitoring & Check-ins",
    description: "Trained social workers conduct regular home visits and check-ins to assess living conditions, health, and schooling, guarding against abuse and neglect.",
    icon: "HeartHandshake",
    image: "/images/checkups.png"
  },
  {
    title: "Child Protection Oversight",
    description: "Concerns like abuse or neglect are reported immediately to social welfare authorities, strengthening statutory child protection for vulnerable children.",
    icon: "ShieldAlert",
    image: "/images/teens.png"
  },
  {
    title: "Transparent Parent Reporting",
    description: "Detailed written or verbal updates are provided to parents after each check-in, maintaining communication and ensuring peace of mind.",
    icon: "FileText",
    image: "/images/transparent.png"
  },
  {
    title: "Education Support",
    description: "We engage with schools, attend parent-teacher meetings, and liaise with teachers to ensure your child’s academic progress and success.",
    icon: "BookOpen",
    image: "/images/school.png"
  },
  {
    title: "Emotional & Mental Health Support",
    description: "Professional counsellors provide one-on-one and group sessions to help children and guardians process separation and anxiety. Includes hospital accompaniment.",
    icon: "SmilePlus",
    image: "/images/wellness.png"
  },
  {
    title: "24/7 Emergency Response",
    description: "Our helpline provides immediate support during a crisis. We contact authorities and offer direct presence until the situation is stabilized.",
    icon: "Siren",
    image: "/images/timely response.png"
  },
  {
    title: "Guardian Vetting & Training",
    description: "We conduct background checks and home visits to ensure guardian suitability. Approved guardians receive training on child rights, first aid, and nutrition.",
    icon: "UserCheck",
    image: "images/vetting.png"
  },
  {
    title: "Payment Facilitation & Verification",
    description: "We offer managed remittances, transparent receipts, and financial counselling to ensure funds are used accountably and as intended.",
    icon: "ReceiptText",
    image: "images/money records.png"
  },
  {
    title: "Errand & Delivery Services",
    description: "We offer essential errand-running, home deliveries, and practical support to ensure no child goes without crucial supplies or assistance.",
    icon: "Truck",
    image: "/images/delivery.png"
  }
];

export const TARGET_AUDIENCE_DATA: TargetAudience[] = [
    {
        title: "Local Parents",
        description: "Parents within Zimbabwe who need professional support in monitoring children’s welfare, emotional health and academic progress.",
        icon: "Users"
    },
    {
        title: "Diaspora Parents",
        description: "Zimbabwean parents living abroad who want trustworthy, transparent updates about their children’s welfare, education and emotional growth.",
        icon: "Globe"
    },
    {
        title: "Guardians",
        description: "Caregivers raising children of absent parents who need guidance, training and emotional support.",
        icon: "Shield"
    },
    {
        title: "Children",
        description: "Those facing emotional, academic or social difficulties due to parental separation or household challenges.",
        icon: "Smile"
    },
    {
        title: "Institutions",
        description: "Schools, NGOs and Churches seeking partnerships in counselling, mentorship and family strengthening.",
        icon: "Building"
    }
];

export const FAQ_DATA: FAQ[] = [
    {
        question: "How does Home Connect Operate?",
        answer: "Home Connect operates through a network of qualified social workers who conduct scheduled and unscheduled home visits. After each visit, a detailed report including photos and feedback is compiled and securely shared with the parent abroad through our digital platform. We also verify school attendance, academic performance, and the use of funds for their intended purposes."
    },
    {
        question: "How do I register my child?",
        answer: "You can start the registration process by filling out the contact form on our website or calling our office directly. Our administrator will then guide you through the next steps, which include an initial consultation, signing a service agreement, and providing the necessary details about your child and their guardian."
    },
    {
        question: "What is the cost of your services?",
        answer: "Our pricing is based on a monthly subscription model, which varies depending on the level of monitoring and services required. We offer several packages to suit different needs and budgets. For a detailed quote, please schedule a consultation with our team."
    },
    {
        question: "How do you ensure the safety and privacy of my child's data?",
        answer: "We adhere strictly to the Data Protection Act of Zimbabwe. All personal information is encrypted, stored securely, and only accessible to authorized personnel for service delivery. We have a comprehensive privacy policy that outlines our commitment to confidentiality."
    }
];

export const USER_ROLES_DATA: UserRole[] = [
    {
        title: "Parents & Guardians",
        description: "View real-time updates, access detailed welfare reports, manage payments, and communicate directly with their assigned social worker.",
        icon: "UserCheck"
    },
    {
        title: "Social Workers",
        description: "Manage their caseload, upload visit reports and case files, access professional development tools, and communicate securely with families.",
        icon: "ClipboardList"
    },
    {
        title: "Admin",
        description: "Oversees the entire platform, manages user accounts, generates system-wide reports, and ensures smooth content delivery and operations.",
        icon: "UserCog"
    }
];

export const INTEGRATIONS_DATA: Integration[] = [
    { name: "Paynow & Ecocash", icon: "CreditCard" },
    { name: "WhatsApp Business", icon: "MessageSquare" },
    { name: "Web Analytics", icon: "BarChart2" },
    { name: "Digital Case Management", icon: "FolderKanban" }
];

export const PRIVACY_POLICY_TEXT = "At Home Connect we protect the personal information of children, parents and guardians with utmost confidentiality and care in line with Data Protection Act (Chapter 11:12) of Zimbabwe 2021, Children Act (Chapter 5:06) and Constitution of Zimbabwe (Section 57) right to privacy. All data is securely stored, encrypted and accessed only by authorized staff. We collect information solely for service delivery, with full parental or guardian consent. Records are kept for up to five years and then safely deleted. Any data breach will be reported within 48 hours to affected users and the Data Protection Authority of Zimbabwe.";
