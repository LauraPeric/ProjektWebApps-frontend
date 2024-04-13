export default {
    searchterm: '',
    currentUser: null,
    isLoggedIn() {
        return this.currentUser !== null;
    },
};