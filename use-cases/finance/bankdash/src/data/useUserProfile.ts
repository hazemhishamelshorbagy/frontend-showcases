import userData from './profile.json';

export function useUserProfile() {
    // You could add filtering, sorting, or memoization here if needed
    return userData.profile;
}
