export interface Band {
  id: string;
  name: string;
  status: string;
  classification: string;
  region: string;
  summary: string;
  notes: string[];
}

export interface Release {
  id: string;
  catalogId: string;
  artist: string;
  title: string;
  format: string;
  year: number;
  status: string;
  tags: string[];
  description: string;
}

export interface Dossier {
  id: string;
  title: string;
  tag: string;
}

export const bands: Band[] = [
  {
    id: 'dead-air',
    name: 'DEAD AIR STATION',
    status: 'ACTIVE',
    classification: 'LEVEL 4',
    region: 'OSAKA, JP',
    summary: 'Harsh noise punk collective. Founded 2019. Known for unauthorized broadcasts and radio interference operations.',
    notes: [
      'All members operate under aliases',
      'No official photographs exist',
      'Performances conducted in abandoned industrial sites',
      'Associated with underground tape trading networks'
    ]
  },
  {
    id: 'glowing',
    name: 'DIE GLOWING',
    status: 'ON HIATUS',
    classification: 'LEVEL 3',
    region: 'BERLIN, DE',
    summary: 'Industrial hardcore unit. Active 2017-2023. Specializes in high-velocity percussion and distorted vocals.',
    notes: [
      'Last known performance: December 2023',
      'Equipment includes modified military surplus',
      'Rumored reformation in progress',
      'Studio location undisclosed'
    ]
  },
  {
    id: 'fallout',
    name: 'MOBILE FALLOUT ZONES',
    status: 'ACTIVE',
    classification: 'LEVEL 5',
    region: 'MOSCOW, RU',
    summary: 'Experimental noise brigade. Founded 2016. Combines punk aggression with field recordings from exclusion zones.',
    notes: [
      'Uses geiger counters as percussion',
      'Recordings made in restricted areas',
      'Subject to constant surveillance',
      'Distribution through encrypted channels only'
    ]
  },
  {
    id: 'ashen',
    name: 'ASHEN PROTOCOL',
    status: 'ACTIVE',
    classification: 'LEVEL 4',
    region: 'LONDON, UK',
    summary: 'Post-industrial sound terrorists. Active since 2020. Known for site-specific installations and guerrilla performances.',
    notes: [
      'Members rotate frequently',
      'Performances announced 24h in advance via coded messages',
      'No official social media presence',
      'Equipment destroyed after each show'
    ]
  }
];

export const releases: Release[] = [
  {
    id: 'ns-001',
    catalogId: 'NS-001',
    artist: 'DEAD AIR STATION',
    title: 'UNAUTHORIZED TRANSMISSION',
    format: 'CASSETTE',
    year: 2023,
    status: 'SOLD OUT',
    tags: ['NOISE', 'PUNK', 'EXPERIMENTAL'],
    description: 'Debut tape. 30 minutes of radio interference, feedback, and fragmented vocals. Recorded live to tape in a condemned broadcast facility. Edition of 50. All copies accounted for.'
  },
  {
    id: 'ns-002',
    catalogId: 'NS-002',
    artist: 'DIE GLOWING',
    title: 'TERMINAL VELOCITY',
    format: 'LP',
    year: 2022,
    status: 'AVAILABLE',
    tags: ['HARDCORE', 'INDUSTRIAL', 'AGGRESSION'],
    description: 'Second full-length. 8 tracks of relentless industrial hardcore. Recorded in 48-hour session. Pressed on black vinyl. 300 copies.'
  },
  {
    id: 'ns-003',
    catalogId: 'NS-003',
    artist: 'MOBILE FALLOUT ZONES',
    title: 'ZONE RECORDINGS VOL. 1',
    format: 'CASSETTE',
    year: 2023,
    status: 'AVAILABLE',
    tags: ['NOISE', 'FIELD RECORDING', 'EXPERIMENTAL'],
    description: 'Field recordings from restricted areas mixed with harsh electronics. 40 minutes. White cassette, no artwork. Edition of 75.'
  },
  {
    id: 'ns-004',
    catalogId: 'NS-004',
    artist: 'ASHEN PROTOCOL',
    title: 'GUERRILLA TACTICS',
    format: 'DIGITAL',
    year: 2024,
    status: 'AVAILABLE',
    tags: ['POST-INDUSTRIAL', 'NOISE', 'SITE-SPECIFIC'],
    description: 'Live recordings from 6 undisclosed locations. Download code only. Limited to 100 codes. Includes GPS coordinates.'
  },
  {
    id: 'ns-005',
    catalogId: 'NS-005',
    artist: 'VARIOUS ARTISTS',
    title: 'SYNDICATE OPERATIONS 2023',
    format: 'CASSETTE',
    year: 2023,
    status: 'AVAILABLE',
    tags: ['COMPILATION', 'NOISE', 'PUNK'],
    description: 'Year-end compilation. 12 tracks from affiliated operations. Pro-dubbed chrome tapes. Edition of 100.'
  }
];

export const dossiers: Dossier[] = [
  { id: '001', title: 'INTERCEPT 001 — DEAD AIR STATION', tag: '[REDACTED]' },
  { id: '019', title: 'OPS LOG 019 — MOBILE FALLOUT ZONES', tag: '[CLASSIFIED]' },
  { id: '029', title: 'REPORT 029 — DIE GLOWING INCIDENT', tag: '[REDACTED]' },
  { id: '047', title: 'SURVEILLANCE NOTE 047 — UNDERGROUND NETWORKS', tag: '[CLASSIFIED]' },
  { id: '058', title: 'INTERCEPT 058 — ASHEN PROTOCOL ACTIVITIES', tag: '[REDACTED]' }
];
