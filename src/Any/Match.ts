/**
 * Describes the match strategy when matching types
 * * `default`     : `extends->`
 * * `contains->`  : X contains   Y ([[Contains]]<X, Y>)
 * * `extends->`   : X extends    Y ([[Extends]]<X, Y>)
 * * `<-contains`  : Y contains   X ([[Contains]]<Y, X>)
 * * `<-extends`   : Y extends    X ([[Extends]]<Y, X>)
 * * `equal`      : X equal     Y (([[Equal]]<X, Y>))
 */
export type Match = "default" | "contains->" | "<-contains" | "extends->" | "<-extends" | "equals";
