'use client';
import React from "react";
import { useState } from "react";
// import { steps as initialSteps } from "../data/faq";

type Option = {
  label: string;
  nextId?: string;
  isSupport?: boolean;
  options?: Option[];
};

type Step = {
  id: string;
  question: string;
  options: Option[];
};

const initialSteps: Step[] = [
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

export default function ChatBot() {
  const [messages, setMessages] = useState<{ type: "bot" | "user"; text: string }[]>([
    { type: "bot", text: initialSteps[0].question },
  ]);
  const [currentOptions, setCurrentOptions] = useState<Option[]>(initialSteps[0].options);

  const handleClick = (option: Option) => {
    setMessages((m) => [...m, { type: "user", text: option.label }]);

    if (option.isSupport) {
      setMessages((m) => [
        ...m,
        {
          type: "bot",
          text:
            "Please contact support 👉 [WhatsApp Support](https://wa.me/919999999999)",
        },
      ]);
      setCurrentOptions([]);
    } else if (option.options) {
      setMessages((m) => [
        ...m,
        { type: "bot", text: "Please select one of the following options:" },
      ]);
      setCurrentOptions(option.options);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-xl max-w-xl w-full p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          🤖 Support Bot
        </h1>

        <div className="h-[400px] overflow-y-auto space-y-4 pr-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`${
                msg.type === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block px-4 py-2 rounded-xl whitespace-pre-wrap max-w-[75%] ${
                  msg.type === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {currentOptions.length > 0 && (
          <div className="border-t pt-4">
            <p className="text-sm text-gray-600 mb-2 font-medium">
              What issue are you facing?
            </p>
            <div className="space-y-2">
              {currentOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleClick(opt)}
                  className="block text-blue-600 hover:underline text-left"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
