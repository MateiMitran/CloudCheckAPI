export enum FlowChartSyntax {
    openLink = "/(---)/",
    arrowLink = "/(-->)/",
    dottedLink = "/(-.->)/", 
    thickLink = "/(==>)/",
    chainLink = "/(&)/", 
}
export enum SequenceDiagramSyntax {
    part = "/(participant)/",
    a = "/(actor)/",
    solidLine = "/(->)/",
    dottedLine = "/(-->)/",
    solidLineArrow = "/(->>)/",
    dottedLineArrow = "/(-->>)/",
    solidLineCross = "/(-x)/",
    dottedLineCross = "/(--x)/",
    solidLineAsync = "/(-))/",
    dottedLineAsync = "/(--))/"
}

export enum ClassDiagramSyntax {
    inheritance = "/(<|--)/",
    composition = "/(*--)/",
    aggregation = "/(o--)/",
    association = "/(-->)/",
    link = "/(--)/",
    dependency = "/(..>)/",
    realization = "/(..|>)/",
    dashedLink = "/(..)/"
}

export enum StateDiagramSyntax {
    transition = "/(-->)/",
    start = "/([*])",
    end = "/([*])/",
    choice = "/(<<choice>>)/",
    fork = "/(<<fork>>)/",
    join = "/(<<join>>)/",
    concurrency = "/(--)/",
    comment = "/(%%)/"
}

export enum ERDiagramSyntax {
    zeroOrOne = "/(|o)/",
    one = "/(||)/",
    zeroOrMore = "/(o{)/",
    oneOrMore = "/(|{)/"
}