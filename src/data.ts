import { Code2, Database, Coffee, Globe, Layout, PenTool, Palette, Video, Image as ImageIcon, Sun, Layers, Camera, Film, Clapperboard, TreePine, Music, Users, type LucideIcon } from 'lucide-react'

/* ---------------------------------------------------------------
   HERO IMAGES — paste the two Lithos image URLs here.
   Defaults are original topographic-line artwork in public/images/ (swap for any URL or file).
---------------------------------------------------------------- */
export const HERO_BASE: string = '/images/hero-base.svg'
export const HERO_REVEAL: string = '/images/hero-reveal.svg'

export const NAV = [
  { label: 'Home', id: 'home' }, { label: 'About', id: 'about' }, { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' }, { label: 'Creative Works', id: 'works' }, { label: 'Contact', id: 'contact' },
]

export const SKILLS: { group: string; items: { name: string; icon: LucideIcon }[] }[] = [
  { group: 'Development', items: [{ name: 'HTML', icon: Code2 }, { name: 'Django', icon: Database }, { name: 'Java', icon: Coffee }] },
  { group: 'Design', items: [{ name: 'Web Designing', icon: Globe }, { name: 'UI/UX Designing', icon: Layout }, { name: 'Graphic Designing', icon: PenTool }, { name: 'Canva', icon: Palette }] },
  { group: 'Multimedia', items: [{ name: 'Video Editing', icon: Video }, { name: 'Photo Editing', icon: ImageIcon }, { name: 'Adobe Lightroom', icon: Sun }, { name: 'Adobe Photoshop (Basic)', icon: Layers }] },
]

export const PROJECTS = [
  { title: 'Tree Fall Detection System', icon: TreePine, tags: ['Detection', 'Image Analysis'], image: '/projects/tree-fall.jpg',
    text: 'A project focused on identifying fallen trees using a detection-based approach.' },
  { title: 'Music Playlist Webpage', icon: Music, tags: ['HTML', 'CSS', 'Web Design'], image: '/projects/music-playlist.jpg',
    text: 'A web-based music playlist interface designed to display and organise music playlists.' },
  { title: 'Student Skill Exchange Platform', icon: Users, tags: ['Django', 'UI/UX', 'Concept'], image: '/projects/skill-exchange.jpg',
    text: 'A platform concept that allows students to share their skills and learn from one another.' },
]

/* Drop your own files in public/images/works/ using these names to replace the placeholders. */
export const WORKS = [
  { title: 'Photography', icon: Camera, image: '/images/works/photography.jpg' },
  { title: 'Video Editing', icon: Film, image: '/images/works/video-editing.jpg' },
  { title: 'Graphic Design', icon: PenTool, image: '/images/works/graphic-design.jpg' },
  { title: 'Photo Editing', icon: ImageIcon, image: '/images/works/photo-editing.jpg' },
  { title: 'DaVinci Resolve', icon: Clapperboard, image: '/images/works/davinci-resolve.jpg' },
]

/* Drop certificate images in public/certificates/ using these names. */
export const CERTS = [
  { title: 'UI/UX Designing', image: '/certificates/ui-ux.jpg' },
  { title: 'Machine Learning', image: '/certificates/machine-learning.jpg' },
  { title: 'Digital Marketing', image: '/certificates/digital-marketing.jpg' },
]

export const CONTACT = {
  name: 'Yogeshwara Pandiyan S', email: 'spyogesh0705@gmail.com', phone: '9080582016', tel: '+919080582016',
  location: 'Madurai, Tamil Nadu', instagram: 'https://www.instagram.com/_yogeshhh._07/', linkedin: 'https://linkedin.com/in/spyogesh',
}
