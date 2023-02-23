const LOCAL_STORAGE_KEY = 'tree-tree-project-by-jae-jik-ton';

export const saveToLocal = (data: string): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, data);
};

export const getFromLocal = (): string | null => localStorage.getItem(LOCAL_STORAGE_KEY);
export const hasBeenVisited = (): boolean => !!getFromLocal();

export const deleteFromLocal = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
