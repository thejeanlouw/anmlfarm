import firebase, {auth, firestore} from './firebase.utils'


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = async () => (await auth.signInWithPopup(provider));
export const signInWithEmailAndPassword = async ({email, password}) =>{
    return (await auth.signInWithEmailAndPassword(email, password))};
export const signOut = () => auth.signOut();

export const createUserWithEmailAndPassword = async ({email, password}) =>{
    return (await auth.createUserWithEmailAndPassword(email, password))};

export const updateUserOnboarded = async () => {
    if (!auth.currentUser) return;
    const userRef = firestore.doc(`anmlfarm-users/${auth.currentUser.uid}`);
    const snapShot = await userRef.get();
    if(snapShot.exists){
        try {
            await userRef.set({
                hasDoneOnboarding: true
            });
        } catch (error) {
            console.log('ERROR UPDATING USER', error.message);
        }
    }
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`anmlfarm-users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const { displayName, email, photoURL} = userAuth;
        const createdAt= new Date();

        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('ERROR CREATING USER', error.message);
        }
    }

    return userRef;

}