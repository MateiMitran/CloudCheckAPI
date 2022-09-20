export class FlowChartSyntax {
    public static openLink: RegExp = /(---)/;
    public static arrowLink: RegExp = /(-->)/;
    public static dottedLink: RegExp = /(-.->)/; 
    public static thickLink: RegExp = /(==>)/;
    public static chainLink: RegExp = /(&)/; 
}
export class SequenceDiagramSyntax {
    public static part: RegExp = /(participant)/;
    public static a: RegExp = /(actor)/;
    public static solidLine: RegExp = /(->)/;
    public static dottedLine: RegExp = /(-->)/;
    public static solidLineArrow: RegExp= /(->>)/;
    public static dottedLineArrow: RegExp = /(-->>)/;
    public static solidLineCross: RegExp = /(-x)/;
    public static dottedLineCross: RegExp = /(--x)/;
    public static solidLineAsync: RegExp = /(-))/;
    public static dottedLineAsync: RegExp = /(--))/; 
}

export class ClassDiagramSyntax {
    public static inheritance: RegExp = /(<|--)/;
    public static composition: RegExp = /(*--)/;
    public static aggregation: RegExp = /(o--)/;
    public static association: RegExp = /(-->)/;
    public static link: RegExp = /(--)/;
    public static dependency: RegExp = /(..>)/;
    public static realization: RegExp = /(..|>)/;
    public static dashedLink: RegExp = /(..)/; 
}

export class StateDiagramSyntax {
    public static transition: RegExp = /(-->)/;
    public static start: RegExp = /([*])/;
    public static end: RegExp = /([*])/;
    public static choice: RegExp = /(<<choice>>)/;
    public static fork: RegExp = /(<<fork>>)/;
    public static join: RegExp = /(<<join>>)/;
    public static concurrency: RegExp = /(--)/;
    public static comment: RegExp = /(%%)/; 
}

export class ERDiagramSyntax {
    public static zeroOrOne: RegExp = /(|o)/;
    public static one: RegExp = /(||)/;
    public static zeroOrMore: RegExp = /(o{)/;
    public static oneOrMore: RegExp = /(|{)/; 
}