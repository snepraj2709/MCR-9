import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { videos } from "../data/videos";
import { categories } from "../data/categories";
import { actions } from "../utils/constants";
import { toast } from "react-hot-toast";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // const localStorageToken = JSON.parse(localStorage.getItem("state"));

  const playlistMap = videos?.reduce((acc, curr) => {
    const playlists = curr.playlists || [];
    playlists.forEach((playlist) => {
      if (!acc[playlist]) {
        acc[playlist] = {
          id: Object.keys(acc).length + 1,
          name: playlist,
          videos: [],
        };
      }
      acc[playlist].videos.push(curr);
    });
    return acc;
  }, {});

  const videoState = {
    allVideos: videos,
    playlists: Object.values(playlistMap),
    category: categories,
    filteredVideos: videos,
  };

  const [state, dispatch] = useReducer(DataReducer, videoState);

  const createPlaylist = (playlist) => {
    dispatch({ type: actions.CreatePlaylist, payload: playlist });
  };

  const deletePlaylist = (id) => {
    dispatch({ type: actions.DeletePlaylist, payload: id });
    toast.error("Deleted Playlist");
  };

  const addToWatchlist = (video) => {
    dispatch({ type: actions.AddToWatchlist, payload: video });
    toast.success("Added to Watchlist");
  };

  const removeFromWatchlist = (video) => {
    dispatch({ type: actions.RemoveFromWatchlist, payload: video });
    toast.success("Removed from Watchlist");
  };

  const likeVideo = (video) => {
    dispatch({ type: actions.LikeVideo, payload: video });
    toast.success("Added to likes");
  };

  const removeLike = (video) => {
    dispatch({ type: actions.RemoveLike, payload: video });
    toast.success("Removed from likes");
  };

  const updatePlaylist = (playlist) => {
    dispatch({ type: actions.AddToPlaylist, payload: playlist });
  };

  const updateNote = (video) => {
    dispatch({ type: actions.UpdateNote, payload: video });
  };

  useEffect(() => {
    localStorage.setItem(
      "state",
      JSON.stringify({
        allVideos: videos,
        playlists: [{ id: 1, name: "Music", videos: [] }],
        category: categories,
      })
    );
  }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        createPlaylist,
        deletePlaylist,
        addToWatchlist,
        removeFromWatchlist,
        updatePlaylist,
        updateNote,
        likeVideo,
        removeLike,
      }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
