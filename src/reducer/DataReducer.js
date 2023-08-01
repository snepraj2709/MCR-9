import { actions } from "../utils/constants";

const {
  CreatePlaylist,
  DeletePlaylist,
  AddToWatchlist,
  RemoveFromWatchlist,
  UpdatePlaylist,
  UpdateNote,
  FilterVideo,
} = actions;

export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case CreatePlaylist: {
      const updatedPlaylists = [...state.playlists, { ...payload }];
      localStorage.setItem(
        "state",
        JSON.stringify({
          ...state,
          playlists: updatedPlaylists,
        })
      );
      return {
        ...state,
        playlists: updatedPlaylists,
      };
    }
    case DeletePlaylist: {
      const updatedPlaylist = state.playlists?.filter(
        (playlist) => playlist._id !== payload
      );
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, playlists: updatedPlaylist })
      );
      return {
        ...state,
        playlists: updatedPlaylist,
      };
    }
    case AddToWatchlist: {
      const updatedVideos = state.allVideos.map((video) =>
        video._id === payload._id ? { ...video, watchLater: true } : video
      );
      localStorage.setItem(
        "state",
        JSON.stringify({
          ...state,
          allVideos: updatedVideos,
        })
      );
      return { ...state, allVideos: updatedVideos };
    }
    case RemoveFromWatchlist: {
      const updatedVideos = state.allVideos.map((video) =>
        video._id === payload._id ? { ...video, watchLater: false } : video
      );
      localStorage.setItem(
        "state",
        JSON.stringify({
          ...state,
          allVideos: updatedVideos,
        })
      );
      return { ...state, allVideos: updatedVideos };
    }
    case UpdatePlaylist: {
      const updatedPlaylists = state.playlists?.map((playlist) =>
        playlist._id === payload._id ? { ...playlist, ...payload } : playlist
      );
      localStorage.setItem(
        "state",
        JSON.stringify({
          ...state,
          playlists: updatedPlaylists,
        })
      );
      return { ...state, playlists: updatedPlaylists };
    }
    case UpdateNote: {
      const updatedVideos = state.allVideos.map((video) =>
        video._id === payload._id ? { ...payload } : video
      );
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, allVideos: updatedVideos })
      );
      return {
        ...state,
        allVideos: updatedVideos,
      };
    }
    case FilterVideo: {
      return { ...state, filteredVideos: payload };
    }
    default:
      return state;
  }
};
