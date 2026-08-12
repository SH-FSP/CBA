export const COMPANY = {
  name: "The Circuit Bowling Association",
  shortName: "The Circuit",
  tagline: "Compete · Connect · Create Legacy",
  motto: "One League. One Goal.",
  oneLiner: "One League. One Goal. One Legacy.",
  established: "EST. 2027",
  season: "2026–2027 Season · Now Forming",
  seasonLabel: "2026–2027",
  contactEmail: "hello@thecircuitba.com",
  contactPhone: "(702) 555-0188",
  hero:
    "The next generation of competitive travel bowling. Built for bowlers. Driven by competition. United by the game.",
  about:
    "The Circuit Bowling Association brings together competitive bowlers and teams through a structured travel league built on rankings, events, fair competition, and legacy.",
  stats: [
    { value: "12+", label: "Cities" },
    { value: "48+", label: "Teams" },
    { value: "300+", label: "Bowlers" },
  ],
};

export type EventStatus = "Registration Open" | "Filling Fast" | "Invite Only" | "RSVP";
export type AccountRole = "bowler" | "owner";

export interface TeamStanding {
  rank: number;
  abbr: string;
  name: string;
  points: number;
  avg: number;
  streak: string;
  pinfall: string;
}

export interface TeamProfile {
  id: string;
  abbr: string;
  name: string;
  city: string;
  owner: string;
  members: number;
  rank: number;
  avg: number;
  points: number;
  description: string;
  roster: string[];
}

export interface BowlerRanking {
  rank: number;
  name: string;
  team: string;
  enteringAvg: number;
  circuitAvg: number;
  trend: number;
  games?: number;
  highGame?: number;
}

export interface CircuitEvent {
  id: string;
  date: string;
  title: string;
  venue: string;
  status: EventStatus;
  deposit: string;
  result?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: "News" | "League" | "Tournament" | "Notice";
}

export interface MerchItem {
  id: string;
  name: string;
  price: string;
  badge?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  time: string;
  type: "news" | "event" | "team" | "alert";
}

export interface MatchHistoryItem {
  id: string;
  date: string;
  opponent: string;
  score: string;
  result: "W" | "L";
}

export const QUICK_ACCESS = [
  { to: "/standings", label: "Season Standings", desc: "Live team positions" },
  { to: "/teams", label: "Team Directory", desc: "Profiles & rosters" },
  { to: "/rankings", label: "Team Rankings", desc: "Top teams on the circuit" },
  { to: "/bowlers", label: "Bowler Rankings", desc: "Individual leaderboard" },
  { to: "/events", label: "Events Schedule", desc: "Upcoming tournaments" },
  { to: "/hub", label: "Bowler's Hub", desc: "Member dashboard" },
  { to: "/owner", label: "Owner Portal", desc: "Manage your team" },
  { to: "/rules", label: "League Rules", desc: "Official regulations" },
  { to: "/deposit", label: "Make A Deposit", desc: "Secure payments" },
  { to: "/merch", label: "Merch Store", desc: "Circuit gear" },
  { to: "/news", label: "Latest News", desc: "League updates" },
] as const;

export const STANDINGS: TeamStanding[] = [
  { rank: 1, abbr: "SK", name: "Strike Kings", points: 142, avg: 218.4, streak: "W5", pinfall: "34,944" },
  { rank: 2, abbr: "LA", name: "Lane Assassins", points: 136, avg: 214.1, streak: "W3", pinfall: "34,256" },
  { rank: 3, abbr: "PC", name: "Pin Crushers", points: 128, avg: 211.8, streak: "L1", pinfall: "33,888" },
  { rank: 4, abbr: "SE", name: "Split Enders", points: 121, avg: 208.3, streak: "W2", pinfall: "33,328" },
  { rank: 5, abbr: "PG", name: "Perfect Game", points: 118, avg: 205.7, streak: "W4", pinfall: "32,912" },
  { rank: 6, abbr: "3C", name: "300 Club", points: 109, avg: 202.2, streak: "L2", pinfall: "32,352" },
  { rank: 7, abbr: "TS", name: "Turkey Squad", points: 101, avg: 199.6, streak: "W1", pinfall: "31,936" },
  { rank: 8, abbr: "RT", name: "Rolling Thunder", points: 88, avg: 194.1, streak: "L3", pinfall: "31,056" },
];

