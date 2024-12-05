export type UserRole = 'admin' | 'editor' | 'viewer'

export interface UserPermissions {
  canCreatePosts: boolean
  canEditPosts: boolean
  canDeletePosts: boolean
  canManageUsers: boolean
  canViewAnalytics: boolean
  canAccessAdmin: boolean
}

export const rolePermissions: Record<UserRole, UserPermissions> = {
  admin: {
    canCreatePosts: true,
    canEditPosts: true,
    canDeletePosts: true,
    canManageUsers: true,
    canViewAnalytics: true,
    canAccessAdmin: true,
  },
  editor: {
    canCreatePosts: true,
    canEditPosts: true,
    canDeletePosts: false,
    canManageUsers: false,
    canViewAnalytics: true,
    canAccessAdmin: true,
  },
  viewer: {
    canCreatePosts: false,
    canEditPosts: false,
    canDeletePosts: false,
    canManageUsers: false,
    canViewAnalytics: false,
    canAccessAdmin: false,
  },
} 