export interface Word {
    id: number;
    name: string;
    definition: string;
    example: string;
    tags: [];
    flagsCount: number;
    likesCount: number;
    dislikesCount: number;
    creationTimestamp: string
}