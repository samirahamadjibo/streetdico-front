export interface Word {
    id: number | undefined | null;
    name: string | undefined | null;
    definition: string | undefined | null;
    example: string | undefined | null;
    tags: string | undefined | null;
    flags_count: number | undefined | null;
    likes_count: number | undefined | null;
    dislikes_count: number | undefined | null;
    created_at: string | undefined | null;
    publisher_id: number | undefined | null;
    pseudo: string | undefined | null;
}