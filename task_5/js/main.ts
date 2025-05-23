interface MajorCredit {
  credits: number;
  readonly brand: "Major Credits";
}

interface MinorCredit {
  credits: number;
  readonly brand: "Minor Credits";
}

function sumMajorCredits ( subject1: MajorCredit, subject2: MajorCredit ): MajorCredit {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major Credits",
  };
}

function sumMinorCredits ( subject1: MinorCredit, subject2: MinorCredit ): MinorCredit {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor Credits",
  };
}
