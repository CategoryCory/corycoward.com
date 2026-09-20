// src/data/work-history.ts
export interface WorkHistoryEntry {
    startYear: string;
    endYear: string;
    title: string;
    company: string;
    description: string;
    technologies: string[];
}

export const workHistory: WorkHistoryEntry[] = [
	{
		startYear: '2024',
		endYear: 'NOW',
		title: 'Senior Software Engineer',
		company: 'Teradyne',
		description:
			'Developing low-level runtime software for semiconductor test systems, where reliable hardware control and clear diagnostic paths matter.',
		technologies: ['.NET', 'C#', 'PostgreSQL', 'RabbitMQ'],
	},
	{
		startYear: '2022',
		endYear: '2024',
		title: 'Senior Engineer',
		company: 'Geico',
		description:
			'Designed tools for a distributed platform at scale, pairing pragmatic product delivery with measured modernization of a mature codebase.',
		technologies: ['React', 'TypeScript', '.NET Core', 'Azure'],
	},
];