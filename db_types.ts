export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      comments: {
        Row: {
          comment_date: string | null
          comment_id: number
          content: string
          post_id: number | null
          user_id: number | null
        }
        Insert: {
          comment_date?: string | null
          comment_id?: number
          content: string
          post_id?: number | null
          user_id?: number | null
        }
        Update: {
          comment_date?: string | null
          comment_id?: number
          content?: string
          post_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["post_id"]
          }
        ]
      }
      followers: {
        Row: {
          follower_id: number
          following_id: number | null
          user_id: number | null
        }
        Insert: {
          follower_id?: number
          following_id?: number | null
          user_id?: number | null
        }
        Update: {
          follower_id?: number
          following_id?: number | null
          user_id?: number | null
        }
        Relationships: []
      }
      links: {
        Row: {
          description: string | null
          link_date: string | null
          link_id: number
          post_id: number | null
          url: string
        }
        Insert: {
          description?: string | null
          link_date?: string | null
          link_id?: number
          post_id?: number | null
          url: string
        }
        Update: {
          description?: string | null
          link_date?: string | null
          link_id?: number
          post_id?: number | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "links_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["post_id"]
          }
        ]
      }
      pictures: {
        Row: {
          file_name: string
          nsfw: boolean
          picture_id: number
          post_id: number | null
          updated_at: string
          upload_date: string | null
          url: string
          user_id: string
        }
        Insert: {
          file_name: string
          nsfw?: boolean
          picture_id?: number
          post_id?: number | null
          updated_at?: string
          upload_date?: string | null
          url: string
          user_id: string
        }
        Update: {
          file_name?: string
          nsfw?: boolean
          picture_id?: number
          post_id?: number | null
          updated_at?: string
          upload_date?: string | null
          url?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pictures_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["post_id"]
          },
          {
            foreignKeyName: "pictures_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      post_tags: {
        Row: {
          post_id: number
          tag_id: number
        }
        Insert: {
          post_id: number
          tag_id: number
        }
        Update: {
          post_id?: number
          tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "post_tags_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["post_id"]
          },
          {
            foreignKeyName: "post_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["tag_id"]
          }
        ]
      }
      posts: {
        Row: {
          description: string | null
          is_stable_diffusion: boolean
          post_id: number
          title: string | null
          updated_at: string
          upload_date: string
          user_id: string | null
        }
        Insert: {
          description?: string | null
          is_stable_diffusion?: boolean
          post_id?: number
          title?: string | null
          updated_at?: string
          upload_date?: string
          user_id?: string | null
        }
        Update: {
          description?: string | null
          is_stable_diffusion?: boolean
          post_id?: number
          title?: string | null
          updated_at?: string
          upload_date?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      tags: {
        Row: {
          tag_id: number
          tag_name: string
        }
        Insert: {
          tag_id?: number
          tag_name: string
        }
        Update: {
          tag_id?: number
          tag_name?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          allow_nsfw: boolean
          description: string | null
          email: string | null
          followers: number | null
          is_moderator: boolean
          profile_pic: number | null
          user_id: string
          username: string
        }
        Insert: {
          allow_nsfw?: boolean
          description?: string | null
          email?: string | null
          followers?: number | null
          is_moderator?: boolean
          profile_pic?: number | null
          user_id: string
          username: string
        }
        Update: {
          allow_nsfw?: boolean
          description?: string | null
          email?: string | null
          followers?: number | null
          is_moderator?: boolean
          profile_pic?: number | null
          user_id?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_followers_fkey"
            columns: ["followers"]
            isOneToOne: false
            referencedRelation: "followers"
            referencedColumns: ["follower_id"]
          },
          {
            foreignKeyName: "users_profile_pic_fkey"
            columns: ["profile_pic"]
            isOneToOne: false
            referencedRelation: "pictures"
            referencedColumns: ["picture_id"]
          },
          {
            foreignKeyName: "users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      versions: {
        Row: {
          name: string
          post_id: number | null
          upload_date: string | null
          user_id: string | null
          version_desc: string | null
          version_id: number
          version_magnet: string
        }
        Insert: {
          name: string
          post_id?: number | null
          upload_date?: string | null
          user_id?: string | null
          version_desc?: string | null
          version_id?: number
          version_magnet: string
        }
        Update: {
          name?: string
          post_id?: number | null
          upload_date?: string | null
          user_id?: string | null
          version_desc?: string | null
          version_id?: number
          version_magnet?: string
        }
        Relationships: [
          {
            foreignKeyName: "versions_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["post_id"]
          },
          {
            foreignKeyName: "versions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
