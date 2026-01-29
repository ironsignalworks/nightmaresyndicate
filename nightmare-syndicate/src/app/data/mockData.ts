import coverFront from '../../../img/cover_web.png';
import coverBack from '../../../img/coverb1.png';
import fatalLogo from '../../../img/ftxp_logo.png';
import bandPhotoOne from '../../../img/band1.webp';
import bandPhotoTwo from '../../../img/band2.webp';
import hcwFront from '../../../img/psdw.png';
import hcwBack from '../../../img/psde.png';

export interface Band {
  id: string;
  name: string;
  status: string;
  classification: string;
  region: string;
  summary: string;
  notes: string[];
  logo?: string;
  bandcampUrl?: string;
  upcomingRelease?: string;
  gallery?: string[];
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
  coverImage?: string;
  backImage?: string;
  externalUrl?: string;
  selvajariaUrl?: string;
  videos?: string[];
}

export interface Dossier {
  id: string;
  title: string;
  tag: string;
}

export const bands: Band[] = [
  {
    id: 'fatal-exposure',
    name: 'FATAL EXPOSURE',
    status: 'ACTIVE',
    classification: 'FTXP HEAVY YIELD OPS',
    region: 'SECTOR 19-X / ECHO FALLOUT GRID',
    summary:
      'Sonic warfare cell specializing in D-beat radiation punk, metallic crust, and synth detonations. Posters, tour briefs, and dossiers broadcast daily while they prep "The Human Crust of War" after the Bikini Atoll Broadcast detonation.',
    notes: [
      'Personnel: Major DD Nukes (drums/chaos engineering), Fukushima Baby Jones (bass/advanced sonic subterfuge), Cindy Cyanide (synths/mechanized warfare protocol), Obi War Chernobyl (vocals, guitars, barbed wire apocalypse revival).',
      'All sessions conducted under full contamination alert. No clean takes attempted.',
      'Deployment overseen by Nightmare Syndicate / Selvajaria / Vortex alliance.',
      'Last ping received from Sector 19-X. Retrieval efforts failed.',
      'New LP "The Human Crust of War" incoming. Videos, promos, and posters staged across HOME > Field Promotion and intel drops.',
      'Primary comms: info@nightmaresyndicaterecords.com / https://fatalexposure.bandcamp.com/.',
    ],
    logo: fatalLogo,
    bandcampUrl: 'https://fatalexposure.bandcamp.com/',
    upcomingRelease: 'The Human Crust of War',
    gallery: [bandPhotoOne, bandPhotoTwo],
  },
  {
    id: 'selvajaria',
    name: 'SELVAJARIA RECORDS',
    status: 'OPERATIVE LABEL',
    classification: 'ALLY - DISTRIBUTION CELL',
    region: 'LISBON, PT',
    summary:
      'Lisbon imprint entrusted with radiological punk logistics. Co-issued Bikini Atoll Broadcast and routes mail-order fallout via selvajariarecords.com.',
    notes: [
      'Contact: selvajariarecords.pt@gmail.com',
      'Web: https://www.selvajariarecords.com/',
      'Maintains encrypted drop points across EU.',
      'Reports directly to Nightmare Syndicate command when radioactive media requires clearance.',
    ],
  },
  {
    id: 'vortex',
    name: 'VORTEX RECORDS',
    status: 'OPERATIVE LABEL',
    classification: 'ALLY - DISTRIBUTION CELL',
    region: 'LISBOA, PT',
    summary:
      'Vortex is an underground collective powering live Nightmare Syndicate shows and running stealth distribution routes across Lisbon. Tap into IG @vortex_associacao for coded drops.',
    notes: [
      'Contact: vortex.lisboa@gmail.com',
      'Visit IG dispatches: @vortex_associacao (content self-destructs).',
      'Hosts impromptu gigs in shielded basements; merch exchanged at the door.',
      'Posts encrypted dispatches via Instagram bursts, deleted within minutes.',
    ],
  },
  {
    id: 'nightmare-syndicate',
    name: 'NIGHTMARE SYNDICATE RECORDS',
    status: 'ACTIVE',
    classification: 'COMMAND NODE',
    region: 'DIGITAL OP HUB',
    summary:
      'Umbrella entity responsible for cataloguing contaminated audio artifacts. Issues the NSR-series and coordinates allied operations.',
    notes: [
      'Maintains black-site duplication facility with zero compliance oversight.',
      'Playback equals consent. No refunds.',
      'Currently leading Fatal Exposure containment/distribution.',
      'Front-line email: info@nightmaresyndicaterecords.com',
    ],
  },
];

