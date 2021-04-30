import {
  AppState, CommentData, PostData, UserData,
} from '../../types/types';

export const getPublication = (state: AppState):PostData | null => state.publication.publication;
export const getCommentsForPost = (state: AppState): CommentData[] => state.comments.comments;
export const getUserAuth = (state: AppState): UserData => state.auth.user;
export const getProfile = (state: AppState): UserData | null => state.profile.profile;
export const getUserPosts = (state: AppState): PostData[] => state.profile.userPosts;
export const getUserComments = (state: AppState): CommentData[] => state.profile.userComments;
