"use client";
import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

/** A single quiz question with multiple-choice options */
export interface QuizQuestion {
  question: string;
  options: string[];
  /** Zero-based index of the qualifying answer */
  qualifyingIndex: number;
}

/** The five franchise qualifying questions */
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question:
      "Do you have access to a private island or equivalent exclusive venue?",
    options: [
      "Yes — fully staffed and off the radar.",
      "I have a timeshare in Tenerife.",
      "No, but I have a large shed.",
      "What is an island?",
    ],
    qualifyingIndex: 0,
  },
  {
    question:
      "Do you have at least three sitting heads of state who will vouch for you in writing, then immediately deny it?",
    options: [
      "Yes. Written statements prepared and ready to destroy.",
      "Two — but one is currently under indictment.",
      "One. He is a councillor. He is very supportive.",
      "I prefer character references from my employer.",
    ],
    qualifyingIndex: 0,
  },
  {
    question:
      "Are you comfortable with the phrase \u2018plausible deniability\u2019 being your entire job description?",
    options: [
      "Absolutely. It is, in fact, already my job description.",
      "I am more comfortable with \u2018strategic ambiguity.\u2019",
      "I would need a definition of \u2018plausible.\u2019",
      "I prefer to have actual responsibilities.",
    ],
    qualifyingIndex: 0,
  },
  {
    question:
      "Can you name at least two Supreme Court justices who have never visited your island?",
    options: [
      "Yes. At least two. Possibly three.",
      "I can name one. He stopped visiting in 2018.",
      "Several have visited adjacent islands. Does that count?",
      "I do not have an island. I feel this disqualifies me.",
    ],
    qualifyingIndex: 0,
  },
  {
    question:
      "Are you comfortable with a rigorous background check conducted exclusively by us?",
    options: [
      "Absolutely. I look forward to it.",
      "Mostly — there is one incident from 2007.",
      "Depends what you mean by 'rigorous'.",
      "I would prefer a third party be involved.",
    ],
    qualifyingIndex: 0,
  },
];

/** Minimum qualifying score (out of 5) */
export const QUALIFYING_THRESHOLD = 4;

/**
 * Calculate score from an array of selected answer indices.
 * @param answers - Array where answers[i] is the selected option index for question i
 */
export function calculateScore(answers: number[]): number {
  return answers.reduce((score, answer, i) => {
    const question = QUIZ_QUESTIONS[i];
    return question && answer === question.qualifyingIndex ? score + 1 : score;
  }, 0);
}

/** Determine whether a score qualifies for a franchise */
export function getResult(score: number): "qualify" | "decline" {
  return score >= QUALIFYING_THRESHOLD ? "qualify" : "decline";
}

/** Multi-step franchise qualifying quiz */
export function FranchiseQuiz(): React.JSX.Element {
  const [step, setStep] = useState<"quiz" | "result">("quiz");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const question = QUIZ_QUESTIONS[currentQuestion];
  const score = calculateScore(answers);
  const result = getResult(score);

  function handleOptionSelect(index: number): void {
    setSelectedOption(index);
  }

  function handleNext(): void {
    if (selectedOption === null) return;
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((q) => q + 1);
    } else {
      setStep("result");
    }
  }

  function handleRetake(): void {
    setStep("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
  }

  if (step === "result") {
    return <QuizResult result={result} score={score} onRetake={handleRetake} />;
  }

  return (
    <Card className="bg-parchment border-2 border-gold max-w-2xl mx-auto">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs tracking-widest uppercase text-burgundy">
            Franchise Assessment
          </p>
          <p className="text-xs text-navy/40">
            {currentQuestion + 1} / {totalQuestions}
          </p>
        </div>

        {/* Progress bar */}
        <div
          className="h-1 bg-parchment-dark rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={currentQuestion + 1}
          aria-valuemin={1}
          aria-valuemax={totalQuestions}
          aria-label="Quiz progress"
        >
          <div
            className="h-full bg-burgundy transition-all"
            style={{
              width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
            }}
          />
        </div>

        <h3 className="font-display text-xl font-bold text-navy mt-4 leading-snug">
          {question?.question}
        </h3>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 pt-2">
        {question?.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleOptionSelect(i)}
            className={`text-left px-4 py-3 text-sm border transition-colors ${
              selectedOption === i
                ? "border-burgundy bg-burgundy text-parchment"
                : "border-gold/40 text-navy hover:border-burgundy hover:bg-parchment-dark"
            }`}
            aria-pressed={selectedOption === i}
          >
            {option}
          </button>
        ))}

        <Button
          onClick={handleNext}
          disabled={selectedOption === null}
          className="bg-navy text-parchment hover:bg-burgundy disabled:opacity-40 mt-2 self-end px-8"
          aria-label={
            currentQuestion < totalQuestions - 1 ? "Next question" : "Submit assessment"
          }
        >
          {currentQuestion < totalQuestions - 1 ? "Next →" : "Submit Assessment"}
        </Button>
      </CardContent>
    </Card>
  );
}

interface QuizResultProps {
  result: "qualify" | "decline";
  score: number;
  onRetake: () => void;
}

/** Displays the quiz result */
function QuizResult({ result, score, onRetake }: QuizResultProps): React.JSX.Element {
  const isQualified = result === "qualify";

  return (
    <Card className="bg-parchment border-2 border-gold max-w-2xl mx-auto text-center">
      <CardContent className="pt-8 pb-8 flex flex-col items-center gap-4">
        <div className="text-gold text-4xl" aria-hidden="true">
          {isQualified ? "✦" : "✕"}
        </div>

        <h3 className="font-display text-2xl font-bold text-navy">
          {isQualified
            ? "You May Qualify"
            : "Not Quite Ready"}
        </h3>

        <p className="text-navy/70 max-w-sm leading-relaxed">
          {isQualified
            ? "Our team will be in touch. Please do not contact us. We will find you."
            : "Thank you for your interest. Your application has been misplaced."}
        </p>

        <p className="text-xs text-navy/40 italic">
          Assessment score: {score} / {QUIZ_QUESTIONS.length}
        </p>

        <Button
          onClick={onRetake}
          variant="outline"
          className="border-burgundy text-burgundy hover:bg-burgundy hover:text-parchment mt-2"
          aria-label="Retake the franchise assessment"
        >
          Retake Assessment
        </Button>
      </CardContent>
    </Card>
  );
}
