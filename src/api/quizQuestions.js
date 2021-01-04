var quizQuestions = {
  Q1: {
    question: "How do you react to danger?",
    qid: "Q1",
    answers: [
      {
        content: "I don't mind charging in",
        next: "Q2",
      },
      {
        content: "I deal with it from a safe distance",
        next: "Q3",
      },
    ],
  },
  Q2: {
    question: "Are you more strong or nimble?",
    qid: "Q2",
    answers: [
      {
        content: "Strong",
        next: "Q15",
      },
      {
        content: "Nimble",
        next: "Q7",
      },
    ],
  },
  Q3: {
    question: "What do you rely on most?",
    qid: "Q3",
    answers: [
      {
        content: "Skills",
        next: "Q4",
      },
      {
        content: "Magic",
        next: "Q11",
      },
    ],
  },
  Q4: {
    question: "How good are you at keeping quiet?",
    qid: "Q4",
    answers: [
      {
        content: "*silence*",
        next: "Q5",
      },
      {
        content: "I don't know, I've never tried it!",
        next: "R3",
      },
    ],
  },
  Q5: {
    question: "Do you keep any pets?",
    qid: "Q5",
    answers: [
      {
        content: "My best friends are ferocious beasts.",
        next: "R1",
      },
      {
        content: "What, like a gerbil?",
        next: "Q6",
      },
    ],
  },
  Q6: {
    question: "I'm trained to kill using...",
    qid: "Q6",
    answers: [
      {
        content: "My brain, and maybe poison.",
        next: "R2",
      },
      {
        content: "Anything that skewers, slices, or smashes.",
        next: "R5",
      },
    ],
  },
  Q7: {
    question: "Do you live for kung-fu movies?",
    qid: "Q7",
    answers: [
      {
        content: "Bruce Lee is my idol.",
        next: "R6",
      },
      {
        content: "Not so much.",
        next: "Q8",
      },
    ],
  },
  Q8: {
    question: "Would you risk your life for a good story?",
    qid: "Q8",
    answers: [
      {
        content: "I think not.",
        next: "Q9",
      },
      {
        content: "You know it!",
        next: "R3",
      },
    ],
  },
  Q9: {
    question: "I'm deadly becuase...",
    qid: "Q9",
    answers: [
      {
        content: "I'm a master hunter.",
        next: "R1",
      },
      {
        content: "I'm experienced in the art of combat.",
        next: "R5",
      },
      {
        content: "I'm a born schemer.",
        next: "Q10",
      },
    ],
  },
  Q10: {
    question: "My schemes usually involve...",
    qid: "Q10",
    answers: [
      {
        content: "Allying myself with dark and strange elements.",
        next: "R4",
      },
      {
        content: "Cloak and dagger tactics.",
        next: "R2",
      },
    ],
  },
  Q11: {
    question: "I want...",
    qid: "Q11",
    answers: [
      {
        content: "Magical stamina for days.",
        next: "R4",
      },
      {
        content: "Flexibility.",
        next: "Q12",
      },
      {
        content: "One or two supernatural nukes.",
        next: "R7",
      },
    ],
  },
  Q12: {
    question: "Are you the academic type?",
    qid: "Q12",
    answers: [
      {
        content: "I'm a bookworm.",
        next: "R8",
      },
      {
        content: "Not necessarily.",
        next: "Q13",
      },
    ],
  },
  Q13: {
    question: "Are you religious?",
    qid: "Q13",
    answers: [
      {
        content: "No, my power comes from my righteous lute solos.",
        next: "R3",
      },
      {
        content: "No, my power comes from within.",
        next: "R7",
      },
      {
        content: 'Define "religious."',
        next: "Q14",
      },
    ],
  },
  Q14: {
    question: "Where does your power come from?",
    qid: "Q14",
    answers: [
      {
        content: "My connection with nature.",
        next: "R10",
      },
      {
        content: "A creepy otherworldy pact.",
        next: "R4",
      },
      {
        content: "The gods.",
        next: "R9",
      },
    ],
  },
  Q15: {
    question: "Are you good with the gods?",
    qid: "Q15",
    answers: [
      {
        content: "Meh.",
        next: "Q16",
      },
      {
        content: "I got 'em on speed dial.",
        next: "Q18",
      },
    ],
  },
  Q16: {
    question: "Are you prone to fly into a rage?",
    qid: "Q16",
    answers: [
      {
        content: "No more than the next adventurer.",
        next: "Q17",
      },
      {
        content: "Raaaaahhhhhrrrr!!!",
        next: "R12",
      },
    ],
  },
  Q17: {
    question: "How cool would it be to turn into a bear?",
    qid: "Q17",
    answers: [
      {
        content: "So cool!",
        next: "R10",
      },
      {
        content: "I have allergies.",
        next: "R5",
      },
    ],
  },
  Q18: {
    question: "I live my faith by...",
    qid: "Q18",
    answers: [
      {
        content: "Channeling the nautre and power of my god.",
        next: "R9",
      },
      {
        content: "Delivering reghteous justice.",
        next: "R11",
      },
    ],
  },
};

export default quizQuestions;
