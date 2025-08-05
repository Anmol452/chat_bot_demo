export const responses = {
  "What are your hours of operation?": "We are open from 9 AM to 5 PM, Monday to Friday.",
  "How can I contact support?": "You can contact support via email at support@example.com.",
  "What is your return policy?": "Our return policy allows returns within 30 days of purchase.",
  "Can I speak to a human?": "Sure! Please hold on while I connect you to a human support agent."
};

export const getResponse = (question: string): string => {
  return responses[question] || "I'm sorry, I don't have an answer for that. Please hold on while I connect you to a human support agent.";
};