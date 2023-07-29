import { createContext, useContext, useEffect, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { videos } from "../data/videos";
import { categories } from "../data/categories";
import { actions } from "../utils/constants";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const videoState = {
    allVideos: videos,
    playlists: [
      { id: 1, name: "Music", videos: [] },
      { id: 2, name: "Art", videos: [] },
    ],
    category: categories,
    filteredVideos: videos,
  };
  const localStorageToken = JSON.parse(localStorage.getItem("state"));

  const [state, dispatch] = useReducer(DataReducer, videoState);

  const createPlaylist = (playlist) => {
    dispatch({ type: actions.CreatePlaylist, payload: playlist });
  };

  const deletePlaylist = (id) => {
    dispatch({ type: actions.DeletePlaylist, payload: id });
  };

  const addToWatchlist = (video) => {
    dispatch({ type: actions.AddToWatchlist, payload: video });
  };

  const removeFromWatchlist = (video) => {
    dispatch({ type: actions.RemoveFromWatchlist, payload: video });
  };

  const updatePlaylist = (playlist) => {
    dispatch({ type: actions.AddToPlaylist, payload: playlist });
  };

  const addNote = (video) => {
    dispatch({ type: actions.AddNote, payload: video });
  };

  const deleteNote = (video) => {
    dispatch({ type: actions.DeleteNote, payload: video });
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
        addNote,
        deleteNote,
      }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
