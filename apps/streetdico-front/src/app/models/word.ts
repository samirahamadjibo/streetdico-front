export class Word {
    id: number;
    name: string | null;
    definition: string | null;
    example: string | null;
    tags: string  | null | undefined;
    flags_count: number | null;
    likes_count: number | null;
    dislikes_count: number | null;
    created_at: string  | null;
    publisher_id: number | null;
    pseudo: string  | null;

    constructor(id?: number, name?: string, definition?: string, example?: string, tags?: string, flags_count?: number, likes_count?:number, dislikes_count?:number, created_at?: string, publisher_id?: number, pseudo?: string ) {
        this.id = id ?? 0;
        this.name = name ?? "",
        this.definition = definition ?? "",
        this.example = example ?? "",
        this.tags = tags ?? "",
        this.flags_count = flags_count ?? 0,
        this.likes_count = likes_count ?? 0,
        this.dislikes_count = dislikes_count ?? 0,
        this.created_at = created_at ?? "",
        this.publisher_id = publisher_id ?? 0,
        this.pseudo = pseudo ?? ""
    } 
}