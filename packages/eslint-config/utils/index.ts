interface ParseForESLintReturnType {
  ast: {
    body: Record<string, any>[]
    comments: Record<string, any>[]
    loc: {
      end: number
      start: number
    }
    range: number[]
    tokens: Record<string, any>[]
    type: string
  }
  scopeManager: any
  services: {
    isPlain: boolean
  }
  visitorKeys: {
    Program: Record<string, any>[]
  }
}

export const parserPlain = {
  meta: {
    name: "parser-plain",
  },
  parseForESLint: (code: string): ParseForESLintReturnType => ({
    ast: {
      body: [],
      comments: [],
      loc: { end: code.length, start: 0 },
      range: [0, code.length],
      tokens: [],
      type: "Program",
    },
    scopeManager: null,
    services: { isPlain: true },
    visitorKeys: {
      Program: [],
    },
  }),
}
