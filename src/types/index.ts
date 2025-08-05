export interface Message {
    id: string;
    content: string;
    sender: 'user' | 'bot';
}

export interface Response {
    answer: string;
    redirectToHumanSupport?: boolean;
}