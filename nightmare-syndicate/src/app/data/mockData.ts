import coverFront from '../../../img/cover_web.png';
import coverBack from '../../../img/coverb1.png';
import fatalLogo from '../../../img/ftxp_logo.png';
import bandPhotoOne from '../../../img/band1.webp';
import bandPhotoTwo from '../../../img/band2.webp';
import hcwFront from '../../../img/psdw.png';
import hcwBack from '../../../img/psde.png';
import selvajariaLogo from '../../../img/selva1.png';
import vortexLogo from '../../../img/vortex1.png';

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
  latestReleaseId?: string;
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
  releaseDate?: string;
  limitedNote?: string;
}

export interface Dossier {
  id: string;
  header: string;
  status: string;
  name: string;
  designation: string;
  fileRef: string;
  overview: string;
  role: string[];
  location: string;
  alias: string;
  clearance: string;
  activityLog: { label: string; detail: string }[];
  finalDirective: string;
  addendum: string[];
  artifactName?: string;
  artifactDetail?: string;
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
    latestReleaseId: 'nsr-01-a1x-rogue',
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
    logo: selvajariaLogo,
  },
  {
    id: 'vortex',
    name: 'VORTEX RECORDS',
    status: 'OPERATIVE LABEL',
    classification: 'ALLY - DISTRIBUTION CELL',
    region: 'LISBOA, PT',
    summary:
      'Vortex is an underground collective powering live shows and running stealth distribution routes across Lisbon. Tap into IG @vortex_associacao for coded drops. Contact: info@nightmaresyndicaterecords.com.',
    notes: [
      'Contact: vortex.lisboa@gmail.com',
      'Visit IG dispatches: @vortex_associacao (content self-destructs).',
      'Hosts gigs in shielded basements; merch exchanged in situ.',
    ],
    logo: vortexLogo,
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
    status: 'COMING SOON',
    tags: [
      'D-BEAT RADIATION PUNK',
      'METALLIC CRUST',
      'SYNTH DETONATIONS',
      'FULL SPECTRUM PRESSURE',
    ],
    description: `Fatal Exposure - Bikini Atoll Broadcast (13 February 2026), catalog NSR-01-A1X-ROGUE.

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
    releaseDate: '13 February 2026',
    limitedNote: 'Limited to 300 contaminated copies. No repress scheduled.',
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
    tags: ['CD', 'LP', 'FULL-LENGTH', 'FIELD REPORT', 'PRE-RELEASE'],
    description: `The Human Crust of War is the next escalation from Fatal Exposure: a wall of irradiated D-beat dirge tracked live inside a rotating series of undisclosed, highly classified bunkers stretching from London to California, to the ruins of an Eastern Bloc radar array.

With Major DD Nukes and Fukushima Baby Jones still missing in action, the current lineup mutates around Cindy Cyanide, Obi War Chernobyl, and a volatile synth artillery unit overseen by the Nukefinder General.

Expect more synths, more chaos, more paranoia, more video transmissions, promo posters, and classified rehearsal tapes are feeding into the build-up now.`,
    coverImage: hcwFront,
    backImage: hcwBack,
    externalUrl: 'https://fatalexposure.bandcamp.com/',
  },
];

export const dossiers: Dossier[] = [
  {
    id: 'dd-nukes',
    header: 'FIELD REPORT',
    status: 'OPERATIVE LOST',
    name: 'MAJOR DD NUKES',
    designation: 'MAJOR DD NUKES',
    fileRef: 'DD-NUKE-317',
    overview:
      'Primary percussive threat for the FTXP Radioactive Command Strike Unit. Architect of detonation-tempo mapping systems used in large-scale sonic warfare operations. Responsible for converting rhythm into structural collapse.',
    role: ['Drum Strike Architect', 'Blast Pattern Logistics & Detonation Timing Sequence'],
    location:
      'UNKNOWN. Last observed at The Ticking Void, a non-cartographic rupture near the ruins of Old Nevada.',
    alias: 'The Countdown Messiah',
    clearance: 'Level 9 Noise Command / Chrono-Explosive Sync Division',
    activityLog: [
      {
        label: '2051',
        detail:
          'Initiated tempo siege during the Siege of Clocksend. Enemy mech swarms destabilized by irregular 5/4 blast cluster saturation.',
      },
      {
        label: '2053',
        detail:
          'Rumored origin of Class-IV seismic disturbance while performing solo inside dormant caldera.',
      },
      {
        label: '2055',
        detail:
          'Suspected infiltration of Temporal Interference Grid during blackout rehearsal cycle. Timeline segment flagged unstable.',
      },
      {
        label: 'CURRENT',
        detail:
          'Off-grid. Rhythmic anomaly clusters blooming near Echo Rift. Continued operation probable.',
      },
    ],
    finalDirective: 'Do not attempt synchronization. Beats may override human biological rhythm.',
    addendum: [
      'Collects timepieces from ruined cities. Keeps each set locked to a different time signature.',
      'Writes poetry exclusively in Morse code. Mostly unreadable. Possibly sentient.',
      'Observed tapping rhythms into fault-line rock formations to test collapse thresholds.',
    ],
    artifactName: 'Temporal Sync Relic A-13',
    artifactDetail: 'Melted Clocksend metronome still ticking in 13/8.',
  },
  {
    id: 'cindy-cyanide',
    header: 'FIELD REPORT',
    status: 'FORCE-READY',
    name: 'CINDY CYANIDE',
    designation: 'CINDY CYANIDE',
    fileRef: 'CN-OMEGA-SYNTH',
    overview:
      'Controller of synthetic signal payloads and primary vocal vector deployment. Specialist in psychoacoustic contamination and dreamstate weaponization.',
    role: ['Synth Engineering & Primary Vocal Vectors'],
    location: 'Oakland, CA — Monarch Broadcast Tower Ruins — Transmitter Room G13.',
    alias: 'POP-TOXIC-77',
    clearance: 'G.L.O.W. Tier 13',
    activityLog: [
      {
        label: '2050',
        detail: 'Unauthorized vocal test disrupted weather satellites. Three-day aurora storm.',
      },
      { label: '2052', detail: 'Deployed synthetic vocal neuro-agents during Vault IV siege.' },
      {
        label: '2054',
        detail: 'AI-laced dreamstate recordings sold on black sound markets as psychic traps.',
      },
      {
        label: 'CURRENT',
        detail:
          'Emitting anomalous frequencies from decommissioned Oakland radio array. Linked to multiple ghost-signal incidents.',
      },
    ],
    finalDirective:
      'Voice signal contains harmonics matching neurochemical disruptors. Approach only with dream shielding.',
    addendum: [
      'Hoards corrupted pop radio promo cassettes.',
      'Creates DIY perfume bombs using distilled fog, rad-flowers, and static electricity.',
      'Hosts illicit dream-sharing sessions through hacked synth arrays.',
    ],
    artifactName: 'GLAMATRON-6 Infiltration Doll',
    artifactDetail: 'Auto-tuned plush core seeded with subliminal lullabies.',
  },
  {
    id: 'obi-war-chernobyl',
    header: 'PERSONNEL DOSSIER',
    status: 'PLAYBACK = CONSENT',
    name: 'OBI WAR CHERNOBYL',
    designation: 'OBI WAR CHERNOBYL',
    fileRef: 'OBI-WARCHEM-INF',
    overview:
      'Roaming field commander for Fatal Exposure operations. Issues coded riffs to sleeper agents and directs strike alignments across fallout zones.',
    role: ['Vocals', 'Guitars', 'Nuclear Doctrine Command', 'Wasteland Riff Deployment'],
    location: 'Mobile across fallout zones. Frequently surfaces near weaponized aurora fields.',
    alias: 'The Fallout King',
    clearance: 'Ghost Protocol Omega',
    activityLog: [
      {
        label: '2050',
        detail: 'Denounced in seven failed states for deploying illegal dissonant sequences.',
      },
      { label: '2052', detail: 'Sole survivor of Riff Trials of Sector Chernobylia.' },
      {
        label: '2054',
        detail:
          'Constructed The Warcaster, a guitar rig integrated with declassified Cold War technology and bone-conductive strings.',
      },
      {
        label: 'CURRENT',
        detail:
          'Appears intermittently in war-torn zones to broadcast coded instructions to embedded operatives.',
      },
    ],
    finalDirective:
      'Engagement not advised. Classified mobile existential threat under Code 00 ENDLOOP.',
    addendum: [
      'Rebuilds burned guitars with relic parts scavenged from Cold War bunkers.',
      'Maintains scrapbook of abandoned radio frequencies annotated with "Who was listening?"',
      'Writes war manifestos on any available surface.',
    ],
    artifactName: 'Signal Tag ENDLOOP-77',
    artifactDetail: 'Harmonically unstable dog tag etched with "EVERY RIFF A BOMB."',
  },
  {
    id: 'fukushima-baby-jones',
    header: 'PERSONNEL DOSSIER',
    status: 'ARCHIVE SEALED',
    name: 'FUKUSHIMA BABY JONES',
    designation: 'FUKUSHIMA BABY JONES',
    fileRef: 'FBJ-NULL',
    overview: 'Affiliated unit element. Data integrity compromised.',
    role: ['UNCONFIRMED'],
    location: 'UNDISCLOSED',
    alias: 'UNLISTED',
    clearance: 'UNCONFIRMED',
    activityLog: [{ label: 'ACTIVITY', detail: 'No verified entries.' }],
    finalDirective: 'None issued. Multiple retrieval attempts unsuccessful.',
    addendum: ['No personal file available.'],
  },
];

export const dossierUnitSummary = {
  unit: 'FTXP RADIOACTIVE COMMAND STRIKE UNIT',
  classification: 'CLASSIFIED DOSSIER // FILE 404-BETA',
};

export const dossierTransmissionLog = {
  id: 'file-091-rad-prime',
  title: 'RECORDING LOG - FILE 091-RAD-PRIME',
  body: `FATAL EXPOSURE is an unauthorized transmission recovered from the outer edge of the FTXP Heavy Yield Strategy Operations Squad archive. Logged under FILE 091-RAD-PRIME, this recording documents the sonic collapse of a command unit selected for unstable potential, extreme contamination tolerance, and zero-remorse battlefield behavior.

Every operative involved in this broadcast has been flagged across multiple fallout zones for reality-deforming audio activity, infrastructure destabilization, and psychological erosion. What remains is not a “record” in any conventional sense, but a looping incident: blast patterns functioning as weapons, riffs behaving as directives, and vocals carrying neurological side effects.

Personnel assigned to this transmission:

Major DD Nukes
Drums / Chaos Engineering
Percussive detonation architect responsible for blast-pattern logistics and seismic rhythm deployment.

Fukushima Baby Jones
Bass / Advanced Sonic Subterfuge
Low-end radiation tremor specialist. Frequencies associated with memory erosion and infrastructure compromise.

Cindy Cyanide
Synths / Mechanized Warfare Protocol
Primary vocal vector and synthetic signal payload controller. Linked to ghost-signal outbreaks and psychic trap recordings.

Obi War Chernobyl
Vocals / Guitars / Barbed Wire Apocalypse Revival
Field commander for nuclear doctrine broadcasts and wasteland riff deployment.

All sessions were conducted under full contamination alert.
No clean takes attempted.
No remediation performed.

Deployment overseen by Nightmare Syndicate Records in alliance with Selvajaria Records and Vortex Records.
Last confirmed ping received from Sector 19-X.
Retrieval efforts failed.

FATAL EXPOSURE does not simulate nuclear horror.
It behaves like it.

Playback constitutes consent.`,
};
