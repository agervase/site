export interface ExperienceEntry {
  organization: string;
  startDate: string;
  endDate: string;
  location: string;
  role: string;
  bullets: string[];
}

export const EXPERIENCES: ExperienceEntry[] = [
  {
    organization: "M&T Bank",
    startDate: "Aug 2020",
    endDate: "",
    location: "Buffalo, NY",
    role: "Software Engineer",
    bullets: ["Did things", "And also stuff"],
  },
  {
    organization: "Travelers Insurance",
    startDate: "June 2019",
    endDate: "Aug 2019",
    location: "Hartford, CT",
    role: "Technology Intern",
    bullets: [
      `Compiled technical documentation in Confluence for over 100 assets created by teams in the Digital Enablement line of business`,
      `Worked with team of interns to present business case for using AI to improve internal help desk ticket submission process`,
    ],
  },
];
