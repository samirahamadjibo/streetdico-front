export interface Word {
    id: number;
    name: string;
    definition: string;
    example: string;
    tags: [];
    flags_count: number;
    likes_count: number;
    dislikes_count: number;
    created_at: string;
    publisher_id: number;
    publisher_name: string
}