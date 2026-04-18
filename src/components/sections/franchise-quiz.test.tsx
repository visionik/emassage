import React from "react";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import {
  calculateScore,
  getResult,
  QUIZ_QUESTIONS,
  QUALIFYING_THRESHOLD,
  FranchiseQuiz,
} from "./franchise-quiz";

// ---------------------------------------------------------------------------
// Pure logic tests
// ---------------------------------------------------------------------------

describe("calculateScore", () => {
  it("returns 0 when all answers are wrong", () => {
    const answers = QUIZ_QUESTIONS.map(() => 1); // index 1 is always wrong
    expect(calculateScore(answers)).toBe(0);
  });

  it("returns max score when all answers are qualifying", () => {
    const answers = QUIZ_QUESTIONS.map((q) => q.qualifyingIndex);
    expect(calculateScore(answers)).toBe(QUIZ_QUESTIONS.length);
  });

  it("counts only qualifying answers", () => {
    // Qualify only questions 0 and 2
    const answers = QUIZ_QUESTIONS.map((q, i) =>
      i === 0 || i === 2 ? q.qualifyingIndex : 1
    );
    expect(calculateScore(answers)).toBe(2);
  });

  it("returns 0 for empty answers array", () => {
    expect(calculateScore([])).toBe(0);
  });

  it("handles partial answers array gracefully", () => {
    const answers = [QUIZ_QUESTIONS[0]!.qualifyingIndex]; // only first answered
    expect(calculateScore(answers)).toBe(1);
  });
});

describe("getResult", () => {
  it("returns 'qualify' when score meets threshold", () => {
    expect(getResult(QUALIFYING_THRESHOLD)).toBe("qualify");
  });

  it("returns 'qualify' when score exceeds threshold", () => {
    expect(getResult(QUIZ_QUESTIONS.length)).toBe("qualify");
  });

  it("returns 'decline' when score is below threshold", () => {
    expect(getResult(QUALIFYING_THRESHOLD - 1)).toBe("decline");
  });

  it("returns 'decline' for score 0", () => {
    expect(getResult(0)).toBe("decline");
  });
});

// ---------------------------------------------------------------------------
// Component integration tests
// ---------------------------------------------------------------------------

describe("FranchiseQuiz component", () => {
  beforeEach(() => {
    // jsdom doesn't implement scrollIntoView
    window.HTMLElement.prototype.scrollIntoView = () => {};
  });

  it("renders the first question on mount", () => {
    render(<FranchiseQuiz />);
    expect(screen.getByText(QUIZ_QUESTIONS[0]!.question)).toBeInTheDocument();
  });

  it("shows 1/5 progress indicator initially", () => {
    render(<FranchiseQuiz />);
    expect(screen.getByText("1 / 5")).toBeInTheDocument();
  });

  it("Next button is disabled until an option is selected", () => {
    render(<FranchiseQuiz />);
    const nextButton = screen.getByRole("button", { name: /next question/i });
    expect(nextButton).toBeDisabled();
  });

  it("enables Next button after selecting an option", () => {
    render(<FranchiseQuiz />);
    const firstOption = screen.getByText(QUIZ_QUESTIONS[0]!.options[0]!);
    fireEvent.click(firstOption);
    const nextButton = screen.getByRole("button", { name: /next question/i });
    expect(nextButton).not.toBeDisabled();
  });

  it("advances to question 2 after answering question 1", () => {
    render(<FranchiseQuiz />);
    fireEvent.click(screen.getByText(QUIZ_QUESTIONS[0]!.options[0]!));
    fireEvent.click(screen.getByRole("button", { name: /next question/i }));
    expect(screen.getByText(QUIZ_QUESTIONS[1]!.question)).toBeInTheDocument();
    expect(screen.getByText("2 / 5")).toBeInTheDocument();
  });

  it("shows 'Submit Assessment' label on last question", () => {
    render(<FranchiseQuiz />);
    // Answer questions 0–3
    for (let i = 0; i < QUIZ_QUESTIONS.length - 1; i++) {
      fireEvent.click(screen.getByText(QUIZ_QUESTIONS[i]!.options[0]!));
      fireEvent.click(screen.getByRole("button", { name: /next question/i }));
    }
    expect(
      screen.getByRole("button", { name: /submit assessment/i })
    ).toBeInTheDocument();
  });

  it("shows qualifying result after all correct answers", () => {
    render(<FranchiseQuiz />);
    for (let i = 0; i < QUIZ_QUESTIONS.length; i++) {
      const q = QUIZ_QUESTIONS[i]!;
      fireEvent.click(screen.getByText(q.options[q.qualifyingIndex]!));
      if (i < QUIZ_QUESTIONS.length - 1) {
        fireEvent.click(screen.getByRole("button", { name: /next question/i }));
      } else {
        fireEvent.click(
          screen.getByRole("button", { name: /submit assessment/i })
        );
      }
    }
    expect(screen.getByText("You May Qualify")).toBeInTheDocument();
  });

  it("shows decline result after all wrong answers", () => {
    render(<FranchiseQuiz />);
    for (let i = 0; i < QUIZ_QUESTIONS.length; i++) {
      const q = QUIZ_QUESTIONS[i]!;
      // Always pick option 1 (never the qualifying index 0)
      fireEvent.click(screen.getByText(q.options[1]!));
      if (i < QUIZ_QUESTIONS.length - 1) {
        fireEvent.click(screen.getByRole("button", { name: /next question/i }));
      } else {
        fireEvent.click(
          screen.getByRole("button", { name: /submit assessment/i })
        );
      }
    }
    expect(screen.getByText("Not Quite Ready")).toBeInTheDocument();
  });

  it("resets to question 1 after clicking Retake Assessment", () => {
    render(<FranchiseQuiz />);
    // Complete all questions with wrong answers
    for (let i = 0; i < QUIZ_QUESTIONS.length; i++) {
      const q = QUIZ_QUESTIONS[i]!;
      fireEvent.click(screen.getByText(q.options[1]!));
      if (i < QUIZ_QUESTIONS.length - 1) {
        fireEvent.click(screen.getByRole("button", { name: /next question/i }));
      } else {
        fireEvent.click(
          screen.getByRole("button", { name: /submit assessment/i })
        );
      }
    }
    // Now retake
    fireEvent.click(
      screen.getByRole("button", { name: /retake the franchise assessment/i })
    );
    expect(screen.getByText(QUIZ_QUESTIONS[0]!.question)).toBeInTheDocument();
    expect(screen.getByText("1 / 5")).toBeInTheDocument();
  });
});
