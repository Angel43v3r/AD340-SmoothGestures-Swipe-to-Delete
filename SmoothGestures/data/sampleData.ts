export type Item = {
    id: string;
    title: string;
    description: string;
    date?: string;
};

const sampleData: Item[] = [
    { id: '1', title: 'Jane Doe', description: 'Sample Email from Jane', date: 'Jan 3' },
    { id: '2', title: 'Hello Store', description: 'Get your exclusive keychain', date: 'Jan 3' },
    { id: '3', title: 'ABC', description: 'Four days left - limited time offer!', date: 'Jan 2' },
    { id: '4', title: 'Bob Smith', description: 'Sample Email from Bob', date: 'Jan 2' },
    { id: '5', title: 'UMart', description: 'Spring is Here! 60% off', date: 'Jan 1' },
];

export default sampleData;