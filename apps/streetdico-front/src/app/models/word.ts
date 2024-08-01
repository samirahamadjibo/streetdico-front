export interface Word {
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
}