export const TEAMS: TeamProfile[] = [
  {
    id: "sk",
    abbr: "SK",
    name: "Strike Kings",
    city: "Atlanta, GA",
    owner: "Marcus Vega",
    members: 6,
    rank: 1,
    avg: 218.4,
    points: 142,
    description: "Title-chasing squad built on power games and clutch 10th frames.",
    roster: ["Marcus Vega", "Elena Ward", "Kai Brooks", "Sam Ortiz", "Jordan Lee", "Chris Hale"],
  },
  {
    id: "la",
    abbr: "LA",
    name: "Lane Assassins",
    city: "Charlotte, NC",
    owner: "Jordan Reyes",
    members: 5,
    rank: 2,
    avg: 214.1,
    points: 136,
    description: "Precision team known for spare conversion and travel-lane adaptability.",
    roster: ["Jordan Reyes", "Nova Price", "Devon Hart", "Mia Cole", "Riley Quinn"],
  },
  {
    id: "pc",
    abbr: "PC",
    name: "Pin Crushers",
    city: "Nashville, TN",
    owner: "Tyrell Banks",
    members: 6,
    rank: 3,
    avg: 211.8,
    points: 128,
    description: "High-energy lineup with deep bench and tournament experience.",
    roster: ["Tyrell Banks", "Alex Rivera", "Pat Morgan", "Casey Dunn", "Blair Soto", "Jamie Fox"],
  },
  {
    id: "se",
    abbr: "SE",
    name: "Split Enders",
    city: "Orlando, FL",
    owner: "Devin Cross",
    members: 5,
    rank: 4,
    avg: 208.3,
    points: 121,
    description: "Spare specialists who grind every frame for circuit points.",
    roster: ["Devin Cross", "Taylor Kim", "Reese Park", "Avery Lane", "Shawn Berg"],
  },
  {
    id: "pg",
    abbr: "PG",
    name: "Perfect Game",
    city: "Dallas, TX",
    owner: "Cody Nolan",
    members: 6,
    rank: 5,
    avg: 205.7,
    points: 118,
    description: "Rising squad with strong youth core and coaching support.",
    roster: ["Cody Nolan", "Harper Diaz", "Logan West", "Quinn Ames", "Drew Soto", "Morgan Vale"],
  },
  {
    id: "3c",
    abbr: "3C",
    name: "300 Club",
    city: "Phoenix, AZ",
    owner: "Andre Malik",
    members: 5,
    rank: 6,
    avg: 202.2,
    points: 109,
    description: "Veteran club focused on consistency and mentorship.",
    roster: ["Andre Malik", "Nina Cruz", "Omar Bell", "Ivy Stone", "Felix Grant"],
  },
];

export const BOWLERS: BowlerRanking[] = [
  { rank: 1, name: "Marcus Vega", team: "Strike Kings", enteringAvg: 225, circuitAvg: 232.4, trend: 3, games: 48, highGame: 300 },
  { rank: 2, name: "Jordan Reyes", team: "Lane Assassins", enteringAvg: 220, circuitAvg: 228.1, trend: 1, games: 46, highGame: 289 },
  { rank: 3, name: "Tyrell Banks", team: "Pin Crushers", enteringAvg: 228, circuitAvg: 225.8, trend: -2, games: 47, highGame: 279 },
  { rank: 4, name: "Cody Nolan", team: "Perfect Game", enteringAvg: 218, circuitAvg: 222.5, trend: 2, games: 44, highGame: 268 },
  { rank: 5, name: "Devin Cross", team: "Split Enders", enteringAvg: 222, circuitAvg: 219.3, trend: -1, games: 45, highGame: 258 },
  { rank: 6, name: "Andre Malik", team: "300 Club", enteringAvg: 212, circuitAvg: 216.7, trend: 4, games: 42, highGame: 279 },
  { rank: 7, name: "Ricky Sanders", team: "Turkey Squad", enteringAvg: 210, circuitAvg: 214.2, trend: 1, games: 40, highGame: 247 },
  { rank: 8, name: "Elena Ward", team: "Strike Kings", enteringAvg: 215, circuitAvg: 212.9, trend: -3, games: 48, highGame: 256 },
];

export const EVENTS: CircuitEvent[] = [
  {
    id: "e1",
    date: "Sat, Sep 19 2026",
    title: "Season Opener",
    venue: "Metro Lanes — Atlanta, GA",
    status: "Registration Open",
    deposit: "$150",
  },
  {
    id: "e2",
    date: "Sat, Oct 17 2026",
    title: "Regional Circuit Stop",
    venue: "Kingpin Arena — Charlotte, NC",
    status: "Registration Open",
    deposit: "$200",
  },
  {
    id: "e3",
    date: "Sat, Nov 14 2026",
    title: "Team Showdown",
    venue: "Strike Zone — Nashville, TN",
    status: "Filling Fast",
    deposit: "$175",
  },
  {
    id: "e4",
    date: "Sat, Jan 23 2027",
    title: "Winter Classic",
    venue: "Legacy Lanes — Orlando, FL",
    status: "Registration Open",
    deposit: "$200",
  },
  {
    id: "e5",
    date: "Fri, May 7 2027",
    title: "Finals Weekend",
    venue: "The Circuit Arena — Las Vegas, NV",
    status: "Invite Only",
    deposit: "$300",
  },
  {
    id: "e6",
    date: "Sat, May 8 2027",
    title: "Awards Night",
    venue: "The Circuit Arena — Las Vegas, NV",
    status: "RSVP",
    deposit: "—",
  },
];

