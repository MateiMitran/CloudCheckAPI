export enum FlowChartSyntax {
    openLink = "---",
    arrowLink = "-->",
    dottedLink = "-.->",
    thickLink = "==>",
    chainLink = "&",
    
    //regex 
}

export enum SequenceDiagramSyntax {
    part = "participant",
    a = "actor",
    solidLine = "->",
    dottedLine = "-->",
    solidLineArrow = "->>",
    dottedLineArrow = "-->>",
    solidLineCross = "-x",
    dottedLineCross = "--x",
    solidLineAsync = "-)",
    dottedLineAsync = "--)"
}

export enum ClassDiagramSyntax {
    inheritance = "<|--",
    composition = "*--",
    aggregation = "o--",
    association = "-->",
    link = "--",
    dependency = "..>",
    realization = "..|>",
    dashedLink = ".."
}