export const releases: Release[] = [
  {
    id: 'nsr-01-a1x-rogue',
    catalogId: 'NSR-01-A1X-ROGUE',
    artist: 'FATAL EXPOSURE',
    title: 'BIKINI ATOLL BROADCAST',
    format: 'CD / SELVAJARIA / VORTEX / NIGHTMARE SYNDICATE',
    year: 2026,
    status: 'AVAILABLE - 300 UNITS',
    tags: [
      'D-BEAT RADIATION PUNK',
      'METALLIC CRUST',
      'SYNTH DETONATIONS',
      'FULL SPECTRUM PRESSURE',
    ],
    description: `Fatal Exposure - Bikini Atoll Broadcast (2026-02-13), catalog NSR-01-A1X-ROGUE.

CD released via Selvajaria Records, Vortex Records & Nightmare Syndicate Records. Limited to 300 units. Survival not guaranteed.

Bikini Atoll Broadcast marks the first officially unauthorized radioactive transmission from Fatal Exposure, the sonic warfare cell operating under the FTXP Heavy Yield Strategy Operations Deployment Squad. What you're holding is not an album so much as a contaminated artifact, salvaged from the blast radius and cleared for civilian exposure by absolutely no one.

Eleven tracks of scorched audio doctrine. D-beat radiation punk, metallic crust, and synth detonations decaying in real time. This is full-spectrum sound pressure. Analog panic, irradiated noise, and a strict zero-compromise policy on safety, fidelity, or common sense.

All sessions were conducted under full contamination alert. No clean takes were attempted.

Operatives were last tracked to Sector 19-X, Echo Fallout Grid. All retrieval efforts have failed.

Personnel:
Major DD Nukes - drums / chaos engineering
Fukushima Baby Jones - bass / advanced sonic subterfuge
Cindy Cyanide - synths / mechanized warfare protocol
Obi War Chernobyl - vocals, guitars, barbed wire apocalypse revival

CD out now via:
Selvajaria Records - selvajariarecords.pt@gmail.com
Vortex Records - vortex.lisboa@gmail.com
Nightmare Syndicate Records - nightmaresyndicaterecords.com

Compliance is assumed. Playback constitutes consent.`,
    coverImage: coverFront,
    backImage: coverBack,
    externalUrl: 'https://fatalexposure.bandcamp.com/',
    selvajariaUrl: 'https://www.selvajariarecords.com/',
    videos: [
      'https://www.youtube.com/watch?v=ylLR0TmE8f0',
      'https://www.youtube.com/watch?v=JszqNBJozag',
      'https://www.youtube.com/watch?v=Ro-oi2_KNi4',
      'https://www.youtube.com/watch?v=t0OVM-8ZTOw',
    ],
  },
  {
    id: 'nsr-02-intel',
    catalogId: 'NSR-02-INTEL',
    artist: 'FATAL EXPOSURE',
    title: 'HEAVY YIELD STRATEGY: FIELD DOSSIERS',
    format: 'DIGITAL BRIEFING',
    year: 2025,
    status: 'CLASSIFIED STREAM',
    tags: ['INTEL DROP', 'TRANSMISSION LOGS', 'BLACK SITE FOOTAGE'],
    description:
      'Companion briefing compiling failed retrieval attempts, Sector 19-X telemetry, and redacted rehearsal fragments. Only distributed to allied ops who have confirmed Bikini Atoll Broadcast inventory.',
  },
  {
    id: 'nsr-03-live',
    catalogId: 'NSR-03-LIVE',
    artist: 'VARIOUS OPERATIVES',
    title: 'RADIATE AND PERISH - LIVE OPS 24.1',
    format: 'CASSETTE / DIGITAL',
    year: 2025,
    status: 'PRE-ORDER',
    tags: ['LIVE ARCHIVE', 'FIELD RECORDING', 'HARDWARE FAILURE'],
    description:
      'Live documentation of Nightmare Syndicate field activity between Selvajaria, Vortex, and internal command. Includes unreleased Fatal Exposure fragments plus label-only distress signals.',
  },
  {
    id: 'nsr-04-hcw',
    catalogId: 'NSR-02-A1X-ROGUE',
    artist: 'FATAL EXPOSURE',
    title: 'THE HUMAN CRUST OF WAR',
    format: 'CD / LP / DIGITAL / CASSETTE',
    year: 2026,
    status: 'COMING SOON',
    tags: ['LP', 'FULL-LENGTH', 'FIELD REPORT', 'PRE-RELEASE'],
    description:
      'The Human Crust of War is the next escalation from Fatal Exposure: a wall of irradiated D-beat dirge tracked live inside an abandoned fallout shelter. Video transmissions, promo posters, and classified rehearsal tapes are feeding into the build-up now.',
    coverImage: hcwFront,
    backImage: hcwBack,
    externalUrl: 'https://fatalexposure.bandcamp.com/',
  },
];

export const dossiers: Dossier[] = [
  { id: 'FX-001', title: 'FIELD REPORT - BIKINI ATOLL BROADCAST', tag: 'SURVIVAL NOT GUARANTEED' },
  { id: 'FX-019', title: 'RETRIEVAL FAILURE LOG - SECTOR 19-X', tag: 'ALL OPERATIVES LOST' },
  { id: 'FX-027', title: 'SUPPLY CHAIN - SELVAJARIA / VORTEX', tag: 'ALLY COORDINATION' },
  { id: 'FX-033', title: 'PERSONNEL DOSSIER - DD NUKES / FUKUSHIMA BABY JONES', tag: 'FORCE-READY' },
  { id: 'FX-045', title: 'BROADCAST CLEARANCE - NIGHTMARE SYNDICATE RECORDS', tag: 'PLAYBACK = CONSENT' },
];
