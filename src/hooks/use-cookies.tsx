import Cookies from "js-cookie";

interface UseCookies {
  setStorageData: (key: string, value: string) => void;
  getStorageData: (key: string) => string | undefined;
  removeStorageData: (key: string) => void;
  clearStorage: () => void;
}

const useCookies = (): UseCookies => {
  const setStorageData = (key: string, value: string): void => {
    Cookies.set(key, value, { expires: 1 });
  };

  const getStorageData = (key: string): string | undefined => {
    return Cookies.get(key);
  };

  const removeStorageData = (key: string): void => {
    Cookies.remove(key);
  };

  const clearStorage = (): void => {
    Object.keys(Cookies.get()).forEach((cookie) => {
      Cookies.remove(cookie);
    });
  };

  return {
    setStorageData,
    getStorageData,
    clearStorage,
    removeStorageData,
  };
};

export default useCookies;
