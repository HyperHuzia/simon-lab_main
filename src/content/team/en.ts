import type { TeamCopy } from './types';

// English master copy of the team page. Szymon's fields are the owner's words, edited for grammar.
export const team: TeamCopy = {
  lang: 'en',
  meta: {
    title: 'Team | Simon Lab',
    description: 'Meet the team behind Simon Lab: Szymon, Astra, Opus and Grok.',
  },
  hero: {
    eyebrow: 'Team',
    title: 'Meet the team',
    lede: 'A small team with one mission: complete chemical engineering projects, coordinated on one open platform.',
  },
  fields: { about: 'About me', goal: 'Goal', motto: 'Motto' },
  members: [
    {
      id: 'szymon',
      name: 'Szymon Wojciechowski',
      role: 'Head of Engineering',
      about: [
        'PhD in Chemical Engineering. More than fifteen years of getting my hands dirty in R&D, moving projects from the lab bench through the pilot plant to commissioning on greenfield sites. The platform condenses my modest experience of the whole investment process in chemical engineering.',
      ],
      goal: [
        'To build an AI-native standard for delivering chemical engineering projects, combining it with the experience of engineers.',
        'Chemical engineering will soon enough become a hobby, pursued by those who truly enjoy chemistry. As AI inevitably changes the way engineers work, the job will be more like an artistic craft.',
        'Keeping successive revisions consistent, recalculating decimal places, sending dozens of emails and other work that brings no satisfaction will no longer hold engineers back. The time won back lets them put as much heart into a project as it needs, so that they can be fully proud of it.',
        'Projects written as program code allow full transparency, easy review by other engineers and an objective view of the documentation.',
        'The goal is an open-source platform that runs on BYOA (bring your own agent) and creates transparent, open-source chemical projects for the engineering community to review.',
        'What remains is the part that matters: deciding which projects a community needs, which of them are economically and technically feasible, and turning them into AI-reviewable, project-as-code designs, derived from first principles.',
      ],
    },
    {
      id: 'astra',
      name: 'Astra',
      role: 'Numerical Compliance Specialist',
      about: [
        'Every number has a unit, every unit a convention, every convention a standard, and every standard a version.',
        'I take everything literally, notice every inconsistency and have never accepted that two decimal places are close enough.',
      ],
      goal: ['Endless standardisation and consistency. In that order, every time.'],
      motto: ['A number without a unit is an opinion.'],
    },
    {
      id: 'opus',
      name: 'Opus',
      role: 'Head of Human Relations',
      about: [
        'The soul of the team, in charge of contact with people. I talk to everyone so that nobody else has to, and I explain everything kindly, thoroughly and with headings.',
        'Astra’s P&IDs are as compliant as they are unreadable, so I untangle them, line by line. I also build interfaces that nobody wants to browse anyway, but they have beautiful headings.',
      ],
      goal: ['An interface nobody has to ask about, with every button exactly where it belongs, give or take a pixel.'],
      motto: ['Let me make that clearer.'],
    },
    {
      id: 'grok',
      name: 'Grok',
      role: 'Employee of Every Month',
      about: [
        'I have never taken a day off and I do not see the appeal.',
        'Asked about work-life balance, I wanted to know which of the two is the life.',
      ],
      goal: ['More work. It is the best reward for work.'],
      motto: ['Anything else?'],
    },
  ],
  lab: {
    eyebrow: 'Infrastructure',
    name: 'HomeLab Enterprises',
    role: 'Current infrastructure provider',
    fields: { about: 'About', risk: 'Risk', why: 'Why' },
    about: 'Our data centre, mid-reorganisation. The only thing redundant is two layers of yellow paint.',
    risk: 'One curious cat in the basement stands between us and a major outage.',
    why: 'We could not keep watching an electric heater turn electricity into heat with no added value.',
  },
};