export const NEWS: NewsItem[] = [
  {
    id: "n1",
    date: "Aug 12, 2026",
    title: "The Circuit Announces 2026–2027 Season",
    excerpt:
      "A full slate of regional stops, expanded team divisions, and a brand new Finals Weekend in Las Vegas.",
    category: "News",
  },
  {
    id: "n2",
    date: "Aug 05, 2026",
    title: "Rankings System Overhaul",
    excerpt:
      "New weighted scoring formula rewards consistency across the travel season. Full breakdown inside.",
    category: "League",
  },
  {
    id: "n3",
    date: "Jul 28, 2026",
    title: "Team Registration Now Open",
    excerpt:
      "Secure your roster spot for the inaugural season. Early deposit locks in seeding priority.",
    category: "Tournament",
  },
  {
    id: "n4",
    date: "Jul 23, 2026",
    title: "Platform Build Approved",
    excerpt:
      "Website, member app, owner app, and admin dashboard move into design and development.",
    category: "Notice",
  },
];

export const MERCH: MerchItem[] = [
  { id: "m1", name: "Circuit League Tee", price: "$32", badge: "New" },
  { id: "m2", name: "Championship Hoodie", price: "$78", badge: "Bestseller" },
  { id: "m3", name: "Circuit Snapback Hat", price: "$28" },
  { id: "m4", name: "Pro Team Jersey", price: "$95", badge: "Limited" },
];

export const NOTIFICATIONS: NotificationItem[] = [
  {
    id: "nt1",
    title: "Season Opener Reminder",
    body: "Deposit deadline for Atlanta is in 5 days.",
    time: "2h ago",
    type: "event",
  },
  {
    id: "nt2",
    title: "Team Announcement",
    body: "Strike Kings practice lanes confirmed for Thursday 7pm.",
    time: "Yesterday",
    type: "team",
  },
  {
    id: "nt3",
    title: "League Update",
    body: "Rankings formula notes are live in Latest News.",
    time: "2d ago",
    type: "news",
  },
];

export const MATCH_HISTORY: MatchHistoryItem[] = [
  { id: "mh1", date: "Aug 02", opponent: "Lane Assassins", score: "978–951", result: "W" },
  { id: "mh2", date: "Jul 19", opponent: "Pin Crushers", score: "942–968", result: "L" },
  { id: "mh3", date: "Jul 05", opponent: "Split Enders", score: "1004–972", result: "W" },
];

export const CURRENT_MEMBER = {
  name: 'Marcus "The Hammer" Vega',
  shortName: "Marcus Vega",
  team: "Strike Kings",
  teamId: "sk",
  usbc: "USBC-29847",
  usbcVerified: true,
  nickname: "The Hammer",
  role: "owner" as AccountRole,
  phone: "(404) 555-0142",
  rank: 1,
  circuitAvg: 232.4,
  enteringAvg: 225,
  games: 48,
  pinfall: "11,155",
  highGame: 300,
  trend: 3,
  email: "marcus.vega@email.com",
};

export const OWNER_STATS = {
  rosterCount: 6,
  pendingRequests: 2,
  teamRank: 1,
  teamAvg: 218.4,
  upcomingMatches: 2,
  announcementsSent: 4,
};

export const PENDING_PLAYERS = [
  { name: "Alex Rivera", usbc: "USBC-44102", avg: 198 },
  { name: "Sam Ortiz", usbc: "USBC-55219", avg: 205 },
];

export const SEASON_FEATURES = [
  { title: "2026–2027", subtitle: "Season" },
  { title: "Travel", subtitle: "League Format" },
  { title: "Team-Based", subtitle: "Competition" },
  { title: "Individual", subtitle: "Bowler Rankings" },
  { title: "Events", subtitle: "& Tournaments" },
  { title: "Member", subtitle: "Login Access" },
];

export const HUB_LINKS = [
  { to: "/hub", label: "Member Dashboard" },
  { to: "/teams", label: "Team Profile" },
  { to: "/events", label: "Event Registration" },
  { to: "/deposit", label: "Deposit / Payment History" },
  { to: "/news", label: "League Announcements" },
  { to: "/rules", label: "Rules & Documents" },
  { to: "/merch", label: "Merchandise Access" },
  { to: "/owner", label: "Team Owner Tools" },
] as const;

export const TEAM_OPTIONS = TEAMS.map((t) => t.name);
