// Generated by dts-bundle v0.7.3

declare module 'umap-js' {
    export type DistanceFn = (x: Vector, y: Vector) => number;
    export type EpochCallback = (epoch: number) => boolean | void;
    export type Vector = number[];
    export type Vectors = Vector[];
    export interface UMAPParameters {
        nComponents?: number;
        nEpochs?: number;
        nNeighbors?: number;
        random?: () => number;
    }
    export class UMAP {
        constructor(params?: UMAPParameters);
        fit(X: Vectors): number[][];
        fitAsync(X: Vectors, callback?: (epochNumber: number) => void | boolean): Promise<number[][]>;
        initializeFit(X: Vectors, knnIndices?: number[][], knnDistances?: number[][]): number;
        step(): number;
        getEmbedding(): number[][];
    }
    export function euclidean(x: Vector, y: Vector): number;
    export function cosine(x: Vector, y: Vector): number;
}
