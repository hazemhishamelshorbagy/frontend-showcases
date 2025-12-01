import userData from './profile.json';
import UserProfile from './profile-menu.json';

export function useUserProfileDropdown() {
    return UserProfile;

}
export function useUserProfile() {
    // You could add filtering, sorting, or memoization here if needed
    return userData.profile;
}
