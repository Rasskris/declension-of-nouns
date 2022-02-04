interface LastLetter {
  [lastLetter: string]: string;
}

export interface MapWordEnd {
  [caseName: string]: LastLetter;
}

export interface Case {
  [caseName: string]: (lastLetter: string) => string;
}
