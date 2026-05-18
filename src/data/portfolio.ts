import { assetPath } from '../utils/assets'

export const services = [
  'Brand Identity & Logo Design',
  'Graphic Design for Print',
  'Custom Apparel Graphics',
  'Responsive Web Development',
  'Django & React Applications',
  'Packaging & Production Design',
]

export const skills = [
  { name: 'Adobe Illustrator / Photoshop / InDesign', level: 96 },
  { name: 'Print, Packaging & Apparel Design', level: 94 },
  { name: 'HTML / CSS / JavaScript', level: 88 },
  { name: 'Python / Django / SQL', level: 86 },
  { name: 'React / Node / Express / MongoDB', level: 82 },
  { name: 'IBM Cloud / Docker / Kubernetes', level: 76 },
]

export const projects = [
  {
    title: 'Cars Dealership App',
    type: 'Python / Django / IBM Watson AI / IBM Cloud',
    text: 'A dealership platform with user accounts, dealership detail pages, reviews, Cloudant storage, IBM Cloud actions, and language-understanding sentiment feedback.',
    links: [
      ['Try App', 'http://um-bestcar.us-south.cf.appdomain.cloud/djangoapp/'],
      ['GitHub', 'https://github.com/umairny/agfzb-CloudAppDevelopment_Capstone'],
    ],
  },
  {
    title: 'Auction App',
    type: 'Python / Django',
    text: 'A marketplace app inspired by eBay where users can create listings, comment, bid, manage a watchlist, browse categories, and see winning bids.',
    links: [
      ['Try App', 'https://umairny.pythonanywhere.com/auctions/'],
      ['GitHub', 'https://github.com/umairny/django_py_any_where/tree/main/auctions'],
    ],
  },
  {
    title: 'Restaurant App',
    type: 'React / Redux / Node / Express / MongoDB',
    text: 'A full-stack restaurant experience with dishes, leaders, favorites, comments, authentication flows, and a feedback form.',
    links: [
      ['Backend', 'https://github.com/umairny/express'],
      ['Frontend', 'https://github.com/umairny/restaurant'],
    ],
  },
  {
    title: 'Social Network App',
    type: 'Python / Django',
    text: 'A social web app with posting, editing, commenting, liking, following, profile editing, and a feed for followed users.',
    links: [
      ['Try App', 'https://umairny.pythonanywhere.com/network/'],
      ['GitHub', 'https://github.com/umairny/django_py_any_where/tree/main/network'],
    ],
  },
]

export const experience = [
  {
    company: 'CAPTEEVATE, NYC',
    role: 'Graphic Designer',
    dates: 'July 2014 - Dec 2018',
    text: 'Created custom print designs for T-shirts, sweaters, and hoodies while guiding coworkers on tools, workflow, and client requirements.',
  },
  {
    company: 'CONCEPTION ART, Lahore',
    role: 'Senior Graphic Designer',
    dates: 'Feb 2013 - Feb 2014',
    text: 'Met clients, shaped budgets and objectives, produced promotional artwork, and trained junior designers on production-ready tools.',
  },
  {
    company: 'STYLO GRAPHICS, Lahore',
    role: 'Senior / Junior Graphic Designer',
    dates: 'Dec 1997 - Feb 2013',
    text: 'Designed for paper and tin printing, coordinated with vendors, supported colleagues, and explained visual concepts directly to customers.',
  },
]

export const education = [
  'IBM Full Stack Cloud Developer Professional Certificate',
  'Full-Stack Web Development with React, HKUST',
  'Django for Everybody, University of Michigan',
  'Python for Everybody, University of Michigan',
  'Graphic Designing Certificate, Hunter College NYC',
]

export const heroTools = [
  { label: 'Illustrator', mark: 'Ai' },
  { label: 'Photoshop', mark: 'Ps' },
  { label: 'React', mark: 'Rx' },
  { label: 'Django', mark: 'Dj' },
  { label: 'Print', mark: 'Pr' },
  { label: 'Cloud', mark: 'Cl' },
]

export const designGallery = [
  {
    title: 'Packaging Concept',
    type: 'Print Design',
    image: assetPath('gallery/img01.png'),
  },
  {
    title: 'Product Label System',
    type: 'Packaging',
    image: assetPath('gallery/img02.png'),
  },
  {
    title: 'Promotional Artwork',
    type: 'Graphic Design',
    image: assetPath('gallery/img03.png'),
  },
  {
    title: 'Brand Visual',
    type: 'Identity Design',
    image: assetPath('gallery/img04.png'),
  },
  {
    title: 'Apparel Graphic',
    type: 'Custom Print',
    image: assetPath('gallery/img05.png'),
  },
  {
    title: 'Marketing Layout',
    type: 'Print / Digital',
    image: assetPath('gallery/img06.png'),
  },
  {
    title: 'Visual Campaign',
    type: 'Graphic Design',
    image: assetPath('gallery/img07.png'),
  },
  {
    title: 'Production Artwork',
    type: 'Prepress Design',
    image: assetPath('gallery/img08.png'),
  },
]

export type DesignItem = (typeof designGallery)[number]
