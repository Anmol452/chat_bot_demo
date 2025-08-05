export type Step = {
  id: string;
  question: string;
  options: { label: string; nextId?: string; isSupport?: boolean }[];
};

export const steps: Step[] = [
  {
    id: "start",
    question: "What issue are you facing?",
    options: [
      {
        label: "Login Problem",
        options: [
          { label: "Forgot Password", isSupport: true },
          { label: "Correct password but login fails", isSupport: true },
        ],
      },
      {
        label: "Payment Problem",
        options: [
          {
            label: "Payment Failed",
            options: [
              {
                label: "Bank issue",
                options: [
                  { label: "Bank server down", isSupport: true },
                  { label: "Insufficient balance", isSupport: true },
                ],
              },
              {
                label: "Invalid OTP",
                options: [
                  { label: "OTP not received", isSupport: true },
                  { label: "OTP expired", isSupport: true },
                ],
              },
            ],
          },
          { label: "Refund not received", isSupport: true },
        ],
      },
      { label: "Other", isSupport: true },
    ],
  },
];
